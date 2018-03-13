import Vue from 'vue';

export const NickNameheader = Vue.extend({
  name: 'nickname_header',
  template: '<h1 class="nickname">{{ property.nickname }}</div><br /><input type="text" v-model="property.nickname">',
  data() {
    return {
      property: {
        nickname: 'YamaP',
      },
    };
  },
});
