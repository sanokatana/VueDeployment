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
          <label><span>Status</span></label>
          <Dropdown v-model="formCopy.attributes.status" :options="statusoptions"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label><span>Nama Lengkap</span></label>
          <InputText id="name" v-model="formCopy.attributes.namalengkap"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label><span>Cluster</span></label>
          <InputText id="name" v-model="formCopy.attributes.cluster"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label><span>Blok</span></label>
          <InputText id="name" v-model="formCopy.attributes.blok"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label><span>No. Unit</span></label>
          <InputText id="name" v-model="formCopy.attributes.nounit"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12">
          <label>Jenis Kartu Untuk: (Pilih Satu)</label>
          <Dropdown v-model="formCopy.attributes.jeniskartu" :options="jenisOptions"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <h3
            class="flex flex-wrap justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Plat No. Kendaraan</h3>
        </div>
        <div class="field col-12 md:col-3">
          <h3
            class="flex flex-wrap justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Merek/Jenis Kendaraan</h3>
        </div>
        <div class="field col-12 md:col-3">
          <h3
            class="flex flex-wrap justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Warna</h3>
        </div>
        <div class="field col-12 md:col-3">
          <h3
            class="flex flex-wrap justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Biaya</h3>
        </div>
        <div class="field col-12 md:col-3">
          <InputText id="name" v-model="formCopy.attributes.plat1"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <InputText id="name" v-model="formCopy.attributes.jenis1"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <InputText id="name" v-model="formCopy.attributes.warna1"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <InputNumber v-model="formCopy.attributes.biaya1" mode="currency" currency="IDR"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <InputText id="name" v-model="formCopy.attributes.plat2"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <InputText id="name" v-model="formCopy.attributes.jenis2"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <InputText id="name" v-model="formCopy.attributes.warna2"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <InputNumber v-model="formCopy.attributes.biaya2" mode="currency" currency="IDR"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <InputText id="name" v-model="formCopy.attributes.plat3"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <InputText id="name" v-model="formCopy.attributes.jenis3"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <InputText id="name" v-model="formCopy.attributes.warna3"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <InputNumber v-model="formCopy.attributes.biaya3" mode="currency" currency="IDR"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <InputText id="name" v-model="formCopy.attributes.plat4"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <InputText id="name" v-model="formCopy.attributes.jenis4"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <InputText id="name" v-model="formCopy.attributes.warna4"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <InputNumber v-model="formCopy.attributes.biaya4" mode="currency" currency="IDR"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
        </div>
        <div class="field col-12 md:col-3">
          <h3
            class="flex flex-wrap justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Jumlah</h3>
        </div>
        <div class="field col-12 md:col-3">
          <InputNumber v-model="totalPrice" disabled mode="currency" currency="IDR"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label>Pemesanan Kartu Akses Masuk,Sebanyak</label>
          <InputText v-model="formCopy.attributes.sebanyak"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label> Buah </label>
          <InputText v-model="buah" disabled
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-5">
          <label>Admin Name:</label>
          <InputText id="name" v-model="formCopy.attributes.admin"
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
          <Button label="Delete" icon="pi pi-trash" @click="confirmDelete" />
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
import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import store from '@/store';
import qs from 'qs';
import { PDFDocument } from 'pdf-lib'
import pdfForm from '@/assets/pdf/PemesananKartu.pdf'
import pdfFormBanara from '@/assets/pdf/PemesananKartuBanara.pdf'
import pdfFormNaraya from '@/assets/pdf/PemesananKartuNaraya.pdf'


let backend = new Backend();

