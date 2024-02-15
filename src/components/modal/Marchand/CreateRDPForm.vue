<template>
  <Dialog :visible="displayModal" :modal="true" :closable="false" style="width: 90vh">
    <template #header>
      <h3 class="p-m-0"><span class="text-ggi-red">Edit Customer Form Number # {{ form.id }}</span></h3>
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
        <div class='field col-12 md:col-12'>
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Informasi Data Konsumen</h3>
        </div>
        <div class="field col-12 md:col-4">
          <label><span>Nama:</span></label>
          <InputText id="namapemohon" v-model="formCopy.attributes.name"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label>Status Customer</label>
          <InputText id="statuscust" v-model="formCopy.attributes.statuscust"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label for="ktpnpwp">KTP / NPWP</label>
          <InputNumber v-model="formCopy.attributes.ktpnpwp" :useGrouping="false"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12">
          <label>Alamat</label>
          <Textarea id="alamatpemasang" autoResize rows="1" v-model="formCopy.attributes.alamat"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label>No Telp/HP</label>
          <InputNumber v-model="formCopy.attributes.notelp" :useGrouping="false"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label>E-mail</label>
          <InputText id="email" v-model="formCopy.attributes.email"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class='field col-12 md:col-12'>
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Informasi Unit</h3>
        </div>
        <div class="field col-12 md:col-4">
          <label>Type Unit</label>
          <Dropdown id="typeunit" v-model="formCopy.attributes.typeunit" :options="typeOptions"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label>Lantai/Blok/No. Unit</label>
          <InputText id="nounit" v-model="formCopy.attributes.nounit"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label>Luas Unit</label>
          <InputText id="luastanah" v-model="formCopy.attributes.luasunit"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class='field col-12 md:col-12'>
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Tujuan Transfer</h3>
        </div>
        <div class="field col-12 md:col-6">
          <label>Nama Penerima</label>
          <InputText id="luastanah" v-model="formCopy.attributes.namapenerima"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label>Bank</label>
          <InputText id="luastanah" v-model="formCopy.attributes.bank"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="norek">No. Rek</label>
          <InputNumber v-model="formCopy.attributes.norek" :useGrouping="false"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label>Kantor Cabang</label>
          <InputText id="kantorcabang" v-model="formCopy.attributes.kantorcabang"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class='field col-12 md:col-12'>
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Admin Input</h3>
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            PERHITUNGAN REFUND SECURITY DEPOSIT FITOUT :</h3>
        </div>
        <div class="field col-12 md:col-6">
          <label for="norek">Pengembalian Sisa Security Deposit Sewa</label>
          <InputNumber v-model="formCopy.attributes.sisasecurity" mode="currency" currency="IDR"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label>Terbilang</label>
          <InputText id="terbilang" v-model="angkaTerb" disabled
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class='field col-12 md:col-12'>
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Penjelasan Pengajuan Refund Security Deposit Fitout:</h3>
          <Textarea id="alamatpemasang" autoResize rows="2" v-model="formCopy.attributes.penjelasan"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label>Security Deposit Fitout</label>
          <InputNumber v-model="formCopy.attributes.securitydeposit" mode="currency" currency="IDR"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label>Outstanding Tagihan Unit</label>
          <InputNumber v-model="formCopy.attributes.tagihanunit" mode="currency" currency="IDR"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-5">
          <label>Total Pengembalian Security Deposit Fitout</label>
          <InputNumber v-model="formCopy.attributes.totalpengambilan" mode="currency" currency="IDR"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12 card flex flex-wrap justify-content-center gap-3">
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Syarat / Dokumen Pengajuan Refund Security Deposit Sewa Checklist :</h3>
          <div class="flex align-items-center">
            <Checkbox v-model="formCopy.attributes.bukti" :binary="true" />
            <label for="ingredient1" class="ml-1"> Bukti Transfer</label>
          </div>
          <div class="flex align-items-center">
            <Checkbox v-model="formCopy.attributes.tandaterima" :binary="true" />
            <label for="ingredient2" class="ml-1"> Tanda Terima / Kwitansi (Asli)</label>
          </div>
          <div class="flex align-items-center">
            <Checkbox v-model="formCopy.attributes.kelengkapandata" :binary="true" />
            <label for="ingredient3" class="ml-1"> Kelengkapan Data Konsumer (KTP, NPWP, Fotocopy No. Rekening
              Bank)</label>
          </div>
        </div>
        <div class="field col-12 md:col-6">
          <label>Admin & Finance</label>
          <InputText v-model="formCopy.attributes.admin"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label>Direksi</label>
          <InputText v-model="formCopy.attributes.direksi"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
      </div>
      <div class="flex justify-content-center gap-3">
          <Button label="KTP" icon="pi pi-image" @click="viewKTP('ktp')" />
          <Button label="NPWP" icon="pi pi-image" @click="viewKTP('npwp')" />
          <Button label="Bukti Transfer Deposit" icon="pi pi-image" @click="viewKTP('buktitransfer')" />
          <Button label="Foto Buku Rekening Bank" icon="pi pi-image" @click="viewKTP('bukurek')" />
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
import Dropdown from 'primevue/dropdown';
import Checkbox from 'primevue/checkbox';
import InputNumber from 'primevue/inputnumber';
import { PDFDocument } from 'pdf-lib'
import angkaTerbilang from '@develoka/angka-terbilang-js';
import pdfForm from '@/assets/pdfMarchand/RDPMarchand.pdf'

