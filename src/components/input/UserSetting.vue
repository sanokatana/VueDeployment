<template>
    <Dialog :visible="displayModal" :modal="true" :closable="false" style="width: 90vh">
        <template #header>
            <h3 v-if="form.id" class="p-m-0"><span class="text-ggi-red">Edit User - {{ this.form.fullname }}</span></h3>
            <h3 v-else class="p-m-0"><span class="text-ggi-red">Create New User</span></h3>
            <Button label="Close" icon="pi pi-times" class="button-rounded button-text ml-auto button-secondary"
                @click="handleClose" />
        </template>

        <form ref="form">
            <div class="formgrid grid">
                <div class='field col-12 md:col-10'>
                    <h3
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        User Setting
                    </h3>
                </div>
                <div class="field col-12 md-6">
                    <label><span>Full Name</span></label>
                    <InputText id="namalengkap" v-model="formCopy.fullname"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md-6">
                    <label for="email">User Name</label>
                    <InputText id="email" v-model="formCopy.username"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus-border-primary w-full" />
                </div>
                <div class="field col-12 md-6">
                    <label for="email">Email</label>
                    <InputText id="email" v-model="formCopy.email"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus-border-primary w-full" />
                </div>
                <div class="field col-12 md-6">
                    <label for="email">Password</label>
                    <InputText id="email" v-model="formCopy.password"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus-border-primary w-full" />
                </div>
                <div class="field col-12 md-12">
                    <label>Role</label>
                    <Dropdown v-model="formCopy.id_project.name" :options="statusoptionsname"
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus-border-primary w-full" />
                </div>
            </div>
        </form>

        <template #footer>
            <div class="flex justify-content-end flex-wrap">
                <div class="flex">
                    <Button label="Delete" icon="pi pi-trash" @click="confirmDelete" />
                    <Button :label="action == 'edit' ? 'Save' : 'Add User'"
                        :icon="action == 'edit' ? 'pi pi-save' : 'pi pi-plus'" @click="handleSubmit(action)" />
                </div>
            </div>
            <ConfirmDialog />
        </template>
    </Dialog>
</template>
  
<script>
import Dialog from 'primevue/dialog';
import Backend from '@/backend';
import ConfirmDialog from 'primevue/confirmdialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';


let backend = new Backend();

export default {
    components: { Dialog, Button, ConfirmDialog, InputText, Dropdown },
    props: ['displayModal', 'form', 'refreshList', 'action', 'internetRate'],
    res: null,
    data() {
        return {
            statusoptionsname: ['mazentaAdmin', 'banaraAdmin', 'narayaAdmin', 'marchandAdmin', 'superadmin'],
            projectMapping: {
                'mazentaAdmin': 1,
                'banaraAdmin': 2,
                'narayaAdmin': 3,
                'marchandAdmin': 4,
                'superadmin': 5,
            },


        };
    },
    created() {
        if (this.action === 'new') {
            this.idProject = { id: null, name: null }; // Initialize id_project for new user
        }
    },
    methods: {
        confirmDelete() {
            this.$confirm.require({
                message: 'Are you sure you want to delete this user?',
                header: `Delete User - ${this.form.username} ?`,
                icon: 'pi pi-exclamation-triangle',
                acceptLabel: 'Delete User',
                rejectLabel: 'Cancel',
                acceptClass: 'p-button-danger',
                rejectClass: 'p-button-primary',
                accept: () => {
                    this.deleteForm()
                },
                reject: () => { }
            });
        },
        async deleteForm() {
            try {
                let resDel = null;
                let idForm = this.formCopy.id;
                resDel = await backend.user.deleteByID(idForm);
                this.handleClose();
                this.refreshList();
                this.$toast.add({ severity: 'success', summary: 'User Deleted Successfully', detail: `User ${resDel.data.username} has been deleted`, life: 3000 });
            } catch (err) {
                console.error('Error while deleting user:', err);
            }
        },
        handleClose() {
            this.$emit('update:form', null);
            this.$emit('update:displayModal', false);
        },
        async handleSubmit() {
            try {
                let data
                if (this.form.id == null) {
                    data = {
                        ...this.formCopy,  // Include existing attributes
                        id_project: this.projectMapping[this.formCopy.id_project.name],
                        role: 2,
                    };
                } else {
                    data = {
                        ...this.formCopy,  // Include existing attributes
                        id_project: this.projectId, // Use the numeric project ID
                    };
                }
                let idForm = this.formCopy.id;
                let res = null;

                if (this.form.id == null) {
                    res = (await backend.user.newEntry(data));
                } else {
                    res = (await backend.user.updateByID(idForm, data));
                }

                this.handleClose();
                this.refreshList();
                this.$toast.add({ severity: 'success', summary: 'Form Update Success', detail: `Form #${res.data.id} has been saved`, life: 3000 });
                // Close the dialog, refresh the list, and show a success toast
            } catch (err) {
                console.error('Error while saving form:', err);
            }
        },
    },


    computed: {
        formCopy() {
            return { ...this.form };
        },
        projectId() {
            return this.formCopy.id_project ? this.projectMapping[this.formCopy.id_project.name] : null;
        },
    },
};
</script>
  