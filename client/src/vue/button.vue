<template>
<div>
  <button @click="gogo"><slot></slot></button>
</div>  
</template>

<script>
export default {
  props: ['cb'],
  data: function() {
    return {
    }
  },
  methods: {
    gogo: function() {
      console.log('button click');
      this.$props.cb('shit');
    }
  }
}
</script>

<style>

</style>
