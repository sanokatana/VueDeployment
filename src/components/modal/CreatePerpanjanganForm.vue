<template>
  <Dialog :visible="displayModal" :modal="true" :closable="false" style="width: 90vh">
    <template #header>
      <h3 v-if="form.id" class="p-m-0"><span class="text-dgas-red">Edit Document </span></h3>
      <h3 v-else class="p-m-0"><span class="text-dgas-red">Create Document</span></h3>
      <Button label="Close" icon="pi pi-times" class="button-rounded button-text ml-auto button-secondary"
        @click="handleClose" />
    </template>

    <form ref="form">
      <div class="formgrid grid">
        <div class="field col-12 md:col-12">
          <label>Status</label>
          <Dropdown v-model="formCopy.attributes.status" :options="statusoptions"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label><span>Warga RT</span></label>
          <InputText id="name" v-model="formCopy.attributes.rt"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label><span>Nama Lengkap</span></label>
          <InputText id="name" v-model="formCopy.attributes.namalengkap"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label><span>Blok/No.Unit</span></label>
          <InputText id="name" v-model="formCopy.attributes.blok"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label><span>cluster</span></label>
          <InputText id="name" v-model="formCopy.attributes.cluster"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        <div class="field col-12 md:col-4">
          <h3
            class="flex flex-wrap justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Plat No. Kendaraan</h3>
        </div>
        <div class="field col-12 md:col-1">
          <h3
            class="flex flex-wrap justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Ke</h3>
        </div>
        <div class="field col-12 md:col-3">
          <h3
            class="flex flex-wrap justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            No Kartu</h3>
        </div>
        <div class="field col-12 md:col-4">
          <h3
            class="flex flex-wrap justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Keterangan</h3>
        </div>
        <div class="field col-12 md:col-4 flex flex-wrap justify-content-center align-content-center">
          <InputText v-model="formCopy.attributes.plat1"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-1">
          <h3
            class="flex flex-wrap justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            1</h3>
        </div>
        <div class="field col-12 md:col-3 flex flex-wrap justify-content-center align-content-center">
          <InputText v-model="formCopy.attributes.kartu1"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4 flex flex-wrap justify-content-center align-content-center">
          <InputText v-model="formCopy.attributes.ket1"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4 flex flex-wrap justify-content-center align-content-center">
          <InputText v-model="formCopy.attributes.plat2"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-1">
          <h3
            class="flex flex-wrap justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            2</h3>
        </div>
        <div class="field col-12 md:col-3 flex flex-wrap justify-content-center align-content-center">
          <InputText v-model="formCopy.attributes.kartu2"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4 flex flex-wrap justify-content-center align-content-center">
          <InputText v-model="formCopy.attributes.ket2"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4 flex flex-wrap justify-content-center align-content-center">
          <InputText v-model="formCopy.attributes.plat3"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-1">
          <h3
            class="flex flex-wrap justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            3</h3>
        </div>
        <div class="field col-12 md:col-3 flex flex-wrap justify-content-center align-content-center">
          <InputText v-model="formCopy.attributes.kartu3"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4 flex flex-wrap justify-content-center align-content-center">
          <InputText v-model="formCopy.attributes.ket3"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4 flex flex-wrap justify-content-center align-content-center">
          <InputText v-model="formCopy.attributes.plat4"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-1">
          <h3
            class="flex flex-wrap justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            4</h3>
        </div>
        <div class="field col-12 md:col-3 flex flex-wrap justify-content-center align-content-center">
          <InputText v-model="formCopy.attributes.kartu4"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4 flex flex-wrap justify-content-center align-content-center">
          <InputText v-model="formCopy.attributes.ket4"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4 flex flex-wrap justify-content-center align-content-center">
          <InputText v-model="formCopy.attributes.plat5"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-1">
          <h3
            class="flex flex-wrap justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            5</h3>
        </div>
        <div class="field col-12 md:col-3 flex flex-wrap justify-content-center align-content-center">
          <InputText v-model="formCopy.attributes.kartu5"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4 flex flex-wrap justify-content-center align-content-center">
          <InputText v-model="formCopy.attributes.ket5"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4 flex flex-wrap justify-content-center align-content-center">
          <InputText v-model="formCopy.attributes.plat6"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-1">
          <h3
            class="flex flex-wrap justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            6</h3>
        </div>
        <div class="field col-12 md:col-3 flex flex-wrap justify-content-center align-content-center">
          <InputText v-model="formCopy.attributes.kartu6"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4 flex flex-wrap justify-content-center align-content-center">
          <InputText v-model="formCopy.attributes.ket6"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4 flex flex-wrap justify-content-center align-content-center">
          <InputText v-model="formCopy.attributes.plat7"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-1">
          <h3
            class="flex flex-wrap justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            7</h3>
        </div>
        <div class="field col-12 md:col-3 flex flex-wrap justify-content-center align-content-center">
          <InputText v-model="formCopy.attributes.kartu7"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4 flex flex-wrap justify-content-center align-content-center">
          <InputText v-model="formCopy.attributes.ket7"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label>Estate Managmenet</label>
          <InputText v-model="formCopy.attributes.admin"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>

      </div>
    </form>

    <template #footer>
      <div class="flex justify-content-between flex-wrap">
        <div class="flex">
          <Button label="Print" icon="pi pi-print" @click="fillForm()" />
        </div>
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
import ConfirmDialog from 'primevue/confirmdialog';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import store from '@/store'
import qs from 'qs'
import { PDFDocument } from 'pdf-lib'
import pdfForm from '@/assets/pdf/PerpanjanganKartu.pdf'
import pdfFormBanara from '@/assets/pdf/PerpanjanganKartuBanara.pdf'
import pdfFormNaraya from '@/assets/pdf/PerpanjanganKartuNaraya.pdf'


