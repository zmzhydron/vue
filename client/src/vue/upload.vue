<template>
  <div>
    <h1 class="one" v-if="hasFormData">支持formdata</h1>
    <h1 class="one" v-else>不支持formdata</h1>
  </div>
</template>

<script>
module.exports = {
  data: function(){
    return {
      name: "张明之"
    }
  },
  computed: {
    hasFormData: function(){
      return typeof FormData === 'undefined' ? false : true
    }
  },
}

</script>

<style>

</style>

<style>
  .one{
    color: lime;
  }
</style>
