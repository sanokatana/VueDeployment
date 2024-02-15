<template>
  <Dialog :visible="displayModal" :modal="true" :closable="false" style="width: 90vh">
    <template #header>
      <h3 class="p-m-0"><span class="text-ggi-red">Edit Customer Form Izin Kerja Number # {{ form.id }}</span></h3>
      <Button label="Close" icon="pi pi-times" class="button-rounded button-text ml-auto button-secondary"
        @click="handleClose" />
    </template>

    <form ref="form">
      <div class="formgrid grid">
        <div class="field col-12 md:col-12">
          <label><span>Status</span></label>
          <Dropdown v-model="formCopy.attributes.status" :options="statusoptions"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label><span>Nama Pemohon:</span></label>
          <InputText id="namapemohon" v-model="formCopy.attributes.namapemohon"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="namapemilikunit">Nama Pemilik Unit</label>
          <InputText id="namapemilikunit" v-model="formCopy.attributes.namapemilikunit"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="statuscust">Status Cust</label>
          <Dropdown id="statuscust" v-model="formCopy.attributes.statuscust" :options="statuscustOptions"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="statuscust">Lain Lain (Kalau Ada)</label>
          <InputText id="statuscust" v-model="formCopy.attributes.lainlainstatus"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="noktp">Luas Tanah / Bangunan</label>
          <InputText id="noktp" v-model="formCopy.attributes.luastanah"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="noktp">Cluster / Blok / No.Unit</label>
          <InputText id="noktp" v-model="formCopy.attributes.clusterblok"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="noktp">NoTelp/HP</label>
          <InputText id="noktp" v-model="formCopy.attributes.notelp"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="tglPelaksanaan">Tanggal Pelaksanaan</label>
          <Calendar id="tglPelaksanaan" v-model="formCopy.attributes.tglPelaksanaan" showButtonBar showIcon
            dateFormat="yy-mm-dd"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <h3
          class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
          Untuk Keperluan :</h3>
        <div class="field col-12 md:col-12">
          <label for="alamatpemasang">Uraian Pekerjaan</label>
          <Textarea id="alamatpemasang" autoResize rows="4" v-model="formCopy.attributes.uraianpekerjaan"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <h3
          class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
          Non PERBAIKAN/RENOVASI :</h3>
        <div class="field col-12 md:col-4">
          <label for="noktp">Ijin Lintas Kendaraan Berat, antara lain : </label>
          <Dropdown id="noktp" v-model="formCopy.attributes.ijinkendaraan" :options="ijinKendaraanOptions"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label for="noktp">Lain Lain (Kalau Ada)</label>
          <InputText id="noktp" v-model="formCopy.attributes.lainlainkendaraan"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label for="alamatpemasang">Jumlah Kendaraan </label>
          <InputNumber v-model="formCopy.attributes.jumlahkendaraan"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="noktp">Izin Acara</label>
          <InputText id="noktp" v-model="formCopy.attributes.ijinacara"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="noktp">Tenda/Panggung Ukuran</label>
          <InputText id="noktp" v-model="formCopy.attributes.ukuranpanggung"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12">
          <label for="alamatpemasang">Ijin Keterangan Penghuni : Untuk Keperluan</label>
          <Textarea id="alamatpemasang" autoResize rows="1" v-model="formCopy.attributes.untukkeperluan"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        <div class="field col-12 md:col-6 flex flex-wrap justify-content-center">
          <h3
            class="justify-item-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Klasifikasi Pekerjaan (diisi oleh Pengelola/Pengembang) :</h3>
        </div>
        <div class="field col-12 md:col-3 flex flex-wrap justify-content-center">
          <label>Sedang</label>
          <Checkbox v-model="formCopy.attributes.klaSedang" :binary="true"
            class="justify-content-center text-base text-color surface-overlay  surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3 flex flex-wrap justify-content-center">
          <label>Besar</label>
          <Checkbox v-model="formCopy.attributes.klaBesar" :binary="true"
            class="justify-content-center text-base text-color surface-overlay  surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <h3
          class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
          DAFTAR CHECKLIST: (DIISI PETUGAS/PENGELOLA)</h3>
        <div class="field col-12 md:col-6">
          <Checkbox v-model="formCopy.attributes.ktp" :binary="true" />
          <label class="ml-1"> KTP/KK/KITAS/PASSPORT </label>
        </div>
        <div class="field col-12 md:col-6">
          <Checkbox v-model="formCopy.attributes.bast" :binary="true" />
          <label class="ml-1"> BAST (Berita Acara Serah Terima) </label>
        </div>
        <div class="field col-12 md:col-6 ">
          <Checkbox v-model="formCopy.attributes.p3u" :binary="true" />
          <label class="ml-1"> P3U/AJB/SERTIFIKAT </label>
        </div>

        <div class="field col-12 md:col-6 ">
          <Checkbox v-model="formCopy.attributes.gambarpelaksanaan" :binary="true" />
          <label class="ml-1"> Gambar Pelaksanaan/Desain Eksisting dan Rencana </label>
        </div>
        <div class="field col-12 md:col-6">
          <Checkbox v-model="formCopy.attributes.perjanjiansewa" :binary="true" />
          <label class="ml-1"> Perjanjian Sewa Menyewa </label>
        </div>
        <div class="field col-12 md:col-6 ">
          <Checkbox v-model="formCopy.attributes.fototampak" :binary="true" />
          <label class="ml-1"> Foto Tampak Depan Rumah Tetannga Kanan </label>
        </div>
        <div class="field col-12 md:col-6">
          <Checkbox v-model="formCopy.attributes.gambardepan" :binary="true" />
          <label class="ml-1"> Foto/Gambar Tampak Depan & Foto Taman Depan </label>
        </div>
        <div class="field col-12 md:col-6  ">
          <Checkbox v-model="formCopy.attributes.suratpernyataan" :binary="true" />
          <label class="ml-1"> Surat Pernyataan Pemohon (Kerja Besar) </label>
        </div>

        <div class="field col-12 md:col-6">
          <Checkbox v-model="formCopy.attributes.suratkuasa" :binary="true" />
          <label class="ml-1"> Surat Kuasa dari Pemilik / Peneywa </label>
        </div>
        --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        <div class="field col-12 md:col-12 flex flex-wrap justify-content-center">
          <h3
            class="justify-item-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            IPL : Lunas s/d Bulan dan Tahun</h3>
        </div>
        <div class="field col-12 md:col-6">
          <label for="noktp">Bulan</label>
          <InputText id="noktp" v-model="formCopy.attributes.bulan"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="noktp">Tahun</label>
          <InputText id="noktp" v-model="formCopy.attributes.tahun"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="alamatpemasang">Adm : Rp. </label>
          <InputNumber v-model="formCopy.attributes.adm" mode="currency" currency="IDR"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="alamatpemasang">Jaminan / Deposit : Rp.</label>
          <InputNumber v-model="formCopy.attributes.jaminan" mode="currency" currency="IDR"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label for="noktp">Bank</label>
          <InputText id="noktp" v-model="formCopy.attributes.bank"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label for="noktp">No. Rekening</label>
          <InputNumber id="noktp" v-model="formCopy.attributes.norek" :useGrouping="false"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label for="noktp">Cabang</label>
          <InputText id="noktp" v-model="formCopy.attributes.cabang"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12">
          <label for="noktp">No. VA</label>
          <InputNumber id="noktp" v-model="formCopy.attributes.nova" :useGrouping="false"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>

        <div class="field col-12 md:col-6">
          <label for="alamatpemasang">Tgl Print</label>
          <Calendar id="alamatpemasang" v-model="formCopy.attributes.tglPrint" showButtonBar showIcon
            dateFormat="yy-mm-dd"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label>Nama Badan Pengelola/Estate Management</label>
          <InputText v-model="formCopy.attributes.badanpengelola"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="flex flex-row flex-wrap justify-content-center gap-3">
          <Button label="KTP Pemilik" icon="pi pi-image" @click="viewKTP('ktppemilik')" />
          <Button label="KTP Mandor" icon="pi pi-image" @click="viewKTP('ktpmandor')" />
          <Button label="KTP Pekerja 1" icon="pi pi-image" @click="viewKTP('ktppekerja1')" />
          <Button label="KTP Pekerja 2" icon="pi pi-image" @click="viewKTP('ktppekerja2')" />
          <Button label="KTP Pekerja 3" icon="pi pi-image" @click="viewKTP('ktppekerja3')" />
          <Button label="Gambar Pelaksanaan" icon="pi pi-image" @click="viewKTP('gambarpelak')" />
          <Button label="Gambar Rencana" icon="pi pi-image" @click="viewKTP('gambarrencana')" />
          <Button label="Photo Deposit" icon="pi pi-image" @click="viewKTP('photodp')" />
        </div>
      </div>
    </form>

    <template #footer>
      <div class="flex justify-content-between flex-wrap">
        <div class="flex">
          <Button label="Print" icon="pi pi-print" @click="fillForm()" />
          <Button label="Print Semua KTP" icon="pi pi-print" class="button-rounded button-text ml-auto button-secondary"
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
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import Checkbox from 'primevue/checkbox';
import { PDFDocument } from 'pdf-lib'
import InputNumber from 'primevue/inputnumber';
import pdfForm from '@/assets/pdf/FormIzinMazenta.pdf'
import pdfFormVA from '@/assets/pdf/FormIzinMazentaNoVA.pdf'
import pdfFormBanara from '@/assets/pdf/FormIzinBanara.pdf'
import pdfFormBanaraVA from '@/assets/pdf/FormIzinBanaraNoVA.pdf'
import pdfFormNaraya from '@/assets/pdf/FormIzinNaraya.pdf'
import pdfFormNarayaVA from '@/assets/pdf/FormIzinNarayaNoVA.pdf'

