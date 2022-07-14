import { boot } from 'quasar/wrappers'
import { Notify } from 'quasar'

const show = ({ message, color }) => {
  Notify.create({
    message,
    color
  })
}

export default boot(({ app }) => {
  app.config.globalProperties.$notify = show
})

export { show }

// const formatPrice = (value) => {
//   const val = (value / 1).toFixed(0).replace('.', '.')
//   return 'Rp. ' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',-'
// }

// const subStringData = (value) => {
//   const vals = (value).substring(0, 25) + '...'
//   return vals
// }

// const listMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des']

// const parseDate = (date) => {
//   let respon
//   if (date === '' || date === null || date === undefined) {
//     respon = {
//       date: '-',
//       dateLocal: '-',
//       fullDate: '-',
//       timeStap: '-'
//     }
//   } else {
//     const newDate = new Date(date)
//     const month = '' + (newDate.getMonth() + 1)
//     const tgl = '' + (newDate.getDate())
//     const year = newDate.getFullYear()
//     const full = tgl + ' ' + listMonth[month - 1] + ' ' + year
//     respon = {
//       date: [year, month < 10 ? 0 + '' + (month) : (month), tgl < 10 ? 0 + '' + tgl : tgl].join('/') + '_' + newDate.getHours() + ':' + newDate.getMinutes() + ':' + newDate.getSeconds(),
//       dateLocal: [tgl < 10 ? 0 + '' + tgl : tgl, month < 10 ? 0 + '' + (month) : (month)].join(' '),
//       fullDate: full,
//       timeStap: `${full} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`
//     }
//   }
//   return respon
// }

// const generateId = () => {
//   return 'ID-' + Math.floor(Math.random() * 100000000)
// }

// export default boot(({ app }) => {
//   app.config.globalProperties.$showNotif = showNotif
//   app.config.globalProperties.$dialog = dialog
//   app.config.globalProperties.$generateId = generateId
//   app.config.globalProperties.$formatPrice = formatPrice
//   app.config.globalProperties.$parseDate = parseDate
//   app.config.globalProperties.$subString = subStringData
// })
