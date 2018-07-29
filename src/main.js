// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/style.css'
import 'iview/dist/styles/iview.css'
import { Button, Table, Carousel, CarouselItem, Row, Col, Menu, MenuItem, Breadcrumb, BreadcrumbItem, Icon, Card, Input } from 'iview'
import animate from 'animate.css'
Vue.config.productionTip = false
Vue.component('Button', Button)
Vue.component('Table', Table)
Vue.component('Carousel', Carousel)
Vue.component('CarouselItem', CarouselItem)
Vue.component('Row', Row)
Vue.component('Col', Col)
Vue.component('Menu', Menu)
Vue.component('MenuItem', MenuItem)
Vue.component('Breadcrumb', Breadcrumb)
Vue.component('BreadcrumbItem', BreadcrumbItem)
Vue.component('Icon', Icon)
Vue.component('Card', Card)
Vue.component('Input', Input)
Vue.use(animate)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
