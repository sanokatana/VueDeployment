<template>
  <Dialog :visible="displayModal" :modal="true" :closable="false" style="width: 90vh">
    <template #header>
      <h3 class="p-m-0"><span class="text-ggi-red">Edit Customer Form Number # {{ form.id }}</span></h3>
      <Button label="Close" icon="pi pi-times" class="button-rounded button-text ml-auto button-secondary"
        @click="handleClose" />
    </template>

    <form ref="form">
      <div class="formgrid grid">
        <div class='field col-12 md:col-9'>
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Informasi Data Pemilik/Penghuni/Warga Pindah</h3>
        </div>
        <div class="field col-12 md:col-3">
          <label>Status</label>
          <Dropdown v-model="formCopy.attributes.status" :options="statusoptions"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label><span>Nama Lengkap:</span></label>
          <InputText v-model="formCopy.attributes.namalengkap"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label><span>Tempat Lahir:</span></label>
          <InputText v-model="formCopy.attributes.tempat"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label><span>Pekerjaan</span></label>
          <InputText v-model="formCopy.attributes.pekerjaan"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label>Tanggal Lahir:</label>
          <Calendar v-model="formCopy.attributes.tglLahir" showButtonBar showIcon dateFormat="yy-mm-dd"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12">
          <label>Alamat</label>
          <Textarea autoResize rows="2" v-model="formCopy.attributes.alamat"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label>No Telp/HP</label>
          <InputNumber v-model="formCopy.attributes.notelp" :useGrouping="false"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label><span>Email:</span></label>
          <InputText v-model="formCopy.attributes.email"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4 ">
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Data Keluarga</h3>
        </div>
        <div class="field col-12 md:col-4">
          <h3
            class="flex flex-wrap justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Nama</h3>
        </div>
        <div class="field col-12 md:col-4">
          <h3
            class="flex flex-wrap justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Tanggal Lahir</h3>
        </div>
        <div class="field col-12 md:col-4 ">
          <label><span>Suami</span></label>
        </div>
        <div class="field col-12 md:col-4">
          <InputText v-model="formCopy.attributes.suami"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <Calendar v-model="formCopy.attributes.tglLahir1" showButtonBar showIcon dateFormat="yy-mm-dd"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4 ">
          <label><span>Istri</span></label>
        </div>
        <div class="field col-12 md:col-4">
          <InputText v-model="formCopy.attributes.istri"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <Calendar v-model="formCopy.attributes.tglLahir2" showButtonBar showIcon dateFormat="yy-mm-dd"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4 ">
          <label><span>Anak - 1</span></label>
        </div>
        <div class="field col-12 md:col-4">
          <InputText v-model="formCopy.attributes.anak"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <Calendar v-model="formCopy.attributes.tglLahir3" showButtonBar showIcon dateFormat="yy-mm-dd"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4 ">
          <label><span>Anak - 2</span></label>
        </div>
        <div class="field col-12 md:col-4">
          <InputText v-model="formCopy.attributes.anak1"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <Calendar v-model="formCopy.attributes.tglLahir4" showButtonBar showIcon dateFormat="yy-mm-dd"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4 ">
          <label><span>Anak - 3</span></label>
        </div>
        <div class="field col-12 md:col-4">
          <InputText v-model="formCopy.attributes.anak2"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <Calendar v-model="formCopy.attributes.tglLahir5" showButtonBar showIcon dateFormat="yy-mm-dd"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4 ">
          <label><span>Anak - 4</span></label>
        </div>
        <div class="field col-12 md:col-4">
          <InputText v-model="formCopy.attributes.anak3"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <Calendar v-model="formCopy.attributes.tglLahir6" showButtonBar showIcon dateFormat="yy-mm-dd"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label>Blok/No.Unit</label>
          <InputText v-model="formCopy.attributes.blok"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12">
          <label>Nama Pemilik Rumah:</label>
          <InputText v-model="formCopy.attributes.namapemilik"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12">
          <label>Alamat Rumah Tujuan</label>
          <Textarea autoResize rows="2" v-model="formCopy.attributes.alamatrumah"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label>Tanggal Pindah:</label>
          <Calendar v-model="formCopy.attributes.tglPindah" showButtonBar showIcon dateFormat="yy-mm-dd"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label>Nama Estate Management</label>
          <InputText v-model="formCopy.attributes.namaadmin"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
      </div>
      <div class="flex justify-content-center gap-3">
        <Button label="KTP" icon="pi pi-image" @click="viewKTP('ktp')" />
        <Button label="Kartu Keluarga (KK)" icon="pi pi-image" @click="viewKTP('kk')" />
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
  <Dialog :visible="imageDialogVisible" :closable="false" style="width: 50vh">
    <template #header>
      <Button label="Print KTP" icon="pi pi-print" class="button-rounded button-text mr-auto button-secondary"
        @click="printCurrentImage('ktp')" v-if="currentImageType === 'ktp'" />
      <Button label="Print KK" icon="pi pi-print" class="button-rounded button-text mr-auto button-secondary"
        @click="printCurrentImage('kk')" v-if="currentImageType === 'kk'" />
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
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import InputNumber from 'primevue/inputnumber';
import store from '@/store'
import { PDFDocument } from 'pdf-lib'
import pdfForm from '@/assets/pdf/DataPindahMazenta.pdf'
import pdfFormBanara from '@/assets/pdf/DataPindahBanara.pdf'
import pdfFormNaraya from '@/assets/pdf/DataPindahNaraya.pdf'
import Textarea from 'primevue/textarea';

