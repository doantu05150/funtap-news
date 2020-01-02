<template>
  <div v-lazy-container="{ selector: 'img' }">
    <div class="flex column">
      <div v-for="i in 10" :key="i" class="content">
        <img :data-src="require(`~/assets/images/bn3.jpg`)" />
        <p>
          How to use vue-lazyload properly with nuxt? Nuxt uses ~assets syntax or require('...')
          method to implement image urls. This means that these two variants both loading images
          BEFORE vue-lazyload starting its work. After images all are requested and downloaded by
          browser vue-lazyload know their urls and start to show them lazily. But it is already make
          no sense(( How to use vue-lazyload with nuxt or how avoid ~assets or
          require(...)preloading?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'news',
  head: {
    title: 'Sự kiện',
  },
  middleware: 'auth',
}
</script>

<style lang="stylus" scoped>
.content
  margin-bottom 20px
</style>
