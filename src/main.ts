import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { createRouter, createWebHashHistory } from 'vue-router'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import './styles/main.scss'

import App from './App.vue'
import MainPage from './pages/MainPage.vue'
import AboutPage from './pages/AboutPage.vue'
import WorkPage from './pages/WorkPage.vue'
import { i18n } from './i18n'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'sama',
    themes: {
      sama: {
        dark: false,
        colors: {
          primary: '#7047c8',
          secondary: '#bca8e8',
          background: '#f4f1f8',
          surface: '#fffefe',
          'surface-variant': '#eae5f0',
          'on-background': '#282430',
          'on-surface': '#282430',
          error: '#b74764',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#c2a6ff',
          secondary: '#8d70c4',
          background: '#242129',
          surface: '#302d36',
          'surface-variant': '#403b48',
          'on-background': '#f5f1fa',
          'on-surface': '#f5f1fa',
          error: '#ff9bad',
        },
      },
      light: {
        dark: false,
        colors: {
          primary: '#6540b3',
          secondary: '#aa91d8',
          background: '#faf9fc',
          surface: '#ffffff',
          'surface-variant': '#eeeaf3',
          'on-background': '#26232c',
          'on-surface': '#26232c',
          error: '#b74764',
        },
      },
    },
  },
})

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0, behavior: 'smooth' }),
  routes: [
    { path: '/', name: 'main', component: MainPage },
    { path: '/who-am-i', name: 'who-am-i', component: AboutPage },
    { path: '/work', name: 'work', component: WorkPage },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

createApp(App).use(i18n).use(vuetify).use(router).mount('#app')
