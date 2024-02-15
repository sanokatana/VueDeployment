<template>
    <div class="grid my-5 justify-content-center ">
        <Card class="col-3">
            <template #title>
                <h3 class="text-dgas-red my-0">My Profile</h3>
            </template>
            <template #content>
                <div class="fluid formgrid grid my-0 ">
                    <span class="float-label field col-12 my-4">
                        <InputText v-model="fullname" readonly />
                        <label class="ml-2">Full Name</label>
                    </span>
                    <span class="float-label field col-12 my-4">
                        <InputText v-model="username" readonly />
                        <label class="ml-2">Username</label>
                    </span>
                    <span class="float-label field col-12 my-4">
                        <InputText v-model="email" readonly />
                        <label class="ml-2">Email</label>
                    </span>
                </div>
                <div class="flex my-3">
                    <Button label="Change Password" icon="pi pi-lock" @click="displayModal = true" />
                </div>
            </template>
        </Card>
        <Dialog v-model:visible="displayModal" :modal="true" header="Change Your Password" style="width: 50vh">
            <form @submit.prevent="" class="formgrid grid my-0">
                <span class="field col-12 my-4">
                    <Password v-model="currentPass" :feedback="false" :toggleMask="true"
                        :class="{ 'p-invalid': !currentPass && isSubmitted }" />
                    <label class="ml-2">Current Password</label>
                </span>
                <span class="field col-12 my-4">
                    <Password v-model="newPass" :toggleMask="true" :class="{ 'p-invalid': !newPass && isSubmitted }" />
                    <label class="ml-2">New Password</label>
                </span>
                <span class="field col-12 my-4">
                    <Password v-model="confirmPass" :toggleMask="true"
                        :class="{ 'p-invalid': !confirmPass && isSubmitted }" />
                    <label class="ml-2">Confirm New Password</label>
                </span>
            </form>
            <template #footer>
                <Button label="Submit" icon="pi pi-check" @click="handlePassword()" />
            </template>
        </Dialog>
    </div>
</template>

<script>
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Password from 'primevue/password';
import Backend from '@/backend';

var backend = new Backend();

export default {
    components: { Dialog, InputText, Card, Button, Password },
    data() {
        return {
            fullname: this.$store.getters.getUser.fullname,
            username: this.$store.getters.getUser.username,
            email: this.$store.getters.getUser.email,
            displayModal: false,
            currentPass: null,
            newPass: null,
            confirmPass: null,
            isSubmitted: false,
            profileImg: null,
            isLoading: false
        }
    },
    watch: {
        displayModal() {
            this.currentPass = null;
            this.newPass = null;
            this.confirmPass = null;
        }
    },
    methods: {
        async handlePassword() {
            this.isSubmitted = true;
            try {
                await backend.user.changePassword({ currentPassword: this.currentPass, password: this.newPass, passwordConfirmation: this.confirmPass })
            } catch (err) {
                console.log(err);
                this.$toast.add({
                    severity: 'error',
                    summary: 'Change password failed',
                    detail: '• Incorrect current password',
                    life: 5000
                });
            } finally {
                this.displayModal = false;
                this.$toast.add({
                    severity: 'success',
                    summary: 'Change password successful!',
                    detail: 'You can sign in with the new password next time',
                    life: 3000
                });
            }
        },
        getErrors() {
            let err = [];
            this.v$.$silentErrors.map(error => err.push(`• ${error.$message}`));
            this.$toast.add({
                severity: 'error',
                summary: 'Change password failed',
                detail: err.join('\n'),
                life: 5000
            });
            return console.log(err);
        }
    },
}
</script>

<style scoped>
.profile-picture {
    border-radius: 20px;
}
</style>