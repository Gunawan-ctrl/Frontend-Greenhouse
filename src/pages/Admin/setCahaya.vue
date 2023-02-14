<template>
  <q-page padding>
    <div class="row q-mb-md col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
          <div class="col-auto"></div>
          <div class="col" style="max-width: fit-content">
            <q-banner rounded inline-actions class="bg-teal-10 text-white">
              <div class="text-h6">Data Set Cahaya</div>
              <div>detail data set cahaya greenhouse</div>
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
            :loading="loading"
          >
            <template v-slot:top>
              <q-btn
                color="teal-10"
                :disable="loading"
                label="Tambah Set Cahaya"
                :to="{ name: 'inputsetCahaya' }"
              />
              <q-space />
              <q-input color="teal-10" v-model="filter" placeholder="Search">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="NAMA_TANAMAN" :props="props">{{
                  props.row.data_tanaman.NAMA_TANAMAN
                }}</q-td>
                <q-td key="DATA_SENSOR" :props="props">{{
                  props.row.data_alat.DATA_SENSOR
                }}</q-td>
                <q-td key="TGL_GANTI_WARNA" :props="props">{{
                  props.row.TGL_GANTI_WARNA
                }}</q-td>
                <q-td key="TGL_PANEN" :props="props">{{
                  new Date(props.row.TGL_PANEN).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                }}</q-td>
                <!-- * Start Toogle Data Set Cahaya -->
                  <!-- <q-td key="SET" :props="props">{{ props.row.SET}}
                    <div class="justify-center q-gutter-x-xs">
                      <q-td auto-width>
                      <q-toggle v-model="props.row.SET" checked-icon="add" unchecked-icon="remove" />
                    </q-td>
                    </div>
                  </q-td> -->
                <!-- * End Toogle Data Set Cahaya -->
                <q-td key="action" :props="props">
                  <div class="justify-center q-gutter-x-xs">
                    <q-btn
                      color="red"
                      dense
                      size="sm"
                      @click="hapussetCahaya(props.row.GUID)"
                      class="q-px-xs"
                      icon="delete"
                      label="Hapus"
                    ></q-btn>
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
import { date } from 'quasar'
export default {
  data () {
    return {
      model: null,
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'NAMA_TANAMAN',
          required: true,
          label: 'Nama Tanaman',
          align: 'left',
          field: (row) => row.NAMA_TANAMAN,
          format: (val) => `${val}`,
          sortable: true
        },
        {
          name: 'DATA_SENSOR',
          align: 'left',
          label: 'Sensor',
          field: 'DATA_SENSOR',
          sortable: true
        },
        {
          name: 'TGL_PANEN',
          align: 'left',
          label: 'Tanggal Panen',
          field: 'TGL_PANEN'
        },
        {
          name: 'action',
          align: 'center',
          label: 'Action',
          field: 'action',
          sortable: true
        }
      ],
      data: []
    }
  },
  created () {
    this.datasetCahaya()
  },
  methods: {
    datasetCahaya () {
      api.get('/cahaya/getByIdUser/' + this.$q.localStorage.getItem('dataUser').user.GUID, createToken())
        .then((res) => {
          console.log(res)
          console.log(date.formatDate(res.data.data.TGL_PANEN, 'YYYY-MM-DD'))
          this.data = res.data.data
        })
    },
    hapussetCahaya (GUID) {
      api.delete('cahaya/' + GUID, createToken()).then((res) => {
        console.log(res)
        if (res.data.status === true) {
          this.$q.notify({
            message: 'berhasil menghapus data',
            color: 'teal-10',
            icon: 'ion-close'
          })
        }
        this.datasetCahaya()
      })
    }
  }
}
</script>

<style></style>
