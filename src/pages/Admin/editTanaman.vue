<template>
  <q-page padding>
    <div class="row q-mb-sm col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
          <div class="col-auto">
          </div>
          <div class="col" style="max-width: fit-content;">
            <q-banner rounded inline-actions class="text-white bg-teal-10">
              <div class="text-h6">Edit Tanaman</div>
              <div>Edit Tanaman Green House</div>
            </q-banner>
          </div>
        </div>
      </div>
    </div>
    <div class="q-pa-md" style="max-width: 400px">
    <q-form
      @submit="onSubmit"
      class="q-gutter-xs"
    >

      <q-input
        filled
        v-model="NAMA_TANAMAN"
        label="Nama Tanaman"
        lazy-rules
        :rules="[ val => val !== null && val !== '' || 'Silahkan masukkan nama tanaman'
        ]"
      />
      <q-select
        class="q-mb-lg"
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
        lazy-rules
        :rules="[
        val => val !== null && val !== '' || 'Silahkan masukkan jenis tanaman'
        ]"
      /> -->
      <q-input
        filled
        v-model="HARGA"
        label="Harga"
        lazy-rules
        :rules="[
        val => val !== null && val !== '' || 'Silahkan masukkan harga tanaman'
        ]"
      />
      <q-input
        filled
        v-model="DESKRIPSI"
        label="Deskripsi"
        lazy-rules
        :rules="[
        val => val !== null && val !== '' || 'Silahkan masukkan deskripsi tanaman'
        ]"
      />
      <q-input
        filled
        v-model="LUAS_AREA_TANAM"
        label="Luas Area Tanam"
        lazy-rules
        :rules="[
        val => val !== null && val !== '' || 'Silahkan masukkan luas area tanaman anda'
        ]"
      />
      <div>
        <q-btn label="Ubah Data Tanaman" icon="add" type="submit" color="teal-10"/>
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
      HARGA: null,
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
      api.put(`tanaman/${this.$route.params.guid}`, {
        NAMA_TANAMAN: this.NAMA_TANAMAN,
        JENIS_TANAMAN: this.JENIS_TANAMAN,
        HARGA: this.HARGA,
        DESKRIPSI: this.DESKRIPSI,
        LUAS_AREA_TANAM: this.LUAS_AREA_TANAM
      }, createToken())
        .then((res) => {
          console.log(res)
          if (res.data.status) {
            this.$q.notify({
              color: 'teal-10',
              message: res.data.message,
              icon: 'ion-checkmark'
            })
            this.$router.push('/dataTanaman')
          } else {
            this.$q.notify({
              color: 'teal-10',
              message: res.data.message,
              icon: 'ion-close'
            })
          }
        })
    },
    dataTanaman () {
      api.get(`tanaman/${this.$route.params.guid}`, createToken())
        .then((res) => {
          console.log(res)
          this.NAMA_TANAMAN = res.data.data.NAMA_TANAMAN
          this.JENIS_TANAMAN = res.data.data.JENIS_TANAMAN
          this.HARGA = res.data.data.HARGA
          this.DESKRIPSI = res.data.data.DESKRIPSI
          this.LUAS_AREA_TANAM = res.data.data.LUAS_AREA_TANAM
        })
    }
  },
  mounted () {
    this.dataTanaman()
  }
}
</script>

<style scoped>
</style>
