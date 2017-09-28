import "babel-polyfill"
import "./index.htm"
import router from "router.js"
import store from "./src/vuex/store.js"
import vv from "./src/vue/index.vue"

import Vuex from "vuex"
// import comp from "comp.js"
import "./src/images/1.png"
import "./src/css/1.scss"
store.dispatch('b/add2', "张明之").then( val => {
  console.log(val," ~~~~~~~~ ")
  console.log(store.state.a, store.state.b)
  
  store.dispatch('b/add2', "sjb").then( val => {
    console.log(val," ~~~~~~~~ ")
    console.log(store.state.a, store.state.b)
  })
})

var gd = {
  props: ['name', 'age', 'type'],
  template: `
    <h2 style="color:green">
      <slot >zmz slot show!!!</slot>
      <slot name="zy" values="1234"> gd slot show!!</slot>
      {{type}}111{{name}}{{age}}
    </h2>`,
};
var zy = {
  
}

Vue.component('zy',{
  props: ["hehe", "name", "fuckyou"],
  template: `<h3 style="color:purple" ><slot> zhou yan </slot>zy {{name}} </h3>`,
})

//<goudan shitman="true" type="oops" v-bind="subject"></goudan>
var ZMZCOMP = {
  template: `
    <h2 color="red">zhangmingzhi COMP  {{name}} ---- 
      <goudan shitman="true" type="oops" v-bind="subject">
        <zy slot="zy" :name="name" ></zy>
      </goudan>
    </h2>`,
  data: function(){
    return {
      name: "狗蛋儿二",
      subject: {
        name: "狗蛋儿",
        age: '18month'
      }
    }
  },
  components: {
    goudan: gd
  }
}

const app = new Vue({
  router
}).$mount('#app')

var hehe = new Vue({
  el: "#hehe",
  data: {
    sname: "这么早",
    age: 17,
    name: "狗蛋儿"
  },
  computed: {
    myname: function(){
      return "fuckyou1"
    }
  },
  components: {
    zhangmingzhi: ZMZCOMP,
    goudan: gd
  }
})

console.log(hehe.$el, " ******************* ")










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