<template>
  <div>
    <router-link to="/ho-tro/this-is-slug" class="non-undl-hv">
      <div class="card-wrapper mb-2">
        <img src="~/assets/images/game.png" class="img-fluid news-card-img" alt="" />
        <div class="card-content">
          <div class="ct-text">
            <div class="ct-card-title">
              100KNB khóa, Truyền thừa đan*2, Linh thảo*15, Ngân phiếu *100.000 Truyền thừa đan*2,
              Linh thảo*15, Ngân phiếu *100.000
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CardVertical',
}
</script>

<style lang="stylus" scoped>
.card-wrapper
  position relative
  border-radius 4px
  overflow hidden
  box-shadow 0px 0px 10px 3px #cecece
  cursor pointer
  .news-card-img
    max-height 175px
  .card-content
    .ct-text
      .ct-card-title
        font-size 14px
        font-weight 600
        line-height 1.3
        color #333
        margin 8px 0
        padding 0 8px
        overflow hidden
        text-overflow ellipsis
        display -webkit-box
        -webkit-line-clamp 3
        -webkit-box-orient vertical
.non-undl-hv
  &:hover
    text-decoration none !important
</style>
