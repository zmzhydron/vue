import VueRouter from 'vue-router'
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
    components: {
      default: zmz,
      one: one1,
      two: two1,
    },
  },
  {
    path: '/me/:suckit',
    components: {
      default: Me,
      one: one1,
      two: two1,
    },
    children: [{
        path: "age",
        components: {
          default: age,
          one: one2,
          two: two2,
        },
      },
      // {
      //   path: "",
      //   component: nulls
      // }
    ]
  },
    {
    path: '/yo/:suckit',
    components: {
      default: Me,
      one: one2,
      two: two2,
    },
    children: [{
        path: "age",
        components: {
          default: age,
          one: one1,
          two: two1,
        },
      },
      // {
      //   path: "",
      //   component: nulls
      // }
    ]
  },
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})



export default router