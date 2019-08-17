import Vue from 'vue'
import App from './App'
import router from './router'

import cssUtils from '@/utils/cssUtils.js'
import jsUtils from '@/utils/jsUtils.js'
import svgUtils from '@/utils/svgUtils.js'

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
