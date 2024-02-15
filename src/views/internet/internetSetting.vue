<template>
    <div class="col-12 offset-10">
        <div class="flex justify-content-between align-items-center">
            <h1 class="text-ggi-red">Internet Rates Panel</h1>
        </div>
        <div class="flex justify-content-start mb-4">
            <span>
                <Button autoRezise="false" label="Create" icon="pi pi-plus" @click="showModal('new')" class="mr-2" />
            </span>
            <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="filters['global'].value" placeholder="Keyword Search" class="w-10rem " />
            </span>
            <span>
                <Dropdown v-model="selectedStatus" :options="statusfilter" placeholder="Select a Status"
                    class="w-full md:w-9rem ml-2" />
            </span>
            <span>
                <Dropdown v-model="selectedProject" :options="projectfilter" placeholder="Project"
                    class="w-full md:w-9rem ml-2" />
            </span>
        </div>
        <DataTable ref="dt" :filters="filters" :value="formData" v-model:selection="selectedForm" selectionMode="single"
            @row-select="showModal('edit')" responsiveLayout="scroll" sortField="id" :sortOrder="1" :paginator="true"
            :rows="15" :rowsPerPageOptions="[15, 20, 30]" removableSort dataKey="id" v-model:filters="filters"
            filterDisplay="row">
            <Column field="id" header="ID">
            </Column>
            <Column field="attributes.name" header="Speed IT">
            </Column>
            <Column field="attributes.price" header="Tarif IT">
            </Column>
            <Column field="attributes.startRate" header="Start Rate">
            </Column>
            <Column field="attributes.endRate" header="End Rate">
            </Column>
            <Column field="attributes.project" header="Project">
                <template #body="slotProps">
                    <span>
                        {{ getStatusText(slotProps.data.attributes.project.data.id) }}
                    </span>
                </template>
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
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import StatusTag from '@/components/input/StatusTag.vue'
import { FilterMatchMode } from 'primevue/api';
import formModal from '@/components/input/InternetSetting.vue';
import qs from 'qs';
import store from '@/store'

var backend = new Backend();

export default {
    components: { DataTable, Column, InputText, formModal, Dropdown, StatusTag, Button },
    data() {
        return {
            formData: null,
            internetRate: null,
            action: null,
            selectedInternet: null,
            selectedForm: null,
            role: store.getters.getRole,
            displayModal: false, // Add this line to control modal visibility
            statusfilter: ['Semua', 'Non-Aktif', 'Aktif'],
            selectedStatus: 'Semua',
            projectfilter: ['Project', 'Mazenta', 'Banara', 'Naraya', 'Marchand'],
            selectedProject: 'Project',

            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
                'attributes.status': { value: null, matchMode: FilterMatchMode.EQUALS },
                'attributes.project.data.id': { value: null, matchMode: FilterMatchMode.EQUALS },
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
                    this.filters['attributes.project.data.id'].value = 1;
                }
                if (newValue == 'Banara') {
                    this.filters['attributes.project.data.id'].value = 2;
                }
                if (newValue == 'Naraya') {
                    this.filters['attributes.project.data.id'].value = 3;
                }
                if (newValue == 'Marchand') {
                    this.filters['attributes.project.data.id'].value = 4;
                }
                this.getAllForms();  // Fetch data when the status changes
            } else {
                this.filters['attributes.project.data.id'].value = null;
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
                case 4:
                    return 'Marchand';
                default:
                    return '';
            }
        },

        async getAllForms() {
            try {
                let query = qs.stringify({
                    populate: 'project'
                });
                let response = await backend.internetRate.findAll(query);
                this.filterInternet(response.data.data)
            } catch (err) {
                console.log(err);
            }
        },

        filterInternet(e) {
            let role = store.getters.getRole;
            this.formData = e.filter((a) => {
                const projectData = a.attributes.project;
                if (role == 'superadmin') {
                    return (
                        projectData
                    );
                }
            });
        },

        showModal(action) {
            this.action = action;
            if (action == 'new') {
                this.selectedForm = {
                    id: null,
                    attributes: {
                        project: {
                            data: {
                                id: null,
                                attributes: {
                                    name: null
                                }
                            }
                        }
                    }
                }
            }
            this.displayModal = true;
        },
    },
};
</script>