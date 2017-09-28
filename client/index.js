import "babel-polyfill"
import "./index.htm"
import router from "router.js"
import store from "./src/vuex/store.js"
import vv from "./src/vue/index.vue"
// import comp from "comp.js"
import "./src/images/1.png"
import "./src/css/1.scss"
import Vuex, { mapState ,} from "vuex"

store.dispatch('b/add2', "张明之").then( val => {
  console.log(store.state.b.count, " ~~~~~~~~~~~~~ ")

})

var gd = {
  props: ['name', 'age', 'type'],
  computed: {
    sonname: function(){
      return this.$store.state.hehe.myname
    }
  },
  template: `
    <h2 style="color:green">
      <slot >zmz slot show!!!</slot>
      <slot name="zy" values="1234"> gd slot show!!</slot>
      {{type}}111{{name}}{{age}}---->>>{{sonname}}
    </h2>`,
};
var zy = {
  
}

Vue.component('zy',{
  props: ["hehe", "name"],
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
  router,
  store,
}).$mount('#app')
var hehe = new Vue({
  el: "#hehe",
  data: {
    sname: "这么早",
    age: 17,
    name: "狗蛋儿"
  },
  store,
  computed: {
    myname: function(){
      return this.$store.state.hehe.myname;
    }
  },
  methods: {
    clicker: function(e){
      store.dispatch("hehe/rewritename", "sjb")
    }
  },
  components: {
    zhangmingzhi: ZMZCOMP,
    goudan: gd
  }
})









