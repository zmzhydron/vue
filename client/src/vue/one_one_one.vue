<template>
  <div>
    <h3 class="oneoneone">{{name}} >>>> {{sn}}</h3>
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
.oneoneone{
  font-weight: bold;
  color:red;
}
</style>
