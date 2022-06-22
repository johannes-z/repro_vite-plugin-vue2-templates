<script lang="test">
// Add the following template to make it work...
/*
<template>
  <div>
    <!-- dummy -->
  </div>
</template>
*/
import Vue, { h, defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return () => h('div', 'Test')
  }
})
</script>