import Vue from 'vue'
import { h } from 'vue'

import MyComponent from './MyComponent.vue'


new Vue({
  setup(this, props, ctx) {
    return () => h(MyComponent)
  },
}).$mount('#app')