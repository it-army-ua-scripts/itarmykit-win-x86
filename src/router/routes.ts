import { RouteRecordRaw } from 'vue-router'
import { bootstrapGuard } from './guards'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'dashboard', component: () => import('pages/dashboard/DashboardPage.vue') },
      
      { path: '/modules/active', name: 'modules_active', component: () => import('pages/modules/ActiveModulePage.vue') },
      { path: '/modules/distress', name: 'modules_distress', component: () => import('pages/modules/distressPage.vue') },

      { path: '/activeness', name: 'activeness', component: () => import('pages/activeness/ActivenessPage.vue') },
      
      { path: '/settings', name: 'settings', component: () => import('pages/SettingsPage.vue') },
      { path: '/top', name: 'top', component: () => import('pages/top/TopPage.vue') },
      { path: '/developers', name: 'developers', component: () => import('pages/developers/DevelopersPage.vue') },
    ],
    beforeEnter: [ bootstrapGuard ]
  },

  {
    path: '/bootstrap',
    name: 'bootstrap',
    component: () => import('pages/bootstrap/BootstrapPage.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
