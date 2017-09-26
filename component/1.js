	Vue.component("one", {
		template: '\
				<div @click="clicker">\
					<h2>{{fuckyou}} @ {{suckme}} @ {{counter}}</h2>\
					<input type="text" :value="value" @input="updateParent"/>\
					<slot name="slotOne">showing default slot 1</slot>\
					<slot name="slotTwo">showing default slot 2</slot>\
					<slot name="ass"><h4>oh fuck you, juicy ass!</h4></slot>\
					<slot name="stocking"><h4>oh fuck, stocking!</h4></slot>\
					<slot :asdf="renderlist" ></slot>\
					<div>\
						<p> my age is {{sage}}</p>\
						<input type="text" v-model="sval">\
						<button @click="sontest">change my name !</button>\
					</div>\
				</div>\
			',
		data: function(){
			return {
				sage: 18,
				sval: "zmz",
				name: "zmz",
			}
		},
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
			sonname: {},
		},

		methods: {
			clicker: function(e){
				this.$emit("meclick",1,2,3)
			},
			updateParent: function(e){
				console.log(e.target);
				this.$emit("updateparents", e.target.value);
			},
			sontest: function(){
				this.$emit("dbclic", this.sval);
			}
		}
	})