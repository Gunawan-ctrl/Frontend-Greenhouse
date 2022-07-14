<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="row items-center justify-center bg-grey">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pa-md">
            <q-item>
              <q-item-section class="text-center q-mb-xs">
                <q-item-label style="font-family:customfont;" class="text-h4 text-teal-10 text-bold">Green House UBL</q-item-label>
                <q-item-label caption class="text-h4 text-teal-10">Halaman Login Green House</q-item-label>
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
                      @submit="login">
                        <div class="text-h6 text-teal-10 text-center">Login Account</div>
                          <q-input
                            label="EMAIL" color="teal" v-model="EMAIL"/>
                          <q-input type="PASSWORD" label="PASSWORD" color="teal" v-model="PASSWORD"/>
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
      EMAIL: null,
      PASSWORD: null
    }
  },
  methods: {
    async login () {
      try {
        // START CONTOH KAK BRAM

        api.post('users/login', {
          EMAIL: this.EMAIL,
          PASSWORD: this.PASSWORD
        }).then((res) => {
          if (res.data.data.user.ROLE === 'user') {
            console.log('user')
          } else if (res.data.data.user.ROLE === 'admin') {
            console.log('admin')
          } else {
            this.$notify({ message: 'access denied', color: 'negative' })
            console.log('access denied')
          }

          // END CONTOH KAK BRAM

          // if (res.data.data.user.ROLE === 'user') {
          //   this.$router.push({ name: 'dashboardUser' })
          // if (res.data.data.user.ROLE === 1) {
          //   this.$router.push({ name: 'dashboardUser' })
          // } else {
          //   this.$router.push({ name: 'data' })
          // }
          // } else {
          //   this.$q.notify({ message: res.data.message, color: 'negative' })
          // }
        })
        // const response = await api.post('users/login', {
        //   EMAIL: this.EMAIL,
        //   PASSWORD: this.PASSWORD
        // })
        // console.log(response.data)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
