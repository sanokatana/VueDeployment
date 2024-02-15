import axios from 'axios';
import store from '@/store'

axios.defaults.baseURL = process.env.VUE_APP_DB_PATH // the prefix of the URL
axios.defaults.headers.get['Accept'] = 'application/json'   // default header for all get request
axios.defaults.headers.post['Accept'] = 'application/json'  // default header for all POST request

axios.interceptors.request.use(function (config) { // Initiate authorization header with token for every request
    const token = store.getters.getJWT;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    // if (config.url.includes("/upload")) config.headers['Content-Type'] = 'multipart/form-data';
    return config;
});

let limit = "_limit=-1&";

export default class Backend {

    get baseURL() {
        return process.env.VUE_APP_DB_PATH
    }

    get internetForm() {
        return {
            // find all
            findAll: (query = '') => axios.get(`/api/form-internet-mazentas?` + query),
            // count
            count: (query = '') => axios.get('/api/form-internet-mazentas/count?' + query),
            // register new
            newEntry: (data) => axios.post('/api/form-internet-mazentas', data),
            // find entry by ID
            findByID: (id) => axios.get(`/api/form-internet-mazentas/${id}`),
            // update entry by ID
            updateByID: (id, data) => axios.put(`/api/form-internet-mazentas/${id}?populate=internetID`, data),
            // delete entry by ID
            deleteByID: (id) => axios.delete(`/api/form-internet-mazentas/${id}`)
        }
    }
    get internetMarchand() {
        return {
            // find all
            findAll: (query = '') => axios.get(`/api/form-internet-marchands?` + query),
            // count
            count: (query = '') => axios.get('/api/form-internet-marchands/count?' + query),
            // register new
            newEntry: (data) => axios.post('/api/form-internet-marchands', data),
            // find entry by ID
            findByID: (id) => axios.get(`/api/form-internet-marchands/${id}`),
            // update entry by ID
            updateByID: (id, data) => axios.put(`/api/form-internet-marchands/${id}?populate=internetID`, data),
            // delete entry by ID
            deleteByID: (id) => axios.delete(`/api/form-internet-marchands/${id}`)
        }
    }
    get izinForm() {
        return {
            // find all
            findAll: (query = '') => axios.get(`/api/form-izin-mazentas?` + query),
            // count
            count: (query = '') => axios.get('/api/form-izin-mazentas/count?' + query),
            // register new
            newEntry: (data) => axios.post('/api/form-izin-mazentas', data),
            // find entry by ID
            findByID: (id) => axios.get(`/api/form-izin-mazentas/${id}`),
            // update entry by ID
            updateByID: (id, data) => axios.put(`/api/form-izin-mazentas/${id}?populate=internetID`, data),
            // delete entry by ID
            deleteByID: (id) => axios.delete(`/api/form-izin-mazentas/${id}`)
        }
    }
    get izinMarchand() {
        return {
            // find all
            findAll: (query = '') => axios.get(`/api/form-izin-marchands?` + query),
            // count
            count: (query = '') => axios.get('/api/form-izin-marchands/count?' + query),
            // register new
            newEntry: (data) => axios.post('/api/form-izin-marchands', data),
            // find entry by ID
            findByID: (id) => axios.get(`/api/form-izin-marchands/${id}`),
            // update entry by ID
            updateByID: (id, data) => axios.put(`/api/form-izin-marchands/${id}`, data),
            // delete entry by ID
            deleteByID: (id) => axios.delete(`/api/form-izin-marchands/${id}`)
        }
    }
    get ccForm() {
        return {
            // find all
            findAll: (query = '') => axios.get(`/api/form-cc-mazentas?` + query),
            // count
            count: (query = '') => axios.get('/api/form-cc-mazentas/count?' + query),
            // register new
            newEntry: (data) => axios.post('/api/form-cc-mazentas', data),
            // find entry by ID
            findByID: (id) => axios.get(`/api/form-cc-mazentas/${id}`),
            // update entry by ID
            updateByID: (id, data) => axios.put(`/api/form-cc-mazentas/${id}`, data),
            // delete entry by ID
            deleteByID: (id) => axios.delete(`/api/form-cc-mazentas/${id}`)
        }
    }
    get ccMarchand() {
        return {
            // find all
            findAll: (query = '') => axios.get(`/api/form-cc-marchands?` + query),
            // count
            count: (query = '') => axios.get('/api/form-cc-marchands/count?' + query),
            // register new
            newEntry: (data) => axios.post('/api/form-cc-marchands', data),
            // find entry by ID
            findByID: (id) => axios.get(`/api/form-cc-marchands/${id}`),
            // update entry by ID
            updateByID: (id, data) => axios.put(`/api/form-cc-marchands/${id}`, data),
            // delete entry by ID
            deleteByID: (id) => axios.delete(`/api/form-cc-marchands/${id}`)
        }
    }
    get rdpForm() {
        return {
            // find all
            findAll: (query = '') => axios.get(`/api/form-refund-mazentas?` + query),
            // count
            count: (query = '') => axios.get('/api/form-refund-mazentas/count?' + query),
            // register new
            newEntry: (data) => axios.post('/api/form-refund-mazentas', data),
            // find entry by ID
            findByID: (id) => axios.get(`/api/form-refund-mazentas/${id}`),
            // update entry by ID
            updateByID: (id, data) => axios.put(`/api/form-refund-mazentas/${id}`, data),
            // delete entry by ID
            deleteByID: (id) => axios.delete(`/api/form-refund-mazentas/${id}`)
        }
    }
    get jpapForm() {
        return {
            // find all
            findAll: (query = '') => axios.get(`/api/form-pengecekan-mazentas?` + query),
            // count
            count: (query = '') => axios.get('/api/form-pengecekan-mazentas/count?' + query),
            // register new
            newEntry: (data) => axios.post('/api/form-pengecekan-mazentas', data),
            // find entry by ID
            findByID: (id) => axios.get(`/api/form-pengecekan-mazentas/${id}`),
            // update entry by ID
            updateByID: (id, data) => axios.put(`/api/form-pengecekan-mazentas/${id}`, data),
            // delete entry by ID
            deleteByID: (id) => axios.delete(`/api/form-pengecekan-mazentas/${id}`)
        }
    }
    get internetRate() {
        return {
            // find all
            findAll: (query = '') => axios.get('/api/internets?' + query),
            // count
            count: () => axios.get('/api/internets/count'),
            // register new
            newEntry: (data) => axios.post('/api/internets', data),
            // find entry by ID
            findByID: (id) => axios.get(`/api/internets/${id}`),
            // update entry by ID
            updateByID: (id, data) => axios.put(`/api/internets/${id}`, data),
            // delete entry by ID
            deleteByID: (id) => axios.delete(`/api/internets/${id}`)
        }
    }
    get izikTokoMarchand() {
        return {
            // find all
            findAll: (query = '') => axios.get(`/api/form-toko-marchands?` + query),
            // count
            count: (query = '') => axios.get('/api/form-toko-marchands/count?' + query),
            // register new
            newEntry: (data) => axios.post('/api/form-toko-marchands', data),
            // find entry by ID
            findByID: (id) => axios.get(`/api/form-toko-marchands/${id}`),
            // update entry by ID
            updateByID: (id, data) => axios.put(`/api/form-toko-marchands/${id}`, data),
            // delete entry by ID
            deleteByID: (id) => axios.delete(`/api/form-toko-marchands/${id}`)
        }
    }
    get dayaMarchand() {
        return {
            // find all
            findAll: (query = '') => axios.get(`/api/form-daya-marchands?` + query),
            // count
            count: (query = '') => axios.get('/api/form-daya-marchands/count?' + query),
            // register new
            newEntry: (data) => axios.post('/api/form-daya-marchands', data),
            // find entry by ID
            findByID: (id) => axios.get(`/api/form-daya-marchands/${id}`),
            // update entry by ID
            updateByID: (id, data) => axios.put(`/api/form-daya-marchands/${id}`, data),
            // delete entry by ID
            deleteByID: (id) => axios.delete(`/api/form-daya-marchands/${id}`)
        }
    }
    get rdpMarchand() {
        return {
            // find all
            findAll: (query = '') => axios.get(`/api/form-refund-marchands?` + query),
            // count
            count: (query = '') => axios.get('/api/form-refund-marchands/count?' + query),
            // register new
            newEntry: (data) => axios.post('/api/form-refund-marchands', data),
            // find entry by ID
            findByID: (id) => axios.get(`/api/form-refund-marchands/${id}`),
            // update entry by ID
            updateByID: (id, data) => axios.put(`/api/form-refund-marchands/${id}`, data),
            // delete entry by ID
            deleteByID: (id) => axios.delete(`/api/form-refund-marchands/${id}`)
        }
    }
    get dataPindahForm() {
        return {
            // find all
            findAll: (query = '') => axios.get(`/api/form-data-pindah-mazentas?` + query),
            // count
            count: (query = '') => axios.get('/api/form-data-pindah-mazentas/count?' + query),
            // register new
            newEntry: (data) => axios.post('/api/form-data-pindah-mazentas', data),
            // find entry by ID
            findByID: (id) => axios.get(`/api/form-data-pindah-mazentas/${id}`),
            // update entry by ID
            updateByID: (id, data) => axios.put(`/api/form-data-pindah-mazentas/${id}`, data),
            // delete entry by ID
            deleteByID: (id) => axios.delete(`/api/form-data-pindah-mazentas/${id}`)
        }
    }
    get dataBaruForm() {
        return {
            // find all
            findAll: (query = '') => axios.get(`/api/form-data-baru-mazentas?` + query),
            // count
            count: (query = '') => axios.get('/api/form-data-baru-mazentas/count?' + query),
            // register new
            newEntry: (data) => axios.post('/api/form-data-baru-mazentas', data),
            // find entry by ID
            findByID: (id) => axios.get(`/api/form-data-baru-mazentas/${id}`),
            // update entry by ID
            updateByID: (id, data) => axios.put(`/api/form-data-baru-mazentas/${id}`, data),
            // delete entry by ID
            deleteByID: (id) => axios.delete(`/api/form-data-baru-mazentas/${id}`)
        }
    }
    get pemesananKartu() {
        return {
            // find all
            findAll: (query = '') => axios.get(`/api/form-pemasangan-kartus?` + query),
            // count
            count: (query = '') => axios.get('/api/form-pemasangan-kartus/count?' + query),
            // register new
            newEntry: (data) => axios.post('/api/form-pemasangan-kartus', data),
            // find entry by ID
            findByID: (id) => axios.get(`/api/form-pemasangan-kartus/${id}`),
            // update entry by ID
            updateByID: (id, data) => axios.put(`/api/form-pemasangan-kartus/${id}`, data),
            // delete entry by ID
            deleteByID: (id) => axios.delete(`/api/form-pemasangan-kartus/${id}`)
        }
    }
    get perpanjanganKartu() {
        return {
            // find all
            findAll: (query = '') => axios.get(`/api/form-perpanjangan-kartu-mazentas?` + query),
            // count
            count: (query = '') => axios.get('/api/form-perpanjangan-kartu-mazentas/count?' + query),
            // register new
            newEntry: (data) => axios.post('/api/form-perpanjangan-kartu-mazentas', data),
            // find entry by ID
            findByID: (id) => axios.get(`/api/form-perpanjangan-kartu-mazentas/${id}`),
            // update entry by ID
            updateByID: (id, data) => axios.put(`/api/form-perpanjangan-kartu-mazentas/${id}`, data),
            // delete entry by ID
            deleteByID: (id) => axios.delete(`/api/form-perpanjangan-kartu-mazentas/${id}`)
        }
    }
    get perpanjanganKartuNaraya() {
        return {
            // find all
            findAll: (query = '') => axios.get(`/api/form-perpanjangan-kartu-narayas?` + query),
            // count
            count: (query = '') => axios.get('/api/form-perpanjangan-kartu-narayas/count?' + query),
            // register new
            newEntry: (data) => axios.post('/api/form-perpanjangan-kartu-narayas', data),
            // find entry by ID
            findByID: (id) => axios.get(`/api/form-perpanjangan-kartu-narayas/${id}`),
            // update entry by ID
            updateByID: (id, data) => axios.put(`/api/form-perpanjangan-kartu-narayas/${id}`, data),
            // delete entry by ID
            deleteByID: (id) => axios.delete(`/api/form-perpanjangan-kartu-narayas/${id}`)
        }
    }
    get perpanjanganKartuBanara() {
        return {
            // find all
            findAll: (query = '') => axios.get(`/api/form-perpanjangan-kartu-banaras?` + query),
            // count
            count: (query = '') => axios.get('/api/form-perpanjangan-kartu-banaras/count?' + query),
            // register new
            newEntry: (data) => axios.post('/api/form-perpanjangan-kartu-banaras', data),
            // find entry by ID
            findByID: (id) => axios.get(`/api/form-perpanjangan-kartu-banaras/${id}`),
            // update entry by ID
            updateByID: (id, data) => axios.put(`/api/form-perpanjangan-kartu-banaras/${id}`, data),
            // delete entry by ID
            deleteByID: (id) => axios.delete(`/api/form-perpanjangan-kartu-banaras/${id}`)
        }
    }
    get suratPForm() {
        return {
            // find all
            findAll: (query = '') => axios.get(`/api/form-pernyataan-mazentas?` + query),
            // count
            count: (query = '') => axios.get('/api/form-pernyataan-mazentas/count?' + query),
            // register new
            newEntry: (data) => axios.post('/api/form-pernyataan-mazentas', data),
            // find entry by ID
            findByID: (id) => axios.get(`/api/form-pernyataan-mazentas/${id}`),
            // update entry by ID
            updateByID: (id, data) => axios.put(`/api/form-pernyataan-mazentas/${id}`, data),
            // delete entry by ID
            deleteByID: (id) => axios.delete(`/api/form-pernyataan-mazentas/${id}`)
        }
    }
    get pengambilanRefund() {
        return {
            // find all
            findAll: (query = '') => axios.get(`/api/form-pengambilan-marchands?` + query),
            // count
            count: (query = '') => axios.get('/api/form-pengambilan-marchands/count?' + query),
            // register new
            newEntry: (data) => axios.post('/api/form-pengambilan-marchands', data),
            // find entry by ID
            findByID: (id) => axios.get(`/api/form-pengambilan-marchands/${id}`),
            // update entry by ID
            updateByID: (id, data) => axios.put(`/api/form-pengambilan-marchands/${id}`, data),
            // delete entry by ID
            deleteByID: (id) => axios.delete(`/api/form-pengambilan-marchands/${id}`)
        }
    }
    get pengambilanTable() {
        return {
            // find all
            findAll: (query = '') => axios.get(`/api/pengambilan-tables?` + query),
            // count
            count: (query = '') => axios.get('/api/pengambilan-tables/count?' + query),
            // register new
            newEntry: (data) => axios.post('/api/pengambilan-tables', data),
            // find entry by ID
            findByID: (id, query) => axios.get(`/api/pengambilan-tables/${id}` + query),
            // update entry by ID
            updateByID: (id, data) => axios.put(`/api/pengambilan-tables/${id}`, data),
            // delete entry by ID
            deleteByID: (id) => axios.delete(`/api/pengambilan-tables/${id}`)
        }
    }
    get kerjaTable() {
        return {
            // find all
            findAll: (query = '') => axios.get(`/api/kerja-tables?` + query),
            // count
            count: (query = '') => axios.get('/api/kerja-tables/count?' + query),
            // register new
            newEntry: (data) => axios.post('/api/kerja-tables', data),
            // find entry by ID
            findByID: (id, query) => axios.get(`/api/kerja-tables/${id}` + query),
            // update entry by ID
            updateByID: (id, data) => axios.put(`/api/kerja-tables/${id}`, data),
            // delete entry by ID
            deleteByID: (id) => axios.delete(`/api/kerja-tables/${id}`)
        }
    }
    
    get user() {
        return {
            // Login
            login: (data) => axios.post('/api/auth/local', data),
            // Find all users
            findAll: (query = '') => axios.get('/api/users?' + limit + query),
            // Find a user by ID
            findByID: (id) => axios.get(`/api/users/${id}?populate=id_project`),
            // Update a user
            changePassword: (data) => axios.post('/api/auth/change-password', data),
            // Update User
            updateByID: (id, data) => axios.put(`/api/users/${id}`, data),
            // Create User
            newEntry: (data) => axios.post('/api/users', data),
            // delete entry
            deleteByID: (id) => axios.delete(`/api/users/${id}`)
        }
    }
}