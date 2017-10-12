<template>
  <div>
    <h3 class="oneone">{{name}} >>>> {{sn}}</h3>
  </div>
</template>

<script>
export default {
  props: ['sn'],
  data: function() {
    return {
      name: 'one_one_one!!!'
    };
  }
};
</script>

<style>
.oneone{
  font-weight: bold;
}
</style>
