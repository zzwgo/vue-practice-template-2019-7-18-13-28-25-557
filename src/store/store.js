import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    total: 0,
    countNumber:0,
  },
  mutations: {
    increment :state =>{  state.total++  },
    decrease :state =>{  state.total--  },
    updateCounterNum :(state, payload)=> {
      state.countNumber = payload
      state.total=0
    }
  },
  getters: {
    getTotal:state=>{
       return state.total
    },
    getCounterNum:state=>{
      return state.countNumber
   },
  }
})
export default store;