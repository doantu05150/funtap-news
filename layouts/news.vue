<template>
  <div id="news-funtap">
    <news-header @handleToggleDrawer="handleToggleDrawer" />
    <div class="height-fit" />
    <b-container>
      <div class="n-content-wrapper">
        <nuxt />
      </div>
    </b-container>
  </div>
</template>

<script>
import { NewsHeader } from '~/components/news-funtap'

export default {
  components: {
    NewsHeader,
  },
  data() {
    return {
      showDrawer: false,
    }
  },
  methods: {
    handleToggleDrawer() {
      this.showDrawer = true
    },
  },
}
</script>

<style lang="stylus" scoped>
#news-funtap
  background #f6f6f6
.height-fit
  height 106px
.n-content-wrapper
  margin 0 auto
  max-width 768px
  background-color #fff
  padding-bottom 60px
</style>
