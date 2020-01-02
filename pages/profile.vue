<template>
  <div>
    <list-nav />
    <div class="n-content">
      <div v-if="data" class="d-flex">
        <img :src="data.picture.data.url" alt="" class="img-fluid img-avt mr-4" />
        <div class="data-info">
          <div class="title">
            Họ và tên:
            <span>{{ data.name }}</span>
          </div>
          <div class="title">
            Ngày sinh:
            <span>{{ data.birthday }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ListNav } from '~/components/news-funtap'

export default {
  middleware: 'auth',
  layout: 'news',
  name: 'Profile',
  head: {
    title: 'Thông tin cá nhân',
  },
  components: {
    ListNav,
  },
  data() {
    return {
      data: null,
    }
  },
  created() {
    this.data = this.$auth.user
  },
}
</script>

<style lang="stylus" scoped>
.n-content
  padding 0 15px
  padding-top 2.5rem
  min-height 100vh
  .img-avt
    width 100px
    height 100px
    border-radius 50px
</style>
