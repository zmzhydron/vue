export default {
  state: {
    count: 0,
    name: 'sjb'
  },
  mutations: {
    changethename: function(state, obj) {
      let { value } = obj;
      state.count = value;
    }
  },
  actions: {
    add1: function({commit, state, rootState}, value) {
      return new Promise((resolve, reject) => {
        commit('changethename', { value, });
        resolve('11111111ok');
      });
    },
    changePATH: function() {

    }
  }
};