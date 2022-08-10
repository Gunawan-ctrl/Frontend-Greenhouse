<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :rows="data"
        :columns="columns"
        row-key="name"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>
          <q-btn color="green-10" :disable="loading" label="Tambah Data Tanaman" :to="{name:'inputTanamanUser'}"/>
          <q-space />
          <q-input bordered dense debounce="300" color="primary" v-model="filter">
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
            <q-td key="SUHU_MINIMAL" :props="props">{{ props.row.SUHU_MINIMAL }}</q-td>
            <q-td key="SUHU_MAX" :props="props">{{ props.row.SUHU_MAX }}</q-td>
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
    </div>
  </q-page>
</template>

<script>

import { api } from 'src/boot/axios'
import createToken from 'src/helpers/create_token'
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'NAMA_TANAMAN',
          required: true,
          label: 'Nama Tanaman',
          align: 'center',
          field: row => row.NAMA_TANAMAN,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'JENIS_TANAMAN', align: 'center', label: 'Jenis Tanaman', field: 'JENIS_TANAMAN', sortable: true },
        { name: 'SUHU_MINIMAL', align: 'center', label: 'Suhu Minimal', field: 'SUHU_MINIMAL', sortable: true },
        { name: 'SUHU_MAX', align: 'center', label: 'Suhu Maksimal', field: 'SUHU_MAX' },
        { name: 'action', align: 'center', label: 'Opsi', field: 'action', sortable: true }
      ],
      data: []
    }
  },
  created () {
    this.getDataTanaman()
    // console.log(createToken())
    // console.log(this.data)
  },
  methods: {
    getDataTanaman () {
      api.get('tanaman', createToken())
        .then((res) => {
          // console.log(res)
          this.data = res.data.data
        })
    },
    hapusTanaman (GUID) {
      api.delete('tanaman/' + GUID, createToken())
        .then((res) => {
          if (res.data.status === true) {
            this.$q.notify({
              message: 'berhasil menghapus data',
              color: 'positive',
              icon: 'ion-close'
            })
          }
          this.getDataTanaman()
        })
    },
    edit (GUID) {
      this.$router.push('/editTanamanUser/' + GUID)
    }
  },
  mounted () {
    this.getDataTanaman()
  }
}
</script>
