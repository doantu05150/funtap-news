<template>
  <content-loader
    :height="126"
    :width="96"
    :speed="2"
    primary-color="#f3f3f3"
    secondary-color="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="96" height="126" />
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
