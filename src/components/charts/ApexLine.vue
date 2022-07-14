<template>
  <apexchart height="400" type="line" :options="options" :series="series"></apexchart>
</template>

<script>
import { defineComponent } from 'vue'
import { getCssVar } from 'quasar'

export default defineComponent({
  name: 'ApexLine',
  data () {
    return {
      options: {
        title: {
          text: 'Grafik Line',
          align: 'left'
        },
        chart: {
          id: 'apex-line'
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
        name: 'series-1',
        data: [16, 19, 23, 27, 31, 35, 49]
      }]
    }
  }
})
</script>
