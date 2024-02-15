<template>
    <Dialog :visible="dispModal" :modal="true" :closable="false" style="width: 90vh">
        <template #header>
            <h3 v-if="form.id" class="m-0"><span class="text-dgas-red">Edit Row - {{ form.attributes.deskripsi }}</span></h3>
            <h3 v-else class="m-0"><span class="text-ggi-red">Create Row </span></h3>
            <Button label="Close" icon="pi pi-times" class="button-rounded button-text ml-auto button-secondary"
                @click="handleClose" />
        </template>

        <form ref="form">
            <div class="formgrid grid">
                <div class="field col-12 md:col-12">
                    <label><span>Deskripsi</span></label>
                    <InputText id="name" v-model="formCopy.attributes.deskripsi"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-12">
                    <label><span>Comment</span></label>
                    <InputText id="name" v-model="formCopy.attributes.comment"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
            </div>
        </form>

        <template #footer>
            <div class="p-d-flex p-jc-between p-ai-center">
                <div class="p-text-left">
                    <Button :label="act == 'edit' ? 'Save' : 'Add Row'"
                        :icon="act == 'edit' ? 'pi pi-save' : 'pi pi-plus'" @click="handleSubmit(action)" />
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

let backend = new Backend();

export default {
    components: { Dialog, Button, ConfirmDialog, InputText},
    props: ['dispModal', 'form', 'refreshList', 'act', 'formRow'],
    res: null,
    data() {
        return {
        };
    },
    methods: {
        handleClose() {
            this.$emit('update:form', null);
            this.$emit('update:dispModal', false);
        },
        async handleSubmit() {

            try {
                const selectedID = this.formCopy1.id;
                let data = {
                    ...this.formCopy.attributes, 
                    PengambilanMarchandID: {
                    id: selectedID
                }
                };
                let idForm = this.formCopy.id;
                let res = null;

                let requestData = {
                    data: data
                };
                if (this.form.id == null) {
                    res = (await backend.pengambilanTable.newEntry(requestData));
                    console.log(res);
                } else {
                    res = (await backend.pengambilanTable.updateByID(idForm, requestData));
                }

                this.handleClose();
                this.refreshList();
                this.$toast.add({ severity: 'success', summary: 'Form Update Success', detail: `Form #${res.data.data.id} has been saved`, life: 3000 });
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
        formCopy1() {
            return { ...this.formRow };
        },
    },
};
</script>
  