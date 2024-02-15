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
                    <InputText id="alamat" v-model="formCopy.attributes.lantaiunit"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-6">
                    <label>Nama Pemilik / Penyewa</label>
                    <InputText id="alamat" v-model="formCopy.attributes.namapemilik"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-6">
                    <label>Status Toko:</label>
                    <Dropdown id="status" v-model="formCopy.attributes.statustoko" :options="statusOptionsToko"
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-1 m-0'>
                    <h3
                        class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        No</h3>
                </div>
                <div class='field col-12 md:col-4 m-0'>
                    <h3
                        class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        Deksripsi</h3>
                </div>
                <div class='field col-12 md:col-2 m-0'>
                    <h3
                        class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        Ya</h3>
                </div>
                <div class='field col-12 md:col-2 m-0'>
                    <h3
                        class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        Tidak</h3>
                </div>
                <div class='field col-12 md:col-3 m-0'>
                    <h3
                        class=" text-base text-color surface-overlay surface-borderd border-round appearance-none outline-none focus:border-primary w-full">
                        Ketenrangan/Rekomendasi</h3>
                </div>
                <div class='field col-12 md:col-6 m-0'>
                    <h3
                        class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        Architectural</h3>
                </div>
                <div class='field col-12 md:col-6 m-0 '>
                    <h3
                        class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full ">
                        FO</h3>
                </div>
                <div class='field col-12 md:col-1 m-0 flex align-items-center justify-content-center'>
                    <h3
                        class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        1</h3>
                </div>
                <div class='field col-12 md:col-4 m-0 '>
                    <h3
                        class="text-base text-color surface-overlay surface-border p-2 border-1 border-solid border-round appearance-none outline-none focus:border-primary w-full">
                        Shopfront</h3>
                </div>
                <div class='field col-12 md:col-4 m-0 flex align-items-center justify-content-center'>
                    <ToggleButton id="instalasi" v-model="formCopy.attributes.shopfront"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-3 m-0 flex align-items-center justify-content-center'>
                    <InputText id="alamat" v-model="formCopy.attributes.shopfrontketer"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-1 m-0 flex align-items-center justify-content-center'>
                    <h3
                        class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        2</h3>
                </div>
                <div class='field col-12 md:col-4 m-0'>
                    <h3
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-solid border-round appearance-none outline-none focus:border-primary w-full">
                        Light Display</h3>
                </div>
                <div class='field col-12 md:col-4 m-0 flex align-items-center justify-content-center'>
                    <ToggleButton id="instalasi" v-model="formCopy.attributes.lightdisplay"
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-3 m-0 flex align-items-center justify-content-center'>
                    <InputText id="alamat" v-model="formCopy.attributes.lightdisplayketer"
                        class="text-base text-color surface-overlay  surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-1 m-0 flex align-items-center justify-content-center'>
                    <h3
                        class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        3</h3>
                </div>
                <div class='field col-12 md:col-4 m-0'>
                    <h3
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-solid border-round appearance-none outline-none focus:border-primary w-full">
                        3D Signage</h3>
                </div>
                <div class='field col-12 md:col-4 m-0 flex align-items-center justify-content-center'>
                    <ToggleButton id="instalasi" v-model="formCopy.attributes.signage"
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-3 m-0 flex align-items-center justify-content-center'>
                    <InputText id="alamat" v-model="formCopy.attributes.signageketer"
                        class="text-base text-color surface-overlay  surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-1 m-0 flex align-items-center justify-content-center'>
                    <h3
                        class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        4</h3>
                </div>
                <div class='field col-12 md:col-4 m-0'>
                    <h3
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-solid border-round appearance-none outline-none focus:border-primary w-full">
                        Mural Art / Wall Painting</h3>
                </div>
                <div class='field col-12 md:col-4 m-0 flex align-items-center justify-content-center'>
                    <ToggleButton id="instalasi" v-model="formCopy.attributes.mural"
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-3 m-0 flex align-items-center justify-content-center'>
                    <InputText id="alamat" v-model="formCopy.attributes.muralketer"
                        class="text-base text-color surface-overlay  surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-1 m-0 flex align-items-center justify-content-center'>
                    <h3
                        class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        5</h3>
                </div>
                <div class='field col-12 md:col-4 m-0'>
                    <h3
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-solid border-round appearance-none outline-none focus:border-primary w-full">
                        Area Public / Koridor</h3>
                </div>
                <div class='field col-12 md:col-4 m-0 flex align-items-center justify-content-center'>
                    <ToggleButton id="instalasi" v-model="formCopy.attributes.areapublic"
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-3 m-0 flex align-items-center justify-content-center'>
                    <InputText id="alamat" v-model="formCopy.attributes.areapublicketer"
                        class="text-base text-color surface-overlay  surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-6 m-0'>
                    <h3
                        class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        Civil/Electrical/MEP/VAC</h3>
                </div>
                <div class='field col-12 md:col-6 m-0 '>
                    <h3
                        class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full ">
                        Engineering</h3>
                </div>
                <div class='field col-12 md:col-1 m-0 flex align-items-center justify-content-center'>
                    <h3
                        class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        6</h3>
                </div>
                <div class='field col-12 md:col-4 m-0'>
                    <h3
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-solid border-round appearance-none outline-none focus:border-primary w-full">
                        Instalasi Listrik / Lighting Unit</h3>
                </div>
                <div class='field col-12 md:col-4 m-0 flex align-items-center justify-content-center'>
                    <ToggleButton id="instalasi" v-model="formCopy.attributes.listrik"
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-3 m-0 flex align-items-center justify-content-center'>
                    <InputText id="alamat" v-model="formCopy.attributes.listrikketer"
                        class="text-base text-color surface-overlay  surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-1 m-0 flex align-items-center justify-content-center'>
                    <h3
                        class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        7</h3>
                </div>
                <div class='field col-12 md:col-4 m-0'>
                    <h3
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-solid border-round appearance-none outline-none focus:border-primary w-full">
                        Sistem Exhaust</h3>
                </div>
                <div class='field col-12 md:col-4 m-0 flex align-items-center justify-content-center'>
                    <ToggleButton id="instalasi" v-model="formCopy.attributes.exhaust"
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-3 m-0 flex align-items-center justify-content-center'>
                    <InputText id="alamat" v-model="formCopy.attributes.exhaustketer"
                        class="text-base text-color surface-overlay  surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-1 m-0 flex align-items-center justify-content-center'>
                    <h3
                        class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        8</h3>
                </div>
                <div class='field col-12 md:col-4 m-0'>
                    <h3
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-solid border-round appearance-none outline-none focus:border-primary w-full">
                        Instalasi Air Bersih & Saluran Pembuangan</h3>
                </div>
                <div class='field col-12 md:col-4 m-0 flex align-items-center justify-content-center'>
                    <ToggleButton id="instalasi" v-model="formCopy.attributes.airbersih"
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-3 m-0 flex align-items-center justify-content-center'>
                    <InputText id="alamat" v-model="formCopy.attributes.airbersihketer"
                        class="text-base text-color surface-overlay  surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-1 m-0 flex align-items-center justify-content-center'>
                    <h3
                        class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        9</h3>
                </div>
                <div class='field col-12 md:col-4 m-0'>
                    <h3
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-solid border-round appearance-none outline-none focus:border-primary w-full">
                        Instalasi Gas</h3>
                </div>
                <div class='field col-12 md:col-4 m-0 flex align-items-center justify-content-center'>
                    <ToggleButton id="instalasi" v-model="formCopy.attributes.gas"
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-3 m-0 flex align-items-center justify-content-center'>
                    <InputText id="alamat" v-model="formCopy.attributes.gasketer"
                        class="text-base text-color surface-overlay  surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-6 m-0'>
                    <h3
                        class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        Tenant Relation</h3>
                </div>
                <div class='field col-12 md:col-6 m-0 '>
                    <h3
                        class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full ">
                        Tenant Relation Department</h3>
                </div>
                <div class='field col-12 md:col-1 m-0 flex align-items-center justify-content-center'>
                    <h3
                        class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        10</h3>
                </div>
                <div class='field col-12 md:col-4 m-0'>
                    <h3
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-solid border-round appearance-none outline-none focus:border-primary w-full">
                        Surat Perjanjian Kerjasama (SPK)</h3>
                </div>
                <div class='field col-12 md:col-4 m-0 flex align-items-center justify-content-center'>
                    <ToggleButton id="instalasi" v-model="formCopy.attributes.spk"
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-3 m-0 flex align-items-center justify-content-center'>
                    <InputText id="alamat" v-model="formCopy.attributes.spkketer"
                        class="text-base text-color surface-overlay  surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-6 m-0'>
                    <h3
                        class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        Finance</h3>
                </div>
                <div class='field col-12 md:col-6 m-0 '>
                    <h3
                        class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full ">
                        Finance Department</h3>
                </div>
                <div class='field col-12 md:col-1 m-0 flex align-items-center justify-content-center'>
                    <h3
                        class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        11</h3>
                </div>
                <div class='field col-12 md:col-4 m-0'>
                    <h3
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-solid border-round appearance-none outline-none focus:border-primary w-full">
                        Pembayaran Deposit</h3>
                </div>
                <div class='field col-12 md:col-4 m-0 flex align-items-center justify-content-center'>
                    <ToggleButton id="instalasi" v-model="formCopy.attributes.deposit"
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-3 m-0 flex align-items-center justify-content-center'>
                    <InputText id="alamat" v-model="formCopy.attributes.depositketer"
                        class="text-base text-color surface-overlay  surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-1 m-0 flex align-items-center justify-content-center'>
                    <h3
                        class="flex align-items-center justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        12</h3>
                </div>
                <div class='field col-12 md:col-4 m-0'>
                    <h3
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-solid border-round appearance-none outline-none focus:border-primary w-full">
                        Lain-Lain</h3>
                </div>
                <div class='field col-12 md:col-4 m-0 flex align-items-center justify-content-center'>
                    <ToggleButton id="instalasi" v-model="formCopy.attributes.lainlain"
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-3 m-0 flex align-items-center justify-content-center'>
                    <InputText id="alamat" v-model="formCopy.attributes.lainlainketer"
                        class="text-base text-color surface-overlay  surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class='field col-12 md:col-12'>
                    <h3
                        class="text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full">
                        Informasi Printing</h3>
                </div>
                <div class="field col-12 md:col-4">
                    <label><span>Tenant Relation</span></label>
                    <InputText id="name" v-model="formCopy.attributes.tenant"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-4">
                    <label><span>Engineering</span></label>
                    <InputText id="name" v-model="formCopy.attributes.engineering"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field col-12 md:col-4">
                    <label><span>Management</span></label>
                    <InputText id="name" v-model="formCopy.attributes.management"
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
import Calendar from 'primevue/calendar';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import ToggleButton from 'primevue/togglebutton';
import { PDFDocument } from 'pdf-lib'
import pdfForm from '@/assets/pdfMarchand/IzinTokoMarchand.pdf'


