/* global FB */

window.fbAsyncInit = function() {
  FB.init({
    appId: '518071755451671',
    xfbml: true,
    version: 'v3.3',
  })

  // This function should be here, inside window.fbAsyncInit
  FB.getLoginStatus(function(response) {})(
    (function(d, s, id) {
      let js = d.getElementsByTagName(s)[0]
      const fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) {
        return
      }
      js = d.createElement(s)
      js.id = id
      js.src = '//connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk'),
  )
}
