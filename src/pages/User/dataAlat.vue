<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :rows="data"
        :columns="columns"
        row-key="id"
      >
        <template v-slot:top>
          <q-btn color="green-10" :disable="loading" label="Tambah Data Alat" :to="{name:'inputAlatUser'}"/>
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="NAMA_ALAT" :props="props">
              {{ props.row.NAMA_ALAT }}
            </q-td>
            <q-td key="JENIS_ALAT" :props="props">{{ props.row.JENIS_ALAT }}</q-td>

            <q-td key="action" :props="props">
              <div class="justify-center q-gutter-x-xs">
                <q-btn
                  color="teal"
                  dense
                  size="sm"
                  @click="edit(props.row.edit)"
                  class="q-px-xs"
                  icon="edit"
                  label="Edit"></q-btn>
                <q-btn
                  color="red"
                  dense
                  size="sm"
                  @click="hapus(props.row.hapus)"
                  class="q-px-xs"
                  icon="delete"
                  label="Hapus"></q-btn>
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import createToken from 'src/helpers/create_token'
import { api } from 'src/boot/axios'
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      urlGambar: null,
      columns: [
        {
          name: 'NAMA_ALAT',
          required: true,
          label: 'Nama Alat',
          align: 'left',
          field: row => row.NAMA_ALAT,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'JENIS_ALAT', align: 'center', label: 'Jenis Alat', field: 'JENIS_ALAT', sortable: true },
        { name: 'action', align: 'center', label: 'Action', field: 'action', sortable: true }
      ],
      data: []
    }
  },
  methods: {
    getDataAlatUser () {
      api.get('alat', createToken())
        .then((res) => {
          // console.log(res.data.data)
          this.data = res.data.data
        })
    }
    // hapusDataBuku (_id) {
    //   this.$axios.delete('/buku/hapus/' + _id)
    //     .then((res) => {
    //       this.data = res.data.data
    //       this.getDataBuku()
    //     })
    // },
    // edit (kodeBuku) {
    //   this.$router.push('/editdatabuku/' + kodeBuku)
    // }
  },
  mounted () {
    this.getDataAlatUser()
  }
}
</script>
