import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    authState: '' 
  },
  mutations: {
    updateAuthState (state, authState) {
      console.log("Updated state: " + authState)
      state.obj.authState = authState
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
