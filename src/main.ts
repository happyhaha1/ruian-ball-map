import { createApp } from 'vue'
import BaiduMap from 'vue-baidu-map-3x'
import App from './App.vue'
import router from '~/router'

import '@unocss/reset/normalize.css'
import './styles/main.css'
import 'uno.css'

import 'vant/es/toast/style'
import 'vant/es/dialog/style'

const app = createApp(App)
app.use(router)
app.use(BaiduMap, {
  ak: 'hDhvfu1C0eMCAUeQNQRZCKlE',
})
app.mount('#app')

