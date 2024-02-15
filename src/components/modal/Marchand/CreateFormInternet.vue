<template>
  <Dialog :visible="displayModal" :modal="true" :closable="false" style="width: 90vh">
    <template #header>
      <h3 class="p-m-0"><span class="text-ggi-red">Edit Customer Form Internet Number # {{ form.id }}</span></h3>
      <Button label="Close" icon="pi pi-times" class="button-rounded button-text ml-auto button-secondary"
        @click="handleClose" />
    </template>

    <form ref="form">
      <div class="formgrid grid">
        <div class='field col-12 md:col-7'>
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Data Pelanggan</h3>
        </div>
        <div class="field col-12 md:col-3">
          <label><span>Tipe Form</span></label>
          <Dropdown v-model="formCopy.attributes.tipeform" :options="tipeformoptions"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-2">
          <label><span>Status</span></label>
          <Dropdown v-model="formCopy.attributes.status" :options="statusoptions"  class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label><span>Nama Lengkap:</span></label>
          <InputText id="namalengkap" v-model="formCopy.attributes.namalengkap"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="email">Email</label>
          <InputText id="email" v-model="formCopy.attributes.email"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="noktp">NoKTP</label>
          <InputText id="noktp" v-model="formCopy.attributes.noktp"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="noktp">NoTelp/HP</label>
          <InputText id="noktp" v-model="formCopy.attributes.notelp"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12">
          <label for="alamatpemasang">Alamat Pemasang</label>
          <Textarea id="alamatpemasang" autoResize rows="2" v-model="formCopy.attributes.alamatpemasang"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12">
          <label for="kelpemasang">Kelurahan Pemasang</label>
          <Textarea id="kelpemasang" autoResize rows="2" v-model="formCopy.attributes.kelpemasang"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12">
          <label for="kecpemasang">Kecamatan Pemasang</label>
          <Textarea id="kecpemasang" autoResize rows="2" v-model="formCopy.attributes.kecpemasang"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12">
          <label for="pospemasang">POS Pemasang</label>
          <InputText id="pospemasang" v-model="formCopy.attributes.pospemasang"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12">
          <label for="alamattagihan">Alamat Tagihan</label>
          <Textarea id="alamattagihan" autoResize rows="2" v-model="formCopy.attributes.alamattagihan"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12">
          <label for="keltagihan">Kelurahan Tagihan</label>
          <Textarea id="keltagihan" autoResize rows="2" v-model="formCopy.attributes.keltagihan"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12">
          <label for="kectagihan">Kecamatan Tagihan</label>
          <Textarea id="kectagihan" autoResize rows="2" v-model="formCopy.attributes.kectagihan"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12">
          <label for="postagihan">POS Tagihan</label>
          <InputText id="postagihan" v-model="formCopy.attributes.postagihan"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label for="instalasi">Internet Instalasi</label>
          <ToggleButton id="instalasi" v-model="formCopy.attributes.instalasi"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label for="postagihan">Internet Customer Memilih</label>
          <InputText id="postagihan" v-model="formCopy.attributes.premie" disabled
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label for="internetRate">Internet Rate</label>
          <InternetRate id="internetRate" v-model="formCopy.attributes.internetID.data" v-model:dataForm="formCopy"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label for="postagihan">Harga</label>
          <InputNumber v-model="computedPrice" disabled
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class='field col-12 md:col-12'>
          -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Admin Form Input</h3>
        </div>
        <div class="field col-12 md:col-6">
          <label for="merekModem">Merek Modem/Router</label>
          <InputText id="merekModem" v-model="formCopy.attributes.merekModem"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label>Serial Number</label>
          <InputText id="serialnumber" v-model="formCopy.attributes.serialnumber"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class='field col-12 md:col-12'>
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Infomrasi Pemasangan</h3>
        </div>
        <div class="field col-12 md:col-6">
          <label for="namainstaller">Nama Installer</label>
          <InputText id="namainstaller" v-model="formCopy.attributes.namainstaller"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label>Tanggal Pemasang</label>
          <Calendar id="serialnumber" v-model="formCopy.attributes.tglPemasang" showButtonBar showIcon dateFormat="yy-mm-dd"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class='field col-12 md:col-12'>
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Informasi Pemutusan</h3>
        </div>
        <div class="field col-12 md:col-6">
          <label for="namainstaller">Nama Installer</label>
          <InputText id="namainstaller" v-model="formCopy.attributes.namainstallerpemutusan"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label>Tanggal Pemutusan</label>
          <Calendar id="serialnumber" v-model="formCopy.attributes.tglPemutusan" showButtonBar showIcon dateFormat="yy-mm-dd"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class='field col-12 md:col-12'>
          -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Informasi Printing</h3>
        </div>
        <div class="field col-12 md:col-3">
          <label for="namainstaller">Nama Tenant Relation</label>
          <InputText id="namainstaller" v-model="formCopy.attributes.tenantrelation"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label for="namainstaller">Nama IT</label>
          <InputText id="namainstaller" v-model="formCopy.attributes.it"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label for="namainstaller">Nama Tenant Management</label>
          <InputText id="namainstaller" v-model="formCopy.attributes.management"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label>Tanggal Print</label>
          <Calendar v-model="formCopy.attributes.tglPrint" showButtonBar showIcon dateFormat="yy-mm-dd"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>


      </div>
    </form>

    <template #footer>

      <div class="flex justify-content-between flex-wrap">
        <div class="flex">
          <Button label="Print" icon="pi pi-print" @click="fillForm()" />
          <Button label="View KTP" icon="pi pi-image" @click="viewKTP" />
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
        @click="printImage" /> 
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
import Textarea from 'primevue/textarea';
import ToggleButton from 'primevue/togglebutton';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import InternetRate from '@/components/input/InternetRate.vue'
import { PDFDocument } from 'pdf-lib'
import pdfForm from '@/assets/pdfMarchand/InternetMarchand.pdf'