export default {
  components: { Dialog, Button, ConfirmDialog, InputText, Dropdown, InputNumber, },
  props: ['displayModal', 'form', 'refreshList', 'action'],
  res: null,
  data() {
    return {
      jenisOptions: ['Tempat Tinggal', 'Usaha', 'Gudang', 'Kantor', 'Sekolah', 'Kost', 'Jemputan', 'Karyawan'],
      statusoptions: ['Batal', 'Aktif']
    };
  },

  methods: {

    formatPrice(price) {
      // Convert the price to a number and add commas for thousand separators
      const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return `${formattedPrice}`;
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
        formPdf.getTextField('namalengkap').setText(this.formCopy.attributes.namalengkap)
        formPdf.getTextField('cluster').setText(this.formCopy.attributes.cluster)
        formPdf.getTextField('blokunit').setText(this.formCopy.attributes.blok + '-' + this.formCopy.attributes.nounit)
        formPdf.getTextField('jeniskartu').setText(this.formCopy.attributes.jeniskartu ?? '')
        formPdf.getTextField('plat1').setText(this.formCopy.attributes.plat1 ?? '')
        formPdf.getTextField('plat2').setText(this.formCopy.attributes.plat2 ?? '')
        formPdf.getTextField('plat3').setText(this.formCopy.attributes.plat3 ?? '')
        formPdf.getTextField('plat4').setText(this.formCopy.attributes.plat4 ?? '')
        formPdf.getTextField('jenis1').setText(this.formCopy.attributes.jenis1 ?? '')
        formPdf.getTextField('jenis2').setText(this.formCopy.attributes.jenis2 ?? '')
        formPdf.getTextField('jenis3').setText(this.formCopy.attributes.jenis3 ?? '')
        formPdf.getTextField('jenis4').setText(this.formCopy.attributes.jenis4 ?? '')
        formPdf.getTextField('warna1').setText(this.formCopy.attributes.warna1 ?? '')
        formPdf.getTextField('warna2').setText(this.formCopy.attributes.warna2 ?? '')
        formPdf.getTextField('warna3').setText(this.formCopy.attributes.warna3 ?? '')
        formPdf.getTextField('warna4').setText(this.formCopy.attributes.warna4 ?? '')
        formPdf.getTextField('biaya1').setText(this.formatPrice(this.formCopy.attributes.biaya1 ?? ''))
        formPdf.getTextField('biaya2').setText(this.formatPrice(this.formCopy.attributes.biaya2 ?? ''))
        formPdf.getTextField('biaya3').setText(this.formatPrice(this.formCopy.attributes.biaya3 ?? ''))
        formPdf.getTextField('biaya4').setText(this.formatPrice(this.formCopy.attributes.biaya4 ?? ''))
        formPdf.getTextField('admin').setText(this.formCopy.attributes.admin)
        formPdf.getTextField('jumlah').setText(this.formatPrice(this.totalPrice))
        formPdf.getTextField('sebanyak').setText(this.formCopy.attributes.sebanyak ?? '')
        formPdf.getTextField('buah').setText(this.buah)


        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const pdfUrl = URL.createObjectURL(blob);
        window.open(pdfUrl, '_blank');
        URL.revokeObjectURL(pdfUrl);
      } catch (error) {
        console.error('Error while processing PDF:', error);
      }
    },

    confirmDelete() {
      this.$confirm.require({
        message: 'Are you sure you want to delete this form?',
        header: `Delete Form #${this.form.id}?`,
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Delete item',
        rejectLabel: 'Cancel',
        acceptClass: 'p-button-danger',
        rejectClass: 'p-button-primary',
        accept: () => {
          this.deleteForm()
        },
        reject: () => { }
      });
    },

    async deleteForm() {

      try {

        let role = store.getters.getRole;
        let resDel = null;
        let idForm = this.formCopy.id;

        if (role == 'mazentaAdmin') {
          resDel = (await backend.pemesananKartu.deleteByID(idForm));
        }
        this.handleClose();
        this.refreshList();
        this.$toast.add({ severity: 'success', summary: 'Form Update Success', detail: `Form #${resDel.data.data.id} has been saved`, life: 3000 });
      } catch (err) {
        console.error('Error while Deleting form:', err);

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
            let response1 = await backend.pemesananKartu.findAll(query);
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
            let response1 = await backend.pemesananKartu.findAll(query);
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
            let response1 = await backend.pemesananKartu.findAll(query);
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
        }
        if (this.form.id == null) {
          res = (await backend.pemesananKartu.newEntry(requestData));
        } else {
          res = (await backend.pemesananKartu.updateByID(idForm, requestData));
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
    totalPrice() {
      // Retrieve biaya1 and biaya2 values and remove non-numeric characters
      const biaya1 = parseFloat(this.formCopy.attributes.biaya1) || 0;
      const biaya2 = parseFloat(this.formCopy.attributes.biaya2) || 0;
      const biaya3 = parseFloat(this.formCopy.attributes.biaya3) || 0;
      const biaya4 = parseFloat(this.formCopy.attributes.biaya4) || 0;

      // Calculate the total price
      const totalPrice = biaya1 + biaya2 + biaya3 + biaya4;


      // Format the total price as Indonesian Rupiah
      return totalPrice;
    },
    buah() {
      const sebanyak = this.formCopy.attributes.sebanyak;

      // Define a mapping of numbers to their corresponding words in Indonesian
      const numberToWord = {
        1: 'satu',
        2: 'dua',
        3: 'tiga',
        4: 'empat'
        // Add more mappings as needed
      };

      // Check if sebanyak is a valid key in the mapping
      if (Object.prototype.hasOwnProperty.call(numberToWord, sebanyak)) {
        return numberToWord[sebanyak];  // Return the corresponding word
      } else {
        return '';  // Return an empty string if the input is not in the mapping
      }

    }

  },
};
</script>
  