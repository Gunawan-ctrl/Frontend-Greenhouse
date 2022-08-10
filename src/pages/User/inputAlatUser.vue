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
              <div class="text-h6">Input Alat</div>
              <div>Input Alat Green House</div>
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
        v-model="NAMA_ALAT"
        label="Nama Alat"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan nama tanaman anda']"
      />
      <q-input
        filled
        v-model="JENIS_ALAT"
        label="Jenis Alat"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan jenis tanaman anda']"
      />
      <div>
        <q-btn
        icon="add"
        label="Tambah Alat"
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
      NAMA_ALAT: null,
      JENIS_ALAT: null
    }
  },
  methods: {
    onSubmit () {
      api.post('/alat/create', {
        NAMA_ALAT: this.NAMA_ALAT,
        JENIS_ALAT: this.JENIS_ALAT
      }, createToken()).then((res) => {
        if (res.data.status) {
          this.data = res.data.data
          this.$router.push('/dataAlatUser')
          // console.log('push')
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
    }
  }
}
</script>
