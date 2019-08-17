import Vue from 'vue'
import App from './App'
import router from './router'

import SvgIcon from '@/components/SvgIcon'

Vue.component('svg-icon', SvgIcon)
// 引入所有svg
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('@/assets/svg', false, /\.svg$/)
requireAll(req)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
