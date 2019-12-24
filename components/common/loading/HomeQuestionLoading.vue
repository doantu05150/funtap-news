<template>
  <content-loader
    :height="25"
    :width="428"
    :speed="2"
    primary-color="#f3f3f3"
    secondary-color="#ecebeb"
  >
    <circle cx="21" cy="10" r="8" />
    <rect x="39" y="5" rx="0" ry="0" width="368.22" height="12.24" />
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