let backend = new Backend();

export default {
  components: { Dialog, Button, ConfirmDialog, InputText, Textarea, Calendar, Checkbox, InputNumber, Dropdown },
  props: ['displayModal', 'form', 'refreshList', 'action'],
  res: null,
  data() {
    return {
      ijinKendaraanOptions: ['Truck Engkel', 'Truk Pompa', 'Mini Molen', 'Lain-Lain'],
      statuscustOptions: ['Pemilik', 'Penyewa', 'Kontraktor', 'Lain-Lain'],
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
        const year = dateParts[0].substring(2); // Extract last two characters of the year
        return `${day} ${month} ${year}`;
      }

      // Return the original date string if it doesn't match the expected format
      return dateString;
    },

    changeDataFormat(dateString) {
      const parts = dateString.split('-');
      const year = parts[0];
      const month = parts[1];
      const day = parts[2];
      return `${day}-${month}-${year}`;
    },

    formatPrice(price) {
      // Convert the price to a number and add commas for thousand separators
      const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      const formattedPrice1 = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return `${formattedPrice},-`, `${formattedPrice1},-`;
    },

    async fillForm() {
      try {
        let formPdfBytes;
        let pdfDoc = null
        let project = this.formCopy.attributes.project
        let role = store.getters.getRole;
        if ((role == 'mazentaAdmin' || role === 'superadmin') && project === 1) {
          if (this.form.attributes.norek) {
            formPdfBytes = await fetch(pdfForm).then(res => res.arrayBuffer());
            pdfDoc = await PDFDocument.load(formPdfBytes);
          } else {
            formPdfBytes = await fetch(pdfFormVA).then(res => res.arrayBuffer());
            pdfDoc = await PDFDocument.load(formPdfBytes);
          }
        } else if ((role == 'banaraAdmin' || role === 'superadmin') && project === 2) {
          if (this.form.attributes.norek) {
            formPdfBytes = await fetch(pdfFormBanara).then(res => res.arrayBuffer());
            pdfDoc = await PDFDocument.load(formPdfBytes);
          } else {
            formPdfBytes = await fetch(pdfFormBanaraVA).then(res => res.arrayBuffer());
            pdfDoc = await PDFDocument.load(formPdfBytes);
          }
        } else if ((role === 'narayaAdmin' || role === 'superadmin') && project === 3) {
          if (this.form.attributes.norek) {
            formPdfBytes = await fetch(pdfFormNaraya).then(res => res.arrayBuffer());
            pdfDoc = await PDFDocument.load(formPdfBytes);
          } else {
            formPdfBytes = await fetch(pdfFormNarayaVA).then(res => res.arrayBuffer());
            pdfDoc = await PDFDocument.load(formPdfBytes);
          }
        }



        const formPdf = pdfDoc.getForm()

        formPdf.getTextField('namapemohon').setText(this.form.attributes.namapemohon ?? '')
        formPdf.getTextField('namapemilikunit').setText(this.form.attributes.namapemilikunit ?? '')

        formPdf.getRadioGroup('Group1').select(this.form.attributes.statuscust ?? '')
        const staLain = formPdf.getTextField('staLain')
        if (this.form.attributes.lainlainstatus) {
          staLain.setText(this.form.attributes.lainlainstatus ?? '')
        }
        formPdf.getTextField('clusterblok').setText(this.form.attributes.clusterblok ?? '')
        const luasTanahField = formPdf.getTextField('luastanah');
        if (luasTanahField) {
          const luasTanahParts = this.form.attributes.luastanah.split('/');
          const formattedLuasTanah = luasTanahParts
            .map(part => `${part.trim()}²`)
            .join(' / ');

          // Use formatted text only during the setText call
          luasTanahField.setText(formattedLuasTanah);
        }
        formPdf.getTextField('notelp').setText(this.form.attributes.notelp?? '')

        formPdf.getTextField('tglPelaksanaan').setText(this.changeDateFormat(this.form.attributes.tglPelaksanaan?? ''))

        formPdf.getTextField('jumlahkendaraan').setText(JSON.stringify(this.form.attributes.jumlahkendaraan ?? ''))
        formPdf.getTextField('uraianpekerjaan').setText(this.form.attributes.uraianpekerjaan ?? '')

        formPdf.getRadioGroup('Group2').select(this.form.attributes.ijinkendaraan ?? '')

        const kenLain = formPdf.getTextField('kenLain')
        if (this.form.attributes.lainlainkendaraan) {
          kenLain.setText(this.form.attributes.lainlainkendaraan  ?? '')
        }

        formPdf.getTextField('ijinacara').setText(this.form.attributes.ijinacara ?? '')
        const ukuranpanggung = formPdf.getTextField('ukuranpanggung');
        if (ukuranpanggung) {
          const ukuranpanggungParts = this.form.attributes.ukuranpanggung.split('/');
          const formattedPanggung = ukuranpanggungParts
            .map(part => `${part.trim()}²`)
            .join(' / ');

          // Use formatted text only during the setText call
          ukuranpanggung.setText(formattedPanggung);
        }
        formPdf.getTextField('untukkeperluan').setText(this.form.attributes.untukkeperluan ?? '')

        const ktp = formPdf.getCheckBox('ktp')
        if (this.form.attributes.ktp == true) { ktp.check() }
        const bast = formPdf.getCheckBox('bast')
        if (this.form.attributes.bast == true) { bast.check() }
        const p3u = formPdf.getCheckBox('p3u')
        if (this.form.attributes.p3u == true) { p3u.check() }
        const perjanjiansewa = formPdf.getCheckBox('perjanjiansewa')
        if (this.form.attributes.perjanjiansewa == true) { perjanjiansewa.check() }
        const fototampak = formPdf.getCheckBox('fototampak')
        if (this.form.attributes.fototampak == true) { fototampak.check() }
        const gambarpelaksanaan = formPdf.getCheckBox('gambarpelaksanaan')
        if (this.form.attributes.gambarpelaksanaan == true) { gambarpelaksanaan.check() }
        const gambardepan = formPdf.getCheckBox('gambardepan')
        if (this.form.attributes.gambardepan == true) { gambardepan.check() }
        const suratpernyataan = formPdf.getCheckBox('suratpernyataan')
        if (this.form.attributes.suratpernyataan == true) { suratpernyataan.check() }
        const suratkuasa = formPdf.getCheckBox('suratkuasa')
        if (this.form.attributes.suratkuasa == true) { suratkuasa.check() }

        const klaSedang = formPdf.getCheckBox('klaSedang')
        const klaBesar = formPdf.getCheckBox('klaBesar')
        if (this.form.attributes.klaSedang == true) { klaSedang.check() } else { klaBesar.check() }

        formPdf.getTextField('bulan').setText(this.form.attributes.bulan ?? '')
        const stringTahun = this.form.attributes.tahun
        const lastTwoCharacters = stringTahun.substring(stringTahun.length - 2)
        formPdf.getTextField('tahun').setText(lastTwoCharacters)

        const formattedPrice = this.formatPrice(this.form.attributes.adm ?? '');
        const formattedPrice1 = this.formatPrice(this.form.attributes.jaminan ?? '');
        formPdf.getTextField('adm').setText(formattedPrice ?? '')
        formPdf.getTextField('jaminan').setText(formattedPrice1 ?? '')

        formPdf.getTextField('bank').setText(this.form.attributes.bank ?? '')
        if (this.form.attributes.norek) {
          formPdf.getTextField('norek').setText(this.form.attributes.norek)
          formPdf.getTextField('cabang').setText(this.form.attributes.cabang ?? '')
        } else {
          formPdf.getTextField('nova').setText(JSON.stringify(this.form.attributes.nova))
        }

        formPdf.getTextField('bintaro').setText('BINTARO')
        formPdf.getTextField('tglPrint').setText(this.changeDateFormat(this.form.attributes.tglPrint  ?? ''));
        formPdf.getTextField('badanpengelola').setText(this.form.attributes.badanpengelola  ?? '')

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
        const adjustedDate = new Date(this.formCopy.attributes.tglPelaksanaan);
        const adjustedDate2 = new Date(this.formCopy.attributes.tglPrint);
        adjustedDate.setHours(adjustedDate.getHours() + 7); // Add a day
        adjustedDate2.setHours(adjustedDate2.getHours() + 7); // Add a day
        this.formCopy.attributes.tglPelaksanaan = adjustedDate.toISOString();
        this.formCopy.attributes.tglPrint = adjustedDate2.toISOString();
        let data = {
          ...this.formCopy.attributes,  // Include existing attributes
        };
        let idForm = this.formCopy.id;
        let res = null;

        let requestData = {
          data: data
        };
        res = (await backend.izinForm.updateByID(idForm, requestData));
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
  