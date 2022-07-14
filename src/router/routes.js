
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Admin/dashboardAdmin.vue') },
      { path: '/dataAlat', name: 'dataAlat', component: () => import('pages/Admin/dataAlat.vue') },
      { path: '/dashboardAdmin', name: 'dashboardAdmin', component: () => import('pages/Admin/dashboardAdmin.vue') },
      { path: '/dataTanaman', name: 'dataTanaman', component: () => import('pages/Admin/dataTanaman.vue') },
      { path: '/dataKebun', name: 'dataKebun', component: () => import('pages/Admin/dataKebun.vue') },
      { path: '/dataUser', name: 'dataUser', component: () => import('pages/Admin/dataUser.vue') },
      { path: '/InputDataAlat', name: 'InputDataAlat', component: () => import('pages/Admin/InputDataAlat.vue') },
      { path: '/InputDataTanaman', name: 'InputDataTanaman', component: () => import('pages/Admin/InputDataTanaman.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/userLayout.vue'),
    children: [
      { path: '/dashboardUser', name: 'dashboardUser', component: () => import('pages/User/dashboardUser.vue') },
      { path: '/dataTanamanUser', name: 'dataTanamanUser', component: () => import('pages/User/dataTanaman.vue') },
      { path: '/dataKebunUser', name: 'dataKebunUser', component: () => import('pages/User/dataKebun.vue') }
    ]
  },
  {
    path: '/utamaLayout',
    component: () => import('layouts/utamaLayout.vue'),
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
