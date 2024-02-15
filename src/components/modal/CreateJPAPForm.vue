<template>
  <Dialog :visible="displayModal" :modal="true" :closable="false" style="width: 90vh">
    <template #header>
      <h3 v-if="form.id" class="m-0"><span class="text-dgas-red">Edit Document </span></h3>
      <h3 v-else class="m-0"><span class="text-dgas-red">Create Document</span></h3>
      <Button label="Close" icon="pi pi-times" class="button-rounded button-text ml-auto button-secondary"
        @click="handleClose" />
    </template>

    <form ref="form">
      <div class="formgrid grid">
        <div class='field col-12 md:col-8'>
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Bersama ini saya pemilik Bangunan di Mazenta Residence</h3>
        </div>
        <div class="field col-12 md:col-4">
          <label><span>Status</span></label>
          <Dropdown v-model="formCopy.attributes.status" :options="statusoptions"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label><span>Nama Pemilik</span></label>
          <InputText id="name" v-model="formCopy.attributes.name"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label><span>Cluster:</span></label>
          <InputText id="name" v-model="formCopy.attributes.cluster"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label><span>Blok/No.Unit:</span></label>
          <InputText id="name" v-model="formCopy.attributes.blok"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label><span>Type Unit:</span></label>
          <InputText id="name" v-model="formCopy.attributes.type"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-6">
          <label><span>Luas Tanah/ Bangunan</span></label>
          <InputText id="name" v-model="formCopy.attributes.luastanah"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class='field col-12 md:col-12'>
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Telah bersedia melakukan pengecekan bersama akhir pembangunan/Renovasi sebagai kelengkapan dari persyaratan
            pencairan Uang Jaminan/Deposit, Pada :</h3>
        </div>
        <div class="field col-12 md:col-4">
          <label><span>Hari</span></label>
          <InputText id="name" v-model="formCopy.attributes.hari"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label>Tanggal : </label>
          <Calendar id="terbilang" v-model="formCopy.attributes.tgl" dateFormat="yy-mm-dd" showButtonBar showIcon view="date"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label>Waktu : </label>
          <Calendar id="terbilang" v-model="formCopy.attributes.waktu" timeOnly showButtonBar 
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class='field col-12 md:col-12'>
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Berdasarkan hasil pengecekan dinyatakan :</h3>
        </div>
        <div class="field col-12 md:col-4">
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Kategori</h3>
        </div>
        <div class="field col-12 md:col-4">
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Ada / Tidak Ada</h3>
        </div>
        <div class="field col-12 md:col-4">
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Keterangan</h3>
        </div>
        <div class="field col-12 md:col-4">
          <label><span>Kerusakan di unit sebelah pemilik</span></label>
        </div>
        <div class="field col-12 md:col-4">
          <ToggleButton v-model="formCopy.attributes.kerusakanunitbool" :binary="true"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <InputText v-model="formCopy.attributes.kerusakanunitketer"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label><span>Kerusakan di area publik sekitar unit pemilik</span></label>
        </div>
        <div class="field col-12 md:col-4">
          <ToggleButton v-model="formCopy.attributes.kerusakanareabool" :binary="true"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <InputText v-model="formCopy.attributes.kerusakanareaketer"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-12">
          <h4 class="font-italic">Catatan</h4>
          <Textarea autoResize rows="4" v-model="formCopy.attributes.catatan"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class='field col-12 md:col-8'>
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Akibat kerusakan tersebut Pemilik Bangunan dikenakan denda sebesar Rp. :</h3>
        </div>
        <div class="field col-12 md:col-4">
          <InputNumber v-model="formCopy.attributes.kerusakandenda" mode="currency" currency="IDR"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class='field col-12 md:col-8'>
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Total Pengembalian sebesar Rp. :</h3>
        </div>
        <div class="field col-12 md:col-4">
          <InputNumber v-model="formCopy.attributes.totalpengambilan" mode="currency" currency="IDR"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class='field col-12 md:col-12'>
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Pengembalian Uang Jaminan/Deposit di Transfer ke Rekening :</h3>
        </div>
        <div class="field col-12 md:col-3">
          <label>Nama Pemilik Rekening: </label>
          <InputText v-model="formCopy.attributes.namarek"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label>Bank: </label>
          <InputText v-model="formCopy.attributes.bank"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label>No. Rekening: </label>
          <InputNumber v-model="formCopy.attributes.norek" :useGrouping="false"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-3">
          <label>Cabang: </label>
          <InputText v-model="formCopy.attributes.cabang"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class='field col-12 md:col-12'>
          <h3
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
            Untuk Print :</h3>
        </div>
        <div class="field col-12 md:col-4">
          <label>Tanggal Print</label>
          <Calendar v-model="formCopy.attributes.tglPrint" showButtonBar dateFormat="yy-mm-dd"
            class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label>Badan Pengelola/Management Estate</label>
          <InputText v-model="formCopy.attributes.namamanagement"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>
        <div class="field col-12 md:col-4">
          <label>Petugas Pengecekan</label>
          <InputText v-model="formCopy.attributes.namapetugas"
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
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import store from '@/store'
import InputNumber from 'primevue/inputnumber';
import Textarea from 'primevue/textarea';
import ToggleButton from 'primevue/togglebutton';
import { PDFDocument } from 'pdf-lib';
import pdfForm from '@/assets/pdf/JPAPForm.pdf';
import pdfFormBanara from '@/assets/pdf/JPAPFormBanara.pdf';
import qs from 'qs';
import pdfFormNaraya from '@/assets/pdf/JPAPFormNaraya.pdf';


