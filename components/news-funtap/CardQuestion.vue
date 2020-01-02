<template>
  <client-only>
    <div>
      <router-link :to="`/ho-tro/hoi-dap/${item.alias}`" class="no-udl">
        <div class="cq-wrapper">
          <div class="mb-2 card-content">
            <font-awesome-icon icon="question-circle" color="#c9c9c9" class="mr-2 icon-q" />
            <div class="cq-ct-text">
              {{ item.title }}
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </client-only>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="stylus" scoped>
.card-content
  display flex
  align-items center
  border 1px solid #cecece
  padding 8px
  border-radius 8px
  color #333
  .icon-q
    font-size 18px
.no-udl
  &:hover
    text-decoration none
</style>
