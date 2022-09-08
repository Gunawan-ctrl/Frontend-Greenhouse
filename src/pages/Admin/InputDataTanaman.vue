<template>
  <q-page padding>
    <div class="row q-mb-sm col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
          <div class="col-auto">
          </div>
          <div class="col" style="max-width: fit-content;">
            <q-banner rounded inline-actions class="text-white bg-teal-10">
              <div class="text-h6">Input Tanaman</div>
              <div>input tanaman greenhouse</div>
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
        v-model="NAMA_TANAMAN"
        label="Nama Tanaman"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan nama tanaman anda']"
      />
      <q-select
      class="q-mb-md"
        filled
        v-model="JENIS_TANAMAN"
        option-label="JENIS_TANAMAN"
        :options="optionJenisTanaman"
        label="Jenis Tanaman"
      />
      <!-- <q-input
        filled
        v-model="JENIS_TANAMAN"
        label="Jenis Tanaman"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan jenis tanaman anda']"
      /> -->
      <q-input
        filled
        type="number"
        v-model="HARGA"
        label="Harga"
        :rules="[ val => val > 0 || 'silahkan masukkan harga tanaman anda']"
      />
      <q-input
        filled
        v-model="DESKRIPSI"
        label="Deskripsi"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan deskripsi tanaman anda']"
      />
      <q-input
        filled
        v-model="LUAS_AREA_TANAM"
        label="Luas Area Tanam"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan luas area tanaman anda']"
      />
      <div class="q-pa-md q-gutter-sm">
          <q-btn
            unelevated
            icon="add"
            label="Tambah Tanaman"
            color="teal-10" type="submit" />

          <q-btn
            flat
            label="Kembali"
            to="dataTanaman"
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
      NAMA_TANAMAN: null,
      JENIS_TANAMAN: null,
      HARGA: 0,
      // ID_USER: null,
      DESKRIPSI: null,
      LUAS_AREA_TANAM: null,
      optionJenisTanaman:
      [
        'Bijian',
        'Merambat',
        'Serabut',
        'Akar-akaran'
      ]
    }
  },
  methods: {
    onSubmit () {
      api.post('/tanaman/create/', {
      // api.post('/tanaman/create/', {
        NAMA_TANAMAN: this.NAMA_TANAMAN,
        // ID_TANAMAN: this.GUID,
        JENIS_TANAMAN: this.JENIS_TANAMAN,
        HARGA: this.HARGA,
        ID_USER: this.$q.localStorage.getItem('dataUser').user.GUID,
        DESKRIPSI: this.DESKRIPSI,
        LUAS_AREA_TANAM: this.LUAS_AREA_TANAM
      }, createToken()).then((res) => {
        console.log(res)
        if (res.data.status === true) {
          // this.$q.localStorage.set('dataUser', res.data.data)
          this.$router.push('/dataTanaman')
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
    }
  }
}
</script>
<style scoped>
</style>
