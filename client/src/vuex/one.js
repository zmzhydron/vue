export let one = {
  state: {
    count: 0,
    name: 'sjb',
    _onename: 'one_vue_components'
  },
  mutations: {
    add: function(state, obj) {
      let { value } = obj;
      state.count = value;
    }
  },
  actions: {
    add1: function({commit, state, rootState}, value) {
      return new Promise((resolve, reject) => {
        setTimeout(function() {
          commit('add', { value, });
          console.log(state, rootState);
          resolve('11111111ok');
        }, 1000);
      });
    }
  }
};