let backend = new Backend();

export default {
  components: { Dialog, Button, ConfirmDialog, InputText, Calendar, InputNumber, Textarea, ToggleButton, Dropdown },
  props: ['displayModal', 'form', 'refreshList', 'action'],
  res: null,
  data() {
    return {
      statusoptions: ['Batal', 'Aktif']
    };
  },
  methods: {

    formatPrice(price) {
      // Convert the price to a number and add commas for thousand separators
      const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      const formattedPrice1 = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return `${formattedPrice},-`, `${formattedPrice1},-`;
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

        formPdf.getTextField('cluster').setText(this.form.attributes.cluster ?? '')
        formPdf.getTextField('blok').setText(this.form.attributes.blok ?? '')
        formPdf.getTextField('type').setText(this.form.attributes.type ?? '')
        const luasTanahField = formPdf.getTextField('luastanah');
        if (luasTanahField) {
          const luasTanahParts = this.form.attributes.luastanah.split('/');
          const formattedLuasTanah = luasTanahParts
            .map(part => `${part.trim()}²`)
            .join(' / ');

          // Use formatted text only during the setText call
          luasTanahField.setText(formattedLuasTanah);
        }
        formPdf.getTextField('name').setText(this.form.attributes.name  ?? '')
        formPdf.getTextField('hari').setText(this.form.attributes.hari ?? '')
        const formattedDate = this.changeDataFormat(this.form.attributes.tgl  ?? '')
        formPdf.getTextField('tgl').setText(formattedDate ?? '')

        const tglPem = this.form.attributes.waktu
        const [hour, minute] = tglPem.split(':');
        formPdf.getTextField('waktu').setText(hour + ':' + minute  ?? '')

        const kerArea = formPdf.getTextField('kerArea')
        const kerUnit = formPdf.getTextField('kerUnit')

        if (this.form.attributes.kerusakanunitbool == true) {
          kerUnit.setText('Ada')
        } else {
          kerUnit.setText('Tidak Ada')
        }

        if (this.form.attributes.kerusakanareabool == true) {
          kerArea.setText('Ada')
        } else {
          kerArea.setText('Tidak Ada')
        }

        formPdf.getTextField('keteranganUnit').setText(this.form.attributes.kerusakanunitketer ?? '')
        formPdf.getTextField('keteranganArea').setText(this.form.attributes.kerusakanareaketer ?? '')
        formPdf.getTextField('catatan').setText(this.form.attributes.catatan ?? '')
        const formattedPrice = this.formatPrice(this.form.attributes.kerusakandenda);
        const formattedPrice1 = this.formatPrice(this.form.attributes.totalpengambilan);
        formPdf.getTextField('kerusakandenda').setText(formattedPrice  ?? '')
        formPdf.getTextField('totalpengambilan').setText(formattedPrice1  ?? '')

        formPdf.getTextField('namarek').setText(this.form.attributes.namarek  ?? '')
        formPdf.getTextField('bank').setText(this.form.attributes.bank  ?? '')
        formPdf.getTextField('norek').setText(this.form.attributes.norek  ?? '')
        formPdf.getTextField('cabang').setText(this.form.attributes.cabang ?? '')
        formPdf.getTextField('bintaro').setText('BINTARO')

        const formattedDate1 = this.changeDataFormat(this.form.attributes.tglPrint)
        formPdf.getTextField('tglPrint').setText(formattedDate1  ?? '')
        formPdf.getTextField('namamanagement').setText(this.form.attributes.namamanagement  ?? '')
        formPdf.getTextField('namapetugas').setText(this.form.attributes.namapetugas  ?? '')

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
            let response1 = await backend.jpapForm.findAll(query);
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
            let response1 = await backend.jpapForm.findAll(query);
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
            let response1 = await backend.jpapForm.findAll(query);
            this.formID = response1.data.meta;
            this.formCopy.attributes.formid = this.formID.pagination.total + 1;
          }
          this.formCopy.attributes.project = 3;
        }
        if (isNaN(new Date(this.formCopy.attributes.waktu))) {
          // Handle case where waktu is not a valid date
          this.formCopy.attributes.waktu
        } else {
          let originalDate = new Date(this.formCopy.attributes.waktu);
          let hours = originalDate.getHours().toString().padStart(2, '0');
          let minutes = originalDate.getMinutes().toString().padStart(2, '0');
          let seconds = originalDate.getSeconds().toString().padStart(2, '0');
          this.formCopy.attributes.waktu = `${hours}:${minutes}:${seconds}`;
        }

        const adjustedDate = new Date(this.formCopy.attributes.tgl);
        adjustedDate.setHours(adjustedDate.getHours() + 7); // Add a day
        this.formCopy.attributes.tgl = adjustedDate.toISOString();

        const adjustedDate1 = new Date(this.formCopy.attributes.tglPrint);
        adjustedDate1.setHours(adjustedDate1.getHours() + 7); // Add a day
        this.formCopy.attributes.tglPrint = adjustedDate1.toISOString();

        let data = {
          ...this.formCopy.attributes,  // Include existing attributes
        };

        let idForm = this.formCopy.id;
        let res = null;

        let requestData = {
          data: data
        };
        if (this.form.id == null) {
          res = (await backend.jpapForm.newEntry(requestData));
        } else {
          res = (await backend.jpapForm.updateByID(idForm, requestData));
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
  