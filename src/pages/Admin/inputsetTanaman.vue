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
    <!-- <q-expansion-item> -->
      <q-select
        filled
        key="NAMA_TANAMAN"
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
      <!-- </q-expansion-item> -->
      <q-select
        filled
        key="ID_ALAT"
        v-model="alat"
        option-label="DATA_SENSOR"
        :options="optionAlat"
        label="Data Sensor"
      >
      <template v-slot:option="scope">
        <q-item v-bind="scope.itemProps">
          <q-item-section>
            <q-item-label>{{ scope.opt.DATA_SENSOR }}</q-item-label>
            <q-item-label caption>{{ scope.opt.GUID }}</q-item-label>
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
          unelevated
          icon="add"
          label="Tambah Set Tanaman"
          color="teal-10"
          type="submit"/>

        <q-btn
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
      ID_TANAMAN: null,
      ID_ALAT: null,
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
      api.post('tanam/create', {
        ID_TANAMAN: this.tanaman.GUID,
        ID_ALAT: this.alat.GUID,
        SUHU_MINIMAL: this.SUHU_MINIMAL,
        SUHU_MAX: this.SUHU_MAX
      }, createToken())
        .then((res) => {
          console.log(res)
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
          // console.log(Object.values(res))
          // this.data = object.values(res.data.data)
          // console.log(res)
        })
    },
    select () {
      api.get('tanaman/', createToken())
        .then((res) => {
          console.log(res)
          if (res.data.status) {
            this.optionTanaman = res.data.data
          }
          // for (let i = 0; i < res.data.data.length; i++) {
          //   this.optionTanaman.push(res.data.data[i].NAMA_TANAMAN)
          //   this.optionTanaman.push(res.data.data[i].GUID)
          // }
          // optionTanaman = JSON.stringify(res.data.data.toString())
          // console.log(this.optionTanaman)
          // const coba = (NAMA_TANAMAN  + GUID)
        })
    },
    selectAlat () {
      api.get('alat/', createToken())
        .then((res) => {
          if (res.data.status) {
            this.optionAlat = res.data.data
            // console.log(this.optionAlat)
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