let backend = new Backend();

export default {
    components: { Dialog, Button, ConfirmDialog, InputText, Dropdown, ToggleButton, Calendar },
    props: ['displayModal', 'form', 'refreshList', 'action'],
    res: null,
    data() {
        return {
            statusOptionsToko: ['Toko Baru', 'Toko Renovasi'],
            statusoptions: ['Batal', 'Aktif']
        };
    },
    methods: {
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
                formPdf.getTextField('year').setText(year ?? '')
                formPdf.getTextField('bln').setText(month ?? '')
                formPdf.getTextField('date').setText(day ?? '')

                formPdf.getTextField('toko').setText(this.form.attributes.namatoko ?? '')
                formPdf.getTextField('penyewa').setText(this.form.attributes.namapemilik ?? '')
                formPdf.getTextField('lantai').setText(this.form.attributes.lantaiunit ?? '')
                formPdf.getTextField('statustoko').setText(this.form.attributes.statustoko ?? '')

                if (this.formCopy.attributes.shopfront == 1) {
                    formPdf.getCheckBox('checkyes').check()
                }else {
                    formPdf.getCheckBox('checkno').check()
                }
                if (this.formCopy.attributes.lightdisplay == 1) {
                    formPdf.getCheckBox('checkyes1').check()
                }else {
                    formPdf.getCheckBox('checkno1').check()
                }
                if (this.formCopy.attributes.signage == 1) {
                    formPdf.getCheckBox('checkyes2').check()
                }else {
                    formPdf.getCheckBox('checkno2').check()
                }
                if (this.formCopy.attributes.mural == 1) {
                    formPdf.getCheckBox('checkyes3').check()
                }else {
                    formPdf.getCheckBox('checkno3').check()
                }
                if (this.formCopy.attributes.areapublic == 1) {
                    formPdf.getCheckBox('checkyes4').check()
                }else {
                    formPdf.getCheckBox('checkno4').check()
                }
                if (this.formCopy.attributes.listrik == 1) {
                    formPdf.getCheckBox('checkyes5').check()
                }else {
                    formPdf.getCheckBox('checkno5').check()
                }
                if (this.formCopy.attributes.exhaust == 1) {
                    formPdf.getCheckBox('checkyes6').check()
                }else {
                    formPdf.getCheckBox('checkno6').check()
                }
                if (this.formCopy.attributes.airbersih == 1) {
                    formPdf.getCheckBox('checkyes7').check()
                }else {
                    formPdf.getCheckBox('checkno7').check()
                }
                if (this.formCopy.attributes.gas == 1) {
                    formPdf.getCheckBox('checkyes8').check()
                }else {
                    formPdf.getCheckBox('checkno8').check()
                }
                if (this.formCopy.attributes.spk == 1) {
                    formPdf.getCheckBox('checkyes9').check()
                }else {
                    formPdf.getCheckBox('checkno9').check()
                }
                if (this.formCopy.attributes.deposit == 1) {
                    formPdf.getCheckBox('checkyes10').check()
                }else {
                    formPdf.getCheckBox('checkno10').check()
                }
                if (this.formCopy.attributes.lainlain == 1) {
                    formPdf.getCheckBox('checkyes11').check()
                }else {
                    formPdf.getCheckBox('checkno11').check()
                }

                formPdf.getTextField('shopketer').setText(this.form.attributes.shopfrontketer ?? '')
                formPdf.getTextField('lightketer').setText(this.form.attributes.lightdisplayketer ?? '')
                formPdf.getTextField('3dketer').setText(this.form.attributes.signageketer ?? '')
                formPdf.getTextField('muralketer').setText(this.form.attributes.muralketer ?? '')
                formPdf.getTextField('instalasiketer').setText(this.form.attributes.listrikketer ?? '')
                formPdf.getTextField('exhaustketer').setText(this.form.attributes.exhaustketer ?? '')
                formPdf.getTextField('airketer').setText(this.form.attributes.airbersihketer ?? '')
                formPdf.getTextField('gasketer').setText(this.form.attributes.gasketer ?? '')
                formPdf.getTextField('spkketer').setText(this.form.attributes.spkketer ?? '')
                formPdf.getTextField('dpketer').setText(this.form.attributes.depositketer ?? '')
                formPdf.getTextField('lainketer').setText(this.form.attributes.lainlainketer ?? '')
                formPdf.getTextField('areaketer').setText(this.form.attributes.areapublicketer ?? '')

                formPdf.getTextField('tenant').setText(this.form.attributes.namapemilik ?? '')
                formPdf.getTextField('relation').setText(this.form.attributes.tenant ?? '')
                formPdf.getTextField('management').setText(this.form.attributes.management ?? '')
                formPdf.getTextField('engineering').setText(this.form.attributes.engineering ?? '')



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
                    res = (await backend.izikTokoMarchand.newEntry(requestData));
                    } else {
                    res = (await backend.izikTokoMarchand.updateByID(idForm, requestData));
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
  