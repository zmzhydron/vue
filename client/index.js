import "babel-polyfill"
import "./index.htm"
import router from "./router.js"
import store from "./src/vuex/store.js"
import "./src/images/1.png"
import "./src/css/1.scss"
import Vuex, { mapState ,} from "vuex"
import * as asdf from "aijiakesi"

import uploadvue from "./src/vue/upload.vue"

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

var ZMZCOMP = {
  template: `
    <h2 color="red">zhangmingzhi COMP
      <slot name="uploader"></slot>
    </h2>`,
  data: function(){
    return {
      subject: {
        name: "狗蛋儿",
        age: '18month'
      }
    }
  }
}
// Vue.component('zy',{
//   props: ["hehe", "name"],
//   template: `<h3 style="color:purple" ><slot> zhou yan </slot>@@zy@@ {{name}} </h3>`,
// })

var zy = {
  props: ["hehe", "name"],
  template: `<h3 style="color:purple" ><slot> zhou yan </slot>@@zy@@ {{name}} </h3>`,
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
      let isIE = false;
      try{
        var f = new FormData();  
      }catch(e){
        isIE = true;
      }
      var file;
      if(isIE){
        $("#haha").ajaxSubmit({
          url: "api/upload",
          type: "post",
          success:function(val){
            console.log(val);
            console.log("!!!!!!!!!!!!!")
          }
        })
        // console.log(file, " ****************** ")
      }else{
        file = document.getElementById("xixi").files[0];
        ajax
        .upload('api/upload')
        .attach("hehe", file)
        .end( (txt,raw) => {
          console.log(txt,"***************")
          console.log(raw)
        })
      }
    }
  },
  components: {
    zhangmingzhi: ZMZCOMP,
    goudan: gd,
    uploader: uploadvue,
    zy,
  }
})









