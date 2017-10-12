export const subone = {
  namespaced: true,
  state: {
    name: 'sub_1_1'
  },
  mutations: {
    changename: function(state, obj) {
      console.log('changename mutations');
      state.name = obj.value;
    }
  },
  actions: {
    changenameac: ({commit, state, rootState}, value) => {
      return new Promise((resolve, reject) => {
        commit('changename', { value, });
      });
    }
  }
};