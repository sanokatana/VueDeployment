<template>
  <div class="col-12 offset-10">
    <div class="flex justify-content-between align-items-center">
      <h1 class="text-ggi-red">Panel Form - Data Penyewa / Penghuni / Warga Baru</h1>
    </div>
    <div class="flex justify-content-start mb-4">
      <span>
        <Button icon="pi pi-external-link" label="Export" @click="exportCSV($event)" class="mr-2"/>
      </span>
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText v-model="filters['global'].value" placeholder="Keyword Search" class="w-10rem " />
      </span>
      <span>
        <Dropdown v-model="selectedStatus" :options="statusfilter" placeholder="Status" class="w-full md:w-9rem ml-2" />
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
      <Column field="attributes.namalengkap" header="Nama Lengkap" >
      </Column>
      <Column field="attributes.blok" header="Blok/No.Unit" >
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
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import BlockUI from 'primevue/blockui';
import StatusTag from '@/components/input/StatusTag.vue';
import InputText from 'primevue/inputtext';
import { FilterMatchMode } from 'primevue/api';
import store from '@/store'
import formModal from '@/components/modal/CreateBaruForm.vue';

var backend = new Backend();

export default {
  components: { DataTable, Column, InputText, formModal, Button, Dropdown, StatusTag, BlockUI},
  data() {
    return {
      formData: null,
      internetRate: null,
      action: null,
      selectedInternet: null,
      selectedForm: null,
      role: store.getters.getRole,
      displayModal: false, // Add this line to control modal visibility
      statuses: ['Batal', 'Aktif'],
      statusfilter: ['Semua', 'Batal', 'Aktif'],
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
        let response = await backend.dataBaruForm.findAll();
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
    exportCSV() {
      if (!this.formData || this.formData.length === 0) {
        console.error('No data to export.');
        return;
      }

      const csvData = [];

      // Define a mapping of header names to desired labels
      const headerLabelMapping = {
        'id': 'ID',
        'namalengkap': 'Nama Lengkap',
        'alamat': 'Alamat',
        'pekerjaan': 'Pekerjaan',
        'tempat': 'Tempat Lahir',
        'tglLahir': 'Tanggal Lahir',
        'email': 'E-mail',
        'suami': 'Nama Suami',
        'tglLahir1': 'Tanggal Lahir',
        'istri': 'Nama Isri',
        'tglLahir2': 'Tanggal Lahir',
        'anak': 'Nama Anak-1',
        'tglLahir3': 'Tanggal Lahir',
        'anak1': 'Nama Anak-2',
        'tglLahir4': 'Tanggal Lahir',
        'anak2': 'Nama Anak-3',
        'tglLahir5': 'Tanggal Lahir',
        'anak3': 'Nama Anak-4',
        'tglLahir6': 'Tanggal Lahir',
        'saudara': 'Nama Saudara/Orang Lain-1',
        'saudara1': 'Nama Saudara/Orang Lain-2',
        'saudara2': 'Nama Saudara/Orang Lain-3',
        'saudara3': 'Nama Saudara/Orang Lain-4',
        'status4': 'Status',
        'status1': 'Status',
        'status2': 'Status',
        'status3': 'Status',
        'namapemilik': 'Nama Pemilik Rumah',
        'tglMasuk': 'Tanggal Masuk',
      };

      // Header row with desired labels
      const headers = ['id', 'namalengkap', 'alamat', 'pekerjaan', 'tempat', 'tglLahir', 'notelp', 'email', 'suami', 'tglLahir1', 'istri', 'tglLahir2', 'anak', 'tglLahir3', 'anak1', 'tglLahir4', 'anak2', 'tglLahir5', 'anak3', 'tglLahir6', 'saudara', 'status4', 'saudara1', 'status1', 'saudara2', 'status2', 'saudara3', 'status3', 'namapemilik', 'tglMasuk'];
      const headersWithLabels = headers.map(header => headerLabelMapping[header] || header);
      csvData.push(headersWithLabels.join(','));

      // Loop through each row
      for (const row of this.formData) {
        const rowData = [];

        // Loop through each column and extract the required attributes
        for (const header of headers) {
          let value = header === 'id' ? row.id : (row.attributes && row.attributes[header]) || '';

          // Handle commas in the value
          if (value && typeof value === 'string' && value.includes(',')) {
            // Wrap the value in double quotes
            value = `"${value}"`;
          }

          rowData.push(value);
        }

        csvData.push(rowData.join(','));
      }

      const csvContent = csvData.join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'Form Data Pemilik/Penghuni/Warga Baru Mazenta.csv';
      link.click();
    },
    async showModal(action, rowData) {
      this.action = action;
      this.selectedForm = rowData; // Pass the selected row data to the popup component
      this.displayModal = true;
    },
  },
};
</script>