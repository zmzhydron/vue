export let zmz = {
  namespaced: true,
  state: {
    count: 0,
    name: 'zhangmingzhi'
  },
  mutations: {
    add: function(state, obj) {
      let { value } = obj;
      state.count = value;
    }
  },
  actions: {
    add2: function({commit, state, rootState}, value) {
      return new Promise((resolve, reject) => {
        commit('add', { value, });
        resolve('2222ok');
      });
    }
  }
};
