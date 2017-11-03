
import 'babel-polyfill';
import './index.htm';
import router from './router.js';
import store from './store.js';
import './src/images/1.png';
import './src/css/1.scss';
import iView from 'iview';
import index from './index.vue';
import 'iview/dist/styles/iview.css';
import son from './src/vue/son.vue';
import button from './src/vue/button.vue';
Vue.use(iView);
Vue.component('son', son);
Vue.component('zutton', button);
// import uploadvue from './src/vue/upload.vue';
const app = new Vue({
  router,
  store,
  el: '#app',
  components: {
    index,
  }
});
console.log(app);