	Vue.component("one", {
		template: '\
				<div @click="clicker">\
					<h2>{{fuckyou}} @ {{suckme}} @ {{counter}}</h2>\
					<input type="text" :value="value" @input="updateParent"/>\
					<slot asdff="montherfucker">oh fuck, from behind !</slot>\
					<slot name="ass">oh fuck you, juicy ass!</slot>\
					<slot name="stocking">oh fuck, stocking!</slot>\
					<slot :asdf="renderlist"></slot>\
				</div>\
			',
		props: {
			fuckyou: {
				default: "shit bitch"
			},
			suckme: {
				default: "suckme babay"
			},
			counter: {

			},
			value: {},
			renderlist: {},
		},
		methods: {
			clicker: function(e){
				this.$emit("meclick",1,2,3)
			},
			updateParent: function(e){
				console.log(e.target);
				this.$emit("updateparents", e.target.value);
			}
		},
		data: function(){
			return {
				name: "zmz"
			}
		}
	})