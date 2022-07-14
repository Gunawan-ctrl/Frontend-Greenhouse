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
              <div class="text-h6">Data User</div>
              <div>Data User Green House</div>
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
            <q-td key="protein" :props="props">
              <q-badge color="primary">
                {{ props.row.protein }}
              </q-badge>
            </q-td>
            <q-td key="sodium" :props="props">
              <q-badge color="teal">
                {{ props.row.sodium }}
              </q-badge>
            </q-td>
            <q-td key="calcium" :props="props">
              <q-badge color="accent">
                {{ props.row.calcium }}
              </q-badge>
            </q-td>
            <q-td key="iron" :props="props">
              <q-badge color="amber">
                {{ props.row.iron }}
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
  {
    name: 'name',
    required: true,
    label: 'No',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'username', align: 'center', label: 'username', field: 'username', sortable: true },
  { name: 'email', label: 'email', field: 'email', sortable: true },
  { name: 'no.tlp', label: 'no.tlp', field: 'no.tlp', sortable: true }
]

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  }
]

export default {
  data () {
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
