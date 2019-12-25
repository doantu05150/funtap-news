<template>
  <content-loader
    :height="159"
    :width="256"
    :speed="2"
    primary-color="#f3f3f3"
    secondary-color="#ecebeb"
  >
    <rect x="-0.5" y="-0.73" rx="0" ry="0" width="496" height="175" />
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
