<template>
  <q-page padding>
    <div class="row q-mb-sm col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
          <div class="col-auto">
          </div>
          <div class="col" style="max-width: fit-content;">
            <q-banner rounded inline-actions class="text-white bg-teal-10">
              <div class="text-h6">Edit Alat</div>
              <div>edit alat greenhouse</div>
            </q-banner>
          </div>
        </div>
      </div>
    </div>
    <div class="q-pa-md" style="max-width: 400px">
    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >

      <q-input
        filled
        v-model="MAC_ADDRESS"
        label="Mac Address"
        lazy-rules
        :rules="[ val => val !== null && val !== '' || 'Silahkan masukkan mac address'
        ]"
      />
      <q-select
        filled
        v-model="DATA_SENSOR"
        :options="optionSensor"
        label="Pilih Sensor"
      />
      <q-input
        filled
        v-model="EMAIL"
        label="Email"
        lazy-rules
        :rules="[
        val => val !== null && val !== '' || 'Silahkan masukkan nama alat'
        ]"
      />

      <div>
        <q-btn
        label="Ubah Data Alat"
        icon="add"
        type="submit"
        color="teal-10"/>
        <q-btn
        flat
        label="Kembali"
        :to="{ name:'dataAlat' }"
        color="teal-10" />
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
      DATA_SENSOR: null,
      optionSensor: [
        'Sensor Suhu',
        'Sensor Soil',
        'Sensor Cahaya',
        'Sensor Ketingian air'
      ],
      EMAIL: null
    }
  },
  methods: {
    onSubmit () {
      api.put(`alat/${this.$route.params.guid}`, {
        MAC_ADDRESS: this.MAC_ADDRESS,
        DATA_SENSOR: this.DATA_SENSOR,
        EMAIL: this.EMAIL
      }, createToken())
        .then((res) => {
          // console.log(res)
          if (res.data.status) {
            this.$q.notify({
              color: 'teal-10',
              message: res.data.message,
              icon: 'ion-checkmark'
            })
            this.$router.push('/dataAlat')
          } else {
            this.$q.notify({
              color: 'teal-10',
              message: res.data.message,
              icon: 'ion-close'
            })
          }
        })
    },
    dataAlat () {
      api.get(`alat/${this.$route.params.guid}`, createToken())
        .then((res) => {
          // console.log(res.data.data)
          this.MAC_ADDRESS = res.data.data.MAC_ADDRESS
          this.DATA_SENSOR = res.data.data.DATA_SENSOR
          this.EMAIL = res.data.data.EMAIL
        })
    }
  },
  mounted () {
    this.dataAlat()
  }
}
</script>

<style scoped>
</style>
