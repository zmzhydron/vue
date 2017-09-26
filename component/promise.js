
//test promise
var init = function(startfn){
	return new Promise(startfn)
}
var start = function(resolve,reject){
	setTimeout(function(value){
		resolve(value)
	},1000,"fuckyou")
}
var p1 = init(start);
// p1.then( function(value){
// 	console.log(`result are ${value}`)
// }, function(value){
// 	console.log(`reject resone are ${value}`)
// });
var p2 = new Promise(function(resolve, reject){
	// reject(new Error("error fuck you you"))
	setTimeout(function(){
		resolve(p1)
	}, 3000);
})
var p3 = new Promise(function(resolve, reject){
	// reject(new Error("error fuck you you"))
	setTimeout(function(){
		resolve(" P3 RESULT")
	}, 3000);
})
// p2.then( function(value){
// 	console.log(` p2 result are ${value}`)
// }, function(value){
// 	console.log(` p2 reject resone are ${value}`)
// }).catch(function(e){
// 	console.log(` catch are ${e}`)
// })
var allps = Promise.all([p1,p2,p3]);
// allps.then( function(value){
// 	console.log(value instanceof Array)
// 	console.log(` all result are ${value}`)
// }, function(value){
// 	console.log(` all reject resone are ${value}`)
// }).catch(function(e){
// 	console.log(` catch are ${e}`)
// })

//Promise resolve
var testResolve = {
	then: function(r){
		r({name: "zhangmingzhi"}) 
	}
}

Promise.resolve(testResolve).then( obj => {
	// console.log(obj.name)
	// console.log(`current resolve Value are: ${obj}`)
})


//generator

function* gen(val){
	var a = yield new Promise( (resolve, reject) => {
		setTimeout(() =>{
			
			resolve("hehe")
		}, 1000)
	})
	console.log(`a: ${a}`)
	var b = yield a + 1;
	console.log(`b: ${b}`)
	var c = yield b + 1;
	console.log(`c: ${c}`)
	return b
}
console.log(gen.constructor.name)

var me = {};