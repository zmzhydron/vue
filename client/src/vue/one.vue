<template>
  <div>
    <h3 style="color: pink">{{name}} >>[{{gets}}]>>>>@{{gloname}}@ {{sonname}}</h3>
    <button @click="changelocalname">changelocalname</button>
    <button @click="changeSTOREname">changeStateName</button>
    <button @click="changeGLONAME">GLONAME</button>
    <button @click="gotozmz">gotozmz-vuex</button>
    <h3 class="one">{{path}}</h3>
    <div :class="glasses">
      <input type="text" v-model="values">
      <p style="color: orange">{{values}}</p>
      <label for="checkone">gouzi!!</label>
      <input id="checkone" type="checkbox" v-model="ckstatus">
      <button @click="chchskstatus">change ckstatus</button>
      <select name="" v-model="selecs" id="">
        <option value="000">-----</option>
        <option value="aaa">1</option>
        <option value="bbb">2</option>
        <option>3</option>
      </select>
      <p>{{selecs}} >>>> {{selecss}}</p>
      <button @click="addListOne">+++++++</button>
      <div v-for="obj in listone">
        <span>name: {{obj.name}}</span><span>age: {{obj.age}} --- {{renders(obj.age)}}</span>
      </div>
    </div>
    <one-one :father="name" :sn="sonname">
      <oneOneOne :sn="sonname"></oneOneOne>
    </one-one>
  </div>
</template>

<script>

// PATH: ONE

import { createNamespacedHelpers } from 'vuex';
import one1 from 'vueComp/one_one.vue';
import one11 from 'vueComp/one_one_one.vue';

const { mapState, mapActions, mapGetters, } = createNamespacedHelpers('one');
const makeChar = () => {
  return String.fromCharCode(Math.floor(Math.random() * 57) + 65);
};
export default {
  data: function() {
    return {
      name: 'ONEVUE',
      hasFormData: FormData !== 'undefined',
      values: 'enter your name here',
      ckstatus: false,
      selecs: '',
      nowT: parseInt(new Date().valueOf()),
      listone: [
        {
          name: 'zmz',
          age: 29
        },
        {
          name: 'zy',
          age: 27
        },
        {
          name: 'goudan',
          age: 1.5
        }
      ]
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
    glasses: function(e) {
      console.log('glasses');
      return this.nowT % 2 === 0 ? 'event' : 'odd';
    },
    selecss: function(e) {
      return this.selecs + '@@';
    },
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
    // this.$router.push(this.path);
  },
  methods: {
    addListOne: function(e) {
      let str = Array.from({length: 5}).map(item => {
        return makeChar();
      }).join('');

      this.listone.push({
        name: str,
        age: makeChar()
      });
    },
    chchskstatus: function(e) {
      this.ckstatus = true;
    },
    renders: function(value) {
      console.log(value, '<<<<<<<<<<<');
      return value + ' <<< ';
    },
    changelocalname: function(e) {
      this.name = 'ONE_VALUE';
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

.event {
  border: solid 3px red;
}

.odd {
  border: solid 3px green;
}
</style>
