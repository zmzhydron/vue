<template>
  <div>
    <h3 style="color: pink">{{sonname}} <<!!<<{{mom}}</h3>
  </div>
</template>

<script>

import Vuex, { mapState } from 'vuex'

export default {
  data: function(){
    return {
      name: "张明之",
      hasFormData: typeof FormData === 'undefined' ? false : true
    }
  },
  computed: {
    mom: function(){
      return "zy"
    },
    stats: function(){
      return "r"
    },
    ...mapState({
      sonname: state => state.hehe.myson
    })
  }
}

</script>
<style>
  .one{
    color: lime;
  }
</style>
