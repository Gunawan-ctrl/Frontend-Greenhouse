<template>
  <q-page>
    <div class="q-pa-md row items-start q-gutter-md q-mx-md">
      <q-card class="my-card bg-teal-10">
        <q-img src="https://docplayer.info/docs-images/112/202456977/images/5-1.jpg" style="height: 162px;">
        </q-img>
      <q-card-section>
        <div class="row no-wrap items-center text-center">
          <div class="col text-h6 ellipsis text-white">
            Sensor Suhu
          </div>
        </div>
        <div class="text-caption text-grey">
          sensor suhu greenhouse website..
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-subtitle1 text-center text-orange">
          {{sensor.ADC}}°C
        </div>
      </q-card-section>
    </q-card>

    <q-card class="my-card bg-teal-10">
      <q-img src="https://img.freepik.com/premium-photo/ribbon-with-microcircuit-led-lamps-isolated-white-background_193437-2844.jpg?w=740" style="height: 162px;">
      </q-img>
      <q-card-section>
        <div class="row no-wrap items-center text-center">
          <div class="col text-h6 ellipsis text-white">
            Sensor Cahaya
          </div>
        </div>
        <div class="text-caption text-grey">
          sensor cahaya greenhouse website
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-subtitle1 text-center text-orange">
          {{sensor.ADC}}Cd
        </div>
      </q-card-section>
    </q-card>

    <q-card class="my-card2 bg-teal-10">
      <q-img src="https://img.freepik.com/free-vector/smart-farm-smart-greenhouse-illustration_1284-59322.jpg?t=st=1657692865~exp=1657693465~hmac=295017b272650959b84c478176ce292fb47972d170f9bb83f9b20cacfb02263f&w=826" style="height: 162px;">
      </q-img>
      <q-card-section>
        <div class="row no-wrap items-center text-center">
          <div class="col text-h6 ellipsis text-white">
            Ketinggian Air
          </div>
        </div>
        <div class="text-caption text-grey">
          sensor ketinggian air greenhouse
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-subtitle1 text-center text-orange">
          {{sensor.ADC}}CM
        </div>
      </q-card-section>
    </q-card>

    <q-card class="my-card3 bg-teal-10">
      <q-img src="https://img.freepik.com/free-vector/growing-plant-with-roots-soil_1308-58893.jpg?w=360&t=st=1659016031~exp=1659016631~hmac=5e4d40ff9440b653bce0f5c19030bcdaf1695d986d68f0292a5fc3661770967f" style="height: 162px;">
      </q-img>
      <q-card-section>
        <div class="row no-wrap items-center text-center">
          <div class="col text-h6 ellipsis text-white">
            Sensor Soil
          </div>
        </div>
        <div class="text-caption text-grey">
          sensor soil greenhouse website..
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-subtitle1 text-center text-orange">
          {{sensor.ADC}} PH
        </div>
      </q-card-section>
    </q-card>
    </div>
    <div>
    <div class="row q-col-gutter-sm q-ml-md q-mr-lg">
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-line />
        </q-card>
      </div>
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-area />
        </q-card>
      </div>
      <div class="flex-center">
        <div class="chart">
          <line-chart :styles="myStyles"/>
          <canvas id="chart"></canvas>
          <chart :chartData="data" :options="options" :width="8" :height="3"></chart>
        </div>
      </div>
    </div>

    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm">
      <line-chart></line-chart>
    </div>
  </div>
  </q-page>
