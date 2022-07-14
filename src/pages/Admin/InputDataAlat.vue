<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data Alat</span>
      </span>
      <div class="q-pa-md">
        <q-form
          class="q-gutter-md"
        >

          <q-input
            label="Nama Alat"
            lazy-rules
            color="teal"
            v-model="namaAlat"
            :rules="[
            val => val !== null && val !== '' || 'Tambah Nama Alat'
            ]">
            <template v-slot:append>
              <q-icon name="construction"/>
            </template>
          </q-input>

          <q-input
            label="Jenis Alat"
            lazy-rules
            color="teal"
            v-model="jenisAlat"
            :rules="[
            val => val !== null && val !== '' || 'Tambah Jenis Alat'
            ]">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>

          <div class="q-pa-md q-gutter-sm">
            <q-btn
              unelevated
              label="Back"
              style="height: 50px"
              color="teal-6" :disable="loading" to="dataAlat" />

              <q-btn
              unelevated
              label="Save"
              style="height: 50px"
              color="teal-6"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      judulBuku: null
    }
  }
}
</script>

<style scoped>

</style>
