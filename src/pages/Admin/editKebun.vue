<template>
  <q-page padding>
    <div class="row q-mb-sm col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
          <div class="col-auto">
          </div>
          <div class="col" style="max-width: fit-content;">
            <q-banner rounded inline-actions class="text-white bg-teal-10">
              <div class="text-h6">Edit Kebun </div>
              <div>Edit Data Kebun Green House</div>
            </q-banner>
          </div>
        </div>
      </div>
    </div>
    <div class="q-pa-md">
    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >

      <q-input
        filled
        v-model="NAMA_KEBUN"
        label="Nama KEBUN"
        lazy-rules
        :rules="[ val => val !== null && val !== '' || 'Silahkan masukkan nama kebun'
        ]"
      />
      <q-input
        filled
        v-model="LUAS_LAHAN"
        label="Luas Lahan"
        lazy-rules
        :rules="[
        val => val !== null && val !== '' || 'Silahkan masukkan luas lahan'
        ]"
      />

      <div>
        <q-btn label="Ubah Data Kebun" icon="add" type="submit" color="text-white bg-teal-10"/>
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
      api.put(`kebun/${this.$route.params.guid}`, {
        NAMA_KEBUN: this.NAMA_KEBUN,
        LUAS_LAHAN: this.LUAS_LAHAN
      }, createToken())
        .then((res) => {
          // console.log(res)
          if (res.data.status) {
            this.$q.notify({
              color: 'teal-10',
              message: 'data kebun berhasil diubah',
              icon: 'ion-checkmark'
            })
            this.$router.push('/dataKebun')
          } else {
            this.$q.notify({
              color: 'negative',
              message: res.data.message,
              icon: 'ion-close'
            })
          }
        })
    },
    dataKebun () {
      api.get(`kebun/${this.$route.params.guid}`, createToken())
        .then((res) => {
          this.NAMA_KEBUN = res.data.data.NAMA_KEBUN
          this.LUAS_LAHAN = res.data.data.LUAS_LAHAN
          console.log(this.NAMA_KEBUN)
        })
    }
  },
  mounted () {
    this.dataKebun()
  }
}
</script>

<style scoped>
</style>
