<template>
  <div>
    <img src="~/assets/images/bn3.jpg" alt="adv" class="img-fluid" />
    <list-nav />
    <div class="n-content">
      <b-container v-if="keyword">
        <h3 class="mt-2 mb-4">
          Kết quả tìm kiếm của <b>"{{ keyword }}"</b>
        </h3>
        <v-wait for="search.results">
          <template slot="waiting">
            <card-search-loading v-for="i in 6" :key="i" />
          </template>
          <div>
            <b-row v-if="resultsFound.length">
              <b-col v-for="(item, id) in resultsFound" :key="`result_${id}`" cols="12">
                <card-horizontal :item="item" />
              </b-col>
              <b-col cols="12">
                <div class="overflow-auto my-3">
                  <b-pagination
                    v-model="currentPage"
                    :link-gen="linkGen"
                    :total-rows="getTotalPosts"
                    :per-page="perPage"
                    pills
                    size="sm"
                    use-router
                  ></b-pagination>
                </div>
              </b-col>
            </b-row>
            <h4 v-else>Không tìm thấy kết quả nào ~~</h4>
          </div>
        </v-wait>
      </b-container>
      <b-container v-else>
        <h3 class="text-center mt-2 mb-4">
          Bạn chưa nhập từ khóa
        </h3></b-container
      >
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { CardHorizontal, ListNav } from '~/components/news-funtap'
import { CardSearchLoading } from '~/components/common/loading'

export default {
  layout: 'news',
  head: {
    title: 'Tìm kiếm',
  },
  components: {
    CardHorizontal,
    ListNav,
    CardSearchLoading,
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
      resultsFound: [],
      pageNum: 1,
      perPage: 5,
      currentPage: 1,
    }
  },
  computed: {
    getTotalPosts() {
      return this.resultsFound.length
    },
  },
  async created() {
    const { keyword } = this.$route.query
    this.$wait.start('search.results')
    await axios
      .get(`http://portal-cmsapi.smobgame.com/api/article_search?keyword=${keyword}/`)
      .then(res => {
        this.resultsFound = res.data.articles
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error))
    this.$wait.end('search.results')
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    },
  },
}
</script>

<style lang="stylus" scoped>
.n-content
  text-align left
  padding 10px
</style>
