<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="row items-center justify-center bg-grey-5">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pa-md">
            <q-item>
              <q-item-section class="text-center q-mb-xs">
                <q-item-label style="font-family:customfont;" class="text-h4 text-teal-10 text-bold">Green House UBL</q-item-label>
                <q-item-label caption class="text-white">Halaman Login Green House</q-item-label>
              </q-item-section>
            </q-item>
            <q-card class="row">
              <div class="col-md-6">
                <q-img src="~assets/backgroundgh.jpg" style="max-height: 500px"/>
              </div>
              <div class="col-6 q-mt-lg" style="max-height: 300px">
                <div class="row justify-center q-mt-sm">
                    <div class="col-md-8 q-pa-xs">
                      <q-form
                      @submit="onSubmit">
                        <div class="text-h6 text-teal-10 text-center">Login Account</div>
                          <q-input
                            label="EMAIL"
                            color="teal"
                            v-model="form.EMAIL"
                            :rules="[ val => val && val.length > 0 || 'silahkan masukkan email anda']"/>
                          <q-input
                            type="password"
                            label="PASSWORD"
                            color="teal"
                            v-model="form.PASSWORD"
                            :rules="[ val => val && val.length > 0 || 'silahkan masukkan password anda']"
                            >
                            <template v-slot:append>
                            </template>
                          </q-input>

                          <div class="q-mt-lg">
                            <q-btn class="full-width" unelevated color="teal" label="Login" rounded type="submit"/>
                            <q-btn class="full-width q-mt-md" flat unelevated color="teal" label="Registrasi" rounded :to="{ name: 'register' }"/>
                          </div>
                      </q-form>
                    </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { api } from 'src/boot/axios'
export default {
  data () {
    return {
      form: {
        EMAIL: null,
        PASSWORD: null
      }
    }
  },
  methods: {
    onSubmit () {
      api.post('/users/login', {
        EMAIL: this.form.EMAIL,
        PASSWORD: this.form.PASSWORD
      }).then((res) => {
        // console.log(res)
        if (res.data.data.user.ROLE === '1') {
          this.$q.localStorage.set('dataUser', res.data.data)
          this.$router.push('/')
          this.$q.notify({
            message: res.data.message,
            color: 'positive',
            icon: 'ion-close'
          })
        } else {
          this.$q.localStorage.set('dataUser', res.data.data)
          this.$router.push('/dashboardUser')
          this.$q.notify({
            message: res.data.message,
            color: 'green',
            icon: 'ion-close'
          })
        }
        console.log(res)
      })
    }
  }
}
</script>
