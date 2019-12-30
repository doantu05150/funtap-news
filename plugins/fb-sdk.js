/* global FB */
import Vue from 'vue'

Vue.prototype.$initFbSdk = () => {
  FB.init({
    appId: '396030717571013',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v5.0',
  })
}
