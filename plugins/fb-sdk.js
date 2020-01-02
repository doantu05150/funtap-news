// /* global FB */
// import Vue from 'vue'
// const vueFb = {}
// vueFb.install = function install(Vue, options) {
//   ;(function setSdk(d, s, id) {
//     const fjs = d.getElementsByTagName(s)[0]
//     if (d.getElementById(id)) {
//       return
//     }
//     const js = d.createElement(s)
//     js.id = id
//     js.src = '//connect.facebook.net/en_US/sdk.js'
//     fjs.parentNode.insertBefore(js, fjs)
//     console.log('setting fb sdk')
//   })(document, 'script', 'facebook-jssdk')

//   window.fbAsyncInit = function onSDKInit() {
//     FB.init(options)
//     FB.AppEvents.logPageView()
//     Vue.FB = FB
//     window.dispatchEvent(new Event('fb-sdk-ready'))
//     vueFb.sdk = FB // do not forget this line
//   }
//   Vue.FB = undefined
// }

// Vue.use(vueFb, {
//   appId: '396030717571013',
//   autoLogAppEvents: true,
//   xfbml: true,
//   version: 'v5.0',
// })
// // and this line
// export default ({ app }, inject) => {
//   inject('fb', vueFb)
// }
