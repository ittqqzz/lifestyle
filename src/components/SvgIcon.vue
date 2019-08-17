<template>
  <svg :class="svgClass" :style="style" aria-hidden="true">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String
    },
    width: {
      type: String,
      default: '5vw'
    },
    height: {
      type: String,
      default: '5vw'
    }
  },
  data () {
    return {
      style: {
        width: this.width,
        height: this.height
      }
    }
  },
  computed: {
    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style>
.svg-icon {
  width: 5em;
  height: 5em;
  fill: currentColor;
  overflow: hidden;
}
</style>