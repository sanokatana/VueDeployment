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
        <div class="field col-12 md:col-12">
          <label
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">Yang
            bertanda tangan dibawah ini :</label>
        </div>
        <div class="field col-12 md:col-12">
          -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Pihak Pertama</h3>
        </div>
        <div class="field col-12 md:col-6">
          <label>Nama Lengkap</label>
          <InputText v-model="formCopy.attributes.namalengkap"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label>Pekerjaan</label>
          <InputText v-model="formCopy.attributes.pekerjaan"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12">
          <label>Alamat (sesuai KTP)</label>
          <InputText v-model="formCopy.attributes.alamat"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4 align-content-start justify-content-start">
          <label>Alamat :</label>
          <h4>Mazenta Residence</h4>
        </div>
        <div class="field col-12 md:col-4">
          <label>Cluster</label>
          <InputText v-model="formCopy.attributes.cluster"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label>Blok/No.Unit</label>
          <InputText v-model="formCopy.attributes.blok"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12">
          -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Pihak Kedua</h3>
        </div>
        <div class="field col-12 md:col-2 ">
          <h3
            class="flex flex-wrap align-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Tetangga Kanan</h3>
        </div>
        <div class="field col-12 md:col-4">
          <label>Nama Lengkap</label>
          <InputText v-model="formCopy.attributes.namalengkap1"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label>Cluster</label>
          <InputText v-model="formCopy.attributes.cluster1"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label>Blok/No.Unit</label>
          <InputText v-model="formCopy.attributes.blok1"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-2 ">
          <h3
            class="flex flex-wrap align-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Tetangga Depan</h3>
        </div>
        <div class="field col-12 md:col-4">
          <label>Nama Lengkap</label>
          <InputText v-model="formCopy.attributes.namalengkap2"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label>Cluster</label>
          <InputText v-model="formCopy.attributes.cluster2"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label>Blok/No.Unit</label>
          <InputText v-model="formCopy.attributes.blok2"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-2 ">
          <h3
            class="flex flex-wrap align-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Tetangga Kiri</h3>
        </div>
        <div class="field col-12 md:col-4">
          <label>Nama Lengkap</label>
          <InputText v-model="formCopy.attributes.namalengkap3"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label>Cluster</label>
          <InputText v-model="formCopy.attributes.cluster3"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label>Blok/No.Unit</label>
          <InputText v-model="formCopy.attributes.blok3"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-2 ">
          <h3
            class="flex flex-wrap align-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Tetangga Belakang</h3>
        </div>
        <div class="field col-12 md:col-4">
          <label>Nama Lengkap</label>
          <InputText v-model="formCopy.attributes.namalengkap4"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label>Cluster</label>
          <InputText v-model="formCopy.attributes.cluster4"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label>Blok/No.Unit</label>
          <InputText v-model="formCopy.attributes.blok4"
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
import { PDFDocument } from 'pdf-lib'
import pdfForm from '@/assets/pdf/SuratPernyataan.pdf'
import pdfFormBanara from '@/assets/pdf/SuratPernyataanBanara.pdf'
import pdfFormNaraya from '@/assets/pdf/SuratPernyataanNaraya.pdf'
import qs from 'qs';

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
        formPdf.getTextField('id').setText(JSON.stringify(this.formCopy.id))
        formPdf.getTextField('namalengkap').setText(this.formCopy.attributes.namalengkap ?? '')
        formPdf.getTextField('pekerjaan').setText(this.formCopy.attributes.pekerjaan ?? '')
        formPdf.getTextField('alamat').setText(this.formCopy.attributes.alamat ?? '')
        formPdf.getTextField('cluster').setText(this.formCopy.attributes.cluster ?? '')
        formPdf.getTextField('blok').setText(this.formCopy.attributes.blok ?? '')
        formPdf.getTextField('namalengkap1').setText(this.formCopy.attributes.namalengkap1 ?? '')
        formPdf.getTextField('cluster1').setText(this.formCopy.attributes.cluster1 ?? '')
        formPdf.getTextField('blok1').setText(this.formCopy.attributes.blok1 ?? '')
        formPdf.getTextField('namalengkap2').setText(this.formCopy.attributes.namalengkap2 ?? '')
        formPdf.getTextField('cluster2').setText(this.formCopy.attributes.cluster2 ?? '')
        formPdf.getTextField('blok2').setText(this.formCopy.attributes.blok2 ?? '')
        formPdf.getTextField('namalengkap3').setText(this.formCopy.attributes.namalengkap3 ?? '')
        formPdf.getTextField('cluster3').setText(this.formCopy.attributes.cluster3 ?? '')
        formPdf.getTextField('blok3').setText(this.formCopy.attributes.blok3 ?? '')
        formPdf.getTextField('namalengkap4').setText(this.formCopy.attributes.namalengkap4 ?? '')
        formPdf.getTextField('cluster4').setText(this.formCopy.attributes.cluster4 ?? '')
        formPdf.getTextField('blok4').setText(this.formCopy.attributes.blok4 ?? '')



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
            let response1 = await backend.suratPForm.findAll(query);
            this.formID = response1.data.meta;
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
            let response1 = await backend.suratPForm.findAll(query);
            this.formID = response1.data.meta;
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
            let response1 = await backend.suratPForm.findAll(query);
            this.formID = response1.data.meta;
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
          res = (await backend.suratPForm.newEntry(requestData));
        } else {
          res = (await backend.suratPForm.updateByID(idForm, requestData));
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
  