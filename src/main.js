import firebase from 'firebase'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.min.css'
import App from './App'
import router from './router'
import store from './stores/index'

Vue.use(ElementUI)

const config = {
  apiKey: 'AIzaSyCErff52h98mqahGNalC7NLTa9X9NH67ds',
  authDomain: 'documentation-94e3e.firebaseapp.com',
  databaseURL: 'https://documentation-94e3e.firebaseio.com',
  projectId: 'documentation-94e3e',
  storageBucket: '',
  messagingSenderId: '271335049801'
}
firebase.initializeApp(config)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
