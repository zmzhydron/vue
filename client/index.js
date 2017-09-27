import "babel-polyfill"
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
console.log(list);
console.log($)

function aa(){
  return new Promise( (resolve, reject) => {
    resolve("zhangmingzhi")
  })
}
aa().then( val => {
  alert(val)
})