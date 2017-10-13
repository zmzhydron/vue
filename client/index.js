
import 'babel-polyfill';
import './index.htm';
import router from './router.js';
import store from './store.js';
import './src/images/1.png';
import './src/css/1.scss';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

// import uploadvue from './src/vue/upload.vue';

const app = new Vue({
  router,
  store,
  el: '#app'
});
console.log(app);