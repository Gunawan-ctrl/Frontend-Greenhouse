<template>
    <q-page padding>
        <div class="row q-mb-md col-gutter-md">
            <div class="col-md-12 col-xs-12 col-lg-12">
                <div class="row">
                <div class="col-auto">
                    <div class="left"></div>
                </div>
                <div class="col" style="max-width: fit-content">
                    <q-banner rounded inline-actions class="text-blue-grey-14">
                    <div class="text-h6">Data Alat</div>
                    <div>Daftar data alat green house </div>
                    </q-banner>
                </div>
                </div>
            </div>
        </div>
        <q-card flat>
        <q-card-section>
            <div class="q-pa-md" style="max-width: 100%">
            <q-card flat>
      <q-table
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      :loading="loading"
    >

      <template v-slot:top>
        <q-btn
          unelevated
          label="Tambah Alat"
          style="height: 50px"
          color="teal-6" :disable="loading" to="InputDataAlat" />
         <q-space />
          <q-input color="teal-10" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
      </template>

    </q-table>
    </q-card>

        </div>
        </q-card-section>
        </q-card>
    </q-page>
</template>

<script>
import { ref } from 'vue'

const columns = [
  { name: 'name', align: 'left', label: 'No', field: 'name', sortable: true },
  { name: 'nama_alat', align: 'center', label: 'Nama Alat', field: 'nama_alat', sortable: true },
  { name: 'jenis_alat', label: 'Jenis Alat', field: 'jenis_alat', sortable: true },
  { name: 'opsi', label: 'Opsi', field: 'opsi', sortable: true }
]

const originalRows = [
  {
    name: '1',
    nama_alat: 'Node Mcu',
    jenis_alat: 'DHT 11',
    opsi: 'DHT 11'
  }
]

export default {
  setup () {
    const loading = ref(false)
    const filter = ref('')
    const rowCount = ref(10)
    const rows = ref([...originalRows])

    return {
      columns,
      rows,

      loading,
      filter,
      rowCount,

      // emulate fetching data from server
      tambahalat () {
        loading.value = true
        setTimeout(() => {
          const
            index = Math.floor(Math.random() * (rows.value.length + 1)),
            row = originalRows[Math.floor(Math.random() * originalRows.length)]

          if (rows.value.length === 0) {
            rowCount.value = 0
          }

          row.id = ++rowCount.value
          const newRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
          rows.value = [...rows.value.slice(0, index), newRow, ...rows.value.slice(index)]
          loading.value = false
        }, 500)
      },

      removeRow () {
        loading.value = true
        setTimeout(() => {
          const index = Math.floor(Math.random() * rows.value.length)
          rows.value = [...rows.value.slice(0, index), ...rows.value.slice(index + 1)]
          loading.value = false
        }, 500)
      }
    }
  }
}
</script>

<style>
.left {
    width: 4px;
    height: 100%;
    background-color: green;
}
</style>
