
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      authAdmin: true
    },
    children: [
      { path: '/', component: () => import('pages/Admin/dashboardAdmin.vue') },
      { path: '/dataAlat', name: 'dataAlat', component: () => import('pages/Admin/dataAlat.vue') },
      { path: '/dashboardAdmin', name: 'dashboardAdmin', component: () => import('pages/Admin/dashboardAdmin.vue') },
      { path: '/dataTanaman', name: 'dataTanaman', component: () => import('pages/Admin/dataTanaman.vue') },
      { path: '/dataKebun', name: 'dataKebun', component: () => import('pages/Admin/dataKebun.vue') },
      { path: '/dataUser', name: 'dataUser', component: () => import('pages/Admin/dataUser.vue') },
      { path: '/setTanaman', name: 'setTanaman', component: () => import('pages/Admin/setTanaman.vue') },
      { path: '/inputsetTanaman', name: 'inputsetTanaman', component: () => import('pages/Admin/inputsetTanaman.vue') },
      { path: '/InputDataAlat', name: 'InputDataAlat', component: () => import('pages/Admin/InputDataAlat.vue') },
      { path: '/InputDataTanaman', name: 'InputDataTanaman', component: () => import('pages/Admin/InputDataTanaman.vue') },
      { path: '/inputKebun', name: 'inputKebun', component: () => import('pages/Admin/inputKebun.vue') },
      { path: '/editTanaman/:guid', name: 'editTanaman', component: () => import('pages/Admin/editTanaman.vue') },
      { path: '/editAlat/:guid', name: 'editAlat', component: () => import('pages/Admin/editAlat.vue') },
      { path: '/editKebun/:guid', name: 'editKebun', component: () => import('pages/Admin/editKebun.vue') }
    ]
  },
  {
    path: '/userLayout',
    component: () => import('layouts/userLayout.vue'),
    meta: {
      auth: true
    },
    children: [
      { path: '/dashboardUser', name: 'dashboardUser', component: () => import('pages/User/dashboardUser.vue') },
      { path: '/dataAlatUser', name: 'dataAlatUser', component: () => import('pages/User/dataAlat.vue') },
      { path: '/inputAlatUser', name: 'inputAlatUser', component: () => import('pages/User/inputAlatUser.vue') },
      { path: '/dataTanamanUser', name: 'dataTanamanUser', component: () => import('pages/User/dataTanaman.vue') },
      { path: '/inputTanamanUser', name: 'inputTanamanUser', component: () => import('pages/User/inputTanamanUser.vue') },
      { path: '/dataKebunUser', name: 'dataKebunUser', component: () => import('pages/User/dataKebun.vue') },
      { path: '/inputKebunUser', name: 'inputKebunUser', component: () => import('pages/User/inputKebunUser.vue') },
      { path: '/editTanamanUser/:guid', name: 'editTanamanUser', component: () => import('pages/User/editTanamanUser.vue') }
    ]
  },
  {
    path: '/utamaLayout',
    component: () => import('layouts/utamaLayout.vue'),
    meta: {
      auth: true
    },
    children: [
      { path: '', component: () => import('pages/utama/halamanUtama.vue') }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/Acces/sigIn.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('pages/Acces/sigIn.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('pages/Acces/sigUp.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
