<template>
  <div>
    <h3 class="oneone">{{onefather}} >>>> {{name}} OF {{onesn}}</h3>
    <slot name="one_one" >one_one_slot</slot>
    <slot :goal="msgtoself">shit hanppedns!!!</slot>
    <h2 class="statev">{{stateValue}}</h2>
    <button @click="clicker">changestatevalue --> {{subonename}}</button>
    <input type="text" v-model="sync" @input="updateinput" />
    <button @click="syncclick">syncclick --> {{sync}}</button>
  </div>
</template>

<script>

import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions, mapGetters, } = createNamespacedHelpers('one/subone');
export default {
  props: ['onefather', 'onesn', 'stateValue', 'syncone'],
  data: function() {
    return {
      name: 'one_one',
      msgtoself: 'i will be rich !!!',
      sync: this.syncone,
    };
  },
  methods: {
    ...mapActions({}),
    clicker: function(value) {
      console.log(111);
      this.$emit('one_event', 'value');
    },
    syncclick: function(value) {
      this.$emit('syncone', 'free-sync');
    },
    updateinput: function(event) {
      let val = event.target.value;
      console.log(val);
      this.$emit('update:syncone', val);
    }
  },
  updated: function(val) {
    console.log(val, 'updated!!!!!!');
  },
  computed: {
    ...mapState({
      subonename: state => state.name
    })
  },
  getters: {
    ...mapGetters({})
  }
};
</script>

<style>
.oneone{
  font-weight: bold;
  color: orange;
}
.statev{
  color: mediumpurple;
}
</style>
