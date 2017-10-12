import Vuex from 'vuex';
import one from 'storeSrc/one.js';
import zmz from 'storeSrc/zmz.js';
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    a: one,
    b: zmz,
  }
});

export default store;