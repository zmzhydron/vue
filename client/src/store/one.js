import {subone, } from 'storeSrc/one_one.js';

console.log(subone, 'subone 11111111');

export default {
  namespaced: true,
  state: {
    myson: '狗1蛋',
    age: 29,
    path: 'one/狗1蛋',
    _onename: 'baby_one_name'
  },
  mutations: {
    changemyname: function (state, obj) {
      let { value } = obj;
      state.myson = value;
    },
    changePATH: function (state, obj) {
      let { value } = obj;
      console.log('changePATH', value);
      state.path = value;
    }
  },
  getters: {
    curPath: state => {
      let { path } = state;
      console.log(path, '~~~~~~~$$$$$$$$$$$$$$');
      return '/zmz';
    }
  },
  actions: {
    rewritename: function ({ commit, state, rootState }, value) {
      return new Promise((resolve, reject) => {
        commit('changemyname', { value, });
        resolve('changemyname');
      });
    },
    changename: function ({ commit, state, rootState }, value) {
      console.log(value, '~~~~~~~~~~~');
      commit('changename', { value, }, { root: true });
    },
    gotoNY: function ({ commit, state, rootState }, value) {
      console.log(`gotoNY`, value);
      commit('changePATH', { value, });
    }
  },
  modules: {
    subone,
  }
};