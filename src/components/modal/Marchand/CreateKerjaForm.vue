<template>
    <Dialog :visible="displayModal" :modal="true" :closable="false" style="width: 90vh">
        <template #header>
            <h3 v-if="form.id" class="m-0"><span class="text-dgas-red">Edit Document {{ form.id }}</span></h3>
            <h3 v-else class="m-0"><span class="text-ggi-red">Create Document</span></h3>
            <Button label="Close" icon="pi pi-times" class="button-rounded button-text ml-auto button-secondary"
                @click="handleClose" />
        </template>

        <form ref="form">
            <div class="formgrid grid">
                <div class='field col-12 md:col-10'>
                    <h3
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        Surat Izin Kerja Form</h3>
                </div>
                <div class="field col-12 md:col-2">
                    <label><span>Status</span></label>
                    <Dropdown v-model="formCopy.attributes.status" :options="statusoptions"
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-12">
                    <label><span>Nama Pemilik</span></label>
                    <InputText v-model="formCopy.attributes.namapemilik"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-12">
                    <label><span>No.Unit</span></label>
                    <InputText v-model="formCopy.attributes.nounit"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-12">
                    <label><span>Jenis Pekerjaan</span></label>
                    <InputText v-model="formCopy.attributes.pekerjaan"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-12">
                    <label><span>Kontraktor</span></label>
                    <InputText v-model="formCopy.attributes.kontraktor"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-12">
                    <label><span>Penanggung Jawab</span></label>
                    <InputText v-model="formCopy.attributes.penanggung"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-6">
                    <label>Waktu Mulai: </label>
                    <Calendar id="terbilang" v-model="formCopy.attributes.mulai" showButtonBar showIcon timeOnly
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-6">
                    <label>Waktu Selesai: </label>
                    <Calendar id="terbilang" v-model="formCopy.attributes.selesai" showButtonBar showIcon timeOnly
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <h3     v-if="!form.id"
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        Mohon Tambahkan Dokumen Dahulu Sebelum Input Ini</h3>
                <div class="field col-12 md:col-12">
                    <span><Button autoRezise="false" label="Create" icon="pi pi-plus" @click="showModal('new')"
                            class="mr-2" /></span>
                    <DataTable :value="filteredForms" v-model:selection="selectForm" selectionMode="single"
                        @row-select="showModal('edit')" responsiveLayout="scroll" sortField="id" :sortOrder="1"
                        :paginator="true" :rows="10">
                        <Column field="attributes.name" header="Nama Pekerja">
                        </Column>
                        <Column field="attributes.peralatan" header="Peralatan">
                        </Column>
                        <Column field="attributes.rincian" header="Rincian Pekerjaan">
                        </Column>
                    </DataTable>
                </div>
                <div class="field col-12 md:col-6">
                    <label><span>Tenant Relation</span></label>
                    <InputText v-model="formCopy.attributes.tenant"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-6">
                    <label><span>Managmenet</span></label>
                    <InputText v-model="formCopy.attributes.management"
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
                </div>
            </div>
        </form>

        <template #footer>

            <div class="flex justify-content-between flex-wrap">
                <div class="flex">
                    <Button label="Print" icon="pi pi-print" @click="fillForm()" />
                    <Button label="Print Semua KTP" icon="pi pi-print"
                        class="button-rounded button-text ml-auto button-secondary" @click="printAllImages" />
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
    <formMod v-model:dispModal="dispModal" v-model:form="selectForm" v-model:formRow="formCopy"
        :refreshList="getAllFormulirs" :act="act" />
</template>
  
<script>
import Dialog from 'primevue/dialog';
import Backend from '@/backend';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ConfirmDialog from 'primevue/confirmdialog';
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import formMod from '@/components/modal/Marchand/Table/KerjaTable.vue';
import qs from 'qs';
import { PDFDocument } from 'pdf-lib'
import pdfForm from '@/assets/pdfMarchand/IzinMarchand.pdf'

