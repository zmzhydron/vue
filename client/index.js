import "babel-polyfill"
import "./index.htm"
import vv from "./index.vue"
import "./src/images/1.png"
import "./src/css/1.scss"
let me = {
  name: "zmz",
  age: "24"
}
let { name: a, age: b } = me;
console.log(a,b)
let list = [1,2,3,4,5];
list = list.map( (item ,index ) => {
  return item * 10 + " zmz ";
})
list = [...list, 'a','b'];
console.log(list);
console.log($)

function aa(){
  return new Promise( (resolve, reject) => {
    resolve("zhangmingzhi")
  })
}
aa().then( val => {
  console.log(val+"~~~~~~~~~~~~~~")
})
var data = {
  name: "zhangmingzhi"
}
var ve = new Vue({
  el: "#app",
  data: data,
  components: {
    'my-component': vv
  }
})