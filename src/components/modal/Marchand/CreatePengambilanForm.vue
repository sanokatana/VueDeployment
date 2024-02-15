<template>
    <Dialog :visible="displayModal" :modal="true" :closable="false" style="width: 90vh">
        <template #header>
            <h3 v-if="form.id" class="m-0"><span class="text-dgas-red">Edit Document </span></h3>
            <h3 v-else class="m-0"><span class="text-ggi-red">Edit Customer Form Number # {{ form.id }}</span></h3>
            <Button label="Close" icon="pi pi-times" class="button-rounded button-text ml-auto button-secondary"
                @click="handleClose" />
        </template>

        <form ref="form">
            <div class="formgrid grid">
                <div class='field col-12 md:col-10'>
                    <h3
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        Surat Permohonan Izin Buka Toko</h3>
                </div>
                <div class="field col-12 md:col-2">
                    <label><span>Status</span></label>
                    <Dropdown v-model="formCopy.attributes.status" :options="statusoptions"
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-2">
                    <label><span>Pada hari ini</span></label>
                    <InputText id="name" v-model="formCopy.attributes.hari"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-2">
                    <label><span>Tanggal</span></label>
                    <InputText id="name" v-model="formCopy.attributes.tanggal"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-2">
                    <label><span>Bulan</span></label>
                    <InputText id="name" v-model="formCopy.attributes.bulan"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-3">
                    <label><span>Tahun</span></label>
                    <InputText id="name" v-model="formCopy.attributes.tahun"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-3">
                    <label>Date</label>
                    <Calendar v-model="formCopy.attributes.tgl" showButtonBar showIcon dateFormat="yy-mm-dd"
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-12'>
                    <h3
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        Yang bertandatangan di bawah ini menyatakan BENAR bahwa telah diadakan pembahasan dan pemeriksaan
                        bersama mengenai kelayakan buka toko sebagai berikut:</h3>
                </div>
                <div class="field col-12 md:col-6">
                    <label><span>Nama toko : </span></label>
                    <InputText id="name" v-model="formCopy.attributes.namatoko"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-6">
                    <label>Lantai / Unit</label>
                    <InputText id="alamat" v-model="formCopy.attributes.lantai"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-6">
                    <label>Nama Pemilik / Penyewa</label>
                    <InputText id="alamat" v-model="formCopy.attributes.namapenyewa"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-6">
                    <label>Status Toko:</label>
                    <Dropdown id="status" v-model="formCopy.attributes.statustenant" :options="statusOptionsToko"
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div>
                    <h3
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        Surat Permohonan Izin Buka Toko</h3>
                </div>
                <div class="field col-12 md:col-12">
                    <span><Button autoRezise="false" label="Create" icon="pi pi-plus" @click="showModal('new')"
                            class="mr-2" /></span>
                    <DataTable :value="filteredForms" v-model:selection="selectForm" selectionMode="single"
                        @row-select="showModal('edit')" responsiveLayout="scroll" sortField="id" :sortOrder="1"
                        :paginator="true" :rows="10">
                        <Column field="attributes.deskripsi" header="Deskripsi">
                        </Column>
                        <Column field="attributes.comment" header="Comment">
                        </Column>
                    </DataTable>
                </div>
                <div class='field col-12 md:col-12'>
                    <h3
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        Sesuai Dengan Hasil Pemeriksaan dan Pembahasan tersebut, maka ketentuan Security Deposit Fitout
                        adalah:</h3>
                </div>
                <div class="field col-12 md:col-3 flex flex-wrap justify-content-center align-content-center">
                    <Checkbox v-model="formCopy.attributes.kembali" :binary="true"
                        class="justify-content-center text-base text-color surface-overlay  surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-5 flex flex-wrap align-content-center">
                    <label>
                        Dikembalikan sebesar:
                    </label>
                </div>
                <div class="field col-12 md:col-4">
                    <InputNumber v-model="formCopy.attributes.rpkembali" mode="currency" currency="IDR"
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-3 flex flex-wrap justify-content-center align-content-center">
                    <Checkbox v-model="formCopy.attributes.potong" :binary="true"
                        class="justify-content-center text-base text-color surface-overlay  surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-5 flex flex-wrap  align-content-center">
                    <label>
                        Dipotong karena ada kerusakan dan hal lain:
                    </label>
                </div>
                <div class="field col-12 md:col-4">
                    <InputNumber v-model="formCopy.attributes.rppotong" mode="currency" currency="IDR"
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-3">
                    <label>Tenant Relation</label>
                    <InputText v-model="formCopy.attributes.tenantrelation"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-3">
                    <label>Tenant</label>
                    <InputText v-model="formCopy.attributes.tenant"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-3">
                    <label>Finance Manager</label>
                    <InputText v-model="formCopy.attributes.finance"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-3">
                    <label>Management</label>
                    <InputText v-model="formCopy.attributes.management"
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
    <formMod v-model:dispModal="dispModal" v-model:form="selectForm" v-model:formRow="formCopy"
        :refreshList="getAllFormulirs" :act="act" />
</template>
  
<script>
import Dialog from 'primevue/dialog';
import Backend from '@/backend';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ConfirmDialog from 'primevue/confirmdialog';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Calendar from 'primevue/calendar';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import formMod from '@/components/modal/Marchand/Table/PengambilanTable.vue';
import qs from 'qs';
import { PDFDocument } from 'pdf-lib'
import pdfForm from '@/assets/pdfMarchand/PengambilanSecurity.pdf'

