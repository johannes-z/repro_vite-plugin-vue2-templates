import Vue, { h, reactive, readonly } from 'vue'

class MyObject {
  constructor () {
    console.log('MyObject')
  }

  public log () {
    console.log('log');
  }
}

new Vue({
  setup(this, props, ctx) {
    const data = reactive({
      number: 0,
      object: {
        test: 'test'
      },
      array: ['test'],
      complex: new MyObject()
    })

    return {
      data: readonly(data)
    }
  },

  render () {
    console.log(this.data);
    this.data.complex.log()
    return h('div', `Count: ${this.data.number}`)
  }
}).$mount('#app')