<template>
  <div id="idnap-drawer" class="c-drawer">
    <div :style="bgBlur" @click="hideDrawer" id="bbmToggle" class="bg-blur-mask"></div>
    <aside class="nav-drawer">
      <div class="nav-container">
        <div :style="[navContentStyles, drawerDirection]" class="nav-content">
          <slot name="drawer-content" />
        </div>
      </div>
    </aside>
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
    bgBlur() {
      return {
        width: this.show ? '100%' : '0px',
        opacity: '0.8',
      }
    },
  },
  methods: {
    hideDrawer(e) {
      if (e.target.id === 'bbmToggle') {
        this.$emit('handleToggleDrawer')
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.nav-drawer
  .nav-container
    .nav-content
      height 100vh
      position fixed
      z-index 10
      top 0
      overflow-x hidden
      padding-top 60px
      transition 0.5s
      .link-item
        transition 0.2s
        white-space nowrap
.bg-blur-mask
  height 100%
  position fixed
  z-index 10
  top 0
  left 0
  background-color rgba(0,0,0, 0.6)
  overflow-y auto
  overflow-x hidden
  text-align center
  transition opacity 1s
</style>
