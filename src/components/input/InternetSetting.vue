<template>
    <Dialog :visible="displayModal" :modal="true" :closable="false" style="width: 90vh">
      <template #header>
        <h3 v-if="form.id" class="p-m-0"><span class="text-ggi-red">Edit Internet Rate - {{ form.attributes.name }}</span></h3>
        <h3 v-else class="p-m-0"><span class="text-ggi-red">Create New Internet Rate</span></h3>
        <Button label="Close" icon="pi pi-times" class="button-rounded button-text ml-auto button-secondary"
          @click="handleClose" />
      </template>
  
      <form ref="form">
        <div class="formgrid grid">
          <div class='field col-12 md:col-10'>
            <h3
              class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                Internet Rate</h3>
          </div>
          <div class="field col-12 md:col-2">
          <label><span>Status</span></label>
          <Dropdown v-model="formCopy.attributes.status" :options="statusoptions"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
          <div class="field col-12 md:col-4">
            <label><span>Speed IT</span></label>
            <InputText v-model="formCopy.attributes.name"
              class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
          </div>
          <div class="field col-12 md:col-4">
          <label for="alamatpemasang">Tarif IT Rp.</label>
          <InputNumber v-model="formCopy.attributes.price" mode="currency" currency="IDR"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
            <label>Project</label>
            <Dropdown v-model="formCopy.attributes.project.data.attributes.name" :options="statusoptionsname"
                class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus-border-primary w-full" />
        </div>
          <div class="field col-12 md:col-6">
          <label>Start Rate</label>
          <Calendar v-model="formCopy.attributes.startRate" showIcon dateFormat="yy-mm-dd"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label>End Rate</label>
          <Calendar v-model="formCopy.attributes.endRate" showIcon dateFormat="yy-mm-dd"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
  
  
        </div>
      </form>
  
      <template #footer>
  
        <div class="flex justify-content-between flex-wrap">
          <div class="flex">
            <Button :label="action == 'edit' ? 'Save' : 'Add Document'"
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
  import Dropdown from 'primevue/dropdown';
  import InputNumber from 'primevue/inputnumber';
  import Calendar from 'primevue/calendar';
  import ConfirmDialog from 'primevue/confirmdialog';
  import Button from 'primevue/button';
  import InputText from 'primevue/inputtext';
  
  
  let backend = new Backend();
  
  export default {
    components: { Dialog, Button, ConfirmDialog, InputText, Dropdown, Calendar, InputNumber},
    props: ['displayModal', 'form', 'refreshList', 'action', 'internetRate'],
    res: null,
    data() {
      return {
        statusoptions: ['Non-Aktif', 'Aktif'],
        statusoptionsname: ['mazentaAdmin', 'banaraAdmin', 'narayaAdmin', 'marchandAdmin'],
        projectMapping: {
            'mazentaAdmin': 1,
            'banaraAdmin': 2,
            'narayaAdmin': 3,
            'marchandAdmin': 4,
        },
      };
    },
    methods: {
  
      handleClose() {
        this.$emit('update:form', null);
        this.$emit('update:displayModal', false);
      },
      async handleSubmit() {
  
        try {
          if (this.formCopy.attributes.startRate) {
            const adjustedDate = new Date(this.formCopy.attributes.startRate);
            adjustedDate.setHours(adjustedDate.getHours() + 7); // Add a day
            this.formCopy.attributes.startRate = adjustedDate.toISOString();
          }
          if (this.formCopy.attributes.endRate) {
            const adjustedDate1 = new Date(this.formCopy.attributes.endRate);
            adjustedDate1.setHours(adjustedDate1.getHours() + 7); // Add a day
            this.formCopy.attributes.endRate = adjustedDate1.toISOString();
          }
          let data = {
            ...this.formCopy.attributes,  // Include existing attributes
            project: this.projectMapping[this.formCopy.attributes.project.data.attributes.name]
          };
          let idForm = this.formCopy.id;
          let res = null;
  
          let requestData = {
            data: data
          };
          if (this.form.id == null) {
              res = (await backend.internetRate.newEntry(requestData));
          } else {
              res = (await backend.internetRate.updateByID(idForm, requestData));
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
    },
  };
  </script>
  