import { h } from 'vue'

const DynamicHeading = (props, context) => {
  return h('div', [
    'DynamicHeading',
    h(`h${props.level}`, context.attrs, context.slots),
  ])
}

DynamicHeading.props = ['level']

export default DynamicHeading
