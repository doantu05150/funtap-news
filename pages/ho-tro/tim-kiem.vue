<template>
  <div>
    <img src="~/assets/bn3.jpg" alt="adv" class="img-fluid" />
    <list-nav />
    <div class="n-content">
      <b-container>
        <h3 class="mt-2 mb-4">
          Kết quả tìm kiếm của <b>"{{ keyword }}"</b>
        </h3>
        <b-row v-if="resultsFound.length">
          <b-col v-for="(item, id) in resultsFound" :key="`result_${id}`" cols="12">
            <card-horizontal :item="item" />
          </b-col>
        </b-row>
        <h4 v-else>Không tìm thấy kết quả nào ~~</h4>
      </b-container>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { CardHorizontal, ListNav } from '~/components/news-funtap'

export default {
  layout: 'news',
  components: {
    CardHorizontal,
    ListNav,
  },
  watchQuery: ['keyword'],
  asyncData({ query }) {
    const { keyword } = query
    return {
      keyword,
    }
  },
  data() {
    return {
      keyword: '',
      showDrawer: false,
      resultsFound: [],
    }
  },
  created() {
    const { keyword } = this.$route.query
    axios
      .get(`http://portal-cmsapi.smobgame.com/api/article_search?keyword=${keyword}`)
      .then(res => {
        this.resultsFound = res.data.articles
      })
  },
  methods: {
    handleToggleDrawer() {
      this.showDrawer = true
    },
  },
}
</script>

<style lang="stylus" scoped>
.n-tags
  justify-content space-evenly
  border-bottom 2px solid #f6f6f6
  .tag-link
    color #333
    font-size 14px
    font-weight 500
.n-content
  text-align left
  padding 10px
</style>
