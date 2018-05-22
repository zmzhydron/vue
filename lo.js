'use strict'

function pro1(value){
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve(value +" will");
    }, 1000);
  })
}
function pro2(value){
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve(value+" be")
    }, 1000);
  })
}
function pro3(value){
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve(value+" rich")
    }, 1000);
  })
}
function *gen(value){
  var a = yield pro1(value);
  var b = yield pro2(a);
  var c = yield pro3(b);
  return c;
}
function co(gen, initValue) {
  return new Promise((resolve, reject) => {
    var g = gen(initValue);
    function core(gen, value) {
      var r = gen.next(value);
      if (r.done) {
        resolve(r.value);
      } else {
        r.value.then(val => {
          console.log(val)
          core(g, val);
        })
      }
    }
    core(g);
  })
}
co(gen, 'zhangmingzhi').then(val => {
  console.log(val, ' are finially');
});

var blobs = new Blob(['zhangmingzhi'], {type: "text/plain"});
var file = new FileReader();
file.load(blobs);
file.addEventListener("loadend", function(){
  console.log(file.result);
})