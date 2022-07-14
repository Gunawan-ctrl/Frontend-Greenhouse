<template>
  <apexchart height="400" type="area" :options="options" :series="series"></apexchart>
</template>

<script>
import { defineComponent } from 'vue'
import { getCssVar } from 'quasar'

export default defineComponent({
  name: 'ApexArea',
  data () {
    return {
      options: {
        title: {
          text: 'Grafik Realtime',
          align: 'left'
        },
        chart: {
          height: 300,
          type: 'area'
        },
        colors: [getCssVar('primary'), getCssVar('secondary'), getCssVar('negative')],
        markers: {
          size: 4,
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          categories: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']
        }
      },
      series: [{
        name: 'Sensor Suhu',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'Sensor Cahaya',
        data: [11, 32, 45, 32, 34, 52, 41]
      }, {
        name: 'Sensor Soil',
        data: [15, 92, 15, 72, 84, 42, 41]
      }]
    }
  }
})
</script>
