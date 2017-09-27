import "babel-polyfill"
import "./index.htm"
import VueRouter from 'vue-router'
import vv from "./index.vue"
import "./src/images/1.png"
import "./src/css/1.scss"

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
  template: '<div><h1>age!!</h1></div>'
}
const nulls = {
  template: '<div><h1>shit</h1></div>'
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


const app = new Vue({
  router
}).$mount('#app')


// var data = {
//   name: "zhangmingzhi"
// }
// var ve = new Vue({
//   el: "#app",
//   data: data,
//   components: {
//     'my-component': vv
//   }
// })








// let me = {
//   name: "zmz",
//   age: "24"
// }
// let { name: a, age: b } = me;
// console.log(a,b)
// let list = [1,2,3,4,5];
// list = list.map( (item ,index ) => {
//   return item * 10 + " zmz ";
// })
// list = [...list, 'a','b'];
// console.log(list);
// console.log($)

// function aa(){
//   return new Promise( (resolve, reject) => {
//     resolve("zhangmingzhi")
//   })
// }
// aa().then( val => {
//   console.log(val+"~~~~~~~~~~~~~~")
// })