</template>
<!-- <script>
import consumer from 'configRMQ/mqtt'
import Chart from 'configRMQ/Chart'
export default {
  name: 'PageIndex',
  sensor: null,
  invokedIdCnt: 0,
  components: {
    Chart
  },
  data () {
    return {
      name: null,
      sensor: null,
      height: 300,
      slide: 1,
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      shadoof: 'Shadoof adalah sebuah sistem yang dirancang untuk perariran otomatis dengan menggunakan pendekatan IOT (Internet Of Think).',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Shadoof',
            backgroundColor: '#228B22',
            data: []
          }
        ]
      },
      options: {
        responsive: true
      },
      default: [],
      defLbl: []
    }
  },
  beforeCreate: async function () {
    consumer.on('connect', function () {
      console.log('connect bray')
      consumer.subscribe('sensor01', function (err) {
        if (!err) {
          console.log(consumer)
          console.log('Subscribe Berhasil')
        } else if (err) {
          console.log(err)
        }
      })
    }).on('error', function (err) {
      console.log(err)
    })
  },
  beforePrintHandler: function () {
    for (const id in Chart.instances) {
      Chart.instances[id].resize()
    }
  },
  mounted () {
    this.getMessages()
    this.pushAngka()
  },
  methods: {
    pushAngka (angka) {
      if (this.default.length === 50) {
        this.default.splice(0, 1)
        console.log(this.default)
        this.defLbl.splice(0, 1)
        const data = this.default
        const lbl = this.defLbl
        for (let index = 0; index < 1; index++) {
          data.push(angka)
          const date = new Date()
          const jam = date.getHours()
          const menit = date.getMinutes()
          lbl.push(jam + ':' + menit)
        }
        this.default = data
        this.data = {
          labels: lbl,
          datasets: [
            {
              label: 'Shadoof',
              backgroundColor: '#228B22',
              data: this.default
            }
          ]
        }
        console.log(data)
      } else {
        const data = this.default
        const lbl = this.defLbl
        for (let index = 0; index < 1; index++) {
          data.push(angka)
          const date = new Date()
          const jam = date.getHours()
          const menit = date.getMinutes()
          lbl.push(jam + ':' + menit)
        }
        this.default = data
        this.data = {
          labels: lbl,
          datasets: [
            {
              label: 'Kelembapan Tanah',
              backgroundColor: '#228B22',
              data: this.default
            }
          ]
        }
      }
    },
    getMessages: function () {
      consumer.on('message', (topic, message) => {
        // this.sensor = message.toString()
        // console.log(message.toString())
        this.pushAngka(Number(message.toString()))
      })
      // console.log(this.message)
    }
  },
  increase () {
    this.height += 10
  },
  computed: {
    myStyles () {
      return {
        height: `${this.height}px`,
        position: 'relative'
      }
    }
  }
}
</script> -->

<script>
import { defineAsyncComponent, defineComponent } from 'vue'
import mqttjs from 'mqtt'
let client = null
const ApexLine = defineAsyncComponent(() =>
  import('components/charts/ApexLine.vue')
)
export default defineComponent({
  name: 'pageIndex',
  components: {
    ApexLine
  },
  data () {
    return {
      dataSensor: null,
      datanya: null,
      sensor: {},
      sensor1: {},
      datas: [],
      datass: [],
      title: 'lahhh'
    }
  },
  beforeCreate: async function () {
    const options = {
      username: '/shadoofpertanian:shadoofpertanian',
      password: 'TaniBertani19',
      clientId: 'goblok',
      protocolId: 'MQTT',
      reconnectPeriode: 0,
      keepAlive: 0
    }

    client = mqttjs.connect('ws://rmq1.pptik.id:15675/ws', options)
    client.on('connect', function () {
      client.subscribe('sensor02', function (err) {
        if (!err) {
          // console.log(err)
        }
      })
    })
    // client.on('connect', function () {
    //   client.subscribe('sensor01', function (err) {
    //     if (!err) {
    //       // console.log(err)
    //     }
    //   })
    // })
  },
  mounted () {
    this.getMessages()
    // this.getMessages1()
  },
  methods: {
    getMessages: function () {
      const parseSensor = (data) => {
        this.sensor = data
        this.datas.push(Number(data.ADC))
        // console.log(this.createChart('line-chart'))
        console.log(this.sensor)
      }
      client.on('message', function (topic, message) {
        const msg = JSON.parse(message.toString())
        parseSensor(msg)
      })
    }
    // getMessages1: function () {
    //   const parseSensor = (data) => {
    //     this.sensor1 = data
    //     this.datass.push(Number(data.ADC))
    //     // console.log(this.createChart('line-chart'))
    //     console.log(this.sensor1)
    //   }
    //   client.onn('message', function (topic, message) {
    //     const msg = JSON.parse(message.toString())
    //     parseSensor(msg)
    //   })
    // }
  }
})
</script>
<style>

</style>
