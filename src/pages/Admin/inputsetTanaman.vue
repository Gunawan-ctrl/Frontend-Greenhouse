<template>
  <q-page padding>
    <div class="row q-mb-sm col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
          <div class="col-auto">
          </div>
          <div class="col" style="max-width: fit-content;">
            <q-banner rounded inline-actions class="text-white bg-teal-10 q-px-md">
              <div class="text-h6">Input set Tanaman</div>
              <div>Input set Tanaman Green House</div>
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
              <q-item-label>{{ scope.opt.GUID }}</q-item-label>
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
            <q-item-label caption>{{ scope.opt.MAC_ADDRESS }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
      </q-select>
      <q-input
        filled
        type="number"
        v-model="SUHU_MINIMAL"
        label="Suhu Minimal"
      />
      <q-input
        filled
        class="q-mt-md"
        type="number"
        v-model="SUHU_MAX"
        label="Suhu Maksimal"
      />
      <q-btn
        class="q-mt-lg"
        unelevated
        icon="add"
        label="Tambah Set Tanaman"
        color="teal-10"
        type="submit"/>

      <q-btn
        class="q-mt-lg"
        flat
        label="Kembali"
        to="setTanaman"
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
      SUHU_MINIMAL: null,
      SUHU_MAX: null,
      optionTanaman: [],
      optionAlat: [],
      tanaman: null,
      alat: null
    }
  },
  methods: {
    onSubmit () {
      // console.log()
      const payload = {
        ID_TANAMAN: this.tanaman.GUID,
        ID_ALAT: this.alat.GUID,
        MAC_ADDRESS: this.alat.MAC_ADDRESS,
        SUHU_MINIMAL: this.SUHU_MINIMAL,
        SUHU_MAX: this.SUHU_MAX
      }
      console.log(payload)
      api.post('tanam/create', payload, createToken())
        .then((res) => {
          if (res.data.status === true) {
            this.$router.push('/setTanaman')
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
      api.get('tanaman/', createToken())
        .then((res) => {
          if (res.data.status) {
            this.optionTanaman = res.data.data
          }
        })
    },
    selectAlat () {
      api.get('alat/', createToken())
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
