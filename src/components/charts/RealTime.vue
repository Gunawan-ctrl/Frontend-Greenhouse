<!-- <template>
  <div id="chart">
        <apexchart type="line" height="350" ref="chart" :options="chartOptions" :series="series"></apexchart>
      </div>
</template>

<script>
import { defineComponent } from 'vue'
// import { getCssVar } from 'quasar'
// import mqttjs from 'mqtt'
const dataSensor = [
  {
    name: 'Sensor Suhu',
    data: []
  }
]
export default defineComponent({
  name: 'ApexLine',
  data () {
    return {
      series: [{
        data: data.slice()
      }],
      chartOptions: {
        chart: {
          id: 'realtime',
          height: 350,
          type: 'line',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000
            }
          },
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Dynamic Updating Chart',
          align: 'left'
        },
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime',
          range: XAXISRANGE
        },
        yaxis: {
          max: 100
        },
        legend: {
          show: false
        }
      },
      mounted: function () {
        const me = this
        window.setInterval(function () {
          getNewSeries(lastDate, {
            min: 10,
            max: 90
          })

          me.$refs.chart.updateSeries([{
            data
          }])
        }, 1000)

        // every 60 seconds, we reset the data to prevent memory leaks
        window.setInterval(function () {
          resetData()

          me.$refs.chart.updateSeries([{
            data
          }], false, true)
        }, 60000)
      }
    //   options: {
    //     title: {
    //       text: 'Grafik Line',
    //       align: 'left'
    //     },
    //     chart: {
    //       id: 'apex-line'
    //     },
    //     colors: [getCssVar('primary'), getCssVar('secondary'), getCssVar('negative')],
    //     markers: {
    //       size: 4,
    //       hover: {
    //         sizeOffset: 6
    //       }
    //     },
    //     xaxis: {
    //       categories: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']
    //     }
    //   },
    //   series: dataSensor
    // }
      // series: dataSensor,
      // chartOptions: {
      //   chart: {
      //     id: 'realtime',
      //     height: 350,
      //     type: 'line',
      //     animations: {
      //       enabled: true,
      //       easing: 'linear',
      //       dynamicAnimation: {
      //         speed: 1000
      //       }
      //     },
      //     toolbar: {
      //       show: false
      //     },
      //     zoom: {
      //       enabled: false
      //     }
      //   },
      //   dataLabels: {
      //     enabled: false
      //   },
      //   stroke: {
      //     curve: 'smooth'
      //   },
      //   title: {
      //     text: 'Dynamic Updating Chart',
      //     align: 'left'
      //   },
      //   markers: {
      //     size: 0
      //   },
      //   xaxis: {
      //     type: 'datetime',
      //     range: null
      //   },
      //   yaxis: {
      //     max: 100
      //   },
      //   legend: {
      //     show: false
      //   }
      // }
    }
  }
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
})
</script>

<!-- new Vue({
        el: '#app',
        components: {
          apexchart: VueApexCharts,
        },
        data: {

          series: [{
            data: data.slice()
          }],
          chartOptions: {
            chart: {
              id: 'realtime',
              height: 350,
              type: 'line',
              animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                  speed: 1000
                }
              },
              toolbar: {
                show: false
              },
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            title: {
              text: 'Dynamic Updating Chart',
              align: 'left'
            },
            markers: {
              size: 0
            },
            xaxis: {
              type: 'datetime',
              range: XAXISRANGE,
            },
            yaxis: {
              max: 100
            },
            legend: {
              show: false
            },
          },

        },
        mounted: function () {
          var me = this
          window.setInterval(function () {
            getNewSeries(lastDate, {
              min: 10,
              max: 90
            })

            me.$refs.chart.updateSeries([{
              data: data
            }])
          }, 1000)

          // every 60 seconds, we reset the data to prevent memory leaks
          window.setInterval(function () {
            resetData()

            me.$refs.chart.updateSeries([{
              data
            }], false, true)
          }, 60000)
        },
      }) --> -->
