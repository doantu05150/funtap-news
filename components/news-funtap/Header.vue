<template>
  <div class="n-navbar">
    <div class="n-header d-flex">
      <div class="d-flex justify-content-between flex-1">
        <div class="l-header d-flex">
          <font-awesome-icon
            @click="handleToggle"
            icon="bars"
            color="#fff"
            class="icon-header mr-4"
          />
          <img src="~/assets/logo.png" alt="logo" class="n-logo img-fluid" />
          <div class="text-header">Chăm sóc<br />khách hàng</div>
        </div>
        <div class="r-header">
          <font-awesome-icon v-if="isLogin" icon="user" color="#fff" class="icon-header" />
          <div v-else class="user-avt">
            <img id="popover-avt-header" src="~/assets/avt.jpg" alt="avatar" class="avt-circle" />
            <b-popover target="popover-avt-header" placement="left-bottom" triggers="hover focus">
              <template v-slot:title>DoanTu</template>
              <div class="d-flex dir-column">
                <nuxt-link to="#" class="non-undl-hv">Thông tin tài khoản</nuxt-link>
                <nuxt-link to="#" class="non-undl-hv bdt">Đăng xuất</nuxt-link>
              </div>
            </b-popover>
          </div>
        </div>
      </div>
    </div>
    <div class="search-bar">
      <font-awesome-icon icon="search" color="#c9c9c9" class="icon-search" />
      <b-form-input v-model="textSearch" class="ct-input" placeholder="Tìm kiếm"></b-form-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
      textSearch: '',
    }
  },
  methods: {
    handleToggle() {
      this.$emit('handleToggleDrawer')
    },
  },
}
</script>

<style lang="stylus" scoped>
.n-navbar
  background-color #f04406
  position fixed
  top 0
  left 0
  width 100%
  padding 0 10px
  transform translate3d(0, 0, 0)
  transition 0.1s all ease-out
  z-index 9
  .n-header
    padding 10px 0
  .search-bar
    padding-bottom 10px
    position relative
    .icon-search
      position absolute
      top 11px
      left 18px
    .ct-input
      padding-left 54px
      &::focus
        outline none
.header--hidden
  transform: translate3d(0, -100%, 0)
.l-header
  align-items center
  .n-logo
    height 40px
    width 40px
  .text-header
    font-size 11px
    font-weight 700
    color #fff
.r-header
  align-self center
  .avt-circle
    width 38px
    height 38px
    border-radius 50%
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
.dir-column
  flex-direction column
  .non-undl-hv
    color #333
    padding 8px 0
    &:hover
      text-decoration none !important
  .bdt
    border-top 0.5px solid #cecece
    color #ef493d
</style>
