<template>
  <no-ssr>
    <div>
      <div class="card-wrapper mb-1">
        <a href="#">
          <img :src="img" class="cg-image" alt="card-game" />
        </a>
      </div>
    </div>
  </no-ssr>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="stylus" scoped>
.card-wrapper
  .cg-image
    height 126px
    width 96px
</style>
