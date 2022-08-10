<template>
  <q-page padding>
    <div class="row q-mb-md col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
        <div class="col-auto">
        </div>
        <div class="col" style="max-width: fit-content">
          <q-banner rounded inline-actions class="bg-teal-10 text-white">
          <div class="text-h6">Data Tanaman</div>
          <div>detail data tanamanan greenhouse</div>
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
      <q-btn color="teal-10" :disable="loading" label="Tambah Set Tanaman" :to="{name:'inputsetTanaman'}" />
      <q-space />
      <q-input color="teal-10" v-model="filter" placeholder="Search">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="ID_TANAMAN" :props="props">{{ props.row.ID_TANAMAN }}</q-td>
        <q-td key="ID_ALAT" :props="props">{{ props.row.ID_ALAT }}</q-td>
        <!-- <q-td key="DATA_SENSOR" :props="props">{{ props.row.DATA_SENSOR }}</q-td> -->
        <!-- <q-td key="NAMA_ALAT" :props="props">{{ props.row.NAMA_ALAT }}</q-td> -->
      <q-td key="SUHU_MAX" :props="props">{{ props.row.SUHU_MAX }}</q-td>
        <q-td key="SUHU_MINIMAL" :props="props">{{ props.row.SUHU_MINIMAL }}</q-td>
        <q-td key="SET" :props="props">
          <div class="justify-center q-gutter-x-xs">
            <!-- <q-toggle v-model="model" :val="scope.opt.value" /> -->
            <q-toggle
            color="teal-10"
            label="Start"
            v-model="model"
            val="teal-10"
            icon="home"
            />
            <!-- <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps">
                <q-item-section>
                  <q-item-label>{{ scope.opt.ID_TANAMAN }}</q-item-label>
                  <q-item-label caption>{{ scope.opt.ID_ALAT }}</q-item-label>
                </q-item-section>
              </q-item>
            </template> -->
            <!-- </q-toggle> -->
            <div>
              {{model}}
            </div>
            <!-- <template>
        <q-toggle v-model="scope.selected" />
      </template> -->
          </div>
        </q-td>
        <q-td key="action" :props="props">
          <div class="justify-center q-gutter-x-xs">
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
// import { ref } from 'vue'
export default {
  data () {
    return {

      // selected: ref([]),
      model: [
        'stop',
        'start'
      ],
      // selection: ref(
      //   [
      //     'stop',
      //     'start'
      //   ]
      // ),
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'ID_TANAMAN',
          required: true,
          label: 'Nama Tanaman',
          align: 'left',
          field: row => row.ID_TANAMAN,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'ID_ALAT', align: 'left', label: 'Sensor', field: 'ID_ALAT', sortable: true },
        // { name: 'NAMA_ALAT', align: 'left', label: 'NAMA ALAT', field: 'NAMA_ALAT', sortable: true },
        // { name: 'NAMA_TANAMAN', align: 'left', label: 'NAMA TANAMAN', field: 'NAMA_TANAMAN', sortable: true },
        // { name: 'DATA_SENSOR', align: 'left', label: 'Data Sensor', field: 'DATA_SENSOR', sortable: true },
        { name: 'SUHU_MINIMAL', align: 'left', label: 'Suhu Minimal', field: 'SUHU_MINIMAL', sortable: true },
        { name: 'SUHU_MAX', align: 'left', label: 'Suhu Maksimal', field: 'SUHU_MAX' },
        { name: 'SET', align: 'center', label: 'SET', field: 'SET', sortable: true },
        { name: 'action', align: 'center', label: 'Action', field: 'action', sortable: true }
      ],
      data: []
    }
  },
  created () {
    this.datasetTanaman()
    // this.hapussetTanaman()
  },
  methods: {
    datasetTanaman () {
      api.get('/tanam', createToken())
        .then((res) => {
          console.log(res)
          this.data = res.data.data
          // console.log(this.data)
        })
    },
    hapussetTanaman (GUID) {
      api.delete('tanam/' + GUID, createToken())
        .then((res) => {
          if (res.data.status === true) {
            this.$q.notify({
              message: 'berhasil menghapus data',
              color: 'teal-10',
              icon: 'ion-close'
            })
          }
          this.datasetTanaman()
        })
    }
    // datasetAlat () {
    //   api.get('/alat', createToken())
    //     .then((res) => {
    //       this.data = res.data.data
    //       console.log(this.data)
    //     })
    // }
  }
}
</script>

<style>

</style>
