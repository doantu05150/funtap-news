export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Funtap hỗ trợ website',
      },
    ],
    link: [{ rel: 'icon', type: 'image/svg', href: '~/assets/logo.svg' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/fontawesome.js', '~/plugins/vue-lazyload.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  proxy: {
    '/api': {
      target: 'http://portal-cmsapi.smobgame.com/api/',
      pathRewrite: {
        '^/api': '',
      },
      changeOrigin: true,
    },
  },
}
