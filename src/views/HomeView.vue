<template>
  <div style="font-size: 16px;" class="flex col-12 mt-3">
  Login terakhir Anda adalah pada hari {{ this.lastLogin }}
  </div>
  <div class="text-ggi-red" style="font-size: 90px; text-align: center; vertical-align: middle; margin: 150px;">
    Welcome
  </div>
  <div class="flex col-12 align-items-center justify-content-center "><img src="@/assets/estate1.png" class="estate-logo"></div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      lastLogin: this.$store.getters.getLastLogin,
    }
  },
}
</script>
