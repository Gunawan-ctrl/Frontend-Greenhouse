<template>
  <apexchart height="400" type="line" :options="options" :series="series"></apexchart>
</template>

<script>
import { defineComponent } from 'vue'
const trigoStrength = 3
const iteration = 11
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Apexline',
  props: {
    title: {
      type: String,
      required: true
    },
    data: {
      type: Number
    }
  },
  data () {
    return {
      options: {
        // title: {
        //   text: this.title,
        //   align: 'left'
        // },
        chart: {
          height: 350,
          type: 'line',
          stacked: true,
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000
            }
          },
          dropShadow: {
            enabled: true,
            opacity: 0.3,
            blur: 5,
            left: -7,
            top: 22
          },
          events: {
            animationEnd: function (chartCtx, opts) {
              const newData1 = chartCtx.w.config.series[0].data.slice()
              newData1.shift()
              const newData2 = chartCtx.w.config.series[1].data.slice()
              newData2.shift()

              // check animation end event for just 1 series to avoid multiple updates
              if (opts.el.node.getAttribute('index') === '0') {
                window.setTimeout(function () {
                  chartCtx.updateOptions({
                    series: [{
                      data: newData1
                    }, {
                      data: newData2
                    }],
                    subtitle: {
                      text: parseInt(this.getRandom() * Math.random()).toString()
                    }
                  }, false, false)
                }, 300)
              }
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
          curve: 'straight',
          width: 5
        },
        grid: {
          padding: {
            left: 0,
            right: 0
          }
        },
        markers: {
          size: 0,
          hover: {
            size: 0
          }
        },

        xaxis: {
          type: 'datetime',
          range: 2700000
        },
        title: {
          text: 'Processes',
          align: 'left',
          style: {
            fontSize: '12px'
          }
        },
        subtitle: {
          text: '20',
          floating: true,
          align: 'right',
          offsetY: 0,
          style: {
            fontSize: '22px'
          }
        },
        legend: {
          show: true,
          floating: true,
          horizontalAlign: 'left',
          onItemClick: {
            toggleDataSeries: false
          },
          position: 'top',
          offsetY: -28,
          offsetX: 60
        }
      },
      chart: {
        height: 350,
        type: 'line',
        stacked: true,
        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 1000
          }
        },
        dropShadow: {
          enabled: true,
          opacity: 0.3,
          blur: 5,
          left: -7,
          top: 22
        },
        events: {
          animationEnd: function (chartCtx, opts) {
            const newData1 = chartCtx.w.config.series[0].data.slice()
            newData1.shift()
            const newData2 = chartCtx.w.config.series[1].data.slice()
            newData2.shift()

            // check animation end event for just 1 series to avoid multiple updates
            if (opts.el.node.getAttribute('index') === '0') {
              window.setTimeout(function () {
                chartCtx.updateOptions({
                  series: [{
                    data: newData1
                  }, {
                    data: newData2
                  }],
                  subtitle: {
                    text: parseInt(this.getRandom() * Math.random()).toString()
                  }
                }, false, false)
              }, 300)
            }
          }
        },
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      // series: [{
      //   data: this.data
      // }],
      series: [{
        name: 'Running',
        data: this.generateMinuteWiseTimeSeries(new Date('12/12/2016 00:20:00').getTime(), 12, {
          min: 30,
          max: 110
        })
      }, {
        name: 'Waiting',
        data: this.generateMinuteWiseTimeSeries(new Date('12/12/2016 00:20:00').getTime(), 12, {
          min: 30,
          max: 110
        })
      }],
      events: {
        animationEnd: function (chartCtx, opts) {
          const newData1 = chartCtx.w.config.series[0].data.slice()
          newData1.shift()
          const newData2 = chartCtx.w.config.series[1].data.slice()
          newData2.shift()

          // check animation end event for just 1 series to avoid multiple updates
          if (opts.el.node.getAttribute('index') === '0') {
            window.setTimeout(function () {
              chartCtx.updateOptions({
                series: [{
                  data: newData1
                }, {
                  data: newData2
                }],
                subtitle: {
                  text: parseInt(this.getRandom() * Math.random()).toString()
                }
              }, false, false)
            }, 300)
          }
        }
      }
    }
  },
  mounted () {
    // console.log(this.data)
    // const chart = new ApexCharts(document.querySelector('#chart'), options)
    // chart.render()

    // window.setInterval(function () {
    //   getNewSeries(lastDate, {
    //     min: 10,
    //     max: 90
    //   })

    //   chart.updateSeries([{
    //     data
    //   }])
    // }, 1000)
    // this.chart.updateSeries()
    // this.chart.render()
    // this
    // this.chart.updateSeries([{
    //   data: this.data.slice()
    // }])
  },
  methods: {

    getRandom () {
      const i = iteration
      return (Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2)
    },
    getRangeRandom (yrange) {
      return Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    },

    generateMinuteWiseTimeSeries (baseval, count, yrange) {
      let i = 0
      const series = []
      while (i < count) {
        const x = baseval
        const y = ((Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2))

        series.push([x, y])
        baseval += 300000
        i++
      }
      return series
    },
    getNewData (baseval, yrange) {
      const newTime = baseval + 300000
      return {
        x: newTime,
        y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
      }
    }
  }

})
</script>
