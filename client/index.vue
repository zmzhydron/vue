<style scoped lang='scss'>

</style>
<template>
	<div class="layout">
		<div id="a">1124
			<Icon type="flag" size="72"></Icon>

		</div>
		<button @click="gola">pop1</button>
		<son :ba="localba" :pa="pa"></son>
		<tt :val="hehe" :cb="la"></tt>
		<Modal v-model="pop1" title="Common Modal dialog box title" @on-ok="ok" @on-cancel="cancel">
			<p>111111111111</p>
			<button @click="popb">popb</button>

		</Modal>
		<Modal v-model="pop2" title="Common Modal dialog box title" @on-ok="ok" @on-cancel="cancel">
			<p>22222222</p>
			<button @click="popc">popc</button>

		</Modal>
		<Modal v-model="pop3" title="Common Modal dialog box title" @on-ok="ok" @on-cancel="cancel">
			<p>333333333333</p>
		</Modal>
	</div>
</template>
<script>
export default {
	data: function() {
		const that = this;
		return {
			name: 'zhangmingzhi',
			shitman: {
				name: "zmz"
			},
			pop1: false,
			pop2: false,
			pop3: false,
			hehe: '',
			xixi: '1-1',
			pa: {
				name: "zhangmingzhi"
			},
			localba: [
				{
					cb: index => val => {
						that.$data.localba[index].name = new Date().valueOf() + " aaa ";
					},
					name: "aaaa"
				},
				{
					cb: index => val => {
						that.$data.localba[index].name = new Date().valueOf() + " cccc ";
					},
					name: "bbb"
				},
				{
					cb: index => val => {
						that.$data.localba[index].name = new Date().valueOf() + " bbbb ";
					},
					name: "cccc"
				}
			]
		};
	},
	updated: function() {
		console.log(`>>>>>>>>>>>>>father update<<<<<<<<<<<<<<<<<<`);
	},
	computed: {

		oops: function() {
			return 'haha';
		},
		ba: function() {
			console.log('--------------computed--------------');
			return this.shitman.name;
		}
	},
	methods: {
		gola: function() {
			this.$data.localba[0].name = 'shabi';
			this.hehe = new Date().valueOf();
			this.pop1 = true;
		},
		popb: function() {
			this.pop2 = true;
		},
		ok: function() {

		},
		cancel: function() {

		},
		popc: function() {
			this.pop3 = true;
		},
		la: function(val) {
			const that = this;
			that.hehe = val;
		},
	},
	watch: {
		shitman: function(val) {
			// console.log("wathing your die!!");
			// console.log(val.split(','), '~~~~~~~~~');
			// // return this.hehe = ["'" + val + "'"];
			// this.xixi = val.split(',').join('-');
			// // this.hehe = [...val.split(','), ''];
			// this.hehe = val.split(',');
			// this.$nextTick(() => {
			// 	this.$refs['fuckyou'].updateOpened();
			// });
		},
		localba: function() {
			console.log("wathing your die!!");
		}
	}
};
</script>