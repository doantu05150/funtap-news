<template>
  <div>
    <div class="d-flex py-2 n-tags">
      <a v-for="(item, i) in navLinks" :key="i" :href="`${item.link}`" class="tag-link">{{
        item.title
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        {
          title: 'Trang chủ',
          link: '/',
        },
        {
          title: 'Hỏi đáp',
          link: '/ho-tro/hoi-dap',
        },
        {
          title: 'Sự kiện',
          link: '#',
        },
        {
          title: 'Khuyến mãi',
          link: '#',
        },
        {
          title: 'Cập nhật',
          link: '#',
        },
        {
          title: 'Video',
          link: '#',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.n-tags
  justify-content space-evenly
  border-bottom 2px solid #f6f6f6
  .tag-link
    color #333
    font-size 14px
    font-weight 500
</style>
