<template>
  <q-page padding>
    <div class="row q-mb-sm col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
          <div class="col-auto"></div>
            <div class="col" style="max-width: fit-content;">
              <q-banner rounded inline-actions class="text-white bg-teal-10">
                <div class="text-h6">Data Tanaman</div>
                <div>edit alat greenhouse</div>
              </q-banner>
            </div>
        </div>
      </div>
    </div>
    <q-card flat>
      <div class="q-pa-md" style="max-width: 100%">
      <q-card flat>
    <q-table
    :rows="data"
    :columns="columns"
    row-key="name"
    :filter="filter"
  >
    <template v-slot:top>
      <q-btn color="teal-10" :disable="loading" label="Tambah Tanaman" :to="{name:'InputDataTanaman'}" />
      <q-space />
      <q-input color="teal-10" v-model="filter" placeholder="Search">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="NAMA_TANAMAN" :props="props">
          {{ props.row.NAMA_TANAMAN }}
        </q-td>
        <q-td key="JENIS_TANAMAN" :props="props">{{ props.row.JENIS_TANAMAN }}</q-td>
        <q-td key="HARGA" :props="props">{{ props.row.HARGA }}</q-td>
        <q-td key="DESKRIPSI" :props="props">{{ props.row.DESKRIPSI }}</q-td>
        <q-td key="LUAS_AREA_TANAM" :props="props">{{ props.row.LUAS_AREA_TANAM }}</q-td>
        <q-td key="action" :props="props">
          <div class="justify-center q-gutter-x-xs">
            <q-btn color="teal"
              dense size="sm"
              class="q-px-xs"
              icon="edit"
              @click="edit(props.row.GUID)"
              label="Edit"></q-btn>
            <q-btn
              color="red"
              dense
              size="sm"
              @click="hapusTanaman(props.row.GUID)"
              class="q-px-xs"
              icon="delete"
              label="Hapus"></q-btn>
          </div>
        </q-td>
      </q-tr>
    </template>
      </q-table>
    </q-card>
    </div>
    </q-card>
  </q-page>
</template>

<script>
import { api } from 'src/boot/axios'
import createToken from 'src/helpers/create_token'

export default {
  data () {
    return {
      dataUser: this.$q.localStorage.getItem('dataUser'),
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'NAMA_TANAMAN',
          required: true,
          label: 'Nama Tanaman',
          align: 'left',
          field: row => row.NAMA_TANAMAN,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'JENIS_TANAMAN', align: 'left', label: 'Jenis Tanaman', field: 'JENIS_TANAMAN', sortable: true },
        { name: 'HARGA', align: 'left', label: 'Harga', field: 'HARGA', sortable: true },
        { name: 'DESKRIPSI', align: 'left', label: 'Deskripsi', field: 'DESKRIPSI' },
        { name: 'LUAS_AREA_TANAM', align: 'left', label: 'Luas Area Tanam', field: 'LUAS_AREA_TANAM' },
        { name: 'action', align: 'center', label: 'Action', field: 'action', sortable: true }
      ],
      data: []
    }
  },
  created () {
    this.dataTanaman()
  },
  methods: {
    dataTanaman () {
      api.get('http://localhost:5050/tanaman/getbyIdUser/' + this.$q.localStorage.getItem('dataUser').user.GUID, createToken())
        .then((res) => {
          console.log(res)
          this.data = res.data.data
        })
    },
    hapusTanaman (GUID) {
      api.delete('tanaman/' + GUID, createToken())
        .then((res) => {
          if (res.data.status === true) {
            this.$q.notify({
              message: 'berhasil menghapus data',
              color: 'teal-10',
              icon: 'ion-close'
            })
          }
          this.dataTanaman()
        })
    },
    edit (GUID) {
      this.$router.push('/editTanaman/' + GUID)
    }
  }
}
</script>

<style>

</style>
