<template>
  <div id="idnap-drawer" class="c-drawer">
    <div class="nav-drawer">
      <div class="nav-container">
        <div :style="[navContentStyles, drawerDirection]" class="nav-content">
          <slot name="drawer-content" />
        </div>
        <div class="bg-blur-mask"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
    width: {
      type: Number,
      required: false,
      default: 260,
    },
    bgColor: {
      type: String,
      required: false,
      default: '#3b889A',
    },
    position: {
      type: String,
      required: false,
      default: 'left',
      validator: value => ['left', 'right'].includes(value),
    },
  },
  computed: {
    drawerDirection() {
      return this.position === 'right' ? { right: 0 } : { left: 0 }
    },
    navContentStyles() {
      return {
        background: this.bgColor,
        width: this.show ? this.width + 'px' : '0px',
        color: '#fff',
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.nav-close
  display none
.nav-open
  display block
.nav-drawer
  position relative
  height 100%
  width 100%
  .nav-container
    position relative
    height 100%
    width 100%
    .nav-content
      height 100%
      position fixed
      z-index 11
      top 0
      overflow-x hidden
      padding-top 60px
      transition 0.5s
</style>
