<template>
  <content-loader
    :height="45"
    :width="400"
    :speed="2"
    primary-color="#f3f3f3"
    secondary-color="#ecebeb"
  >
    <rect x="26.5" y="3.27" rx="0" ry="0" width="362" height="10" />
    <rect x="26.5" y="15.27" rx="0" ry="0" width="362" height="10" />
    <circle cx="32.5" cy="32" r="6" />
    <rect x="42.5" y="27.27" rx="0" ry="0" width="59" height="10" />
    <rect x="306.5" y="28.27" rx="0" ry="0" width="82" height="10" />
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
