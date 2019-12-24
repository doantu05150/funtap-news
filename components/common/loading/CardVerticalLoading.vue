<template>
  <content-loader
    :height="160"
    :width="400"
    :speed="2"
    primary-color="#f3f3f3"
    secondary-color="#ecebeb"
  >
    <rect x="11.5" y="7.65" rx="0" ry="0" width="211.39" height="123.02" />
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
