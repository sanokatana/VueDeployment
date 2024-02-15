<template>
  <div class="col-12 offset-10">
    <div class="flex justify-content-between align-items-center">
      <h1 class="text-ggi-red">Panel Form - Pemasangan & Pemutusan Internet</h1>
    </div>
    <div class="flex justify-content-start mb-4">
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText v-model="filters['global'].value" placeholder="Search" class="w-10rem " />
      </span>
      <span>
        <Dropdown v-model="selectedStatus" :options="statusfilter" placeholder="Select a City" class="w-full md:w-9rem ml-2" />
      </span>
      <BlockUI :blocked="this.role != 'superadmin'">
      <span>
        <Dropdown v-model="selectedProject" :options="projectfilter" placeholder="Project" class="w-full md:w-9rem ml-2" />
      </span>
      </BlockUI>
    </div>
    <DataTable ref="dt" :filters="filters" :value="formData" selectionMode="single" @row-select="showModal('edit', $event.data)"
      responsiveLayout="scroll" sortField="id" :sortOrder="1" :paginator="true" :rows="15"
      :rowsPerPageOptions="[15, 20, 30]" removableSort dataKey="id" v-model:filters="filters" filterDisplay="row">
      <Column field="attributes.formid" header="Form ID">
      </Column>
      <Column field="attributes.namalengkap" header="Nama Lengkap">
      </Column>
      <Column field="attributes.email" header="Email">
      </Column>
      <Column field="attributes.noktp" header="NoKTP">
      </Column>
      <Column field="attributes.notelp" header="NoTelp/HP">
      </Column>
      <Column field="attributes.alamatpemasang" header="Alamat">
      </Column>
      <Column field="attributes.tipeform" header="Tipe Form">
      </Column>
      <Column field="attributes.status" header="Status">
          <template #body="slotProps">
              <StatusTag v-model="slotProps.data.attributes.status" />
          </template>
      </Column>
      <Column field="attributes.project" header="Project">
        <template #body="slotProps">
          <span>
            {{ getStatusText(slotProps.data.attributes.project) }}
          </span>
        </template>
      </Column>
    </DataTable>
    <formModal v-model:displayModal="displayModal" v-model:form="selectedForm" :refreshList="getAllForms"
      :action="action" />
  </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Backend from '@/backend';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import { FilterMatchMode } from 'primevue/api';
import StatusTag from '@/components/input/StatusTag.vue'
import BlockUI from 'primevue/blockui';
import formModal from '@/components/modal/CreateFormInternet.vue';
import qs from 'qs';
import store from '@/store'

var backend = new Backend();

export default {
  components: {DataTable, Column, InputText, formModal, StatusTag, Dropdown, BlockUI},
  data() {
    return {
      formData: null,
      internetRate: null,
      action: null,
      selectedInternet: null,
      selectedForm: null,
      role: store.getters.getRole,
      displayModal: false, // Add this line to control modal visibility
      statusfilter: ['Semua','Batal','Aktif'],
      selectedStatus: 'Semua',
      projectfilter: ['Project','Mazenta','Banara','Naraya'],
      selectedProject: 'Project',

      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        'attributes.status': {value: null, matchMode: FilterMatchMode.EQUALS},
        'attributes.project': {value: null, matchMode: FilterMatchMode.EQUALS},
      },
    };
  },
  created() {
    this.getAllForms();
  },
  watch: {
    selectedStatus(newValue) {
      if (newValue !== 'Semua') {
        this.filters['attributes.status'].value = newValue;
        this.getAllForms();  // Fetch data when the status changes
      } else {
        // Set the filter value to null when 'Semua' is selected
        this.filters['attributes.status'].value = null;
        this.getAllForms();  // Fetch all data when 'Semua' is selected
      }
    },
    selectedProject(newValue) {
      if (newValue !== 'Project') {
        if (newValue == 'Mazenta') {
          this.filters['attributes.project'].value = 1;
        }
        if (newValue == 'Banara') {
          this.filters['attributes.project'].value = 2;
        }
        if (newValue == 'Naraya') {
          this.filters['attributes.project'].value = 3;
        }
        this.getAllForms();  // Fetch data when the status changes
      } else {
        this.filters['attributes.project'].value = null;
        this.getAllForms();  // Fetch all data when 'Semua' is selected
      }
    },
  },
  methods: {

    getStatusText(projectValue) {
      switch (projectValue) {
        case 1:
          return 'Mazenta';
        case 2:
          return 'Banara';
        case 3:
          return 'Naraya';
        default:
          return '';
      }
    },

    async getAllForms() {
      try {
        let query = qs.stringify({
          populate: 'internetID'
        });
        let response = await backend.internetForm.findAll(query);
        this.filterInternet(response.data.data)
      } catch (err) {
        console.log(err);
      }
    },

    filterInternet(e) {
        let role = store.getters.getRole;
        this.formData = e.filter((a) => {
            const projectData = a.attributes.project;
            if (role == 'mazentaAdmin') {
              return (
                projectData &&
                projectData === 1
            );
            }
            if (role == 'banaraAdmin') {
              return (
                projectData &&
                projectData === 2
            );
            }
            if (role == 'narayaAdmin') {
              return (
                projectData &&
                projectData === 3
            );
            }
            if (role == 'superadmin') {
              return (
                projectData
            );
            }
        });
    },

    async showModal(action, rowData) {
      this.action = action;
      this.selectedForm = rowData; // Pass the selected row data to the popup component
      this.displayModal = true;
    },
  },
};
</script>