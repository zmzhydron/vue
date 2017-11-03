<template>
<div>
  <zutton v-for="(item, index) in locas" :key="index" :cb="item.cb(index)">{{item.name}}</zutton>
  <button @click="gogo">lastert</button>
</div>  
</template>

<script>
export default {
	props: ["ba"],
  data: function() {
    return {
      local: $.extend(true, {}, this.$props.ba)
    }
  },
  watch: {
    local: function() {
      console.log(this.local, '..............');
    }
  },
  computed: {
    locas: function() {
      return $.extend(true, {}, this.$props.ba)
    }
  },
  updated: function(){
    console.log(`son update`);
  },
  methods: {
    gogo: function() {
      console.log(this.locas[0]);
      this.locas[0].name = 'shitman';
    }
  }
}
</script>

<style>

</style>
