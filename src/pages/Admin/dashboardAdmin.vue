<template>
  <q-page>
    <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      autoplay
      swipeable
      transition-prev="jump-up"
      transition-next="rotate"
    >
      <q-carousel-slide :name="1" img-src="https://img.freepik.com/free-photo/seedlings-planting-tray_1150-23158.jpg?w=740&t=st=1660399575~exp=1660400175~hmac=4906859723bb91d81f4c" />
      <q-carousel-slide :name="2" img-src="https://img.freepik.com/free-photo/leafy-vegetables-are-growing-indoor-farm-vertical-farm-vertical-farm_181624-42948.jpg?w=740&t=st=1660399902~exp=1660400502~hmac=99d46bb81b482f1e8ba5d6604999c0485af133934c3b5334a55b11cfbb53d0e0" />
      <q-carousel-slide :name="3" img-src="https://img.freepik.com/free-vector/scene-with-clean-energy-city_1308-37953.jpg?w=826&t=st=1660447157~exp=1660447757~hmac=4efd21bb3cd73698b76b5c75b80b46c3e2f1c3a6c443764f9e9e0ae0f90d7474" />
      <q-carousel-slide :name="4" img-src="https://img.freepik.com/free-vector/green-energy-generated-by-wind-turbine-solar-panel_1308-72303.jpg?w=740&t=st=1660447247~exp=1660447847~hmac=360b2cc3efc61b565d82797325edf534541bc7a122f1b2bed874bcad190cc903" />
    </q-carousel>
  </div>
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
      <q-img src="https://elektrologi.iptek.web.id/wp-content/uploads/2021/01/sensor-ultrasonik-jsn-SR04T.jpg" style="height: 162px;">
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
      <q-img src="https://1.bp.blogspot.com/-V4k8c0U2bzo/X28DIRkPx-I/AAAAAAAAEWc/UHx7wasGjuk6i9SBxGHpPzMe-HsZmTuLACLcBGAsYHQ/w640-h420/Schematics%2BSoil.png" style="height: 162px;">
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
      title: 'lahhh',
      slide: 1
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
      client.subscribe('sensor01', function (err) {
        if (!err) {
          // console.log(err)
        }
      })
      client.subscribe('sensor03', function (err) {
        if (!err) {
          // console.log(err)
        }
      })
    })
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
  }
})
</script>
<style>

</style>
