<script>

export default {
    data() {
        return {
            title: '',
            description: '',
            link: 'https://',
            invalidTitle: false,
            invalidDescription: false,
            invalidLink: false,
        }
    },
    inject: ['addResource'],
    methods: {
        addNewResource() {
            this.invalidTitle = this.title.trim().length === 0;
            this.invalidDescription = this.description.trim().length === 0;
            this.invalidLink = this.link.trim() == 'https://';

            if (this.invalidTitle || this.invalidDescription || this.invalidLink) {
                return;
            }

            this.addResource(this.title, this.description, this.link);
            this.title = '';
            this.description = '';
            this.link = 'https://'
        },
        closeErrorDialog() {
            this.invalidTitle = false;
            this.invalidDescription = false;
            this.invalidLink = false;
        }
    }
}
</script>
<template>
    <BaseCard>
        <form @submit.prevent="addNewResource">
            <div>
                <label for="title">Title</label>
                <input type="text" name="title" id="title" v-model="title">
            </div>
            <div>
                <label for="description">Description</label>
                <textarea name="description" id="description" rows="3"  v-model="description"></textarea>
            </div>
            <div>
                <label for="link">Link</label>
                <input type="url" name="link" id="link" v-model="link">
            </div>
            <BaseButton type="submit" >Add Resource</BaseButton>
        </form>
    </BaseCard>

    <BaseModal v-if="invalidTitle || invalidDescription || invalidLink" @close-dialog="closeErrorDialog">
        <template #default>
            Some error
        </template>
    </BaseModal>
</template>

<style scoped>
div {
    margin-bottom: 15px;
}
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>