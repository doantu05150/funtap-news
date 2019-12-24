<template>
  <no-ssr>
    <div>
      <router-link :to="`/ho-tro/hoi-dap/${item.alias}`" class="non-undl-hv">
        <div class="card-wrapper mb-2">
          <font-awesome-icon icon="question-circle" color="#fff" class="mr-2 icon-q" />
          <div class="card-content">
            <div class="ct-text">
              <div class="ct-card-title">
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </no-ssr>
</template>

<script>
export default {
  name: 'CardCategory',
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
  display flex
  flex-direction column
  padding 10px 20px
  background linear-gradient(to bottom, #ffcc00 0%, #ff6600 100%)
  min-height 180px
  .news-card-img
    max-height 175px
  .card-content
    .ct-text
      .ct-card-title
        font-size 18px
        font-weight 700
        line-height 1.3
        color #fff
        margin-top 2rem
.non-undl-hv
  &:hover
    text-decoration none !important
.icon-q
  width 3.6rem
  height 3.6rem
  align-self center
  margin 0 !important
</style>
