<template>
  <q-page>
    <div class="row q-mb-sm col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
          <div class="col-auto">
          </div>
          <div class="col" style="max-width: fit-content;">
            <q-banner rounded inline-actions class="text-white bg-teal-10">
              <div class="text-h6">Input Alat</div>
              <div>input alat greenhouse</div>
            </q-banner>
          </div>
        </div>
      </div>
    </div>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form
    class="q-gutter"
      @submit="onSubmit"
    >
      <q-input
      filled
      v-model="MAC_ADDRESS"
      label="Mac Address"
      :rules="[ val => val && val.length > 0 || 'silahkan masukkan mac address anda']"
      />
      <!-- <q-input
      filled
      v-model="NAMA_ALAT"
      label="Nama Alat"
      :rules="[ val => val && val.length > 0 || 'silahkan masukkan nama alat anda']"
      /> -->
      <q-select
        filled
        v-model="DATA_SENSOR"
        :options="optionSensor"
        label="Pilih Sensor"
      />
      <!-- <q-input
      class="q-mt-md"
      filled
      v-model="EMAIL"
      label="Email"
      :rules="[ val => val && val.length > 0 || 'silahkan masukkan nama email anda']"
      /> -->
        <div class="q-pa-md q-gutter-sm">
          <q-btn
            unelevated
            icon="add"
            label="Tambah Alat"
            color="teal-10" type="submit" />

          <q-btn
            flat
            label="Kembali"
            to="dataAlat"
            color="teal-10"/>
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
      MAC_ADDRESS: null,
      // NAMA_ALAT: null,
      EMAIL: null,
      DATA_SENSOR: null,
      optionSensor: [
        'Sensor Suhu',
        'Cahaya'
      ]
    }
  },
  methods: {
    onSubmit () {
      api.post('/alat/create', {
        MAC_ADDRESS: this.MAC_ADDRESS,
        // NAMA_ALAT: this.NAMA_ALAT,
        DATA_SENSOR: this.DATA_SENSOR,
        // EMAIL: this.EMAIL
        EMAIL: this.$q.localStorage.getItem('dataUser').user.EMAIL
      }, createToken()).then((res) => {
        console.log(res)
        if (res.data.status === true) {
          // this.$q.localStorage.set('dataAlat', res.data.data)
          this.$router.push('/dataAlat')
          // console.log('push')
          this.$q.notify({
            message: res.data.message,
            color: 'teal-10',
            icon: 'ion-checkmark'
          })
        } else {
          // this.$q.localStorage.set('dataTanamanUser', res.data.data)
          this.$q.notify({
            message: res.data.message,
            color: 'teal-10',
            icon: 'ion-close'
          })
        }
      })
    }
  }
}
</script>
<style scoped>
</style>
