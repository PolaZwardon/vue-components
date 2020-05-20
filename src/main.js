
import Vue from 'vue'
import App from './App'
import InformationCard from './components/InformationCard'
import WidgetComponent from './components/WidgetComponent'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
new Vue({
  el: '#informationCard',
  components: { InformationCard },
  template: '<InformationCard/>'
})
new Vue({
  el: '#widgetComponent',
  components: { WidgetComponent },
  template: '<WidgetComponent/>'
})
