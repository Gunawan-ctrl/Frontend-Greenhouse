<template>
  <apexchart height="400" type="area" :options="optionss" :series="series"></apexchart>
</template>

<script>
import { defineComponent } from 'vue'
// import mqttjs from 'mqtt'
import { getCssVar } from 'quasar'
// import mqttjs from 'mqtt'
const dataSensor = [
  {
    name: 'Sensor Suhu',
    data: []
  }
]
export default defineComponent({
  name: 'ApexArea',
  data () {
    return {

      optionss: {
        title: {
          text: 'ds',
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
      // series: this.dataSensor
      series: dataSensor
    }
  }

  // beforeCreate: async function () {
  //   console.log('dsadsa')
  //   const options = {
  //     username: '/shadoofpertanian:shadoofpertanian',
  //     password: 'TaniBertani19',
  //     clientId: 'goblok',
  //     protocolId: 'MQTT',
  //     reconnectPeriode: 0,
  //     keepAlive: 0
  //   }

  //   const client = mqttjs.connect('ws://cloudrmq.pptik.id:15675/ws', options)
  //   client.on('connect', function () {
  //     client.subscribe('sensor01', function (err) {
  //       if (!err) {
  //         // client.publish('presence', 'Hello mqtt')
  //         console.log('test')
  //       } else {
  //         console.log(err)
  //       }
  //     })
  //   })

  //   client.on('message', function (topic, message) {
  //     // client.publish('presence', 'Hello mqtt')
  //     console.log('sadsa')
  //     console.log(message)

  //     const data = JSON.parse(message.toString())
  //     // this.dataSensor.push(data.ADC)
  //     console.log(data.ADC)
  //     // this.optionss.title.text = this.datas
  //     // this.series[0].name = 'senso'
  //     // console.log(this.)
  //     // dataSensor[0].data.map(() => {
  //     //   return data.ADC
  //     // })
  //     dataSensor[0].data.push(data.ADC)
  //     // this.series = data.map(r => {
  //     //   return r.ADC
  //     // })
  //     // dataSensor.push({ name: 'Sensor', data: data.ADC })
  //     console.log(dataSensor)

  //     // console.log('sadsa')
  //     // console.log(this.optionss)
  //   })
  // }

  // methods: {
  //   Realtime () {
  //     client.on('message', function (topic, message) {
  //       this.data = message
  //     })
  //   }
  // }
  // beforeCreate: async function () {
  //   const options = {
  //     username: '/shadoofpertanian:shadoofpertanian',
  //     password: 'TaniBertani19',
  //     clientId: 'goblok',
  //     protocolId: 'MQTT',
  //     reconnectPeriode: 0,
  //     keepAlive: 0
  //   }

  //   const client = mqttjs.connect('ws://cloudrmq.pptik.id:15675/ws', options)
  //   client.on('connect', function () {
  //     client.subscribe('sensor03', function (err) {
  //       if (!err) {
  //         // client.publish('presence', 'Hello mqtt')
  //       }
  //     })
  //   })

  //   client.on('message', function (topic, message) {
  //     // client.publish('presence', 'Hello mqtt')
  //     console.log(message.toString())
  //   })
  // }
})
</script>
