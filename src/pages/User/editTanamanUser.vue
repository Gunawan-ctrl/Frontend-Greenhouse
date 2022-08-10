<template>
  <q-page padding>
    <div class="row q-mb-sm col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
          <div class="col-auto">
          </div>
          <div class="col" style="max-width: fit-content;">
            <q-banner rounded inline-actions class="text-white bg-green-10">
              <div class="text-h6">Edit Tanaman</div>
              <div>Edit Tanaman Green House</div>
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
        v-model="NAMA_TANAMAN"
        label="Nama Tanaman"
        lazy-rules
        :rules="[ val => val !== null && val !== '' || 'Silahkan masukkan nama tanaman'
        ]"
      />
      <q-input
        filled
        v-model="JENIS_TANAMAN"
        label="Jenis Tanaman"
        lazy-rules
        :rules="[
        val => val !== null && val !== '' || 'Silahkan masukkan jenis tanaman'
        ]"
      />
      <q-input
        filled
        v-model="SUHU_MINIMAL"
        label="Suhu Minimal"
        lazy-rules
        :rules="[
        val => val !== null && val !== '' || 'Silahkan masukkan suhu minimal tanaman'
        ]"
      />
      <q-input
        filled
        v-model="SUHU_MAX"
        label="Suhu Maksimal"
        lazy-rules
        :rules="[
        val => val !== null && val !== '' || 'Silahkan masukkan suhu maksimal tanaman'
        ]"
      />
      <div>
        <q-btn label="Ubah Data Tanaman" icon="add" type="submit" color="green-10"/>
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
      SUHU_MINIMAL: null,
      SUHU_MAX: null
    }
  },
  methods: {
    onSubmit () {
      api.put(`tanaman/${this.$route.params.guid}`, {
        NAMA_TANAMAN: this.NAMA_TANAMAN,
        JENIS_TANAMAN: this.JENIS_TANAMAN,
        SUHU_MINIMAL: this.SUHU_MINIMAL,
        SUHU_MAX: this.SUHU_MAX
      }, createToken())
        .then((res) => {
          console.log(res)
          if (res.data.status) {
            this.$q.notify({
              color: 'positive',
              message: res.data.message,
              icon: 'ion-close'
            })
            this.$router.push('/dataTanamanUser')
          } else {
            this.$q.notify({
              color: 'negative',
              message: res.data.message,
              icon: 'ion-close'
            })
          }
        })
    },
    dataTanaman () {
      api.get(`tanaman/${this.$route.params.guid}`, createToken())
        .then((res) => {
          this.NAMA_TANAMAN = res.data.data.NAMA_TANAMAN
          this.JENIS_TANAMAN = res.data.data.JENIS_TANAMAN
          this.SUHU_MINIMAL = res.data.data.SUHU_MINIMAL
          this.SUHU_MAX = res.data.data.SUHU_MAX
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
