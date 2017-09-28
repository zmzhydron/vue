import Vuex from "vuex"
Vue.use(Vuex)

var one = {
  state: {
    count: 0,
    name: "sjb"
  },
  mutations: {
    add: function(state, obj) {
      let { value } = obj;
      state.count = value;
    }
  },
  actions: {
    add1: function({commit, state, rootState}, value){
      return new Promise( (resolve, reject) => {
        setTimeout( function(){
          commit("add", { value,})
          console.log(state, rootState)
          resolve("11111111ok")
        },1000);
      })
    }
  }
}
var two = {
  namespaced: true,
  state: {
    count: 0,
    name: "zhangmingzhi"
  },
  mutations: {
    add: function(state, obj) {
      let { value } = obj;
      state.count = value;
    }
  },
  actions: {
    add2: function({commit, state, rootState}, value){
      return new Promise( (resolve, reject) => {
        setTimeout( function(){
          commit("add", { value,})
          console.log(state, rootState)
          resolve("2222ok")
        },1000);
      })
    }
  }
}
const store = new Vuex.Store({
  modules: {
    a: one,
    b: two,
  }
})

export default store;