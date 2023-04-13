<template>
  <div class="container" ref="containerRef">
    <slot></slot>
  </div>
</template>

<script>
import { debounce } from 'lodash'

export default {
  name: 'Container',
  props: {
    width: {

    },
    height: {}
  },
  mounted() {
    this.init()
    this.updateSize()
    this.updateScale()
    window.addEventListener('resize', this.handleResize)
  },
  data() {
    return {
      realWidth: 0,
      realHeight: 0,
      // 实际屏幕的大小
      // 视口宽度
      // 画布尺寸
      viewportWidth: window.screen.width,
      // 视口高度
      viewportHeight: window.screen.height
    }
  },
  methods: {
    init() {
      const containerRef = this.$refs.containerRef
      // 大屏的真实尺寸
      if (this.width && this.height) {
        this.realWidth = this.width
        this.realHeight = this.height
      }
      else {
        this.realWidth = containerRef.clientWidth
        this.realHeight = containerRef.clientHeight
      }
    },
    // 更新dom尺寸
    updateSize() {
      if (this.width && this.height) {
        this.$refs.containerRef.style.width = `${this.width}px`
        this.$refs.containerRef.style.height = `${this.height}px`
      }
      else {
        this.$refs.containerRef.style.width = `${this.viewportWidth}px`
        this.$refs.containerRef.style.height = `${this.viewportHeight}px`
      }
    },
    handleResize:function() {
      this.init()
      this.updateScale()
    },
    updateScale() {
      // 获取真实视口尺寸
      const currentWidth = document.body.clientWidth
      const currentHeight = document.body.clientHeight
      // 获取大屏最终的宽高
      const widthScale = currentWidth / this.realWidth
      const heightScale = currentHeight / this.realHeight
      this.$refs.containerRef.style.transform = `scale(${widthScale},${heightScale})`
    }
  }
}
</script>

<style scoped lang="less">
.container {
  font-size: 140px;
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 9999;
  transform-origin: left top;
}
</style>
