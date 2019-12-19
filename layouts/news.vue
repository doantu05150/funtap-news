<template>
  <div id="news-funtap">
    <ct-drawer :show="showDrawer" @handleToggleDrawer="handleToggleDrawer" bg-color="#f4843d">
      <template v-slot:drawer-content>
        <div
          v-for="(item, i) in navLinks"
          :key="`nav_link${i}`"
          :style="linkItem"
          @click="handleToggleDrawer"
          class="py-1 px-3 link-item"
        >
          <nuxt-link :to="`/ho-tro/${item.link}`" class="text-white w500">{{
            item.title
          }}</nuxt-link>
        </div>
      </template>
    </ct-drawer>
    <news-header @handleToggleDrawer="handleToggleDrawer" />
    <div class="height-fit" />
    <b-container>
      <div class="n-content-wrapper">
        <nuxt />
      </div>
    </b-container>
  </div>
</template>

<script>
import { NewsHeader } from '~/components/news-funtap'
import { CtDrawer } from '~/components/common'

export default {
  components: {
    NewsHeader,
    CtDrawer,
  },
  data() {
    return {
      showDrawer: false,
      navLinks: [
        {
          title: 'Trang chủ',
          link: '',
        },
        {
          title: 'Hỏi đáp',
          link: 'hoi-dap',
        },
        {
          title: 'Sự kiện',
          link: '#',
        },
        {
          title: 'Khuyến mãi',
          link: '#',
        },
        {
          title: 'Cập nhật',
          link: '#',
        },
        {
          title: 'Video',
          link: '#',
        },
      ],
    }
  },
  computed: {
    linkItem() {
      return {
        width: this.showDrawer ? '100%' : '0px',
      }
    },
  },
  methods: {
    handleToggleDrawer() {
      this.showDrawer = !this.showDrawer
    },
  },
}
</script>

<style lang="stylus" scoped>
#news-funtap
  background #f6f6f6
.height-fit
  height 106px
.n-content-wrapper
  margin 0 auto
  max-width 768px
  background-color #fff
  padding-bottom 60px
</style>
