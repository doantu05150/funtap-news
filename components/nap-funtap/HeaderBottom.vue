<template>
  <div class="idf-header-bottom d-flex">
    <div class="header-content d-flex flex-1">
      <div class="d-flex justify-content-between flex-1">
        <router-link
          v-for="(item, id) in navBottoms"
          :key="`nav_${id}`"
          to="#"
          class="align-center"
        >
          <font-awesome-icon :icon="item.icon" color="#212121" class="icon-header" />
          <span class="bt-title">{{ item.name }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navBottoms: [
        {
          icon: 'home',
          name: 'Trang chủ',
        },
        {
          icon: 'gift',
          name: 'Giftcode',
        },
        {
          icon: 'money-bill-wave',
          name: 'Nạp tiền',
        },
        {
          icon: 'hands-helping',
          name: 'Hỗ trợ',
        },
        {
          icon: 'dice-d6',
          name: 'Khác',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.idf-header-bottom
  height 56px
  background-color #fff
  position fixed
  bottom 0
  left 0
  width 100%
  z-index 9
  border-top 1px solid #dadada
  .flex-1
    flex 1
  .header-content
    margin 0 auto
    max-width 768px
    background #fff
    padding 0 15px
    .align-center
      align-self center
    .icon-header
      height 18px
      width 18px
    .nav-content
      align-self center
    .bt-title
      color #212121
      font-size 14px
</style>
