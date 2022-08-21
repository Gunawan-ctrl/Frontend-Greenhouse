  <template>
    <q-page padding>
        <div class="row q-mb-md col-gutter-md">
            <div class="col-md-12 col-xs-12 col-lg-12">
                <div class="row">
                <div class="col-auto">
                    <div class="left"></div>
                </div>
                <div class="col" style="max-width: fit-content">
                    <q-banner rounded inline-actions class="text-white bg-teal-10">
                    <div class="text-h6">Data Alat</div>
                    <div>detail data alat greenhouse </div>
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
        <q-btn color="teal-10" :disable="loading" label="Tambah Alat" :to="{name:'InputDataAlat'}" />
        <q-space />
        <q-input color="teal-10" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="MAC_ADDRESS" :props="props">
              {{ props.row.MAC_ADDRESS }}
            </q-td>
            <!-- <q-td key="NAMA_ALAT" :props="props">{{ props.row.NAMA_ALAT }}</q-td> -->
            <q-td key="DATA_SENSOR" :props="props">{{ props.row.DATA_SENSOR }}</q-td>
            <q-td key="EMAIL" :props="props">{{ props.row.EMAIL }}</q-td>
            <q-td key="action" :props="props">
              <div class="justify-center q-gutter-x-xs">
                <q-btn
                  color="teal"
                  dense size="sm"
                  class="q-px-xs"
                  icon="edit"
                  @click="edit(props.row.GUID)"
                  label="Edit"></q-btn>
                <q-btn
                  color="red"
                  dense
                  size="sm"
                  @click="hapusAlat(props.row.GUID)"
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
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'MAC_ADDRESS',
          required: true,
          label: 'Mac Address',
          align: 'left',
          field: row => row.MAC_ADDRESS,
          format: val => `${val}`,
          sortable: true
        },
        // { name: 'NAMA_ALAT', align: 'center', label: 'Nama Alat', field: 'NAMA_ALAT', sortable: true },
        { name: 'DATA_SENSOR', align: 'center', label: 'Sensor', field: 'DATA_SENSOR', sortable: true },
        { name: 'EMAIL', align: 'center', label: 'Email', field: 'EMAIL', sortable: true },
        { name: 'action', align: 'center', label: 'Action', field: 'action', sortable: true }
      ],
      data: []
    }
  },
  created () {
    this.dataAlat()
  },
  methods: {
    dataAlat () {
      api.get('/alat/getByEmail/' + this.$q.localStorage.getItem('dataUser').user.EMAIL, createToken())
        .then((res) => {
          console.log(res)
          this.data = res.data.data
        })
    },
    hapusAlat (GUID) {
      api.delete('alat/' + GUID, createToken())
        .then((res) => {
          if (res.data.status === true) {
            this.$q.notify({
              message: 'berhasil menghapus data',
              color: 'teal-10',
              icon: 'ion-close'
            })
          }
          this.dataAlat()
        })
    },
    edit (GUID) {
      this.$router.push('/editAlat/' + GUID)
    }
  }
}
</script>

<style>

</style>
