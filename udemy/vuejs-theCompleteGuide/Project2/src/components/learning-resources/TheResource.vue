<template>
    <BaseCard>
        <BaseButton type="button" @click="setSelectedTab('StoredResources')" :mode="storedResButtonMode">Stored Resources</BaseButton>
        <BaseButton type="button"  @click="setSelectedTab('AddResource')" :mode="addNewResButtonMode">Add Resource</BaseButton>
    </BaseCard>
    <KeepAlive>
        <component :is="selectedTab"></component>
    </KeepAlive>
</template>

<script>
import StoredResources from './StoredResources';
import AddResource from './AddResource.vue';

var dummyData = [
    {
        id: 'official-guide',
        title: 'Official Guide',
        description: 'The official Vue.js doccumentation.',
        link: 'https://vuejs.org/guide/introduction'
    },
    {
        id: 'google',
        title: 'Google',
        description: 'Google needs everyone.',
        link: 'https://www.google.com/'
    }
];

export default {
    components: {
        StoredResources,
        AddResource
    },
    data() {
        return {
            storedResources: [ ...dummyData ],
            selectedTab: 'StoredResources'
        };
    },
    provide() {
        return {
            storedResources: this.storedResources,
            addResource: this.addResource,
            deleteResource: this.deleteResource
        }
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'StoredResources' ? null : 'flat'
        },
        addNewResButtonMode() {
            return this.selectedTab === 'AddResource' ? null : 'flat'
        },
    },
    methods: {
        setSelectedTab(rid) {
            this.selectedTab = rid
        },
        addResource(title, desc, url) {
            this.storedResources.unshift({
                id: new Date().getTime(),
                title: title,
                description: desc,
                link: url
            });

            this.selectedTab = 'StoredResources';
        },
        deleteResource(id) {
            const resIndex = this.storedResources.findIndex(itm => itm.id === id)
            this.storedResources.splice(resIndex, 1);
        }
    }
}
</script>