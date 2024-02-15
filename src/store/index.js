import { createStore } from 'vuex'

export default createStore({
  state: {
    jwt: null,
    user: null,
    adminData: null
  },
  mutations: {

    initStore(state) {
      state.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
      state.jwt = localStorage.getItem('jwt') ? JSON.parse(localStorage.getItem('jwt')) : null;
      state.adminData = localStorage.getItem('adminData') ? JSON.parse(localStorage.getItem('adminData')) : null;
    },

    login(state, data) {
      state.user = data.user;
      state.jwt = data.jwt;
      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('jwt', JSON.stringify(state.jwt));
    },

    adminDataInit(state, data){
      state.adminData = data
      localStorage.setItem('adminData', JSON.stringify(state.adminData));
    }
,
    logout(state) {
      state.jwt = null;
      state.user = null;
      state.adminData = null;
      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('jwt', JSON.stringify(state.jwt));
      localStorage.setItem('adminData', JSON.stringify(state.adminData));
    },

  },
  actions: {
  },
  modules: {
  },
  getters: {
    getUser: state => state.user,
    getJWT: state => state.jwt,
    getLoginState: state => (state.user != null),
    getUsername: state => state.user ? state.user.fullname : null,
    getProject: state => state.adminData ? state.adminData.id : null,
    getRole: state => state.adminData ? state.adminData.name : null,
    getLastLogin: state => state.user ? state.user.loginDate : null,
  }
})
