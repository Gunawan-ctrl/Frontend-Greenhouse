<template>
  <q-page padding>
    <div class="row q-mb-md col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
          <div class="col-auto">
            <div class="left"></div>
          </div>
          <div class="col" style="max-width: fit-content;">
            <q-banner rounded inline-actions class="text-white bg-green-10">
              <div class="text-h6">Input Tanaman</div>
              <div>Input Tanaman Green House</div>
            </q-banner>
          </div>
        </div>
      </div>
    </div>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form
      @submit="InputTanamanUser"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="NAMA_TANAMAN"
        label="Nama Tanaman"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan nama tanaman anda']"
      />
      <q-input
        filled
        v-model="JENIS_TANAMAN"
        label="Jenis Tanaman"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan jenis tanaman anda']"
      />
      <q-input
        filled
        v-model="SUHU_MINIMAL"
        label="Suhu Minimal"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan suhu minimal tanaman anda']"
      />
      <q-input
        filled
        v-model="SUHU_MAX"
        label="Suhu Maksimal"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan suhu maksimal tanaman anda']"
      />
      <div>
        <q-btn
        icon="add"
        label="Tambah Tanaman"
        type="submit"
        color="green-10"/>
      </div>
    </q-form>
  </div>
  </q-page>
</template>

<script>
import createToken from 'src/helpers/create_token'
import { api } from 'src/boot/axios'
export default {
  data () {
    return {
      NAMA_TANAMAN: null,
      JENIS_TANAMAN: null,
      SUHU_MINIMAL: null,
      SUHU_MAX: null
    }
  },
  methods: {
    InputTanamanUser () {
      api.post('/tanaman/create', {
        NAMA_TANAMAN: this.NAMA_TANAMAN,
        JENIS_TANAMAN: this.JENIS_TANAMAN,
        SUHU_MINIMAL: this.SUHU_MINIMAL,
        SUHU_MAX: this.SUHU_MAX
      }, createToken()).then((res) => {
        // console.log(res)
        if (res.data.status === true) {
          this.$q.localStorage.set('dataTanamanUser', res.data.data)
          this.$router.push('/dataTanamanUser')
          this.$q.notify({
            message: res.data.message,
            color: 'positive',
            icon: 'ion-close'
          })
        } else {
          // this.$q.localStorage.set('dataTanamanUser', res.data.data)
          this.$q.notify({
            message: res.data.message,
            color: 'green',
            icon: 'ion-close'
          })
        }
      })
      // if (res.data.data) {
      //   this.$q.localStorage.set('inputTanamanUser', res.data.data)
      //   this.$router.push('/dataTanaman')
      // } else {
      //   this.$q.localStorage.set('inputTanaman', res.data.data)
      //   this.$router.push('/dashboardUser')
      //   console.log('user')
      // }
    },
    mounted () {
      this.InputTanamanUser()
    }
  }
}
</script>
