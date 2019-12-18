<template>
  <div>
    <router-link v-if="item" :to="`/ho-tro/hoi-dap/${item.alias}`" class="non-undl-hv">
      <div class="d-flex card-wrapper mb-2">
        <img v-if="item.src" src="~/assets/game.png" class="img-fluid news-card-img" alt="" />
        <div class="d-flex card-content">
          <div class="d-flex ct-text">
            <div class="ct-card-title mb-1">
              {{ item.title }}
            </div>
            <p v-html="item.content" class="ct-card-content mb-2"></p>
            <div class="d-flex justify-content-between mi-rs">
              <div class="uto-news">
                <font-awesome-icon icon="user" color="#666" class="mr-1" />DoanTu
              </div>
              <div class="dop-news">{{ item.published_date }}</div>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CardHorizontal',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="stylus" scoped>
.card-wrapper
  position relative
  border-radius 4px
  overflow hidden
  box-shadow 0px 0px 10px 3px #cecece
  .news-card-img
    max-height 175px
  .card-content
    width 100%
    .ct-text
      height 100%
      padding 10px
      flex 1
      flex-direction column
      .ct-card-title
        font-size 14px
        font-weight 600
        line-height 1.3
        color #333
        overflow hidden
        text-overflow ellipsis
        display -webkit-box
        -webkit-line-clamp 2
        -webkit-box-orient vertical
      .ct-card-content
        font-size 12px
        line-height 1.3
        color #333
        overflow hidden
        text-overflow ellipsis
        display -webkit-box
        -webkit-line-clamp 3
        -webkit-box-orient vertical
      .mi-rs
        display flex
        flex 1
        .uto-news, .dop-news
          font-size 11px
          font-weight 600
          color #333
.non-undl-hv
  &:hover
    text-decoration none !important
@media (max-width 768px)
  .card-wrapper
    flex-direction column !important
</style>
