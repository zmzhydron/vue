import Vuex from 'vuex';
import oneStore from 'storeSrc/one.js';
import zmzStore from 'storeSrc/zmz.js';

Vue.use(Vuex);

var glo = {
  state: {
    count: 0,
    name: 'zhangmingzhi'
  },
  mutations: {
    changename: function (state, obj) {
      let { value } = obj;
      state.name = value;
    }
  },
  actions: {
    changename: function ({ commit, state, rootState }, value) {
      return new Promise((resolve, reject) => {
        commit('changename', { value, });
        resolve('2222ok');
      });
    }
  }
};
var login = {
  state: {
    role: 'zhangmingzhi',
  },
  actions: {
    updateRole: function ({ commit, state, rootState }, value) {
      commit('updateRole', { value, });
    }
  },
  mutations: {
    updateRole: function (state, obj) {
      let { value } = obj;
      state.role = value;
    }
  }
};
const store = new Vuex.Store({
  modules: {
    one: oneStore,
    login,
    glo,
    zmz: zmzStore,
  }
});

export default store;