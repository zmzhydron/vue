import VueRouter from 'vue-router';
import onetest from 'vueComp/one.vue';
import zmztest from 'vueComp/zmz.vue';

const routes = [
  {
    path: '/zmz',
    component: zmztest,
  },
  {
    path: '/one/:lol',
    component: onetest,
  }
];

const router = new VueRouter({
  routes
});

export default router;