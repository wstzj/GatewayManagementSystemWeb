import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    registeredDevice:[],
    unRegisteredDevice:[
      {
        deviceName: '未命名设备1',
        deviceType: '监控',
        deviceNumber: '1',
        deviceAccessTime:"1672660409",
        deviceStartTime:"",
        deviceStreamingAddress:"http://101.42.226.88:5080/LiveApp/play.html?name=4GdsE9jYRmTl1670595829267"
      },
      {
        deviceName: '未命名设备2',
        deviceType: '监控',
        deviceNumber: '2',
        deviceAccessTime:"1672660409",
        deviceStartTime:"",
        deviceStreamingAddress:"http://101.42.226.88:5080/LiveApp/play.html?name=4GdsE9jYRmTl1670595829267"
      },
    ],
  },
  getters: {
    getLogin: (state) => {
      return state.isLogin
    }
  },
  mutations: {
    Login(state){
      state.isLogin = true
    },
    Logout(state){
      state.isLogin = false
    }
  },
  actions: {
  },
  modules: {
  }
})
