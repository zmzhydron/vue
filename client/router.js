import VueRouter from 'vue-router'
import onetest from "./src/vue/one.vue"
const Me = {
  template: `
    <div>
      <h1 style="color: red">{{ $route.params.suckit}}</h1>
      <router-view></router-view>
      <router-view name="one"></router-view>
      <router-view name="two"></router-view>
    </div>
  `
}
const age = {
  props: ["name"],
  template: '<div><h1>age!! {{name}}$!!!!!!!</h1></div>'
}
const nulls = {
  template: '<div><h1>shit</h1></div>'
}
const zmz = {
  computed: {
    asdf: function(){
      return this.$store.state.hehe.myname
    }
  },
  template: '<div><h1>shit --- > > {{asdf}}</h1></div>'
}

let one1 = {
  template: '<div><h1>1111 ROOT</h1></div>'
}
let one2 = {
  template: '<div><h1>1111 me</h1></div>'
}


let two1 = {
  template: '<div><h1>2222 ROOT</h1></div>'
}
let two2 = {
  template: '<div><h1>3333333333333 me</h1></div>'
}


const routes = [
  {
    path: '/zmz',
    component: zmz,
  },
  {
    path: "/one/:lol",
    component: onetest,
  },
  {
    path: '/me/:suckit',
    component: Me,
    children: [{
        path: "age",
        component: age,
    }]
  },
    {
    path: '/yo/:suckit',
    component: Me,
    children: [{
      path: "age",
      component: age,
    }]
  },
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})



export default router