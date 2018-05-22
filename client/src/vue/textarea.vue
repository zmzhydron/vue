<template>
<div>
  <textarea v-model="value" @input="gogo"></textarea>
  <p>{{value}}!!!</p>
  <p>{{val}}~~~</p>
</div>  
</template>

<script>
export default {
  props: ['val', 'cb'],
  data: function() {
    return {
      value: this.val
    }
  },
  watch: {
    val: function(val) {
      console.log(val, '~~~~~~~~~~~~~~~')
      this.value = val;
    }
  },
  methods: {
    gogo: function(e) {
      this.value = e.target.value;
      this.cb(e.target.value);
    }
  }
}
</script>

<style>

</style>
