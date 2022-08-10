<template>
  <q-card class="bg-white full-width">
    <q-card-section class="bg-blue-grey-8">
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h6 text-white text-center">Line  Grafik</div>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <canvas id="line-chart"></canvas>
    </q-card-section>
  </q-card>
</template>

<script>
import Chart from 'chart.js/auto'
// import { Mqttjs } from 'mqtt'
export default {
  data () {
    return {
      dataSensor: null,
      data: null
    }
  },
  mounted () {
    this.createChart('line-chart')
  },
  methods: {
    createChart (chartId) {
      const ctx = document.getElementById(chartId)
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
          datasets: [{
            data: [3000, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
            label: 'Sensor Suhu',
            borderColor: 'red',
            fill: false,
            lineTension: 0.9
          }, {
            data: [282, 350, 2000, 502, 635, 809, 947, 1402, 3700, 5267],
            label: 'Sensor Cahaya',
            borderColor: '#8e5ea2',
            fill: false,
            lineTension: 0
          }, {
            data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
            label: 'Sensor Ketinggian Air',
            borderColor: '#3cba9f',
            fill: false,
            lineTension: 0
          }, {
            data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
            label: 'Sensor Soil',
            borderColor: '#e8c3b9',
            fill: false,
            lineTension: 0
          }
          ]
        },
        options: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'World population per region (in millions)'
          }
        }
      })
      return myChart
    }
  }
  // beforeCreate: async function () {
  //   const options = {
  //     username: '/shadoofpertanial:shadoofpertanian',
  //     password: 'TaniBertani19',
  //     clientId: 'goblok',
  //     protocolId: 'MQTT',
  //     reconnectPeriode: 0,
  //     keepAlive: 0
  //   }

  //   const client = Mqttjs.connect('ws://cloudrmq.pptik.id:15675/ws', options)
  //   client.on('connect', function () {
  //     client.subscribe('sensor01', function (err) {
  //       if (!err) {
  //         // client.publish('presence', 'Hello mqtt')
  //       }
  //     })
  //   })

  //   client.on('message', function (topic, message) {
  //     // client.publish('presence', 'Hello mqtt')
  //     // console.log(message.toString())
  //     const data = JSON.parse(message.toString())

  //     this.datas = data.ADC
  //     console.log(data.ADC)
  //   })
  // }
}
</script>

<style>
</style>
