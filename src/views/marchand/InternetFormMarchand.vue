<template>
  <div class="col-12 offset-10">
    <div class="flex justify-content-between align-items-center">
      <h1 class="text-ggi-red">Panel Form - Pemasangan & Pemutusan Internet</h1>
    </div>
    <div class="flex justify-content-start mb-4">
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText v-model="filters['global'].value" placeholder="Keyword Search" class="w-10rem " />
      </span>
      <span>
        <Dropdown v-model="selectedStatus" :options="statusfilter" placeholder="Select a City" class="w-full md:w-9rem ml-2" />
      </span>
    </div>
    <DataTable ref="dt" :filters="filters" :value="formData" selectionMode="single" @row-select="showModal('edit', $event.data)"
      responsiveLayout="scroll" sortField="id" :sortOrder="1" :paginator="true" :rows="15"
      :rowsPerPageOptions="[15, 20, 30]" removableSort dataKey="id" v-model:filters="filters" filterDisplay="row">
      <Column field="id" header="Form ID">
      </Column>
      <Column field="attributes.namalengkap" header="Nama Lengkap">
      </Column>
      <Column field="attributes.email" header="Email">
      </Column>
      <Column field="attributes.noktp" header="NoKTP">
      </Column>
      <Column field="attributes.notelp" header="NoTelp/HP">
      </Column>
      <Column field="attributes.status" header="Status">
          <template #body="slotProps">
              <StatusTag v-model="slotProps.data.attributes.status" />
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
import formModal from '@/components/modal/Marchand/CreateFormInternet.vue';
import qs from 'qs';

var backend = new Backend();

export default {
  components: { DataTable, Column, InputText, formModal, StatusTag, Dropdown},
  data() {
    return {
      formData: null,
      internetRate: null,
      action: null,
      selectedInternet: null,
      selectedForm: null,
      role: null,
      displayModal: false, // Add this line to control modal visibility
      statuses: ['Batal','Aktif'],
      statusfilter: ['Semua','Batal','Aktif'],
      selectedStatus: 'Semua',

      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        'attributes.status': {value: null, matchMode: FilterMatchMode.EQUALS},
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
  },
  methods: {

    async getAllForms() {
      try {
          let query = qs.stringify({
            populate: 'internetID'
          });
          let response = await backend.internetMarchand.findAll(query);
          this.formData = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
    async showModal(action, rowData) {
      this.action = action;
      this.selectedForm = rowData; // Pass the selected row data to the popup component
      this.displayModal = true;
    },
  },
};
</script>