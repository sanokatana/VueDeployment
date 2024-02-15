<template>
  <div class="col-12 offset-10">
    <div class="flex justify-content-between align-items-center">
      <h1 class="text-ggi-red">Panel Form - Surat Permohonan Izin Buka Toko</h1>
    </div>

    <div class="flex justify-content-start mb-4">
      <span><Button autoRezise="false" label="Create" icon="pi pi-plus" @click="showModal('new')" class="mr-2"/></span>
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText v-model="filters['global'].value" placeholder="Keyword Search" class="w-10rem " />
      </span>
      <span>
        <Dropdown v-model="selectedStatus" :options="statusfilter"
          class="w-full md:w-9rem ml-2" />
      </span>
    </div>
    <DataTable :value="formData" v-model:selection="selectedForm" selectionMode="single" @row-select="showModal('edit')"
      responsiveLayout="scroll" sortField="id" :sortOrder="1" :paginator="true" :rows="15"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      :rowsPerPageOptions="[15, 20, 30]" removableSort dataKey="id" v-model:filters="filters" filterDisplay="row">
      <Column field="id" header="Form ID" :showFilterMenu="false">
      </Column>
      <Column field="attributes.namatoko" header="Nama Toko" :showFilterMenu="false">
      </Column>
      <Column field="attributes.lantaiunit" header="Lantai-Unit" :showFilterMenu="false">
      </Column>
      <Column field="attributes.namapemilik" header="Nama Pemilik" :showFilterMenu="false">
      </Column>
      <Column field="attributes.statustoko" header="Status Toko" :showFilterMenu="false">
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
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import StatusTag from '@/components/input/StatusTag.vue';
import InputText from 'primevue/inputtext';
import { FilterMatchMode } from 'primevue/api';
import formModal from '@/components/modal/Marchand/CreateTokoForm.vue';

var backend = new Backend();

export default {
  components: { DataTable, Column, InputText, formModal, Button, Dropdown, StatusTag },
  data() {
    return {
      formData: null,
      action: null,
      selectedForm: null,
      displayModal: false, // Add this line to control modal visibility
      statuses: ['Batal', 'Aktif'],
      statusfilter: ['Semua', 'Batal', 'Aktif'],
      selectedStatus: 'Semua',

      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        'attributes.status': { value: null, matchMode: FilterMatchMode.EQUALS },
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
        let response = await backend.izikTokoMarchand.findAll();
        this.formData = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
    showModal(action) {
      this.action = action;
      if (action == 'new') {
        this.selectedForm = {
          id: null,
          attributes: {
          }
        }
      }
      this.displayModal = true;
    },
  },
};
</script>