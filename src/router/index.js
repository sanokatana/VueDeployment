import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/Form/Internet',
    name: 'mazentaInternet',
    component: () => import('../views/internet/InternetForm.vue')
  },
  {
    path: '/VueDeployment/Form/IzinKerja',
    name: 'mazentaIzinKerja',
    component: () => import('../views/izinKerja/IzinKerjaForm.vue')
  },
  {
    path: '/Form/CC',
    name: 'mazentaCC',
    component: () => import('../views/cc/ccForm.vue')
  },
  {
    path: '/Form/RefundDeposit',
    name: 'mazentaRDP',
    component: () => import('../views/rdp/rdpForm.vue')
  },
  {
    path: '/Form/PengecekanAkhir',
    name: 'mazentaJPAP',
    component: () => import('../views/checking/checkingForm.vue')
  },
  {
    path: '/Form/DataPindah',
    name: 'mazentaDataPindah',
    component: () => import('../views/pindah/DataPindah.vue')
  },
  {
    path: '/Form/DataBaru',
    name: 'mazentaDataBaru',
    component: () => import('../views/dataBaru/DataBaru.vue')
  },
  {
    path: '/Form/PemesananKartu',
    name: 'mazentaKartuPem',
    component: () => import('../views/kartu/PemesananKartu.vue')
  },
  {
    path: '/Form/PerpanjanganKartu',
    name: 'mazentaKartu',
    component: () => import('../views/kartu/PerpanjanganKartu.vue')
  },
  {
    path: '/Form/SuratPernyataan',
    name: 'mazentaSurat',
    component: () => import('../views/pernyataan/suratPernyataan.vue')
  },


  // Marchand Routes 

  {
    path: '/Marchand/Internet',
    name: 'marchandInternet',
    component: () => import('../views/marchand/InternetFormMarchand.vue')
  },
  {
    path: '/Marchand/CC',
    name: 'marchandCC',
    component: () => import('../views/marchand/ccFormMarchand.vue')
  },
  {
    path: '/Marchand/IzinKerja',
    name: 'marchandKerja',
    component: () => import('../views/marchand/IzinKerjaForm.vue')
  },
  {
    path: '/Marchand/IzinBukaToko',
    name: 'marchandIzinToko',
    component: () => import('../views/marchand/izinTokoForm.vue')
  },
  {
    path: '/Marchand/DayaListrik',
    name: 'marchandDayaListrik',
    component: () => import('../views/marchand/dayaForm.vue')
  },
  {
    path: '/Marchand/RDP',
    name: 'marchandRDP',
    component: () => import('../views/marchand/rdpMarchand.vue')
  },
  {
    path: '/Marchand/PengambilanRefund',
    name: 'marchandRefundDp',
    component: () => import('../views/marchand/pengambilanDeposit.vue')
  },

  //


  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfilePage.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/setting/internetSetting',
    name: 'internetSetting',
    component: () => import('../views/internet/internetSetting.vue')
  },
  {
    path: '/setting/userSetting',
    name: 'userSetting',
    component: () => import('../views/UserSetting.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  let isLoggedIn = store.getters.getLoginState;
  let role = store.getters.getRole;

  // Check if the user is not logged in and trying to access a restricted route
  if (!isLoggedIn && to.name !== 'Login') {
    next({ name: 'Login' });
  } else {
    // Check if the user is trying to access a restricted route based on route name and role
    if (role === 'superadmin') {
      next();
    } else if ((to.name.includes('mazenta') || to.name.includes('banara') || to.name.includes('naraya')) &&
        !(role === 'mazentaAdmin' || role === 'banaraAdmin' || role === 'narayaAdmin')) {
      next({ name: 'Home' });
    } else if (to.name.includes('marchand') && role !== 'marchandAdmin') {
      next({ name: 'Home' });
    } else {
      next();
    }
  }
});

export default router
