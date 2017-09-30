<template>
  <div>
    <h3 style="color: pink">{{name}} >>[{{gets}}]>>>>  {{sonname}}</h3>
  </div>
</template>

<script>


import Vuex, { mapState } from 'vuex'
// // // import Vue from "vue"
// Vue.use(Vuex)
export default {
  data: function(){
    return {
      name: "ONEVUE",
      hasFormData: typeof FormData === 'undefined' ? false : true
    }
  },
  computed: {
    ...mapState({
      sonname: state => state.hehe.myson
    }),
    gets: function(){
      return this.$route.params.lol
    }
  }
}

</script>
<style>
  .one{
    color: lime;
  }
</style>
