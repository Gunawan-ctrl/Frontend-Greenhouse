<template>
  <q-page>
    <div class="row items-start q-pa-md">
      <div class="col-md-3 col-xs-6 q-mt-sm row justify-center">
        <q-card class="my-card bg-green-10">
          <q-card-section>
            <div class="text-h6 text-center text-blue">Sensor Suhu {{ this.ADC }}</div>
            <div class="text-grey"> sensor suhu greenhouse website.. {{this.MAC}}</div>
          </q-card-section>
          <q-card-section class="text-h6 text-center text-white">
            <q-input filled v-model="MAC">{{ this.MAC }}</q-input>
            26°C {{ this.MAC }}
          </q-card-section>
        </q-card>
      </div>

        <div class="col-md-3 col-xs-6 q-mt-sm row justify-center">
          <q-card class="my-card bg-blue-grey">
            <q-card-section>
              <div class="text-h6 text-center text-teal-11">Sensor Cahaya</div>
              <div class="text-grey"> sensor cahaya greenhouse website..</div>
            </q-card-section>
            <q-card-section class="text-weight-bold text-h6 text-white text-center">
              27Cd
            </q-card-section>
          </q-card>
        </div>

        <div class="col-md-3 col-xs-6 q-mt-sm row justify-center">
          <q-card class="my-card bg-teal-10">
            <q-card-section>
              <div class="text-h6 text-center text-red">Ketinggian Air</div>
              <div class="text-grey"> sensor ketinggian air greenhouse</div>
            </q-card-section>
            <q-card-section class="text-weight-bold text-h6 text-white text-center">
              28Cm
            </q-card-section>
          </q-card>
        </div>

        <div class="col-md-3 col-xs-6 q-mt-sm row justify-center">
          <q-card class="my-card bg-brown">
            <q-card-section>
              <div class="text-h6 text-center text-orange">Sensor Soil</div>
              <div class="text-grey"> sensor soil greenhouse website..</div>
            </q-card-section>
            <q-card-section class="text-weight-bold text-h6 text-white text-center">
              29RH {{this.dataSensor}}
            </q-card-section>
          </q-card>
        </div>
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
    </div>
  </div>
  </q-page>
</template>

<script>
// import mqttjs from 'mqtt'
// import { client } from 'src/boot/axios'
// export default ({
//   data () {
//     return {
//       MAC: null,
//       ADC: null
//     }
//   },
//   // methods: {
//   methods: {
//     const options = {
//       username: '/shadoofpertanian:shadoofpertanian',
//       password: 'TaniBertani19',
//       clientId: 'goblok',
//       protocolId: 'MQTT',
//       reconnectPeriode: 0,
//       keepAlive: 0
//     },
//     // const options = {
//     //
//     // }

//     // const client = mqttjs.connect('ws://cloudrmq.pptik.id:15675/ws', options)
//     // client.on('connect', function () {
//     //   client.subscribe('sensor01', function (err) {
//     //     if (!err) {
//     //       // console.log(err)
//     //     }
//     //   })
//     // })
//     const client = mqttjs.connect('ws://cloudrmq.pptik.id:15675/ws', options)
//     client.on('message', function (topic, message) {
//       const data = JSON.parse(message.toString())
//         this.MAC = data.MAC
//         this.ADC = data.ADC
//         console.log(this.MAC)
//         console.log(this.ADC)
//     })
//   },
//   dataRMQ () {
//     client.on('message', function (message) {
//       const data = JSON.parse(message.toString())
//       this.dataRMQ = data.ADC
//     })
//   },
//   mounted () {
//     this.dataRMQ()
//   }
//   // }
//   // END DATA KAK ADI
// })
</script>
<style>

</style>
