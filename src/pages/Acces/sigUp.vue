<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="row items-center justify-center bg-grey-2">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pa-md">
            <q-card class="row col-xs-12">
              <div class="col-md-6 col-xs-12 q-mt-lg">
                <div class="row justify-center">
                    <div class="col-md-10 col-sm-12 q-pa-md">
                      <div class="text-h4 text-lime text-center">Register Account</div>
                      <div class="text-teal text-center q-pb-xl">Harap Isi Data Anda</div>

                    <q-form
                    @submit="onSubmit">
                        <q-input
                          label="username"
                          v-model="USERNAME"
                          color="lime"
                          lazy-rules
                          :rules="[ val => val && val.length > 0 || 'harap masukkan username anda']">
                          <template v-slot:prepend>
                            <q-icon name="person"  />
                          </template>
                        </q-input>

                        <q-input
                          label="nama green house"
                          v-model="NAMA_GREENHOUSE"
                          :rules="[ val => val && val.length > 0 || 'harap masukkan nama greenhouse anda']">
                          <template v-slot:prepend>
                            <q-icon name="group" />
                          </template>
                        </q-input>

                        <q-input
                          label="email"
                          v-model="EMAIL"
                          color="lime"
                          :rules="[ val => val && val.length > 0 || 'harap masukkan email anda']">
                          <template v-slot:prepend>
                            <q-icon name="mail" />
                          </template>
                        </q-input>

                        <q-input
                          label="alamat"
                          v-model="ALAMAT"
                          color="lime"
                          :rules="[ val => val && val.length > 0 || 'harap masukkan alamat anda']">
                          <template v-slot:prepend>
                            <q-icon name="home" />
                          </template>
                        </q-input>

                        <q-input
                          type="number"
                          v-model="NO_TELPON"
                          label="telp"
                          color="lime"
                          :rules="[ val => val && val.length > 0 || 'harap masukkan no telp anda']">
                          <template v-slot:prepend>
                          <q-icon name="call" />
                          </template>

                        </q-input>
                        <q-input
                          type="password"
                          v-model="PASSWORD"
                          label="password"
                          color="lime"
                          :rules="[ val => val && val.length > 0 || 'harap masukkan password anda']">
                          <template v-slot:append>
                            <q-icon
                              :name="isPwd ? 'visibility_off' : 'visibility'"
                              class="cursor-pointer"
                              @click="isPwd = !isPwd"
                            />
                          </template>
                          <template v-slot:prepend>
                          <q-icon name="lock"  />
                          </template>
                        </q-input>

                        <div class="q-mt-lg">
                          <q-btn flat label="login" class="q-ml-md items-center" unelevated color="teal-10" :to="{ name: 'login' }   "/>
                          <q-btn type="submit" outline class="items-center" color="green" label="register" unelevated align="right"/>
                        </div>
                      </q-form>
                    </div>

                  </div>
                </div>
                <div class="col-md-6" v-if="$q.screen.lg || $q.screen.xl || $q.screen.md">
                  <q-img src="~assets/greenhouse.jpg" />
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
      USERNAME: null,
      NAMA_GREENHOUSE: this.NAMA_GREENHOUSE,
      ALAMAT: this.ALAMAT,
      EMAIL: null,
      NO_TELPON: null,
      PASSWORD: null
    }
  },
  methods: {
    onSubmit () {
      api.post('users/create', {
        USERNAME: this.USERNAME,
        NAMA_GREENHOUSE: this.NAMA_GREENHOUSE,
        ALAMAT: this.ALAMAT,
        EMAIL: this.EMAIL,
        NO_TELPON: this.NO_TELPON,
        PASSWORD: this.PASSWORD,
        ROLE: '2'
      }).then((res) => {
        // console.log(res)
        if (res.data.status) {
          this.$q.notify({ color: 'teal-10', message: res.data.message, icon: 'ion-checkmark' })
          this.$router.push('/login')
        } else {
          this.$q.notify({ color: 'negative', message: res.data.message, icon: 'ion-close' })
        }
      })
    }
  }
}
</script>
