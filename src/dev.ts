import Vue, { h, reactive, readonly } from 'vue'
import DynamicHeading from './DynamicHeading'

new Vue({
  setup(this, props, ctx) {
    console.log(DynamicHeading);
    return () => h(DynamicHeading, {
      props: {
        level: 1
      }
    }, 'Hello World')
  },
}).$mount('#app')