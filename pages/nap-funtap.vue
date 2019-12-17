<template>
  <div class="nap-main">
    <nap-header :showNavbar="showNavbar" />
    <div class="h-65" />
    <b-container>
      <div class="content-wrapper">
        <div>
          <div class="adv">
            <div class="nap-carousel">
              <div>
                <b-carousel
                  id="carousel-fade"
                  style="text-shadow: 0px 0px 2px #000"
                  fade
                  indicators
                  img-width="1024"
                  img-height="480"
                >
                  <b-carousel-slide
                    caption="First slide"
                    img-src="https://picsum.photos/1024/480/?image=10"
                  ></b-carousel-slide>
                  <b-carousel-slide
                    caption="Second Slide"
                    img-src="https://picsum.photos/1024/480/?image=12"
                  ></b-carousel-slide>
                  <b-carousel-slide
                    caption="Third Slide"
                    img-src="https://picsum.photos/1024/480/?image=22"
                  ></b-carousel-slide>
                </b-carousel>
              </div>
            </div>
            <a href="#" class="link-adv">Nạp thẻ Funcard tặng 3% giá trị thẻ bằng FunCoin</a>
          </div>
        </div>
        <div class="nap-games gm-content">
          <div class="title-section">
            <span>CHỌN GAME CẦN NẠP</span>
          </div>
          <b-container fluid>
            <b-row class="list-gm">
              <b-col
                v-for="(item, id) in listGames"
                :key="`game_${id}`"
                :class="(id + 1) % 4 ? 'border-nm' : 'border-end'"
                cols="6"
                md="3"
                sm="4"
                xs="6"
                class="g-card"
              >
                <img :src="item.src" :alt="item.name" class="g-img img-fluid mb-3" />
                <span class="g-title">{{ item.name }}</span>
              </b-col>
            </b-row>
          </b-container>
        </div>
        <div class="nap-games gm-content">
          <div class="title-section non-bb">
            <span>Tin tức</span>
          </div>
          <b-container fluid>
            <b-row class="list-gm">
              <b-col v-for="(item, id) in news" :key="`new_${id}`" md="6" class="g-news">
                <img :src="item.src" :alt="item.title" class="img-new img-fluid mb-2" />
                <span class="n-title">{{ item.title }}</span>
                <div class="n-date">{{ item.date }}</div>
              </b-col>
            </b-row>
          </b-container>
        </div>
        <div class="button-bottom text-center my-4">
          <b-button
            >Xem thêm <font-awesome-icon icon="angle-right" color="#fff" class="icon-header"
          /></b-button>
        </div>
        <b-button @click="toggleDrawer">show drawer</b-button>
        <div class="h-56" />
      </div>
    </b-container>
    <nap-header-bottom />
    <nap-drawer :show="showDrawer">
      <template v-slot:drawer-content>
        <div v-for="i in 3" :key="i" class="link-item">
          Trang chu
        </div>
      </template>
    </nap-drawer>
  </div>
</template>

<script>
import { NapHeader, NapHeaderBottom, NapDrawer } from '~/components/nap-funtap'

export default {
  components: {
    NapHeader,
    NapHeaderBottom,
    NapDrawer,
  },
  data() {
    return {
      showNavbar: false,
      showDrawer: false,
      lastScrollPosition: 0,
      listGames: [
        {
          name: 'Thái cực 3D',
          src: 'https://cdn.smobgame.com/5d75d12aebfe1outbound200x200.png',
        },
        {
          name: 'Thái cực 3D',
          src: 'https://cdn.smobgame.com/5d75d12aebfe1outbound200x200.png',
        },
        {
          name: 'Thái cực 3D',
          src: 'https://cdn.smobgame.com/5d75d12aebfe1outbound200x200.png',
        },
        {
          name: 'Thái cực 3D',
          src: 'https://cdn.smobgame.com/5d75d12aebfe1outbound200x200.png',
        },
        {
          name: 'Thái cực 3D',
          src: 'https://cdn.smobgame.com/5d75d12aebfe1outbound200x200.png',
        },
        {
          name: 'Thái cực 3D',
          src: 'https://cdn.smobgame.com/5d75d12aebfe1outbound200x200.png',
        },
      ],
      news: [
        {
          title: 'Hướng dẫn mua thẻ Funcard dễ dàng bằng thẻ cào điện thoại',
          src: 'https://cdn.smobgame.com/5d930826dfc22.png',
          date: new Date(),
        },
        {
          title: 'Hướng dẫn mua thẻ Funcard dễ dàng bằng thẻ cào điện thoại',
          src: 'https://cdn.smobgame.com/5d930826dfc22.png',
          date: new Date(),
        },
        {
          title: 'Hướng dẫn mua thẻ Funcard dễ dàng bằng thẻ cào điện thoại',
          src: 'https://cdn.smobgame.com/5d930826dfc22.png',
          date: new Date(),
        },
        {
          title: 'Hướng dẫn mua thẻ Funcard dễ dàng bằng thẻ cào điện thoại',
          src: 'https://cdn.smobgame.com/5d930826dfc22.png',
          date: new Date(),
        },
      ],
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    },
    toggleDrawer() {
      this.showDrawer = !this.showDrawer
    },
  },
}
</script>

<style lang="stylus" scoped>
.h-56
  height 56px
.h-65
  height 65px
.nap-main
  background-color #e9e9e9
.content-wrapper
  margin 0 auto
  max-width 768px
  background-color #fff
  .adv
    width 100%
    .link-adv
      display block
      padding 6px 16px
      font-size 13px
      color #fff
      text-decoration underline
      background rgba(0,0,0,.87)
  .gm-content
    .title-section
      text-transform uppercase
      padding 22px 12px 16px
      border 1px solid #e0e0e0
      font-weight 500
      border-left 0
      border-right 0
    .non-bb
      margin-top -1px
  .nap-games
    .list-gm
      text-align center
      .g-card, .g-news
        padding-top 15px
        padding-bottom 15px
      .border-nm
        border 1px solid #e9e9e9
        border-left 0
        border-top 0
      .border-end
        border-bottom 1px solid #e9e9e9
      .g-title
        font-size 14px
      .n-title
        color #333
        font-weight 500
        font-size 16px
        text-decoration none
        overflow hidden
        display -webkit-box
        -webkit-line-clamp 2
        -webkit-box-orient vertical
        text-align left
      .n-date
        font-size 12px
        color #707070
        text-align left
</style>
