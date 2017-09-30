import Vuex from "vuex"
import oneStore from "storeSrc/one.js"
import zmzStore from "storeSrc/zmz.js"


Vue.use(Vuex)
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
        commit("add", { value,})
        resolve("2222ok")
      })
    }
  }
}
var login = {
  state: {
    role: "zhangmingzhi",
  },
  actions: {
    updateRole: function({commit, state, rootState}, value){
      commit("updateRole", {value,})
    }
  },
  mutations: {
    updateRole: function(state, obj){
      let { value } = obj;
      state.role = value;
    }
  }
}
const store = new Vuex.Store({
  modules: {
    hehe: oneStore,
    login,
  }
})

export default store;