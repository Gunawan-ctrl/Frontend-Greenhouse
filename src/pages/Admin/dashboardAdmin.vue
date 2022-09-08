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
      <q-carousel-slide :name="2" img-src="https://img.freepik.com/premium-photo/boldo-leaf-garden-rio-de-janeiro-brazil_63139-2000.jpg?w=740" />
      <q-carousel-slide :name="3" img-src="https://img.freepik.com/premium-photo/beautiful-tropical-garden-long-shot_23-2148245256.jpg?w=740" />
      <q-carousel-slide :name="4" img-src="https://img.freepik.com/premium-photo/top-view-composition-plants-pots_23-2148509902.jpg?w=740" />
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
          {{suhu}}°C <br>
          Keterangan : {{suhuKet}}
        </div>
      </q-card-section>
    </q-card>

    <q-card class="my-card bg-teal-10">
      <q-img src="https://img.freepik.com/premium-photo/ribbon-with-microcircuit-led-lamps-isolated-white-background_193437-2844.jpg?w=740" style="height: 162px;">
      </q-img>
      <q-card-section>
        <div class="row no-wrap items-center text-center">
          <div class="col text-h6 ellipsis text-white">
            Cahaya
          </div>
        </div>
        <div class="text-caption text-grey">
          sensor cahaya greenhouse website
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-subtitle1 text-center text-orange">
          {{lampu}} <br>
          Keterangan : {{lampuKet}}
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
          {{ketinggianair}} CM <br>
          Keterangan : {{ketinggianairKet}}
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
          {{soil}}PH <br>
          Keterangan : {{soilKet}}
        </div>
      </q-card-section>
    </q-card>
    </div>
    <div>
      <!-- * Halaman Chart  -->
    <!-- <div class="row q-col-gutter-sm q-ml-md q-mr-lg">
      <div class="flex-center">
        <div class="chart">
          <line-chart :styles="myStyles"/>
          <canvas id="chart"></canvas>
          <chart :chartData="data" :options="options" :width="8" :height="3"></chart>
        </div>
      </div>
    </div> -->

    <!-- <div class="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm">
      <line-chart></line-chart>
    </div> -->
    <!-- * Halaman Chart -->
  </div>
  </q-page>
</template>
<script>

// import { defineAsyncComponent, defineComponent } from 'vue'
import { defineComponent } from 'vue'
import mqttjs from 'mqtt'
let client = null
// const ApexLine = defineAsyncComponent(() =>
//   import('components/charts/ApexLine.vue')
// )
export default defineComponent({
  name: 'pageIndex',
  components: {
    // ApexLine
  },
  data () {
    return {
      dataSensor: null,
      datanya: null,
      soil: null,
      soilKet: null,
      suhu: null,
      suhuKet: null,
      lampu: null,
      lampuKet: null,
      ketinggianair: null,
      ketinggianairKet: null,
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

    client = mqttjs.connect('ws://rmq2.pptik.id:15675/ws', options)
    client.on('connect', function () {
      client.subscribe('sensorsuhu', function (err) {
        if (!err) {
          // console.log(err)
        }
      })
      client.subscribe('lampu', function (err) {
        if (!err) {
          // console.log(err)
        }
      })
      client.subscribe('sensorsoil', function (err) {
        if (err) {
          // console.log(err)
        }
      })
      client.subscribe('ketir', function (err) {
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
      // console.log('woi')
      // eslint-disable-next-line no-var
      var parseSensor = (data) => {
        // console.log(data)
        if (data.ADC !== undefined) {
          this.suhu = data.ADC
          this.suhuKet = data.KET
        }
        if (data.LAMPU !== undefined) {
          this.lampu = data.LAMPU
          // console.log(this.lampu)
          this.lampuKet = data.KET
        }
        if (data.PH !== undefined) {
          this.soil = data.PH
          this.soilKet = data.KET
        }
        if (data.cm !== undefined) {
          this.ketinggianair = data.cm
          this.ketinggianairKet = data.KET
        }
        // this.datas.push(Number(data.ADC))
        // console.log(this.createChart('line-chart'))
        // console.log(this.suhu)
        // console.log(this.lampu)
        // console.log(this.soil)
        // console.log(this.ketinggianair)
      }
      client.on('message', function (topic, message) {
        const msg = JSON.parse(message.toString())
        console.log(msg)
        parseSensor(msg)
        // console.log(msg)
      })
    }
  }
})
</script>
<style>

</style>
