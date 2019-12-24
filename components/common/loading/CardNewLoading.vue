<template>
  <content-loader
    :height="160"
    :width="400"
    :speed="2"
    primary-color="#f3f3f3"
    secondary-color="#ecebeb"
  >
    <rect x="10.5" y="75.27" rx="0" ry="0" width="375" height="32" />
    <rect x="10.5" y="116.27" rx="0" ry="0" width="99.96" height="16" />
    <rect x="285.5" y="117.27" rx="0" ry="0" width="99" height="16" />
    <rect x="9.5" y="10.27" rx="0" ry="0" width="374.22" height="59.22" />
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
