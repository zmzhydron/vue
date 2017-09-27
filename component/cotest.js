var co = require("./co.js")

var tone = val => cb => {
	setTimeout( function(){
		cb(val+" @ one")
		console.log(`one: ${val}`)
	},1000)
}
var ttwo = val => cb => {
	setTimeout( function(){
		cb(val+" @ two")
		console.log(`two: ${val}`)
	},1000)
}
// auto(gen, "zmz");
function test(){
	var val = "zmz";
	var g = gen(val);
	var r = g.next();
	function cbs(val){
		r = g.next(val);
		if(!r.done){
			r.value(cbs);
		}
	}
	if(!r.done){
		r.value(cbs);
	}
}
// test();

var async1 = function(val){
	return 'zmz'+val
}

function one(val){
	return new Promise( (resolve,reject) => {
		setTimeout( function(){
			resolve({name: "zmz", fuck: "ass"})
		},1000)
	})
}
function two(name,fuck){
	return new Promise( (resolve,reject) => {
		setTimeout( function(){
			resolve(name+" @ two @"+fuck)
		},1000)
	})
}

function* gen(val){
	var a = yield one(val);
	var val = yield 'pussy';
	var b = yield two(val);
	// var b = yield two(a.name, a.fuck);
}

function auto(gen,val){
	return new Promise( (resolve, reject) =>{
		var g = gen(val);
		var v = 'zmz'
		function run(val){
			var r = g.next(val);
			if(r.done){
				resolve(v)
				console.log(`resolve value is ${v}`)
			}else{
				var _r = r.value;
				console.log(_r.constructor)
				if(typeof _r.constructor !== '[Function: Promise]'){
					_r = Promise.resolve(r.value);
				}
				_r.then( val => {
					console.log(` auto value is ${val}`)
					v = val;
					run(val);
				})	
				
			}
		}
		run(val);	
	})
}
auto(gen,'zmz').then( val => {
	console.log(` final is ${val}`)
});
