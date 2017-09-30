export default {
  namespaced: true,
  state: {
    myname: "zhangmingzhi",
    name: "zhangmingzhi",
    myson: "狗1蛋",
    age: 29,
  },
  mutations: {
    changemyname: function(state, obj) {
      let { value } = obj;
      state.myname = value;
      console.log(state,"@@@@@@@@@@@@@@@@")
    }
  },
  actions: {
    rewritename: function({commit, state, rootState}, value){
      return new Promise( (resolve, reject) => {
          commit("changemyname", { value,})
          resolve("changemyname")
      })
    }
  }
}