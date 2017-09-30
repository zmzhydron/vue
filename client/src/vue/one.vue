<template>
  <div>
    <h3 style="color: pink">{{name}} >>[{{gets}}]>>>>@{{gloname}}@ {{sonname}}</h3>
    <button @click="changelocalname">changelocalname</button>
    <button @click="changeSTOREname">changeStateName</button>
    <button @click="changeGLONAME">GLONAME</button>
    <button @click="gotozmz">gotozmz-vuex</button>
    <h3 class="one">{{path}}</h3>
    <one-one :father="name" :sn="sonname">
      <oneOneOne></oneOneOne>
    </one-one>
  </div>
</template>

<script>

// PATH: ONE

import {createNamespacedHelpers, } from 'vuex';

import one1 from 'vueComp/one_one.vue';
import one11 from 'vueComp/one_one_one.vue';

const { mapState, mapActions, mapGetters, } = createNamespacedHelpers('one');

export default {
  data: function() {
    return {
      name: 'ONEVUE',
      hasFormData: FormData !== 'undefined'
    };
  },
  components: {
    oneOne: one1,
    oneOneOne: one11,
  },
  computed: {
    ...mapState({
      sonname: state => state.myson
    }),
    gets: function() {
      return this.$route.params.lol;
    },
    gloname: function() {
      return this.$store.state.glo.name;
    },
    ...mapGetters({
      path: 'curPath'
    })
  },
  updated: function() {
    console.log(this, '~~~~~~~~~~~~');
    this.$router.push(this.path);
  },
  methods: {
    changelocalname: function(e) {
      this.$data.name = 'ONE_VALUE';
    },
    changeSTOREname: function(e) {
      this.asdf('ONE_VUE_CHANGED');
    },
    changeGLONAME: function() {
      this._changeGLONAME('GLO ZMZ!');
    },
    gotozmz: function() {
      this._gotozmz('zhangmingzhi');
    },
    ...mapActions({
      asdf: 'rewritename',
      _gotozmz: 'gotoNY',
      _changeGLONAME: 'changename',
    })
  }
};
</script>
<style>
.one {
  color: lime;
}
</style>