let backend = new Backend();

export default {
    components: { Dialog, Button, ConfirmDialog, InputText, Dropdown, Calendar, DataTable, Column, formMod },
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
            imageDialogVisible: false,
            imageSrc: '',
        };
    },
    mounted() {
        this.getAllFormulirs();
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

            const printWindow = window.open('', '_blank');
            if (printWindow) {
                const images = [];

                const loadImage = (url) => {
                    return new Promise((resolve, reject) => {
                        const img = new Image();
                        img.crossOrigin = 'anonymous';

                        img.onload = () => resolve(img);
                        img.onerror = (err) => reject(err);

                        img.src = `/img/MarchandImages/${url}`;
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
        async fillForm() {
            try {
                let formPdfBytes = await fetch(pdfForm).then(res => res.arrayBuffer());
                const pdfDoc = await PDFDocument.load(formPdfBytes);
                const formPdf = pdfDoc.getForm()

                formPdf.getTextField('namapemilik').setText(this.form.attributes.namapemilik ?? '')
                formPdf.getTextField('nounit').setText(this.form.attributes.nounit ?? '')
                formPdf.getTextField('pekerjaan').setText(this.form.attributes.pekerjaan ?? '')
                formPdf.getTextField('kontraktor').setText(this.form.attributes.kontraktor ?? '')
                formPdf.getTextField('jawab').setText(this.form.attributes.penanggung ?? '')

                const [hour, minute] = this.form.attributes.mulai.split(':');
                formPdf.getTextField('mulai').setText(hour + ':' + minute + ':00')
                const [hour1, minute1] = this.form.attributes.selesai.split(':');
                formPdf.getTextField('selesai').setText(hour1 + ':' + minute1 + ':00')


                formPdf.getTextField('tenant').setText(this.form.attributes.tenant ?? '')
                formPdf.getTextField('management').setText(this.form.attributes.management ?? '')

                for (let i = 0; i < this.filteredForms.length; i++) {
                    const formAttributes = this.filteredForms[i].attributes;

                    formPdf.getTextField(`namapekerja${i}`).setText(formAttributes.name);
                    formPdf.getTextField(`peralatan${i}`).setText(formAttributes.peralatan);
                    formPdf.getTextField(`rincian${i}`).setText(formAttributes.rincian);
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
                    populate: 'izinMarchandID'
                });
                let response = await backend.kerjaTable.findAll(query);
                this.filterInternet(response.data.data)
            } catch (err) {
                console.log(err);
            }
        },

        filterInternet(e) {
            this.filteredForms = e.filter((d) => {
                const projectData = d.attributes.izinMarchandID.data;
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
                if (isNaN(new Date(this.formCopy.attributes.mulai))) {
                    // Handle case where waktu is not a valid date
                    this.formCopy.attributes.mulai
                } else {
                    let originalDate = new Date(this.formCopy.attributes.mulai);
                    let hours = originalDate.getHours().toString().padStart(2, '0');
                    let minutes = originalDate.getMinutes().toString().padStart(2, '0');
                    this.formCopy.attributes.mulai = `${hours}:${minutes}:00`;
                }
                if (isNaN(new Date(this.formCopy.attributes.selesai))) {
                    // Handle case where waktu is not a valid date
                    this.formCopy.attributes.selesai
                } else {
                    let originalDate = new Date(this.formCopy.attributes.selesai);
                    let hours = originalDate.getHours().toString().padStart(2, '0');
                    let minutes = originalDate.getMinutes().toString().padStart(2, '0');
                    this.formCopy.attributes.selesai = `${hours}:${minutes}:00`;
                }
                let data = {
                    ...this.formCopy.attributes,  // Include existing attributes
                };
                let idForm = this.formCopy.id;
                let res = null;

                let requestData = {
                    data: data
                };
                res = (await backend.izinMarchand.updateByID(idForm, requestData));

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
  