let backend = new Backend();

export default {
  components: { Dialog, Button, ConfirmDialog, InputText, Textarea, InputNumber, Dropdown, Checkbox },
  props: ['displayModal', 'form', 'refreshList', 'action'],
  res: null,
  data() {
    return {
      typeOptions: ['Toko', 'Kios'],
      statusoptions: ['Batal', 'Aktif'],
      imageDialogVisible: false,
      imageSrc: '',
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
      this.imageSrc = `/img/MarchandImages/${imageUrl}`;
      this.imageDialogVisible = true;
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
        printWindow.document.write('<style>@media print { img { width: 50%; height: auto; } }</style>');
        printWindow.document.write('</head><body>');
        printWindow.document.write(`<img src="${dataURL}" onload="window.print();">`);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
      };

      img.src = imageUrl; // Use the provided imageUrl to load the image
    },
    formatPrice(price) {
      // Convert the price to a number and add commas for thousand separators
      const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return `Rp ${formattedPrice},-`;
    },

    async fillForm() {
      try {
        let formPdfBytes;
        formPdfBytes = await fetch(pdfForm).then(res => res.arrayBuffer());
        const pdfDoc = await PDFDocument.load(formPdfBytes);
        const formPdf = pdfDoc.getForm()

        const alamatDivide = this.form.attributes.alamat
        const chunkSize = 50;
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


        formPdf.getTextField('alamat').setText(alamat1)
        formPdf.getTextField('alamat1').setText(alamat2)
        formPdf.getTextField('alamat2').setText(alamat3)
        formPdf.getTextField('name').setText(this.form.attributes.name ?? '')
        formPdf.getTextField('status').setText(this.form.attributes.statuscust ?? '')
        formPdf.getTextField('ktp').setText(this.form.attributes.ktpnpwp ?? '')
        formPdf.getTextField('notelp').setText(this.form.attributes.notelp ?? '')
        formPdf.getTextField('email').setText(this.form.attributes.email ?? '')
        formPdf.getTextField('type').setText(this.form.attributes.typeunit ?? '')
        formPdf.getTextField('nounit').setText(this.form.attributes.nounit ?? '')
        formPdf.getTextField('luas').setText(this.form.attributes.luasunit ?? '')
        formPdf.getTextField('pengambilan').setText(this.formatPrice(this.form.attributes.sisasecurity ?? ''))
        formPdf.getTextField('terbilang').setText(angkaTerbilang(this.form.attributes.sisasecurity ?? '') + ' rupiah')
        formPdf.getTextField('penjelasan').setText(this.form.attributes.penjelasan ?? '')
        formPdf.getTextField('security').setText(this.formatPrice(this.form.attributes.securitydeposit ?? ''))
        formPdf.getTextField('outstanding').setText(this.formatPrice(this.form.attributes.tagihanunit ?? ''))
        formPdf.getTextField('total').setText(this.formatPrice(this.form.attributes.totalpengambilan ?? ''))
        formPdf.getTextField('namapenerima').setText(this.form.attributes.namapenerima ?? '')
        formPdf.getTextField('bank').setText(this.form.attributes.bank ?? '')
        formPdf.getTextField('norek').setText(this.form.attributes.norek ?? '')
        formPdf.getTextField('kantor').setText(this.form.attributes.kantorcabang ?? '')

        formPdf.getTextField('pemohon').setText(this.form.attributes.name ?? '')
        formPdf.getTextField('admin').setText(this.form.attributes.admin ?? '')
        formPdf.getTextField('direksi').setText(this.form.attributes.direksi ?? '')
        const check1 = formPdf.getCheckBox('bukti')
        const check2 = formPdf.getCheckBox('tandaterima')
        const check3 = formPdf.getCheckBox('kelengkapandata')

        if (this.form.attributes.bukti == true) {
          check1.check()
        }
        if (this.form.attributes.tandaterima == true) {
          check2.check()
        }
        if (this.form.attributes.kelengkapandata == true) {
          check3.check()
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
        let data = {
          ...this.formCopy.attributes,  // Include existing attributes
        };
        let idForm = this.formCopy.id;
        let res = null;


        let requestData = {
          data: data
        };
        res = (await backend.rdpMarchand.updateByID(idForm, requestData));

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
    angkaTerb() {
      const terbilang = angkaTerbilang(this.formCopy.attributes.sisasecurity);
      return terbilang;
    }
  },
};
</script>
  