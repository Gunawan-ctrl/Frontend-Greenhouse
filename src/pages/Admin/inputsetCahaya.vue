<template>
  <q-page padding>
    <div class="row q-mb-sm col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
          <div class="col-auto">
          </div>
          <div class="col" style="max-width: fit-content;">
            <q-banner rounded inline-actions class="text-white bg-teal-10 q-px-md">
              <div class="text-h6">Input set Cahaya</div>
              <div>input set Cahaya greenhouse</div>
            </q-banner>
          </div>
        </div>
      </div>
    </div>

  <div class="q-pa-md" style="max-width: 400px">
    <q-form
    class="q-px-md q-gutter-sm"
      @submit="onSubmit"
    >
      <q-select
        filled
        key="ID_TANAMAN"
        v-model="tanaman"
        option-label="NAMA_TANAMAN"
        :options="optionTanaman"
        label="Data Tanaman"
      >
        <template v-slot:option="scope">
          <q-item v-bind="scope.itemProps">
            <q-item-section>
              <q-item-label caption>{{ scope.opt.NAMA_TANAMAN }}</q-item-label>
              <!-- <q-item-label>{{ scope.opt.GUID }}</q-item-label> -->
            </q-item-section>
          </q-item>
        </template>
      </q-select>
      <q-select
        filled
        key="DATA_SENSOR"
        v-model="alat"
        option-label="DATA_SENSOR"
        :options="optionAlat"
        label="Data Sensor"
      >
      <template v-slot:option="scope">
        <q-item v-bind="scope.itemProps">
          <q-item-section>
            <q-item-label>{{ scope.opt.DATA_SENSOR }}</q-item-label>
            <!-- <q-item-label>{{ scope.opt.NAMA_ALAT }}</q-item-label> -->
            <!-- <q-item-label caption>{{ scope.opt.MAC_ADDRESS }}</q-item-label> -->
          </q-item-section>
        </q-item>
      </template>
      </q-select>
      <!-- <q-input
        filled
        type="Date"
        v-model="TGL_GANTI_WARNA"
        label="Tanggal Ganti Warna"
      /> -->
      <q-input
        filled
        type="Date"
        class="q-mt-md"
        v-model="TGL_PANEN"
        label="Tanggal Panen"
      />
      <q-btn
        class="q-mt-lg"
        unelevated
        icon="add"
        label="Tambah Set Cahaya"
        color="teal-10"
        type="submit"/>

      <q-btn
        class="q-mt-lg"
        flat
        label="Kembali"
        to="setCahaya"
        color="teal-10"/>
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
      DATA_SENSOR: null,
      // ID_TANAMAN: null,
      // NAMA_ALAT: null,
      TGL_PANEN: null,
      // TGL_GANTI_WARNA: null,
      optionTanaman: [],
      optionAlat: [],
      tanaman: null,
      alat: null
    }
  },
  methods: {
    onSubmit () {
      // PAYLOAD Ganti
      const payload = {
        ID_TANAMAN: this.tanaman.GUID,
        ID_ALAT: this.alat.GUID,
        MAC_ADDRESS: this.alat.MAC_ADDRESS,
        ID_USER: this.$q.localStorage.getItem('dataUser').user.GUID,
        // TGL_GANTI_WARNA: this.TGL_GANTI_WARNA,
        TGL_PANEN: this.TGL_PANEN
      }
      // console.log(payload)
      api.post('cahaya/create', payload, createToken()
      )
      // END PAYLOAD GANTI
      // api.post('tanam/create', {
      //   ID_TANAMAN: this.tanaman.GUID,
      //   ID_ALAT: this.alat.GUID,
      //   MAC_ADDRESS: this.alat.MAC_ADDRESS,
      //   ID_USER: this.$q.localStorage.getItem('dataUser').user.GUID,
      //   SUHU_MINIMAL: this.SUHU_MINIMAL,
      //   SUHU_MAX: this.SUHU_MAX
      // }, createToken())
        .then((res) => {
          console.log(res)
          if (res.data.status === true) {
            this.$router.push('/setCahaya')
            this.$q.notify({
              message: res.data.message,
              color: 'teal-10',
              icon: 'ion-checkmark'
            })
          } else {
            this.$q.notify({
              message: res.data.message,
              color: 'teal-10',
              icon: 'ion-close'
            })
          }
        })
    },
    select () {
      api.get('/tanaman/getbyIdUser/' + this.$q.localStorage.getItem('dataUser').user.GUID, createToken())
        .then((res) => {
          if (res.data.status) {
            this.optionTanaman = res.data.data
          }
        })
    },
    selectAlat () {
      api.get('/alat/getByEmail/' + this.$q.localStorage.getItem('dataUser').user.EMAIL, createToken())
        .then((res) => {
          if (res.data.status) {
            this.optionAlat = res.data.data
          }
        })
    }
  },
  created () {
    this.select()
    this.selectAlat()
  }
}
</script>
<style scoped>
</style>
