<template>
  <AutoComplete v-model="selectedInternet" :suggestions="filteredInternets" @complete="filterInternet($event)"
    @item-select="emitToParent" :dropdown="true" forceSelection field="attributes.name" />
</template>
  
<script>
import AutoComplete from 'primevue/autocomplete';
import Backend from '@/backend';
import qs from 'qs';
import store from '@/store'

const backend = new Backend();

export default {
  components: { AutoComplete },
  props: ['modelValue', 'dataForm'],
  data() {
    return {
      internets: null,
      filteredInternets: null,
      selectedInternet: this.modelValue,
    };
  },
  async created() {
    await this.getAllInternets();
  },
  watch: {
    modelValue() {
      this.selectedInternet = this.modelValue;
    },
  },
  methods: {
    async getAllInternets() {
      try {
        let query = qs.stringify({
          populate: 'project'
        })
        const response = await backend.internetRate.findAll(query);
        this.internets = response.data.data; // Access the data array
      } catch (err) {
        console.error(err);
      }
    },
    filterInternet(event) {
      this.filteredInternets = this.internets.filter((internet) => {
        const projectData = internet.attributes.project.data;
        const allowedProjects = [1, 2, 3, 4];
        let projectId = store.getters.getProject;
        // Check if projectId is not in the allowed projects, then set it to this.dataForm.attributes.project
        if (!allowedProjects.includes(projectId)) {
          if (this.dataForm.attributes.project === undefined) {
            projectId = 4
          } else {
            projectId = this.dataForm.attributes.project;
          }
        }

        return (
          projectData &&
          projectData.id === projectId &&
          internet.attributes.name.toLowerCase().includes(event.query) &&
          internet.attributes.status === 'Aktif' // Additional condition for status
        );
      });
    },
    emitToParent() {
      this.$emit('update:modelValue', this.selectedInternet);
    },
  },
};
</script>
  