<template>
  <div class="app">
    <NavigationBar v-if="isLoggedIn" />
    <Toast position="top-right" :baseZIndex="50" />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
// import NavigationBar from "./components/NavigationBar.vue";
import NavigationBar from "./components/sidebar/SideBar.vue";
import Toast from 'primevue/toast'

export default {
  name: 'App',
  components: { NavigationBar, Toast },
  computed: {
    isLoggedIn() {
      return this.$store.getters.getLoginState;
    }
  },
  beforeCreate() {
    this.$store.commit('initStore');
  }
}
</script>
