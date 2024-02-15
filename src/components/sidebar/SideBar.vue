<script>
import { collapsed, toggleSidebar, sidebarWidth } from './state.js'
import Button from 'primevue/button';
import PanelMenu from 'primevue/panelmenu';
import SplitButton from 'primevue/splitbutton';

export default {
    props: {},
    components: { Button, PanelMenu, SplitButton },
    setup() {
        return { collapsed, toggleSidebar, sidebarWidth }
    },
    data() {
        return {
            fullname: null,
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-home',
                    click: () => this.$router.push('/'),
                },
                {
                    label: this.getFormLabelCustomer(),
                    visible: this.role('mazentaAdmin') || this.role('banaraAdmin') || this.role('narayaAdmin') || this.role('superadmin'),
                    icon: 'pi pi-fw pi-user',
                    class: 'ggi-nav-item',
                    items: [
                        {
                            label: 'Pemasangan & Pemutusan Internet',
                            visible: this.role('mazentaAdmin') || this.role('banaraAdmin') || this.role('narayaAdmin') || this.role('superadmin'),
                            icon: 'pi pi-wifi',
                            click: () => this.$router.push('/Form/Internet'),
                            class: 'ggi-nav-item',
                        },

                        {
                            label: 'Pengajuan Izin Kerja',
                            visible: this.role('mazentaAdmin') || this.role('banaraAdmin') || this.role('narayaAdmin') || this.role('superadmin'),
                            icon: 'pi pi-fw pi-briefcase',
                            click: () => this.$router.push('/VueDeployment/Form/IzinKerja'),
                            class: 'ggi-nav-item',
                        },
                        {
                            label: 'Form Keluhan Pelanggan',
                            visible: this.role('mazentaAdmin') || this.role('banaraAdmin') || this.role('narayaAdmin') || this.role('superadmin'),
                            icon: 'pi pi-comments',
                            to: '/Form/CC',
                            class: 'ggi-nav-item '
                        },
                        {
                            label: 'Form Refund Deposit Renovasi Estate',
                            visible: this.role('mazentaAdmin') || this.role('banaraAdmin') || this.role('narayaAdmin') || this.role('superadmin'),
                            icon: 'pi pi-fw pi-money-bill',
                            to: '/Form/RefundDeposit',
                            class: 'ggi-nav-item '
                        },
                        {
                            label: 'Data Pemilik/Penghuni/ Warga Pindah',
                            visible: this.role('mazentaAdmin') || this.role('banaraAdmin') || this.role('narayaAdmin') || this.role('superadmin'),
                            icon: 'pi pi-fw pi-send',
                            to: '/Form/DataPindah',
                            class: 'ggi-nav-item '
                        },
                        {
                            label: 'Data Penyewa/Penghuni/ Warga Baru',
                            visible: this.role('mazentaAdmin') || this.role('banaraAdmin') || this.role('narayaAdmin') || this.role('superadmin'),
                            icon: 'pi pi-fw pi-file-export',
                            to: '/Form/DataBaru',
                            class: 'ggi-nav-item '
                        },
                        {
                            label: 'Surat Pernyataan Warga Pengerjaan Renovasi',
                            visible: this.role('mazentaAdmin') || this.role('banaraAdmin') || this.role('narayaAdmin') || this.role('superadmin'),
                            icon: 'pi pi-fw pi-info',
                            to: '/Form/SuratPernyataan',
                            class: 'ggi-nav-item '
                        },
                        {
                            label: 'Customer Forms Marchand',
                            visible: this.role('superadmin'),
                            icon: 'pi pi-fw pi-user',
                            class: 'ggi-nav-item',
                            items: [
                                {
                                    label: 'Pemasangan & Pemutusan Internet',
                                    visible: this.role('superadmin'),
                                    icon: 'pi pi-wifi',
                                    to: '/Marchand/Internet',
                                    class: 'ggi-nav-item'
                                },
                                {
                                    label: 'Form Keluhan Pelanggan',
                                    visible: this.role('superadmin'),
                                    icon: 'pi pi-fw pi-comments',
                                    to: '/Marchand/CC',
                                    class: 'ggi-nav-item'
                                },
                                {
                                    label: 'Form Pengajuan Izin Kerja',
                                    visible: this.role('superadmin'),
                                    icon: 'pi pi-fw pi-cog',
                                    to: '/Marchand/IzinKerja',
                                    class: 'ggi-nav-item'
                                },
                                {
                                    label: 'Form Permohonan Penambahan Daya Listrik',
                                    visible: this.role('superadmin'),
                                    icon: 'pi pi-fw pi-bolt',
                                    to: '/Marchand/DayaListrik',
                                    class: 'ggi-nav-item'
                                },
                                {
                                    label: 'Form Pengajuan Refund Deposit Fit Out',
                                    visible: this.role('superadmin'),
                                    icon: 'pi pi-money-bill',
                                    to: '/Marchand/RDP',
                                    class: 'ggi-nav-item'
                                },
                            ]
                        },
                    ]
                },
                {
                    label: this.getFormLabelAdmin(),
                    visible: this.role('mazentaAdmin') || this.role('banaraAdmin') || this.role('narayaAdmin') || this.role('superadmin'),
                    icon: 'pi pi-fw pi-user',
                    class: 'ggi-nav-item',
                    items: [
                        {
                            label: 'Formulir Jadwal Pengecekan Akhir Pembangunan / Renovasi',
                            visible: this.role('mazentaAdmin') || this.role('banaraAdmin') || this.role('narayaAdmin') || this.role('superadmin'),
                            icon: 'pi pi-fw pi-check-square',
                            to: '/Form/PengecekanAkhir',
                            class: 'ggi-nav-item'
                        },
                        {
                            label: 'Pemesanan Kartu Akses Masuk',
                            visible: this.role('mazentaAdmin') || this.role('banaraAdmin') || this.role('narayaAdmin') || this.role('superadmin'),
                            icon: 'pi pi-fw pi-reply',
                            to: '/Form/PemesananKartu',
                            class: 'ggi-nav-item'
                        },
                        {
                            label: 'Perpanjangan Kartu Akses',
                            visible: this.role('mazentaAdmin') || this.role('banaraAdmin') || this.role('narayaAdmin') || this.role('superadmin'),
                            icon: 'pi pi-fw pi-forward',
                            to: '/Form/PerpanjanganKartu',
                            class: 'ggi-nav-item'
                        },
                        {
                            label: 'Admin Forms Marchand',
                            visible: this.role('superadmin'),
                            icon: 'pi pi-fw pi-user',
                            class: 'ggi-nav-item',
                            items: [
                                {
                                    label: 'Surat Permohonan Izin Buka Toko',
                                    visible: this.role('superadmin'),
                                    icon: 'pi pi-fw pi-cog',
                                    to: '/Marchand/IzinBukaToko',
                                    class: 'ggi-nav-item'
                                },
                                {
                                    label: 'Form Berita Acara Pengembalian Security Deposit Fitout',
                                    visible: this.role('superadmin'),
                                    icon: 'pi pi-fw pi-pound',
                                    to: '/Marchand/PengambilanRefund',
                                    class: 'ggi-nav-item'
                                },
                            ]
                        },
                    ]
                },
                // {
                //     label: 'Marchand Forms',
                //     visible: this.role('superadmin'),
                //     icon: 'pi pi-fw pi-user',
                //     class: 'ggi-nav-item',
                //     items: [
                //         {
                //             label: 'Pemasangan & Pemutusan Internet',
                //             visible: this.role('superadmin'),
                //             icon: 'pi pi-wifi',
                //             to: '/Marchand/Internet',
                //             class: 'ggi-nav-item'
                //         },
                //         {
                //             label: 'Form Keluhan Pelanggan',
                //             visible: this.role('superadmin'),
                //             icon: 'pi pi-fw pi-comments',
                //             to: '/Marchand/CC',
                //             class: 'ggi-nav-item'
                //         },
                //         {
                //             label: 'Pengajuan Izin Kerja',
                //             visible: this.role('superadmin'),
                //             icon: 'pi pi-fw pi-cog',
                //             to: '/Marchand/IzinKerja',
                //             class: 'ggi-nav-item'
                //         },
                //         {
                //             label: 'Surat Permohonan Izin Buka Toko',
                //             visible: this.role('superadmin'),
                //             icon: 'pi pi-fw pi-cog',
                //             to: '/Marchand/IzinBukaToko',
                //             class: 'ggi-nav-item'
                //         },
                //         {
                //             label: 'Form Permohonan Penambahan Daya Listrik',
                //             visible: this.role('superadmin'),
                //             icon: 'pi pi-fw pi-bolt',
                //             to: '/Marchand/DayaListrik',
                //             class: 'ggi-nav-item'
                //         },
                //         {
                //             label: 'Form Pengajuan Refund Deposit Fit Out',
                //             visible: this.role('superadmin'),
                //             icon: 'pi pi-money-bill',
                //             to: '/Marchand/RDP',
                //             class: 'ggi-nav-item'
                //         },
                //         {
                //             label: 'Form Berita Acara Pengembalian Security Deposit Fitout',
                //             visible: this.role('superadmin'),
                //             icon: 'pi pi-fw pi-pound',
                //             to: '/Marchand/PengambilanRefund',
                //             class: 'ggi-nav-item'
                //         },
                //     ]
                // },
                // Marchand Navigation
                {
                    label: 'Customer Forms',
                    visible: this.role('marchandAdmin'),
                    icon: 'pi pi-fw pi-user',
                    class: 'ggi-nav-item',
                    items: [
                        {
                            label: 'Pemasangan & Pemutusan Internet',
                            visible: this.role('marchandAdmin'),
                            icon: 'pi pi-wifi',
                            to: '/Marchand/Internet',
                            class: 'ggi-nav-item'
                        },
                        {
                            label: 'Form Keluhan Pelanggan',
                            visible: this.role('marchandAdmin'),
                            icon: 'pi pi-fw pi-comments',
                            to: '/Marchand/CC',
                            class: 'ggi-nav-item'
                        },
                        {
                            label: 'Form Pengajuan Izin Kerja',
                            visible: this.role('marchandAdmin'),
                            icon: 'pi pi-fw pi-cog',
                            to: '/Marchand/IzinKerja',
                            class: 'ggi-nav-item'
                        },
                        {
                            label: 'Form Permohonan Penambahan Daya Listrik',
                            visible: this.role('marchandAdmin'),
                            icon: 'pi pi-fw pi-bolt',
                            to: '/Marchand/DayaListrik',
                            class: 'ggi-nav-item'
                        },
                        {
                            label: 'Form Pengajuan Refund Deposit Fit Out',
                            visible: this.role('marchandAdmin'),
                            icon: 'pi pi-money-bill',
                            to: '/Marchand/RDP',
                            class: 'ggi-nav-item'
                        },
                    ]
                },
                {
                    label: 'Admin Forms',
                    visible: this.role('marchandAdmin'),
                    icon: 'pi pi-fw pi-user',
                    class: 'ggi-nav-item',
                    items: [
                        {
                            label: 'Surat Permohonan Izin Buka Toko',
                            visible: this.role('marchandAdmin'),
                            icon: 'pi pi-fw pi-cog',
                            to: '/Marchand/IzinBukaToko',
                            class: 'ggi-nav-item'
                        },
                        {
                            label: 'Form Berita Acara Pengembalian Security Deposit Fitout',
                            visible: this.role('marchandAdmin'),
                            icon: 'pi pi-fw pi-pound',
                            to: '/Marchand/PengambilanRefund',
                            class: 'ggi-nav-item'
                        },
                    ]
                },
                {
                    label: 'Setting',
                    visible: this.role('superadmin'),
                    icon: 'pi pi-fw pi-cog',
                    class: 'ggi-nav-item',
                    items: [
                        {
                            visible: this.role('superadmin'),
                            label: 'Internet Setting',
                            icon: 'pi pi-wifi',
                            to: '/setting/internetSetting'
                        },
                        {
                            visible: this.role('superadmin'),
                            label: 'User Setting',
                            icon: 'pi pi-fw pi-user',
                            to: '/setting/userSetting'
                        },
                    ]
                },
            ],
            splitMenu: [
                {
                    label: 'Profile',
                    icon: '',
                    to: '/profile'

                },
                {
                    separator: true
                },
                {
                    label: 'Sign Out',
                    icon: 'pi pi-sign-out',
                    command: () => this.handleLogout()
                }
            ],
        };
    },
    methods: {
        getFormLabelCustomer() {
            if (this.role('superadmin')) {
                return 'Customer Forms Mazenta/Banara/Naraya';
            } else {
                return 'Customer Forms';
            }
        },
        getFormLabelAdmin() {
            if (this.role('superadmin')) {
                return 'Admin Forms Mazenta/Banara/Naraya';
            } else {
                return 'Admin Forms';
            }
        },
        handleLogout() {
            this.$router.push({ name: 'Login' });
            this.$store.commit('logout');
        },
        role(role) {
            return this.$store.getters.getRole === role;

        },
        goToProfile() {
            this.$router.push({ name: 'profile' });
        },
        goToInternet() {
            this.$router.push({ name: 'internetSetting' });
        }
    },
    mounted() {
        this.fullname = this.$store.getters.getUser.fullname;
    },
}
</script>

<template>
    <div class="sidebar" :style="{ width: sidebarWidth }">
        <h1>
            <span v-if="collapsed">
            </span>
            <span v-else>
                <span class="flex justify-content-center -mt-3">E-Management</span>
                <PanelMenu :model="items" multiple />
            </span>
            <SplitButton :label="fullname" icon="pi pi-user" :model="splitMenu" class="absolute top-0 right-0 pt-3"
                style="width: 200px;" @click="goToProfile()" />
        </h1>
        <Button class="collapse-icon w-3rem" :class="{ 'rotate-180': collapsed }" icon='pi pi-angle-double-left'
            @click="toggleSidebar" />
    </div>
</template>

<style>
:root {
    --sidebar-bg-color: #ce9661;
    --sidebar-item-hover: #ce9661;
    --sidebar-item-active: #ce9661;
}
</style>

<style scoped>
.sidebar {
    color: white;
    background-color: var(--sidebar-bg-color);
    width: 200px;
    padding: 0.5em;
    transition: 0.3s ease;
}

.sidebar h1 {
    height: 2.5em;
}

.collapse-icon {
    position: absolute;
    bottom: 0;
    color: rgba(0, 0, 0, 0.7);
    transition: 0.2s linear;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}
</style>