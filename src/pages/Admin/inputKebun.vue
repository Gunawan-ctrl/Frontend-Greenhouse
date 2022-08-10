<template>
  <q-page>
    <div class="row q-mb-sm col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
          <div class="col-auto">
          </div>
          <div class="col" style="max-width: fit-content;">
            <q-banner rounded inline-actions class="text-white bg-teal-10">
              <div class="text-h6">Input Kebun</div>
              <div>Input Kebun Green House</div>
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
        v-model="NAMA_KEBUN"
        label="Nama Kebun"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan nama kebun anda']"
      />
      <q-input
        filled
        v-model="LUAS_LAHAN"
        label="Luas Lahan"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan luas lahan kebun anda']"
      />
      <div class="q-pa-md q-gutter-sm">
          <q-btn
            unelevated
            icon="add"
            label="Tambah Kebun"
            color="teal-10" type="submit" :disable="loading" />

          <q-btn
            flat
            label="Kembali"
            to="dataKebun"
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
      NAMA_KEBUN: null,
      LUAS_LAHAN: null
    }
  },
  methods: {
    onSubmit () {
      api.post('/kebun/create', {
        NAMA_KEBUN: this.NAMA_KEBUN,
        LUAS_LAHAN: this.LUAS_LAHAN
      }, createToken()).then((res) => {
        if (res.data.status === true) {
          this.$router.push('/dataKebun')
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
.col {
  width: 4px;
  height: 100%;
  background-color: green;
}
<style scoped>
</style>
