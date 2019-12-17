<template>
  <div class="tt-title">
    <span class="ct-title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="stylus" scoped>
.tt-title
  .ct-title
    padding 10px 0 6px 0
    font-size 16px
    font-weight 500
    color #333
</style>
