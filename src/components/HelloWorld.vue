<template>
  <div class="hello">
    <nickname-header></nickname-header>
    <input type="text" v-model="msg" />
    <div v-if="msg.length > 5">
      <h1>{{ msg }}</h1>
    </div>
    <button v-on:click="clear()">clear</button>
  </div>
</template>

<script>
import Vue from 'vue';
import { NickNameheader } from './NickNameheader';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Hi Yusuke Yamashita',
    };
  },
  methods: {
    clear() {
      this.msg = "";
    }
  }
};

Vue.component('nickname-header', NickNameheader);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$font-color: #42b983;
h1, h2 {
  font-weight: normal;
  color: $font-color;
}
</style>
