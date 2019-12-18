<template>
  <div>
    <img src="~/assets/bn3.jpg" alt="adv" class="img-fluid" />
    <list-nav />
    <div class="n-content">
      <div class="tt-title">
        <span class="ct-title">Tin tức mới</span>
      </div>
      <b-container fluid>
        <b-row>
          <b-col cols="12" md="8">
            <card-news-hot v-for="i in 2" :key="i" />
          </b-col>
          <b-col cols="12" md="4">
            <div class="title-t4g">
              Top 4 game trong tuần
            </div>
            <div class="clg-wrapper">
              <card-game-image v-for="(item, i) in fakeTop4Games" :key="i" :img="item.src" />
            </div>
          </b-col>
        </b-row>
      </b-container>
      <div class="tt-title">
        <span class="ct-title">Tin tức khác</span>
      </div>
      <b-container fluid>
        <b-row>
          <b-col v-for="i in 3" :key="i" cols="12" md="4">
            <card-vertical />
          </b-col>
        </b-row>
      </b-container>
      <div class="tt-title">
        <span class="ct-title">Các câu hỏi thường gặp</span>
      </div>
      <b-container fluid>
        <b-row>
          <b-col v-for="(item, i) in homeQuestions" :key="`question_${i}`" cols="12">
            <card-question :item="item" />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {
  SectionTitle,
  CardNewsHot,
  CardGameImage,
  CardVertical,
  CardQuestion,
  ListNav,
} from '~/components/news-funtap'

export default {
  layout: 'news',
  components: {
    SectionTitle,
    CardNewsHot,
    CardGameImage,
    CardVertical,
    CardQuestion,
    ListNav,
  },
  data() {
    return {
      homeQuestions: [],
      fakeTop4Games: [
        {
          src: 'https://cdn.smobgame.com/5df73955591c4.jpg',
          link: '#',
        },
        {
          src: 'https://cdn.smobgame.com/5dd222f7e0741.jpg',
          link: '#',
        },
        {
          src: 'https://cdn.smobgame.com/5dd225631d229.jpg',
          link: '#',
        },
        {
          src: 'https://cdn.smobgame.com/5dd2242bd3e80.jpg',
          link: '#',
        },
      ],
    }
  },
  created() {
    axios.get('http://portal-cmsapi.smobgame.com/api/faq-home').then(res => {
      this.homeQuestions = res.data.data
    })
  },
}
</script>

<style lang="stylus" scoped>
.n-content
  text-align left
  .tt-title
    padding 15px 15px 6px 15px
    .ct-title
      font-size 19px
      font-weight 700
      color #333
.clg-wrapper
  display flex
  flex-wrap wrap
  justify-content space-evenly
.title-t4g
  padding 0 0 10px 10px
  font-size 14px
  font-weight 700
  color #4b4b4b
  line-height 1
</style>
