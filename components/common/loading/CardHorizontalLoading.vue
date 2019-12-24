<template>
  <content-loader
    :height="172"
    :width="428"
    :speed="2"
    primary-color="#f3f3f3"
    secondary-color="#ecebeb"
  >
    <rect x="1.5" y="1.27" rx="0" ry="0" width="447" height="177.56" />
  </content-loader>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'

export default {
  components: {
    ContentLoader,
  },
}
</script>