let backend = new Backend();

export default {
  components: { Dialog, Button, ConfirmDialog, InputText, Dropdown },
  props: ['displayModal', 'form', 'refreshList', 'action'],
  res: null,
  data() {
    return {
      statusoptions: ['Batal', 'Aktif']
    };
  },

  methods: {

    async fillForm() {
      try {
        let formPdfBytes;
        let project = this.formCopy.attributes.project
        let role = store.getters.getRole;
        if ((role === 'mazentaAdmin' || role === 'superadmin') && project === 1) {
          formPdfBytes = await fetch(pdfForm).then(res => res.arrayBuffer());
        } else if ((role === 'banaraAdmin' || role === 'superadmin') && project === 2) {
          formPdfBytes = await fetch(pdfFormBanara).then(res => res.arrayBuffer());
        } else if ((role === 'narayaAdmin' || role === 'superadmin') && project === 3) {
          formPdfBytes = await fetch(pdfFormNaraya).then(res => res.arrayBuffer());
        }
        const pdfDoc = await PDFDocument.load(formPdfBytes);
        const formPdf = pdfDoc.getForm()
        formPdf.getTextField('rt').setText(this.formCopy.attributes.rt)
        formPdf.getTextField('namalengkap').setText(this.formCopy.attributes.namalengkap)
        formPdf.getTextField('cluster').setText(this.formCopy.attributes.cluster)
        formPdf.getTextField('blok').setText(this.formCopy.attributes.blok)
        formPdf.getTextField('plat1').setText(this.formCopy.attributes.plat1 ?? '')
        formPdf.getTextField('plat2').setText(this.formCopy.attributes.plat2 ?? '')
        formPdf.getTextField('plat3').setText(this.formCopy.attributes.plat3 ?? '')
        formPdf.getTextField('plat4').setText(this.formCopy.attributes.plat4 ?? '')
        formPdf.getTextField('plat5').setText(this.formCopy.attributes.plat5 ?? '')
        formPdf.getTextField('plat6').setText(this.formCopy.attributes.plat6 ?? '')
        formPdf.getTextField('plat7').setText(this.formCopy.attributes.plat7 ?? '')
        formPdf.getTextField('kartu1').setText(this.formCopy.attributes.kartu1 ?? '')
        formPdf.getTextField('kartu2').setText(this.formCopy.attributes.kartu2 ?? '')
        formPdf.getTextField('kartu3').setText(this.formCopy.attributes.kartu3 ?? '')
        formPdf.getTextField('kartu4').setText(this.formCopy.attributes.kartu4 ?? '')
        formPdf.getTextField('kartu5').setText(this.formCopy.attributes.kartu5 ?? '')
        formPdf.getTextField('kartu6').setText(this.formCopy.attributes.kartu6 ?? '')
        formPdf.getTextField('kartu7').setText(this.formCopy.attributes.kartu7 ?? '')
        formPdf.getTextField('ket1').setText(this.formCopy.attributes.ket1 ?? '')
        formPdf.getTextField('ket2').setText(this.formCopy.attributes.ket2 ?? '')
        formPdf.getTextField('ket3').setText(this.formCopy.attributes.ket3 ?? '')
        formPdf.getTextField('ket4').setText(this.formCopy.attributes.ket4 ?? '')
        formPdf.getTextField('ket5').setText(this.formCopy.attributes.ket5 ?? '')
        formPdf.getTextField('ket6').setText(this.formCopy.attributes.ket6 ?? '')
        formPdf.getTextField('ket7').setText(this.formCopy.attributes.ket7 ?? '')
        formPdf.getTextField('admin').setText(this.formCopy.attributes.admin)

        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const pdfUrl = URL.createObjectURL(blob);
        window.open(pdfUrl, '_blank');
        URL.revokeObjectURL(pdfUrl);
      } catch (error) {
        console.error('Error while processing PDF:', error);
      }
    },

    handleClose() {
      this.$emit('update:form', null);
      this.$emit('update:displayModal', false);
    },
    async handleSubmit() {

      try {
        let role = store.getters.getRole;
        if (role == 'mazentaAdmin') {
          if (this.form.id == null) {
            let query = qs.stringify({
              filters: {
                project: {
                  $eq: 1,
                },
              },
            });
            let response1 = await backend.perpanjanganKartu.findAll(query);
            this.formID= response1.data.meta;
            this.formCopy.attributes.formid = this.formID.pagination.total + 1;
          }
          this.formCopy.attributes.project = 1;
        }
        if (role == 'banaraAdmin') {
          if (this.form.id == null) {
            let query = qs.stringify({
              filters: {
                project: {
                  $eq: 2,
                },
              },
            });
            let response1 = await backend.perpanjanganKartu.findAll(query);
            this.formID= response1.data.meta;
            this.formCopy.attributes.formid = this.formID.pagination.total + 1;
          }
          this.formCopy.attributes.project = 2;
        }
        if (role == 'narayaAdmin') {
          if (this.form.id == null) {
            let query = qs.stringify({
              filters: {
                project: {
                  $eq: 3,
                },
              },
            });
            let response1 = await backend.perpanjanganKartu.findAll(query);
            this.formID= response1.data.meta;
            this.formCopy.attributes.formid = this.formID.pagination.total + 1;
          }
          this.formCopy.attributes.project = 3;
        }
        let data = {
          ...this.formCopy.attributes,  // Include existing attributes
        };

        let idForm = this.formCopy.id;
        let res = null;

        let requestData = {
          data: data
        };
        if (this.form.id == null) {
          res = (await backend.perpanjanganKartu.newEntry(requestData));
        } else {
          res = (await backend.perpanjanganKartu.updateByID(idForm, requestData));
        }

        this.handleClose();
        this.refreshList();
        console.log(res);
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
  