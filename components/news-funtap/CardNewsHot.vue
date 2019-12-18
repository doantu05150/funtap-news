<template>
  <div>
    <router-link to="/ho-tro/this-is-slug">
      <div class="card-wrapper mb-2">
        <img src="~/assets/game.png" class="img-fluid news-card-img" alt="" />
        <div class="card-content">
          <div class="card-text">
            <div class="ct-text">
              <div class="ct-card-title">
                100KNB khóa, Truyền thừa đan*2, Linh thảo*15, Ngân phiếu *100.000 100KNB khóa,
                Truyền thừa đan*2, Linh thảo*15
              </div>
              <div class="d-flex justify-content-between align-center mt-2 st-info-card">
                <div class="cat-news">Game</div>
                <div class="doc-news">08-01-2019</div>
              </div>
            </div>
          </div>
          <div class="bg-unblur" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CardNewsHot',
}
</script>

<style lang="stylus" scoped>
.card-wrapper
  position relative
  cursor pointer
  .news-card-img
    max-height 175px
  .card-content
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    display flex
    align-items flex-end
    color #fff
    .bg-unblur
      position relative
      height 100%
    .card-text
      background rgba(161, 161, 161, 0.6)
      .ct-text
        padding 4px 10px
        .ct-card-title
          line-height 1.4
          font-size 16px
          font-weight 700
          overflow hidden
          text-overflow ellipsis
          display -webkit-box
          -webkit-line-clamp 2
          -webkit-box-orient vertical
        .st-info-card
          .cat-news
            font-size 12px
            line-height 2
            padding 0 4px
            border-radius 8px
            background #aa4408
            font-weight 600
          .doc-news
            font-size 10px
</style>
