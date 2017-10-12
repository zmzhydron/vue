
import VueRouter from 'vue-router';
import onetest from 'vueComp/one.vue';
import zmztest from 'vueComp/zmz.vue';

const age = {
  props: ['name'],
  template: '<div><h1>age!! {{name}}$!!!!!!!</h1></div>'
};

const routes = [
  {
    path: '/zmz',
    component: zmztest,
  },
  {
    path: '/one/:lol',
    component: onetest,
  },
  {
    path: '/me/:suckit',
    component: Me,
    children: [{
      path: 'age',
      component: age,
    }]
  },
  {
    path: '/yo/:suckit',
    component: Me,
    children: [{
      path: 'age',
      component: age,
    }]
  },
];

const router = new VueRouter({
  routes
});

export default router;
