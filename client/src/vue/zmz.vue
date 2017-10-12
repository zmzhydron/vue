<template>
  <div>
    <h3>{{VUENAME}}</h3>
    <button @click="GOTOONE">GOTOONE</button>
  </div>
</template>

<script>

import {createNamespacedHelpers, } from 'vuex';
const { mapState, mapActions, mapGetters, } = createNamespacedHelpers('zmz');

export default {
  data: function() {
    return {
      VUENAME: 'ZMZ VUE'
    };
  },
  methods: {
    GOTOONE: function() {
      this.$router.push('/one/狗蛋儿啊');
    },
    ...mapActions({

    })

  },
  computed: {
    ...mapState({

    }),
    ...mapGetters({

    })
  }
};
</script>
<style>

</style>
