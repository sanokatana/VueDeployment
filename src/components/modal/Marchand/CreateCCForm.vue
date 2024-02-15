<template>
  <Dialog :visible="displayModal" :modal="true" :closable="false" style="width: 90vh">
    <template #header>
      <h3 class="p-m-0"><span class="text-ggi-red">Edit Customer Form Customer Complaint Number # {{ form.id }}</span></h3>
      <Button label="Close" icon="pi pi-times" class="button-rounded button-text ml-auto button-secondary"
        @click="handleClose" />
    </template>

    <form ref="form">
      <div class="formgrid grid">
        <div class="field col-12 md:col-12">
          <label><span>Status</span></label>
          <Dropdown v-model="formCopy.attributes.status" :options="statusoptions"  class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label><span>Tanggal Keluhan</span></label>
          <Calendar id="name" v-model="formCopy.attributes.tglKeluhan" showButtonBar showIcon dateFormat="yy-mm-dd"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label><span>Nama Pemilik / Penghuni:</span></label>
          <InputText id="name" v-model="formCopy.attributes.name"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12">
          <label>Alamat Pemilik / Penghuni</label>
          <Textarea id="alamat" autoResize rows="1" v-model="formCopy.attributes.alamat"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12">
          <label>Uraian Keluhan</label>
          <Textarea id="uraiankeluhan" autoResize rows="3" v-model="formCopy.attributes.uraiankeluhan"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12">
          <label>Tindakan Perbaikan</label>
          <Textarea id="tindakanperbaikan" autoResize rows="3" v-model="formCopy.attributes.tindakanperbaikan"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12">
          <label>Analisa Penyebab Masalah</label>
          <Textarea id="analisamasalah" autoResize rows="3" v-model="formCopy.attributes.analisamasalah"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12">
          <label>Tindakan Pencegahan</label>
          <Textarea id="tindakanpencegahan" autoResize rows="3" v-model="formCopy.attributes.tindakanpencegahan"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
            -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </div>

        <div class="field col-12 md:col-4">
          <label>Status Masalah</label>
          <Dropdown v-model="formCopy.attributes.masalah" :options="masalahOptions"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label>Tanggal: </label>
          <Calendar id="terbilang" v-model="formCopy.attributes.tglPrint" dateFormat="yy-mm-dd" showButtonBar showIcon view="date"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label>Jam : </label>
          <Calendar id="terbilang" v-model="formCopy.attributes.waktu" showButtonBar showIcon timeOnly
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label><span>Tenant Relation :</span></label>
          <InputText id="name" v-model="formCopy.attributes.tenant"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label><span>Diverifikasi Oleh : </span></label>
          <InputText id="name" v-model="formCopy.attributes.verifikasi"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
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
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import { PDFDocument } from 'pdf-lib'
import pdfForm from '@/assets/pdfMarchand/FormCCMarchand.pdf'


let backend = new Backend();

export default {
  components: { Dialog, Button, ConfirmDialog, InputText, Textarea, Calendar, Dropdown },
  props: ['displayModal', 'form', 'refreshList', 'action'],
  res: null,
  data() {
    return {
      masalahOptions: ['Minor', 'Major'],
      statusoptions: ['Batal', 'Aktif']
    };
  },
  methods: {

    changeDataFormat(dateString) {
      const parts = dateString.split('-');
      const year = parts[0];
      const month = parts[1];
      const day = parts[2];
      return `${day}-${month}-${year}`;
    },

    async fillForm() {
      try {
        let formPdfBytes;
        formPdfBytes = await fetch(pdfForm).then(res => res.arrayBuffer());
        const pdfDoc = await PDFDocument.load(formPdfBytes);
        const formPdf = pdfDoc.getForm()

        formPdf.getTextField('id').setText(JSON.stringify(this.form.id))

        const formattedDate = this.changeDataFormat(this.form.attributes.tglKeluhan)
        formPdf.getTextField('tglKeluhan').setText(formattedDate)

        formPdf.getTextField('nama').setText(this.form.attributes.name)
        formPdf.getTextField('alamat').setText(this.form.attributes.alamat)
        formPdf.getTextField('uraiankeluhan').setText(this.form.attributes.uraiankeluhan)
        formPdf.getTextField('tindakanperbaikan').setText(this.form.attributes.tindakanperbaikan)
        formPdf.getTextField('analisa').setText(this.form.attributes.analisamasalah)
        formPdf.getTextField('tindakanpencegahan').setText(this.form.attributes.tindakanpencegahan)
        formPdf.getTextField('masalah').setText(this.form.attributes.masalah)

        const formattedDate1 = this.changeDataFormat(this.form.attributes.tglPrint)
        formPdf.getTextField('tglPrint').setText(formattedDate1)

        formPdf.getTextField('tenant').setText(this.form.attributes.tenant)
        formPdf.getTextField('verifikasi').setText(this.form.attributes.verifikasi)




        const tglPem = this.form.attributes.waktu
        const [hour, minute] = tglPem.split(':');
        formPdf.getTextField('waktu').setText(hour + ':' + minute)



        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const pdfUrl = URL.createObjectURL(blob);
        window.open(pdfUrl, '_blank');

        // Optionally revoke the object URL to release resources (once printing is done)
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
        const adjustedDate = new Date(this.formCopy.attributes.tglKeluhan);
        adjustedDate.setHours(adjustedDate.getHours() + 7);
        this.formCopy.attributes.tglKeluhan = adjustedDate.toISOString();
        if (isNaN(new Date(this.formCopy.attributes.waktu))) {
          // Handle case where waktu is not a valid date
          this.formCopy.attributes.waktu
        } else {
          let originalDate = new Date(this.formCopy.attributes.waktu);
          let hours = originalDate.getHours().toString().padStart(2, '0');
          let minutes = originalDate.getMinutes().toString().padStart(2, '0');
          this.formCopy.attributes.waktu = `${hours}:${minutes}:00`;
        }
        const adjustedDate1 = new Date(this.formCopy.attributes.tglPrint);
        adjustedDate1.setHours(adjustedDate1.getHours() + 7);
        this.formCopy.attributes.tglPrint = adjustedDate1.toISOString();
        let data = {
          ...this.formCopy.attributes,  // Include existing attributes
        };
        let idForm = this.formCopy.id;
        let res = null;

        let requestData = {
          data: data
        };
        res = (await backend.ccMarchand.updateByID(idForm, requestData));


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
  