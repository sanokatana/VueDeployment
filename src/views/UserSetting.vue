<template>
    <div class="col-12 offset-10">
        <div class="flex justify-content-between align-items-center">
            <h1 class="text-ggi-red">User Settings</h1>
        </div>
        <div class="flex justify-content-start mb-4">
            <span>
                <Button autoRezise="false" label="Create" icon="pi pi-plus" @click="showModal('new')" class="mr-2" />
            </span>
        </div>
        <DataTable ref="dt" :filters="filters" :value="formData" v-model:selection="selectedForm" selectionMode="single"
            @row-select="showModal('edit')" responsiveLayout="scroll" sortField="id" :sortOrder="1" :paginator="true"
            :rows="10"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            :rowsPerPageOptions="[10, 20, 30]" removableSort dataKey="id" v-model:filters="filters" filterDisplay="row">
            <Column field="id" header="Form ID">
            </Column>
            <Column field="fullname" header="Full Name">
            </Column>
            <Column field="username" header="Username">
            </Column>
            <Column field="email" header="Email">
            </Column>
            <Column field="loginDate" header="Terakhir Login">
            </Column>
            <Column field="id_project.id" header="Role">
                <template #body="slotProps">
                    <span v-if="slotProps.data.id_project && slotProps.data.id_project.id !== null">
                        {{ getStatusText(slotProps.data.id_project.id) }}
                    </span>
                    <span v-else>
                        <!-- Display nothing or a default value when id_project is null -->
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
import { FilterMatchMode } from 'primevue/api';
import formModal from '@/components/input/UserSetting.vue';
import qs from 'qs'

var backend = new Backend();

export default {
    components: { DataTable, Column, formModal, Button },
    data() {
        return {
            formData: null,
            action: null,
            selectedForm: null,
            displayModal: false, // Add this line to control modal visibility
            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            },
        };
    },
    created() {
        this.getAllForms();
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
                case 5:
                    return 'Super Admin';
                default:
                    return '';
            }
        },
        async getAllForms() {
            try {
                let query = qs.stringify({
                    populate: 'id_project'
                });
                let response = await backend.user.findAll(query);
                this.formData = response.data

            } catch (err) {
                console.log(err);
            }
        },
        showModal(action) {
            this.action = action;
            if (action == 'new') {
                this.selectedForm = {
                    id: null,
                    id_project: {
                        id: null,
                        name: null,
                    }
                }
            }
            this.displayModal = true;
        },
    },
};
</script>