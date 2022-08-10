<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :rows="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >
        <template v-slot:top>
          <q-btn color="green-10" :disable="loading" label="Tambah Data Kebun" :to="{name:'inputKebunUser'}"/>
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
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
                <q-btn color="green" dense size="sm" @click="edit()" class="q-px-xs" icon="edit" label="edit">
                </q-btn>
                <q-btn color="red" dense size="sm" @click="hapus()" class="q-px-xs" icon="delete" label="hapus">
                </q-btn>
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
    this.getDataKebun()
  }
}

</script>
<style scoped>
.left {
  width: 4px;
  height: 100%;
  background-color: green;
}
</style>
