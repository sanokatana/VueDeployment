<template>
  <div class="flex align-items-center justify-content-center flex-wrap bg-ggi-red" style="height: 100vh">
    <div class="flex col-12 align-items-center justify-content-center flex-wrap">
      <div class="grid">
        <div class="col-12">
          <h1 class="text-white text-color flex-wrap">Welcome to PT. Griya Gardenia Indah</h1>
        </div>
      </div>
    </div>
    <div class="flex col-12 align-items-center justify-content-center flex-wrap">
      <Card class="col-3">
        <template #content>
          <form>
            <div class="p-fluid grid-nogutter">
              <div class="field col">
                <InputText placeholder="Username" type="text" v-model="username" class="login-input" />
              </div>
              <div class="field col">
                <Password v-model="password" :feedback="false" :toggleMask="true" placeholder="Password"
                  class="login-input" />
              </div>
              <div class="flex justify-content-end align-items-center grid-nogutter">
                <div class="col-4">
                  <Button type="submit" :label="isLoggedIn ? 'Successful' : 'Login'"
                    :icon="isLoading ? 'pi pi-spin pi-spinner' : 'pi pi-sign-in'" @click="handleLogin"
                    :disabled="isLoading" :class="{ 'p-button-success': isLoggedIn }" />
                </div>
              </div>
            </div>
          </form>
        </template>
      </Card>
    </div>
    <div class="flex align-items-center justify-content-center flex-wrap">
      <div class="flex col-12 align-items-center justify-content-center"><h1>Developed By:</h1></div>
      <div class="flex col-12 align-items-center justify-content-center "><img src="@/assets/logochl.png" class="login-logo"></div>
    </div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Backend from '@/backend';

let backend = new Backend();

export default {
  components: { Card, InputText, Password, Button, },
  data() {
    return {
      username: null,
      password: null,
      isLoading: false,
      isLoggedIn: false,
    }
  },
  methods: {
    async handleLogin() {
      this.isLoading = true
      try {
        let res = await backend.user.login({ identifier: this.username, password: this.password });
        let res1 = await backend.user.findByID(res.data.user.id)
        let loginDateCurrent = new Date()
        if (res.data.user.loginDateNew) {
          res.data.user.loginDate = res.data.user.loginDateNew;
        }
        const options = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          timeZone: 'Asia/Jakarta', // Set the time zone to GMT +7
          locale: 'id-ID' // Using Indonesian locale
        };

        const formattedDate = loginDateCurrent.toLocaleDateString('id-ID', options);
        res.data.user.loginDateNew = formattedDate
        console.log();
        const requestData = res.data.user;
        await backend.user.updateByID(requestData.id, requestData);
        this.isLoading = false;
        this.isLoggedIn = true;
        setTimeout(() => {
          this.$store.commit('adminDataInit', res1.data.id_project);
          this.$store.commit('login', res.data);
          this.$router.push({ name: 'Home' });
        }, 1000);

        if (this.isLoggedIn == true) {
          this.$toast.add({ severity: 'success', summary: 'Login Successful', detail: 'Thank you', life: 1000 });
        }
      } catch (err) {
        console.log(err);
        this.isLoading = false
        if (err.response.status === 400) {
          this.$toast.add({ severity: 'error', summary: 'Login error', detail: 'Incorrect username or password', life: 2000 });
        } else {
          this.$toast.add({ severity: 'error', summary: 'Login error', detail: err.message, life: 2000 });
        }
      }
    }
  }

}
</script>

<style scoped>
.login-logo {
  width: 45%;
}

.login-heading {
  font-size: 3rem;
  ;
}
</style>