let backend = new Backend();

export default {
  components: { Dialog, Button, ConfirmDialog, InputText, Textarea, Calendar, InputNumber, Dropdown },
  props: ['displayModal', 'form', 'refreshList', 'action'],
  res: null,
  data() {
    return {
      typeOptions: ['Rumah', 'Kavling'],
      statusoptions: ['Batal', 'Aktif'],
      imageDialogVisible: false,
      imageSrc: '',
      currentImageType: '',
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
        this.currentImageType = imageType; // Set the current image type for printing
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
    printCurrentImage(imageType) {
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

        // Set different widths based on the image type
        const widthStyle = imageType === 'ktp' ? '33%' : '100%';
        printWindow.document.write(`<style>@media print { img { width: ${widthStyle}; height: auto; } }</style>`);

        printWindow.document.write('</head><body>');
        printWindow.document.write(`<img src="${dataURL}" onload="window.print();">`);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
      };

      img.src = this.imageSrc; // Use the provided imageUrl to load the image
    },

    changeDateFormat(dateString) {
      const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
      ];

      const dateParts = dateString.split('-');
      if (dateParts.length === 3) {
        const day = dateParts[2];
        const month = months[parseInt(dateParts[1], 10) - 1];
        const year = dateParts[0]; // Extract last two characters of the year
        return `${day} ${month} ${year}`;
      }

      // Return the original date string if it doesn't match the expected format
      return dateString;
    },

    async fillForm() {
      try {
        let formPdfBytes;
        let project = this.formCopy.attributes.project
        let role = store.getters.getRole;
        if ((role === 'mazentaAdmin' || role === 'superadmin') && project === 1) {
          formPdfBytes = await fetch(pdfForm).then(res => res.arrayBuffer());
        } else if ((role === 'banaraAdmin' || role === 'superadmin') && project === 1) {
          formPdfBytes = await fetch(pdfFormBanara).then(res => res.arrayBuffer());
        } else if ((role === 'narayaAdmin' || role === 'superadmin') && project === 1) {
          formPdfBytes = await fetch(pdfFormNaraya).then(res => res.arrayBuffer());
        }
        const pdfDoc = await PDFDocument.load(formPdfBytes);
        const formPdf = pdfDoc.getForm()
        const alamatDivide = this.form.attributes.alamat
        const chunkSize = 80;
        let alamat1, alamat2, alamat3;
        if (alamatDivide.length <= chunkSize) {
          alamat1 = alamatDivide;
          alamat2 = '';
          alamat3 = '';
        } else {
          // Find the first space closest to the chunkSize to avoid splitting words
          const lastSpaceIndex = alamatDivide.lastIndexOf(' ', chunkSize);

          // Split the address at the last space within the chunkSize
          alamat1 = alamatDivide.substring(0, lastSpaceIndex);
          alamat2 = alamatDivide.substring(lastSpaceIndex + 1, lastSpaceIndex + chunkSize);

          if (alamatDivide.length > lastSpaceIndex + chunkSize) {
            // If there's more text after the second chunk, split at the next space
            const nextSpaceIndex = alamatDivide.indexOf(' ', lastSpaceIndex + chunkSize);

            if (nextSpaceIndex !== -1) {
              alamat2 = alamatDivide.substring(lastSpaceIndex + 1, nextSpaceIndex);
              alamat3 = alamatDivide.substring(nextSpaceIndex + 1);
            } else {
              alamat3 = alamatDivide.substring(lastSpaceIndex + chunkSize + 1);
            }
          }
        }
        formPdf.getTextField('namalengkap').setText(this.formCopy.attributes.namalengkap)
        formPdf.getTextField('alamat1').setText(alamat1)
        formPdf.getTextField('alamat2').setText(alamat2)
        formPdf.getTextField('alamat3').setText(alamat3)
        formPdf.getTextField('pekerjaan').setText(this.formCopy.attributes.pekerjaan ?? '')
        formPdf.getTextField('tglLahir').setText(this.formCopy.attributes.tempat + ' - ' + this.changeDateFormat(this.formCopy.attributes.tglLahir))
        formPdf.getTextField('notelp').setText(this.formCopy.attributes.notelp)
        formPdf.getTextField('email').setText(this.formCopy.attributes.email)
        formPdf.getTextField('suami').setText(this.formCopy.attributes.suami ?? '')
        formPdf.getTextField('istri').setText(this.formCopy.attributes.istri ?? '')
        formPdf.getTextField('anak').setText(this.formCopy.attributes.anak ?? '')
        formPdf.getTextField('anak1').setText(this.formCopy.attributes.anak1 ?? '')
        formPdf.getTextField('anak2').setText(this.formCopy.attributes.anak2 ?? '')
        formPdf.getTextField('anak3').setText(this.formCopy.attributes.anak3 ?? '')
        formPdf.getTextField('blok').setText(this.formCopy.attributes.blok ?? '')
        formPdf.getTextField('tglLahir1').setText(this.changeDateFormat(this.formCopy.attributes.tglLahir1 ?? ''))
        formPdf.getTextField('tglLahir2').setText(this.changeDateFormat(this.formCopy.attributes.tglLahir2 ?? ''))
        formPdf.getTextField('tglLahir3').setText(this.changeDateFormat(this.formCopy.attributes.tglLahir3 ?? ''))
        formPdf.getTextField('tglLahir4').setText(this.changeDateFormat(this.formCopy.attributes.tglLahir4 ?? ''))
        formPdf.getTextField('tglLahir5').setText(this.changeDateFormat(this.formCopy.attributes.tglLahir5 ?? ''))
        formPdf.getTextField('tglLahir6').setText(this.changeDateFormat(this.formCopy.attributes.tglLahir6 ?? ''))
        formPdf.getTextField('namapemilik').setText(this.formCopy.attributes.namapemilik)
        formPdf.getTextField('tglPindah').setText(this.changeDateFormat(this.formCopy.attributes.tglPindah ?? ''))
        formPdf.getTextField('namaadmin').setText(this.formCopy.attributes.namaadmin)

        const alamatDivide1 = this.form.attributes.alamatrumah
        const chunkSize1 = 80;
        let alamat4, alamat5, alamat6;
        if (alamatDivide1.length <= chunkSize1) {
          alamat4 = alamatDivide1;
          alamat5 = '';
          alamat6 = '';
        } else {
          // Find the first space closest to the chunkSize to avoid splitting words
          const lastSpaceIndex1 = alamatDivide1.lastIndexOf(' ', chunkSize1);

          // Split the address at the last space within the chunkSize
          alamat4 = alamatDivide1.substring(0, lastSpaceIndex1);
          alamat5 = alamatDivide1.substring(lastSpaceIndex1 + 1, lastSpaceIndex1 + chunkSize1);

          if (alamatDivide1.length > lastSpaceIndex1 + chunkSize1) {
            // If there's more text after the second chunk, split at the next space
            const nextSpaceIndex1 = alamatDivide1.indexOf(' ', lastSpaceIndex1 + chunkSize1);

            if (nextSpaceIndex1 !== -1) {
              alamat4 = alamatDivide1.substring(lastSpaceIndex1 + 1, nextSpaceIndex1);
              alamat5 = alamatDivide1.substring(nextSpaceIndex1 + 1);
            } else {
              alamat6 = alamatDivide1.substring(lastSpaceIndex1 + chunkSize1 + 1);
            }
          }
        }
        formPdf.getTextField('alamat4').setText(alamat4)
        formPdf.getTextField('alamat5').setText(alamat5)
        formPdf.getTextField('alamat6').setText(alamat6)


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
      this.imageDialogVisible = false;
    },

    async handleSubmit() {

      try {

        const adjustedDate = new Date(this.formCopy.attributes.tglLahir);
        if (this.formCopy.attributes.tglLahir) {
          adjustedDate.setHours(adjustedDate.getHours() + 7); // Add a day
          this.formCopy.attributes.tglLahir = adjustedDate.toISOString();
        }

        const adjustedDate1 = new Date(this.formCopy.attributes.tglLahir1);
        if (this.formCopy.attributes.tglLahir1) {
          adjustedDate1.setHours(adjustedDate1.getHours() + 7); // Add a day
          this.formCopy.attributes.tglLahir1 = adjustedDate1.toISOString();
          //2
        }

        const adjustedDate2 = new Date(this.formCopy.attributes.tglLahir2);
        if (this.formCopy.attributes.tglLahir2) {
          adjustedDate2.setHours(adjustedDate2.getHours() + 7); // Add a day
          this.formCopy.attributes.tglLahir2 = adjustedDate2.toISOString();
        }

        //3
        const adjustedDate3 = new Date(this.formCopy.attributes.tglLahir3);
        if (this.formCopy.attributes.tglLahir3) {
          adjustedDate3.setHours(adjustedDate3.getHours() + 7); // Add a day
          this.formCopy.attributes.tglLahir3 = adjustedDate3.toISOString();
        }

        //4
        const adjustedDate4 = new Date(this.formCopy.attributes.tglLahir4);
        if (this.formCopy.attributes.tglLahir4) {
          adjustedDate4.setHours(adjustedDate4.getHours() + 7); // Add a day
          this.formCopy.attributes.tglLahir4 = adjustedDate4.toISOString();
        }

        //5
        const adjustedDate5 = new Date(this.formCopy.attributes.tglLahir5);
        if (this.formCopy.attributes.tglLahir5) {
          adjustedDate5.setHours(adjustedDate5.getHours() + 7); // Add a day
          this.formCopy.attributes.tglLahir5 = adjustedDate5.toISOString();
          //6
        }
        const adjustedDate6 = new Date(this.formCopy.attributes.tglLahir6);
        if (this.formCopy.attributes.tglLahir6) {
          adjustedDate6.setHours(adjustedDate6.getHours() + 7); // Add a day
          this.formCopy.attributes.tglLahir6 = adjustedDate6.toISOString();
        }

        let data = {
          ...this.formCopy.attributes,  // Include existing attributes
        };
        let idForm = this.formCopy.id;
        let res = null;

        let requestData = {
          data: data
        };
        res = (await backend.dataPindahForm.updateByID(idForm, requestData));
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
  