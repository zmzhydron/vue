<template>
  <div>
    <h3 class="oneone">{{father}} >>>> {{name}} OF {{sn}}</h3>
    <slot>one_one_slot</slot>
  </div>
</template>

<script>
export default {
  props: ['father', 'sn'],
  data: function() {
    return {
      name: 'one_one'
    };
  }
};
</script>

<style>
.oneone{
  font-weight: bold;
}
</style>
