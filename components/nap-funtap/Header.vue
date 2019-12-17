<template>
  <div :class="{ 'header--hidden': !showNavbar }" class="idf-header d-flex">
    <div class="d-flex justify-content-between flex-1">
      <div class="l-header d-flex">
        <font-awesome-icon icon="bars" color="#fff" class="icon-header" />
        <span class="nav-link">Nạp thẻ</span>
        <span class="nav-link">Hướng dẫn</span>
      </div>
      <div class="r-header">
        <font-awesome-icon icon="user" color="#fff" class="icon-header" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showNavbar: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="stylus" scoped>
.idf-header
  height 65px
  background-color #ef493d
  position fixed
  top 0
  left 0
  width 100%
  padding 0 20px
  z-index 9
  transform translate3d(0, 0, 0)
  transition 0.1s all ease-out
.header--hidden
  transform: translate3d(0, -100%, 0)
.l-header
  align-items center
.r-header
  align-self center
.flex-1
  flex 1
.icon-header
  height 20px
  width 20px
.nav-link
  position relative
  color #eee
  font-size 18px
  text-decoration none
  &:hover
    color #fff
    cursor pointer
.active
  &:after
    color #fff !important
    font-weight 600
    position absolute
    content ''
    left 0
    width 100%
    height 2px
    bottom 0
</style>
