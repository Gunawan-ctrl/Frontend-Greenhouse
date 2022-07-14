<template>
  <q-page padding>
    <div class="row q-mb-md col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
          <div class="col-auto">
            <div class="left"></div>
          </div>
          <div class="col" style="max-width: fit-content;">
            <q-banner rounded inline-actions class="text-blue-grey-18">
              <div class="text-h6">Informasi Tanaman</div>
              <div>Informasi Tanaman Green House</div>
            </q-banner>
          </div>
        </div>
      </div>
    </div>
    <q-card flat>
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="name"
      >
      <template v-slot:top>
        <q-btn color="teal-10" :disable="loading" label="Tambah Tanaman" @click="tambahtanaman" />
        <q-space />
        <q-input color="teal-10" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="name" :props="props">
              {{ props.row.name }}
            </q-td>
            <q-td key="calories" :props="props">
              <q-badge color="green">
                {{ props.row.calories }}
              </q-badge>
            </q-td>
            <q-td key="fat" :props="props">
              <q-badge color="purple">
                {{ props.row.fat }}
              </q-badge>
            </q-td>
            <q-td key="carbs" :props="props">
              <q-badge color="orange">
                {{ props.row.carbs }}
              </q-badge>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </q-card>
  </q-page>
</template>

<script>
const columns = [
  { name: 'Mac Address', align: 'left', label: 'Mac Address', field: 'Mac Address', sortable: true },
  { name: 'Nama Tanaman', align: 'center', label: 'Nama Tanaman', field: 'Nama Tanaman', sortable: true },
  { name: 'Jenis Tanaman', label: 'Jenis Tanaman', field: 'Jenis Tanaman', sortable: true },
  { name: 'Suhu Minimal', label: 'Suhu Minimal', field: 'Suhu Minimal', sortable: true },
  { name: 'Suhu Maksimal', label: 'Suhu Maksimal', field: 'Suhu Maksimal', sortable: true },
  { name: 'Opsi', label: 'Opsi', field: 'Opsi', sortable: true }
]

const rows = [
  {
    name: 'Mac Address',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '6%'
  }
]

export default {
  setup () {
    return {
      columns,
      rows
    }
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
