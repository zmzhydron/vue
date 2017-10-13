<template>
  <div>
    <h3 class="oneoneone">{{name}} >><<<>> {{sn}}</h3>
    <Icon type="help"></Icon>
    <Alert type="success">成功提示文案</Alert>
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
