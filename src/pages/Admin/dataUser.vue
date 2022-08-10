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
              <div class="text-h6">Data User</div>
              <div>Data User Green House</div>
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
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="USERNAME" :props="props">
              <q-badge color="green">
              {{ props.row.USERNAME }}
              </q-badge>
            </q-td>
            <q-td key="EMAIL" :props="props">
              <q-badge color="green">
                {{ props.row.EMAIL }}
              </q-badge>
            </q-td>
            <q-td key="NO_TELPON" :props="props">
              <q-badge color="orange">
                {{ props.row.NO_TELPON }}
              </q-badge>
            </q-td>
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
              @click="hapusUser(props.row.GUID)"
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
import { api } from 'src/boot/axios'
import createToken from 'src/helpers/create_token'

export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      urlGambar: null,
      columns: [
        {
          name: 'USERNAME',
          required: true,
          label: 'Username',
          align: 'left',
          field: row => row.USERNAME,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'EMAIL', align: 'center', label: 'Email', field: 'EMAIL', sortable: true },
        { name: 'NO_TELPON', align: 'center', label: 'No Telpon', field: 'NO_TELPON', sortable: true },
        { name: 'action', label: 'Action', field: 'action', sortable: true }
      ],
      data: []
    }
  },
  created () {
    this.dataUser()
  },
  methods: {
    dataUser () {
      api.get('/users/get-role-user', createToken())
        .then((res) => {
          // console.log(res.data)
          this.data = res.data.data
        })
    }
    // hapusUser (GUID) {
    //   api.delete('user/' + GUID, createToken())
    //     .then((res) => {
    //       if (res.data.status === true) {
    //         this.$q.notify({
    //           message: 'berhasil menghapus data',
    //           color: 'positive',
    //           icon: 'ion-close'
    //         })
    //       }
    //       this.dataUser()
    //     })
    // },
    // edit (GUID) {
    //   this.$router.push('/editUser/' + GUID)
    // }
  }
}
</script>
<style>
</style>
