import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'
import 'primeflex/primeflex.css'
import 'primevue/resources/primevue.min.css'; // PrimeVue CSS
import 'primevue/resources/themes/saga-blue/theme.css'; // PrimeVue Theme CSS
import 'primeicons/primeicons.css'; // PrimeIcons CSS
import '@/style/styles.css';


const app = createApp(App);

app.use(PrimeVue)
   .use(router)
   .use(store)
   .use(ToastService)
   .use(ConfirmationService)
   .mount('#app');
