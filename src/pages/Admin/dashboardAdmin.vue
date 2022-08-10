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
          <!-- {{sensor.ADC}}°C -->
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
          {{lampu}}
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
          <!-- {{sensor.MAC}}CM -->
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
          {{soil}} PH
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
      soil: null,
      lampu: null,
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
      client.subscribe('lampu', function (err) {
        if (!err) {
          // console.log(err)
        }
      })
    })
    // client.on('connect', function () {
    //   client.subscribe('lampu', function (err) {
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
      // eslint-disable-next-line no-var
      var parseSensor = (data) => {
        console.log(data)
        if (data.ADC !== undefined) {
          this.soil = data.ADC
        }
        if (data.LAMPU !== undefined) {
          this.lampu = data.LAMPU
        }
        // this.datas.push(Number(data.ADC))
        // console.log(this.createChart('line-chart'))
        console.log(this.soil)
        console.log(this.lampu)
      }
      client.on('message', function (topic, message) {
        const msg = JSON.parse(message.toString())
        parseSensor(msg)
        // console.log(msg)
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
