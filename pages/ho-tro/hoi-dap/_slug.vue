<template>
  <div>
    <list-nav />
    <div v-if="detailPost" id="ndt-content">
      <h1>{{ detailPost.title }}</h1>
      <!-- <div class="alias">{{ `Quy đổi nhận thêm 30% giá trị ngay hôm nay` }}</div> -->
      <div class="n-cat my-1">
        <div>{{ detailPost.categoryName }}</div>
      </div>
      <div class="mi-new mb-3">
        <div class="dop-news mr-2">
          <i class="cti">Ngày đăng: </i>{{ detailPost.published_at }},
        </div>
        <div class="ato-news"><i class="cti">Bởi </i>{{ `DoanTu` }}</div>
      </div>
      <div v-if="detailPost.src" class="mi-wrapper">
        <img
          src="https://cdn.smobgame.com/5cf4b31b3dd69.png"
          class="img-fluid mb-3 main-img"
          alt="main-img"
        />
      </div>
      <div v-html="detailPost.content" class="ctp-content"></div>
    </div>
    <div v-else class="vh-100">
      <h1 class="text-center">Error 404. Page not found</h1>
    </div>
  </div>
</template>

<script>
import format from 'date-fns/format'
import { mapGetters } from 'vuex'
import { NewsHeader, ListNav } from '~/components/news-funtap'

export default {
  layout: 'news',
  components: {
    NewsHeader,
    ListNav,
  },
  async fetch({ store, params }) {
    const { slug } = params
    await store.dispatch('getPostBySlug', { slug })
  },
  data() {
    return {
      showDrawer: false,
    }
  },
  head() {
    return {
      title: this.detailPost.title || 'Funtap hỗ trợ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.detailPost.description || 'Funtap hỗ trợ',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      detailPost: 'currentPost',
    }),
  },
  methods: {
    handleToggleDrawer() {
      this.showDrawer = true
    },
    formatDate(date) {
      return format(date, 'MMM DD')
    },
  },
}
</script>

<style lang="stylus" scoped>
.vh-100
  min-height 100vh
#ndt-content
  padding 15px 15px 0px 15px
  min-height 100vh
  .mi-new
    display flex
    align-items center
    .ato-news, .dop-news
      font-size 10px
      font-weight 600
      .cti
        color #575757
  .mi-wrapper
    width 100%
    text-align center
  .ctp-content
    overflow hidden
  .n-cat
    div
      padding 4px
      width fit-content
      border-radius 8px
      font-size 11px
      font-weight 900
      color #fff
      background #acacac
</style>
