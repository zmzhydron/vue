<style scoped>

</style>
<template>
	<div class="layout">
		<p class="shitmant">{{localba}}{{ba}}</p>
		<button @click="gola">papapapa</button>
		<son :ba="localba"></son>
	</div>
</template>
<script>
export default {
	data: function() {
		const that = this;
		return {
			name: 'zhangmingzhi',
			shitman: {
				name: {
					last: 'ook'
				}
			},
			hehe: '',
			xixi: '1-1',
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
			return this.$data.localba;
		}
	},
	methods: {
		gola: function() {
			this.$data.localba[0].name = 'shabi';
		}
	},
	watch: {
		shitman: function(val) {
			console.log("wathing your die!!");
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