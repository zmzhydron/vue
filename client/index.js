import 'babel-polyfill';
import './index.htm';
import router from './router.js';
import store from './store.js';
import './src/images/1.png';
import './src/css/1.scss';
// import uploadvue from './src/vue/upload.vue';
// var gd = {
//   props: ['age', 'name', 'oops', 'type', 'yes', 'nop'],
//   computed: {
//     sonname: function () {
//       return this.$store.state.hehe.myname;
//     }
//   },
//   template: `
//     <h2 style="color:orange">
//       {{type}} !~[{{oops}}]~{{nop}}~~<{{name}}>~111{{yes}}---->>>{{sonname}}
//     </h2>`,
// };
// <slot name="zy" :obj="suject"></slot>
// var ZMZCOMP = {
//   props: ['nop'],
//   template: `
//     <h2 color="red">
//       zhangmingzhi COMP
//       <slot name="uploader"></slot>
//       <slot name="gd" oops="oops"></slot>
//       {{subject.name}}~~~~~{{testa}}
//       [[[{{myson}}]]]
//     </h2>`,
//   computed: {
//     testa: function () {
//       return 'testa';
//     },
//     myson: function () {
//       return this.$store.state.hehe.myson;
//     }
//   },
//   data: function () {
//     return {
//       subject: {
//         name: '狗蛋1儿',
//         age: '18month'
//       }
//     };
//   }
// };

// var zy = {
//   props: ['age', 'name'],
//   template: `
//     <h3 style="color:purple" >
//       {{age}}---->zy <---！ {{name}} 
//     </h3>`,
// };

const app = new Vue({
  router,
  store,
}).$mount('#app');
console.log(app);
// var hehe = new Vue({
//   el: "#hehe",
//   data: {
//     sname: "这么早",
//     age: 17,
//     name: "狗蛋儿",
//     testa: "深井冰",
//   },
//   store,
//   computed: {
//     myname: function(){
//       return this.$store.state.hehe.myname;
//     }
//   },
//   methods: {
//     clicker: function(e){
//       store.dispatch("hehe/rewritename", "sjb")
//       let isIE = false;
//       try{
//         var f = new FormData();  
//       }catch(e){
//         isIE = true;
//       }
//       var file;
//       if(isIE){
//         $("#haha").ajaxSubmit({
//           url: "api/upload",
//           type: "post",
//           success:function(val){
//             console.log(val);
//             console.log("!!!!!!!!!!!!!")
//           }
//         })
//         // console.log(file, " ****************** ")
//       }else{
//         file = document.getElementById("xixi").files[0];
//         ajax
//         .upload('api/upload')
//         .attach("hehe", file)
//         .end( (txt,raw) => {
//           console.log(txt,"***************")
//           console.log(raw)
//         })
//       }
//     }
//   },
//   components: {
//     zhangmingzhi: ZMZCOMP,
//     goudan: gd,
//     uploader: uploadvue,
//     zy,
//   }
// })
