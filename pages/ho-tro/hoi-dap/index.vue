<template>
  <div>
    <list-nav />
    <div class="n-content">
      <b-container>
        <b-row>
          <div class="cat-title">
            <h1>Trung tâm</h1>
            <h1>hỗ trợ khách hàng</h1>
          </div>
        </b-row>
        <b-row>
          <b-col v-for="(item, i) in categories" :key="`category_${i}`" cols="12">
            <div role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <div
                    v-b-toggle="`toggle_${item.alias}_${i}`"
                    block
                    class="ct-btn-toggle"
                    href="#"
                  >
                    {{ item.title }}
                  </div>
                </b-card-header>
                <b-collapse
                  :id="`toggle_${item.alias}_${i}`"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <div v-for="(it, y) in item.articles" :key="`question_${y}`">
                      <card-question :item="it" />
                    </div>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { CardCategory, CardQuestion, ListNav } from '~/components/news-funtap'

export default {
  layout: 'news',
  components: {
    CardCategory,
    CardQuestion,
    ListNav,
  },
  data() {
    return {
      showDrawer: false,
      categories: [],
    }
  },
  created() {
    axios.get('http://portal-cmsapi.smobgame.com/api/faq-with-category').then(res => {
      this.categories = res.data.data
    })
  },
}
</script>

<style lang="stylus" scoped>
.n-content
  padding-top 2.5rem
  .cat-title
    display flex
    flex-direction column
    text-align center
    width 100%
    margin-bottom 30px
    h1
      color #000
.ct-btn-toggle
  text-align left
  padding 6px 15px
  font-weight 100
  font-size 18px
  cursor pointer
</style>