let backend = new Backend();

export default {
    components: { Dialog, Button, ConfirmDialog, InputText, Dropdown, Calendar, DataTable, Column, formMod, Checkbox, InputNumber },
    props: ['displayModal', 'form', 'refreshList', 'action'],
    res: null,
    data() {
        return {
            act: null,
            selectForm: null,
            dispModal: false,
            selectedFormId: null,
            statusOptionsToko: ['Tenant Buka Toko', 'Tenant Renovasi Toko', 'Lainnya'],
            statusoptions: ['Batal', 'Aktif'],
            filteredForms: [],
        };
    },
    mounted() {
        this.getAllFormulirs();
    },
    methods: {
        formatPrice(price) {
            // Convert the price to a number and add commas for thousand separators
            const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            return `${formattedPrice},-`;
        },
        async fillForm() {
            try {
                let formPdfBytes = await fetch(pdfForm).then(res => res.arrayBuffer());
                const pdfDoc = await PDFDocument.load(formPdfBytes);
                const formPdf = pdfDoc.getForm()

                formPdf.getTextField('hari').setText(this.form.attributes.hari ?? '')
                formPdf.getTextField('tanggal').setText(this.form.attributes.tanggal ?? '')
                formPdf.getTextField('bulan').setText(this.form.attributes.bulan ?? '')
                formPdf.getTextField('tahun').setText(this.form.attributes.tahun ?? '')
                let year, month, day
                if (this.form.attributes.tgl) {
                    const tglPem = this.formCopy.attributes.tgl;
                    [year, month, day] = tglPem.split('-');
                }
                formPdf.getTextField('year').setText(year)
                formPdf.getTextField('month').setText(month)
                formPdf.getTextField('day').setText(day)

                formPdf.getTextField('namatoko').setText(this.form.attributes.namatoko ?? '')
                formPdf.getTextField('namapenyewa').setText(this.form.attributes.namapenyewa ?? '')
                formPdf.getTextField('lantai').setText(this.form.attributes.lantai ?? '')

                if (this.form.attributes.statustenant == 'Tenant Buka Toko') {
                    formPdf.getCheckBox('bukatoko').check()
                } else if (this.form.attributes.statustenant == 'Tenant Renovasi Toko') {
                    formPdf.getCheckBox('renovasitoko').check()
                } else {
                    formPdf.getCheckBox('lainnya').check()
                }

                for (let i = 0; i < this.filteredForms.length; i++) {
                    const formAttributes = this.filteredForms[i].attributes;

                    formPdf.getTextField(`deskripsi${i}`).setText(formAttributes.deskripsi);
                    formPdf.getTextField(`comment${i}`).setText(formAttributes.comment);
                }

                if (this.form.attributes.kembali) {
                    formPdf.getCheckBox('dikembalikan').check()
                }
                if (this.form.attributes.potong) {
                    formPdf.getCheckBox('dipotong').check()
                }

                formPdf.getTextField('rpkembalikan').setText(this.formatPrice(this.form.attributes.rpkembali ?? ''))
                formPdf.getTextField('rppotong').setText(this.formatPrice(this.form.attributes.rppotong ?? ''))

                formPdf.getTextField('tenantrelation').setText(this.form.attributes.tenantrelation ?? '')
                formPdf.getTextField('tenant').setText(this.form.attributes.tenant ?? '')
                formPdf.getTextField('finance').setText(this.form.attributes.finance ?? '')
                formPdf.getTextField('tanggal1').setText(this.changeDateFormat(this.form.attributes.tgl))
                formPdf.getTextField('management').setText(this.form.attributes.management ?? '')

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
        async callGetAllFormulirs() {
            try {
                // Call the function you want to trigger
                await this.getAllFormulirs();
            } catch (err) {
                console.log(err);
            }
        },
        async getAllFormulirs() {
            try {
                let query = qs.stringify({
                    populate: 'PengambilanMarchandID'
                });
                let response = await backend.pengambilanTable.findAll(query);
                this.filterInternet(response.data.data)
            } catch (err) {
                console.log(err);
            }
        },

        filterInternet(e) {
            this.filteredForms = e.filter((d) => {
                const projectData = d.attributes.PengambilanMarchandID.data;
                return (
                    projectData &&
                    projectData.id === this.formCopy.id
                );
            });
        },
        showModal(act) {
            this.act = act;
            if (act == 'new') {
                this.selectForm = {
                    id: null,
                    attributes: {
                    }
                }
            }
            this.dispModal = true;
        },
        handleClose() {
            this.$emit('update:form', null);
            this.$emit('update:displayModal', false);
        },
        async handleSubmit() {

            try {
                const adjustedDate = new Date(this.formCopy.attributes.tgl);
                adjustedDate.setHours(adjustedDate.getHours() + 7); // Add a day
                this.formCopy.attributes.tgl = adjustedDate.toISOString();
                let data = {
                    ...this.formCopy.attributes,  // Include existing attributes
                };
                let idForm = this.formCopy.id;
                let res = null;

                let requestData = {
                    data: data
                };
                if (this.form.id == null) {
                    res = (await backend.pengambilanRefund.newEntry(requestData));
                    } else {
                    res = (await backend.pengambilanRefund.updateByID(idForm, requestData));
                }
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
    },
};
</script>
  