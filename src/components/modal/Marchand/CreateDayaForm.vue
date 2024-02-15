<template>
  <Dialog :visible="displayModal" :modal="true" :closable="false" style="width: 90vh">
    <template #header>
      <h3 class="p-m-0"><span class="text-ggi-red">Edit Customer Form Number # {{ form.id }}</span></h3>
      <Button label="Close" icon="pi pi-times" class="button-rounded button-text ml-auto button-secondary"
        @click="handleClose" />
    </template>

    <form ref="form">
      <div class="formgrid grid">
        <div class='field col-12 md:col-10'>
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Data Pelanggan</h3>
        </div>
        <div class="field col-12 md:col-2">
          <label><span>Status</span></label>
          <Dropdown v-model="formCopy.attributes.status" :options="statusoptions"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
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
        <div class="field col-12 md:col-4">
          <label for="kelpemasang">Kelurahan Pemasang</label>
          <Textarea id="kelpemasang" autoResize rows="1" v-model="formCopy.attributes.kelpemasang"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label for="kecpemasang">Kecamatan Pemasang</label>
          <Textarea id="kecpemasang" autoResize rows="1" v-model="formCopy.attributes.kecpemasang"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label for="pospemasang">POS Pemasang</label>
          <InputText id="pospemasang" v-model="formCopy.attributes.pospemasang"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12">
          <label for="alamattagihan">Alamat Tagihan</label>
          <Textarea id="alamattagihan" autoResize rows="2" v-model="formCopy.attributes.alamattagihan"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label for="keltagihan">Kelurahan Tagihan</label>
          <Textarea id="keltagihan" autoResize rows="1" v-model="formCopy.attributes.keltagihan"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label for="kectagihan">Kecamatan Tagihan</label>
          <Textarea id="kectagihan" autoResize rows="1" v-model="formCopy.attributes.kectagihan"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label for="postagihan">POS Tagihan</label>
          <InputText id="postagihan" v-model="formCopy.attributes.postagihan"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class='field col-12 md:col-12'>
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Daya Listrik</h3>
        </div>
        <div class='field col-12 md:col-3'>
          <h3
            class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Daya Lama (VA)</h3>
        </div>
        <div class="field col-12 md:col-3">
          <label for="norek">Phase</label>
          <InputNumber v-model="formCopy.attributes.dlPhase"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label for="norek">Amp</label>
          <InputNumber v-model="formCopy.attributes.dlAmp"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label for="norek">VA</label>
          <InputNumber v-model="formCopy.attributes.dlVA"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class='field col-12 md:col-3'>
          <h3
            class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Daya Baru (VA)</h3>
        </div>
        <div class="field col-12 md:col-3">
          <label for="norek">Phase</label>
          <InputNumber v-model="formCopy.attributes.dbPhase"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label for="norek">Amp</label>
          <InputNumber v-model="formCopy.attributes.dbAmp"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label for="norek">VA</label>
          <InputNumber v-model="formCopy.attributes.dbVA"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12">
          <label for="norek">Biaya</label>
          <Textarea autoResize rows="2" v-model="formCopy.attributes.biaya"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class='field col-12 md:col-12'>
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Lokasi</h3>
        </div>
        <div class="field col-12 md:col-4">
          <label for="merekModem">Nama Pemilik / Penyewa</label>
          <InputText id="merekModem" v-model="formCopy.attributes.namapemilik"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label for="serialnumber">Unit (Lantai, Blok & No)</label>
          <InputText id="serialnumber" v-model="formCopy.attributes.unitlantaiblok"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label for="serialnumber">Brand</label>
          <InputText id="serialnumber" v-model="formCopy.attributes.brand"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class='field col-12 md:col-12'>
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Infomrasi Penambahan Daya</h3>
        </div>
        <div class="field col-12 md:col-6">
          <label for="namainstaller">Nama Installer</label>
          <InputText id="namainstaller" v-model="formCopy.attributes.namainstaller"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="serialnumber">Tanggal Pemasang</label>
          <Calendar id="serialnumber" v-model="formCopy.attributes.tglPenambahan" showButtonBar showIcon dateFormat="yy-mm-dd"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class='field col-12 md:col-12'>
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Infomrasi Pemutusan</h3>
        </div>
        <div class="field col-12 md:col-6">
          <label for="namainstaller">Nama Installer</label>
          <InputText id="namainstaller" v-model="formCopy.attributes.namainstallerpemutusan"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="serialnumber">Tanggal Pemutusan</label>
          <Calendar id="serialnumber" v-model="formCopy.attributes.tglPemutusan" showButtonBar showIcon dateFormat="yy-mm-dd"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class='field col-12 md:col-12'>
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Informasi Printing</h3>
        </div>
        <div class="field col-12 md:col-3">
          <label for="namainstaller">Nama Tenant Relation</label>
          <InputText id="namainstaller" v-model="formCopy.attributes.tenant"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label for="namainstaller">Nama IT</label>
          <InputText id="namainstaller" v-model="formCopy.attributes.it"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label for="namainstaller">Nama Management</label>
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
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import { PDFDocument } from 'pdf-lib'
import pdfForm from '@/assets/pdfMarchand/DayaMarchandForm.pdf'

let backend = new Backend();

