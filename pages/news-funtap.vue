<template>
  <div id="news-funtap">
    <news-header />
    <div class="height-fit" />
    <b-container>
      <div class="n-content-wrapper">
        <img src="~/assets/bn3.jpg" alt="adv" class="img-fluid" />
        <div class="d-flex py-2 n-tags">
          <a v-for="i in 6" :key="i" class="tag-link" href="#">Thể thao</a>
        </div>
        <div class="n-content">
          <div class="tt-title">
            <span class="ct-title">Tin tức mới</span>
          </div>
          <b-container fluid>
            <b-row>
              <b-col class="xxx" cols="12" md="8">
                <card-news-hot v-for="i in 5" :key="i" />
              </b-col>
              <b-col class="yyy" cols="12" md="4">
                yyy
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { NewsHeader, SectionTitle, CardNewsHot } from '~/components/news-funtap'

export default {
  components: {
    NewsHeader,
    SectionTitle,
    CardNewsHot,
  },
}
</script>

<style lang="stylus" scoped>
.yyy
  background yellow
#news-funtap
  background #f6f6f6
.height-fit
  height 108px
.n-content-wrapper
  margin 0 auto
  max-width 768px
  background-color #fff
  .n-tags
    justify-content space-evenly
    border-bottom 1px solid #f6f6f6
    .tag-link
      color #333
      font-size 14px
      font-weight 500
  .n-content
    .tt-title
      padding 15px 15px 6px 15px
      .ct-title
        font-size 19px
        font-weight 700
        color #333
</style>
