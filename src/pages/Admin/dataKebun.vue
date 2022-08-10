<template>
  <q-page padding>
    <div class="row q-mb-md col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
        <div class="col-auto">
        </div>
        <div class="col" style="max-width: fit-content">
          <q-banner rounded inline-actions class="text-white bg-teal-10">
          <div class="text-h6">Data Kebun</div>
          <div>Daftar Kebun Green House </div>
          </q-banner>
        </div>
        </div>
      </div>
    </div>
    <q-card flat>
      <q-table
        :rows="data"
        :columns="columns"
        row-key="name"
        :filter="filter"
        :loading="loading"
      >
      <template v-slot:top>
        <q-btn color="teal-10" :disable="loading" label="Tambah Kebun" :to="{name:'inputKebun'}" />
        <q-space />
        <q-input color="teal-10" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="NAMA_KEBUN" :props="props">
              {{ props.row.NAMA_KEBUN }}
            </q-td>
            <q-td key="LUAS_LAHAN" :props="props">
              {{ props.row.LUAS_LAHAN }}
            </q-td>
            <q-td key="action" :props="props">
              <div class="justify-center q-gutter-x-xs">
                <q-btn
                  color="teal"
                  dense
                  size="sm"
                  @click="edit(props.row.GUID)"
                  class="q-px-xs"
                  icon="edit"
                  label="Edit"
                />
                <q-btn
                  color="red"
                  dense
                  size="sm"
                  @click="hapusKebun(props.row.GUID)"
                  class="q-px-xs"
                  icon="delete"
                  label="Hapus"></q-btn>
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </q-card>
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
          name: 'NAMA_KEBUN',
          required: true,
          label: 'Nama Kebun',
          align: 'left',
          field: row => row.NAMA_KEBUN,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'LUAS_LAHAN', align: 'center', label: 'Luas Lahan', field: 'LUAS_LAHAN', sortable: true },
        { name: 'action', label: 'Action', field: 'action', sortable: true }
      ],
      data: []
    }
  },
  methods: {
    getDataKebun () {
      api.get('kebun', createToken())
        .then((res) => {
          // console.log(res.data.data)
          this.data = res.data.data
        })
    },
    hapusKebun (GUID) {
      api.delete('kebun/' + GUID, createToken())
        .then((res) => {
          this.data = res.data.data
          this.getDataKebun()
        })
    },
    edit (GUID) {
      this.$router.push('/editKebun/' + GUID)
    }
  },
  mounted () {
    this.getDataKebun()
  }
}

</script>
<style scoped>
</style>