export default {
  components: { Dialog, Button, ConfirmDialog, InputText, Textarea, Calendar, InputNumber, Dropdown },
  props: ['displayModal', 'form', 'refreshList', 'action'],
  res: null,
  data() {
    return {
      options: ['False', 'True'],
      statusoptions: ['Batal', 'Aktif'],
      imageDialogVisible: false,
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
    async fillForm() {
      try {
        let formPdfBytes;

        formPdfBytes = await fetch(pdfForm).then(res => res.arrayBuffer());

        const pdfDoc = await PDFDocument.load(formPdfBytes);
        const formPdf = pdfDoc.getForm();

        const idText = JSON.stringify(this.form.id)

        const tglPem = this.form.attributes.tglPenambahan
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
        const biayatext = this.form.attributes.biaya
        const chunkSize1 = 23;
        let biaya1, biaya2;
        if (biayatext.length <= chunkSize1) {
          // If the address is 30 characters or less, store the entire address in alamat1
          biaya1 = biayatext;
          biaya2 = '';  // Empty for cases where the second chunk is not needed
        } else {
          biaya1 = biayatext.substr(0, chunkSize1);
          biaya2 = biayatext.substr(chunkSize1, chunkSize1);
        }
        //Get the Text Fields in the Form

        formPdf.getTextField('no').setText(idText)
        formPdf.getTextField('namalengkap').setText(this.form.attributes.namalengkap.toUpperCase() ?? '')
        formPdf.getTextField('ktp').setText(this.form.attributes.notelp.toUpperCase() ?? '')
        formPdf.getTextField('notelp').setText(this.form.attributes.noktp.toUpperCase() ?? '')
        formPdf.getTextField('alamat').setText(alamat1.toUpperCase() ?? '')
        formPdf.getTextField('alamat1').setText(alamat2.toUpperCase())
        formPdf.getTextField('alamat2').setText(alamatTagihan.toUpperCase() ?? '')
        formPdf.getTextField('alamat3').setText(alamatTagihan1.toUpperCase() ?? '')
        formPdf.getTextField('kel').setText(this.form.attributes.kelpemasang.toUpperCase() ?? '')
        formPdf.getTextField('kec').setText(this.form.attributes.kecpemasang.toUpperCase() ?? '')
        formPdf.getTextField('pos').setText(this.form.attributes.pospemasang.toUpperCase() ?? '')
        formPdf.getTextField('kel1').setText(this.form.attributes.keltagihan.toUpperCase() ?? '')
        formPdf.getTextField('kec1').setText(this.form.attributes.kectagihan.toUpperCase() ?? '')
        formPdf.getTextField('pos1').setText(this.form.attributes.postagihan.toUpperCase() ?? '')
        formPdf.getTextField('email').setText(this.form.attributes.email.toUpperCase() ?? '')
        formPdf.getTextField('installer').setText(this.form.attributes.namainstaller.toUpperCase() ?? '')

        formPdf.getTextField('phase').setText(this.form.attributes.dlPhase.toUpperCase() ?? '')
        formPdf.getTextField('amp').setText(this.form.attributes.dlAmp.toUpperCase() ?? '')
        formPdf.getTextField('va').setText(this.form.attributes.dlVA.toUpperCase() ?? '')
        formPdf.getTextField('phase1').setText(this.form.attributes.dbPhase.toUpperCase() ?? '')
        formPdf.getTextField('amp1').setText(this.form.attributes.dbAmp.toUpperCase() ?? '')
        formPdf.getTextField('va1').setText(this.form.attributes.dbVA.toUpperCase() ?? '')
        formPdf.getTextField('biaya').setText(biaya1.toUpperCase() ?? '')
        formPdf.getTextField('biaya1').setText(biaya2.toUpperCase() ?? '')

        formPdf.getTextField('year').setText(year ?? '')
        formPdf.getTextField('bln').setText(month ?? '')
        formPdf.getTextField('day').setText(day ?? '')
        formPdf.getTextField('installer1').setText(this.form.attributes.namainstallerpemutusan.toUpperCase() ?? '')

        formPdf.getTextField('year1').setText(year2 ?? '')
        formPdf.getTextField('bln1').setText(month2 ?? '')
        formPdf.getTextField('day1').setText(day2 ?? '')

        formPdf.getTextField('year2').setText(year3 ?? '')
        formPdf.getTextField('bln2').setText(month3 ?? '')
        formPdf.getTextField('day2').setText(day3 ?? '')

        formPdf.getTextField('bintaro').setText('BINTARO')
        formPdf.getTextField('tenant').setText(this.form.attributes.tenant.toUpperCase() ?? '')
        formPdf.getTextField('it').setText(this.form.attributes.it.toUpperCase() ?? '')
        formPdf.getTextField('management').setText(this.form.attributes.management.toUpperCase() ?? '')
        formPdf.getTextField('namapemilik1').setText(this.form.attributes.namapemilik.toUpperCase() ?? '')

        formPdf.getTextField('namapemilik').setText(this.form.attributes.namapemilik.toUpperCase() ?? '')
        formPdf.getTextField('lokasiunit').setText(this.form.attributes.unitlantaiblok.toUpperCase() ?? '')
        formPdf.getTextField('lokasibrand').setText(this.form.attributes.brand.toUpperCase() ?? '')

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
        if (this.formCopy.attributes.tglPenambahan) {
          const adjustedDate = new Date(this.formCopy.attributes.tglPenambahan);
          adjustedDate.setHours(adjustedDate.getHours() + 7); // Add a day
          this.formCopy.attributes.tglPenambahan = adjustedDate.toISOString();
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
        let data = {
          ...this.formCopy.attributes,  // Include existing attributes
        };
        let idForm = this.formCopy.id;
        let res = null;
        let requestData = {
          data: data
        };
        res = (await backend.dayaMarchand.updateByID(idForm, requestData));

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
  