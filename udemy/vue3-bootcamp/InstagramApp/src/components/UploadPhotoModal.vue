<script setup>
    import { ref, defineProps } from 'vue';
    import { supabase } from '@/superbase';
    import { useUserStore } from '@/stores/users';
    import { storeToRefs } from 'pinia';

    const open = ref(false);
    const disableSubmit = ref(true);
    const caption = ref('');
    const file = ref(null);
    const loading = ref(false);
    const errorMsg = ref('')

    const userStore = useUserStore();
    const {user} = storeToRefs(userStore);

    const props = defineProps(['addNewPost']);

    const showModal = () => {
      disableSubmit.value = true;
      file.value = null;
      caption.value = '';
      open.value = true;
    };
    const handleOk = async () => {
      if (!file.value || !user) {
        errorMsg.value = 'Nothing to load';
        return;
      }

      errorMsg.value = '';
      loading.value = true;

      const fileName = Math.floor(Math.random() * 100000000000);
      let filePath = ''

      const {data, error} = await supabase.storage.from('images').upload('public/' + fileName, file.value);

      if (error) {
        loading.value = false;
        return errorMsg.value = 'Unable to uppload image';
      }

      filePath = data.path;
      await supabase.from('posts').insert({
        imgUrl: data.path,
        caption: caption.value,
        owner_id: user.value.id
      });

      //Load Post ID
      const addedPostInfo = await supabase.from('posts').select().eq('imgUrl', filePath).single();

      loading.value = false;
      open.value = false;
      caption.value = '';
      file.value = null;
      props.addNewPost(addedPostInfo.data);
    };

    const handleUpploadChange = e => {
      disableSubmit.value = !e.target.files.length;

      if (e.target.files.length) {
        file.value = e.target.files[0];
      } else {
        file.value = null;
      }
    }
</script>

<template>
  <div>
    <AButton @click="showModal">Upload Photo</AButton>
    <AModal
      v-model:open="open"
      title="Upload Photo"
      :ok-button-props="{ disabled: disableSubmit }"
      :loading="loading"
      @ok="handleOk"
    >
    <div v-if="!loading">
        <input type="file" accept=".jpeg,.png,.jpg" @change="handleUpploadChange">
        <AInput
          placeholder="Caption..."
          v-model:value="caption"
          :maxLength="150"/>
          <ATypographyText v-if="errorMsg" type="danger">{{ errorMsg }}</ATypographyText>
    </div>
    <div v-else class="spinner">
      <ASpin type="large"/>
    </div>
    </AModal>
  </div>
</template>

<style scoped>
  input {
    margin-top: 20px;
  }

  .spinner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>