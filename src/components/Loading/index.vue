<template>
  <div class="loading">
    <svg :width="width" :height="height" viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="22" fill="none" stroke-width="3" :stroke="outLineColor" stroke-dasharray="34,34"
        stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" :dur="duration"
          repeatCount="indefinite" />
        <animate attributeName="stroke" :values="outLineColorAnimation" :dur="2 * duration" repeatCount="indefinite" />
      </circle>
      <circle cx="25" cy="25" r="12" fill="none" stroke-width="3" :stroke="inlineColor" stroke-dasharray="19,19"
        stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" from="360 25 25" to="0 25 25" :dur="duration"
          repeatCount="indefinite" />
        <animate attributeName="stroke" :values="inlineColorAnimation" :dur="duration * 2" repeatCount="indefinite" />
      </circle>
    </svg>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    width: {
      type: [Number, String],
      default: 50
    },
    height: {
      type: [Number, String],
      default: 50
    },
    outLineColor: {
      type: String,
      default: '#3be6cb'
    },
    inlineColor: {
      type: String,
      default: '#02bcfe'
    },
    duration: {
      type: [Number, String],
      default: 2
    }
  },
  data () {
    const outLineColorAnimation = `${this.outLineColor};${this.inlineColor};${this.outLineColor}`
    const inlineColorAnimation = `${this.inlineColor};${this.outLineColor};${this.inlineColor}`
    return {
      outLineColorAnimation,
      inlineColorAnimation
    }
  }
}
</script>

<style scoped lang="less"></style>
