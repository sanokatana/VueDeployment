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
          <Calendar id="terbilang" v-model="formCopy.attributes.tglPrint" showButtonBar dateFormat="yy-mm-dd" showIcon view="date"
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
        <div class="flex flex-row flex-wrap justify-content-center gap-4">
          <Button label="Photo 1" icon="pi pi-image" @click="viewKTP('photo1')" />
          <Button label="Photo 2" icon="pi pi-image" @click="viewKTP('photo2')" />
          <Button label="Photo 3" icon="pi pi-image" @click="viewKTP('photo3')" />
          <Button label="Photo 4" icon="pi pi-image" @click="viewKTP('photo4')" />
          <Button label="Photo 5" icon="pi pi-image" @click="viewKTP('photo5')" />
          <Button label="Photo 6" icon="pi pi-image" @click="viewKTP('photo6')" />
          <Button label="Photo 7" icon="pi pi-image" @click="viewKTP('photo7')" />
          <Button label="Photo 8" icon="pi pi-image" @click="viewKTP('photo8')" />
          <Button label="Photo 9" icon="pi pi-image" @click="viewKTP('photo9')" />
        </div>
      </div>
    </form>

    <template #footer>
      <div class="flex justify-content-between flex-wrap">
        <div class="flex">
          <Button label="Print" icon="pi pi-print" @click="fillForm()" />
          <Button label="Print Semua Photo" icon="pi pi-print" class="button-rounded button-text ml-auto button-secondary"
            @click="printAllImages" />
        </div>
        <div class="flex">
          <Button :label="action == 'edit' ? 'Save' : 'Add Document'"
            :icon="action == 'edit' ? 'pi pi-save' : 'pi pi-plus'" @click="handleSubmit(action)" />
        </div>
      </div>
      <ConfirmDialog />
    </template>
  </Dialog>
  <Dialog :visible="imageDialogVisible" :closable="false" style="width: 50vh">
    <template #header>
      <Button label="Print" icon="pi pi-print" class="button-rounded button-text mr-auto button-secondary"
        @click="printCurrentImage" />
      <Button label="Close" icon="pi pi-times" class="button-rounded button-text ml-auto button-secondary"
        @click="hideImageDialog" />
    </template>
    <img :src="imageSrc" alt="Image Preview" style="max-width: 100%; max-height: 100%;" />
  </Dialog>
</template>
  
<script>
import Dialog from 'primevue/dialog';
import Backend from '@/backend';
import ConfirmDialog from 'primevue/confirmdialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import store from '@/store'
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import { PDFDocument } from 'pdf-lib'
import pdfForm from '@/assets/pdf/FormCCMazenta.pdf'
import pdfFormBanara from '@/assets/pdf/FormCCBanara.pdf'
import pdfFormNaraya from '@/assets/pdf/FormCCNaraya.pdf'


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
    viewKTP(imageType) {
      const imageUrl = this.formCopy.attributes[imageType];
      if (!imageUrl) {
        this.$toast.add({
          severity: 'warn',
          summary: 'No Image',
          detail: 'The image is not available.',
          life: 3000 // Toast message will disappear after 3 seconds
        });
      } else {
        this.openImagePopup(imageUrl); // Pass imageUrl to openImagePopup
      }
    },
    openImagePopup(imageUrl) {
      const projects = {
        1: 'MazentaImages',
        2: 'BanaraImages',
        3: 'NarayaImages',
        4: 'MarchandImages',
        // Add more projects as needed
      };
      const projectNumber = this.formCopy.attributes.project;
      const projectNames = projects[projectNumber];

      if (projectNames) {
        this.imageSrc = `/img/${projectNames}/${imageUrl}`;
        this.imageDialogVisible = true;
      } else {
        console.error('Project not found!');
      }
    },
    hideImageDialog() {
      this.imageDialogVisible = false;
    },
    printCurrentImage() {
      this.printImage(this.imageSrc); // Pass the current image source to printImage
    },

    // Modified printImage that accepts imageUrl as a parameter
    printImage(imageUrl) {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const dataURL = canvas.toDataURL();

        const printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>Print Image</title>');
        printWindow.document.write('<style>@media print { img { width: 40%; height: auto; } }</style>');
        printWindow.document.write('</head><body>');
        printWindow.document.write(`<img src="${dataURL}" onload="window.print();">`);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
      };

      img.src = imageUrl; // Use the provided imageUrl to load the image
    },
    printAllImages() {
      const imageUrls = [
        this.formCopy.attributes.ktppemilik,
        this.formCopy.attributes.ktpmandor,
        this.formCopy.attributes.ktppekerja1,
        this.formCopy.attributes.ktppekerja2,
        this.formCopy.attributes.ktppekerja3,
        // Other image URLs...
      ];
      const validImageUrls = imageUrls.filter(url => url); // Filter out null or empty URLs

      if (validImageUrls.length === 0) {
        console.log('No valid image URLs available.');
        return; // No valid images to print, exit the function
      }
      const projects = {
        1: 'MazentaImages',
        2: 'BanaraImages',
        3: 'NarayaImages',
        4: 'MarchandImages',
        // Add more projects as needed
      };
      const projectNumber = this.formCopy.attributes.project;
      const projectNames = projects[projectNumber];
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        const images = [];

        const loadImage = (url) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';

            img.onload = () => resolve(img);
            img.onerror = (err) => reject(err);

            img.src = `/img/${projectNames}/${url}`;
          });
        };

        Promise.all(imageUrls.map(url => loadImage(url)))
          .then(imgs => {
            imgs.forEach((img) => {
              images.push(img);
            });

            // Construct the print content here
            const printContent = images
              .map(img => `<img src="${img.src}" style="width: 33%; height: auto; float: left;">`)
              .join('');

            // Write the content into the print window
            printWindow.document.write('<html><head><title>Print All Images</title>');
            printWindow.document.write('<style>@media print { body { display: block; } img { box-sizing: border-box; } }</style>');
            printWindow.document.write('</head><body>');
            printWindow.document.write(printContent);
            printWindow.document.write('</body></html>');

            printWindow.document.close(); // Close the document opened for writing

            // Trigger the print action after the images are loaded
            printWindow.onload = () => {
              printWindow.print();
            };
          })
          .catch((err) => {
            console.error('Error loading images:', err);
          });
      } else {
        console.error('Print window not opened');
      }
    },
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

        formPdf.getTextField('id').setText(JSON.stringify(this.form.id))

        const formattedDate = this.changeDataFormat(this.form.attributes.tglKeluhan)
        formPdf.getTextField('tglKeluhan').setText(formattedDate)

        formPdf.getTextField('nama').setText(this.form.attributes.name)
        formPdf.getTextField('alamat').setText(this.form.attributes.alamat)
        formPdf.getTextField('uraiankeluhan').setText(this.form.attributes.uraiankeluhan)
        formPdf.getTextField('tindakanperbaikan').setText(this.form.attributes.tindakanperbaikan ?? '')
        formPdf.getTextField('analisa').setText(this.form.attributes.analisamasalah ?? '')
        formPdf.getTextField('tindakanpencegahan').setText(this.form.attributes.tindakanpencegahan ?? '')
        formPdf.getTextField('masalah').setText(this.form.attributes.masalah ?? '')

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
        res = (await backend.ccForm.updateByID(idForm, requestData));

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
  