let backend = new Backend();

export default {
  components: { Dialog, Button, ConfirmDialog, InputText, Textarea, Calendar, InternetRate, ToggleButton, InputNumber, Dropdown},
  props: ['displayModal', 'form', 'refreshList', 'action', 'internetRate'],
  res: null,
  data() {
    return {
      options: ['False', 'True'],
      statusoptions: ['Batal', 'Aktif'],
      imageDialogVisible: false,
      tipeformoptions: ['Pemasangan', 'Pemutusan'],
      imageSrc: '',
    };
  },
  methods: {
    viewKTP() {
      if (!this.formCopy.attributes.imgurl) {
        this.$toast.add({
          severity: 'warn',
          summary: 'No KTP',
          detail: 'The KTP image is not available.',
          life: 3000 // Toast message will disappear after 3 seconds
        });
      } else {
        // Open the dialog or perform any other action to display the image
        this.openImagePopup();
      }
    },
    printImage() {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const dataURL = canvas.toDataURL(); // Convert canvas to data URL

        const printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>Print Image</title>');
        printWindow.document.write('<style>@media print { img { width: 50%; height: auto; } }</style>'); // Set width and height in pixels
        printWindow.document.write('</head><body>');
        printWindow.document.write(`<img src="${dataURL}" onload="window.print();">`);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
      };

      img.src = `/img/MarchandImages/${this.formCopy.attributes.imgurl}`;
    },
    openImagePopup() {
      this.imageSrc = `/img/MarchandImages/${this.formCopy.attributes.imgurl}`;
      this.imageDialogVisible = true;
    },

    hideImageDialog() {
      this.imageDialogVisible = false;
    },
    formatPrice(price) {
      // Convert the price to a number and add commas for thousand separators
      const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return `${formattedPrice},-`;
    },

    async fillForm() {
      try {
        let formPdfBytes;

        formPdfBytes = await fetch(pdfForm).then(res => res.arrayBuffer());

        const pdfDoc = await PDFDocument.load(formPdfBytes);
        const formPdf = pdfDoc.getForm();

        const idText = JSON.stringify(this.form.id)

        const tglPem = this.form.attributes.tglPemasang
        const [year, month, day] = tglPem.split('-');

        const tglPem2 = this.form.attributes.tglPemutusan
        const [year2, month2, day2] = tglPem2.split('-');

        const tglPem3 = this.form.attributes.tglPrint
        const [year3, month3, day3] = tglPem3.split('-');

        const alamat = this.form.attributes.alamatpemasang
        const tagihanAlamat = this.form.attributes.alamattagihan

        const chunkSize = 30;
        let alamat1, alamat2;
        if (alamat.length <= chunkSize) {
          // If the address is 30 characters or less, store the entire address in alamat1
          alamat1 = alamat;
          alamat2 = '';  // Empty for cases where the second chunk is not needed
        } else {
          alamat1 = alamat.substr(0, chunkSize);
          alamat2 = alamat.substr(chunkSize, chunkSize);
        }

        let alamatTagihan, alamatTagihan1;
        if (tagihanAlamat.length <= chunkSize) {
          // If the address is 30 characters or less, store the entire address in alamat1
          alamatTagihan = tagihanAlamat;
          alamatTagihan1 = '';  // Empty for cases where the second chunk is not needed
        } else {
          alamatTagihan = tagihanAlamat.substr(0, chunkSize);
          alamatTagihan1 = tagihanAlamat.substr(chunkSize, chunkSize);
        }


        //Get the Text Fields in the Form

        formPdf.getTextField('no').setText(idText)
        formPdf.getTextField('namalengkap').setText(this.form.attributes.namalengkap.toUpperCase() ?? '')
        formPdf.getTextField('ktp').setText(this.form.attributes.notelp.toUpperCase() ?? '')
        formPdf.getTextField('hp').setText(this.form.attributes.noktp.toUpperCase() ?? '')
        formPdf.getTextField('alamat').setText(alamat1.toUpperCase() ?? '')
        formPdf.getTextField('alamat1').setText(alamat2.toUpperCase() ?? '')
        formPdf.getTextField('alamat2').setText(alamatTagihan.toUpperCase() ?? '')
        formPdf.getTextField('alamat3').setText(alamatTagihan1.toUpperCase() ?? '')
        formPdf.getTextField('kel').setText(this.form.attributes.kelpemasang.toUpperCase() ?? '')
        formPdf.getTextField('kec').setText(this.form.attributes.kecpemasang.toUpperCase() ?? '')
        formPdf.getTextField('pos').setText(this.form.attributes.pospemasang.toUpperCase() ?? '')
        formPdf.getTextField('kel2').setText(this.form.attributes.keltagihan.toUpperCase() ?? '')
        formPdf.getTextField('kec2').setText(this.form.attributes.kectagihan.toUpperCase() ?? '')
        formPdf.getTextField('pos2').setText(this.form.attributes.postagihan.toUpperCase() ?? '')
        formPdf.getTextField('email').setText(this.form.attributes.email.toUpperCase() ?? '')
        const install = formPdf.getCheckBox('check')
        const premie10 = formPdf.getCheckBox('check1')
        const premie15 = formPdf.getCheckBox('check2')
        formPdf.getTextField('install').setText('150,000,-')
        const harga1 = formPdf.getTextField('premie10')
        const harga2 = formPdf.getTextField('premie15')
        formPdf.getTextField('modem').setText(this.form.attributes.merekModem.toUpperCase() ?? '')
        formPdf.getTextField('serial').setText(this.form.attributes.serialnumber.toUpperCase() ?? '')
        formPdf.getTextField('installer').setText(this.form.attributes.namainstaller.toUpperCase() ?? '')
        formPdf.getTextField('year').setText(year ?? '')
        formPdf.getTextField('month').setText(month ?? '')
        formPdf.getTextField('day').setText(day ?? '')
        formPdf.getTextField('installer1').setText(this.form.attributes.namainstallerpemutusan.toUpperCase() ?? '')
        formPdf.getTextField('year2').setText(year2 ?? '')
        formPdf.getTextField('month2').setText(month2 ?? '')
        formPdf.getTextField('day2').setText(day2 ?? '')
        formPdf.getTextField('year3').setText(year3 ?? '')
        formPdf.getTextField('month3').setText(month3 ?? '')
        formPdf.getTextField('day3').setText(day3 ?? '')
        formPdf.getTextField('bintaro').setText('BINTARO')
        formPdf.getTextField('tenant').setText(this.form.attributes.tenantrelation.toUpperCase() ?? '')
        formPdf.getTextField('it').setText(this.form.attributes.it.toUpperCase() ?? '')
        formPdf.getTextField('management').setText(this.form.attributes.management.toUpperCase() ?? '')
        formPdf.getTextField('namalengkap1').setText(this.form.attributes.namalengkap.toUpperCase() ?? '')




        // Put Values


        const formattedPrice = this.formatPrice(this.form.attributes.internetID.data.attributes.price);

        if (this.form.attributes.instalasi == true) {
          install.check()
        }

        if (this.form.attributes.internetID.data.id == '1') {
          premie10.check()
          harga1.setText(formattedPrice)
        } else {
          premie15.check()
          harga2.setText(formattedPrice)
        }




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
        if (this.formCopy.attributes.tglPemasang) {
          const adjustedDate = new Date(this.formCopy.attributes.tglPemasang);
          adjustedDate.setHours(adjustedDate.getHours() + 7); // Add a day
          this.formCopy.attributes.tglPemasang = adjustedDate.toISOString();
        }
        if (this.formCopy.attributes.tglPemutusan) {
          var adjustedDate1 = new Date(this.formCopy.attributes.tglPemutusan);
          adjustedDate1.setHours(adjustedDate1.getHours() + 7); // Add a day
          this.formCopy.attributes.tglPemutusan = adjustedDate1.toISOString();
        }
        if (this.formCopy.attributes.tglPrint) {
          var adjustedDate2 = new Date(this.formCopy.attributes.tglPrint);
          adjustedDate2.setHours(adjustedDate2.getHours() + 7); // Add a day
          this.formCopy.attributes.tglPrint = adjustedDate2.toISOString();
        }
        const selectedInternetID = this.formCopy.attributes.internetID.data.id;
        let data = {
          ...this.formCopy.attributes,  // Include existing attributes
          internetID: {
            id: selectedInternetID // Include the selected Internet Rate ID
          }
        };
        let idForm = this.formCopy.id;
        let res = null;

        let requestData = {
          data: data
        };
        res = (await backend.internetMarchand.updateByID(idForm, requestData));


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
    computedPrice: {
      get() {
        // Check if formCopy.attributes.internetID and data are not null before accessing attributes.price
        if (this.form.attributes.internetID && this.form.attributes.internetID.data) {
          return this.formCopy.attributes.internetID.data.attributes.price;
        } else {
          return null; // Return null if any of the properties are null
        }
      },
      set(value) {
        // Check if formCopy.attributes.internetID is null before attempting to set the price
        if (this.formCopy.attributes.internetID) {
          // Handle null values and set accordingly
          this.formCopy.attributes.internetID.data.attributes.price = value === null ? null : value;
        }
      }
    }
  },
};
</script>
