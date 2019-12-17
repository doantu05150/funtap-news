<template>
  <b-container>
    <div>
      <b-form-input v-model="email" placeholder="Enter your email" />
      <b-form-input v-model="pwd" type="password" placeholder="Enter your password" />
      <b-button @click="login" variant="primary">Login</b-button>
      <b-button @click="loginWithFacebook" variant="primary">Login with Facebook</b-button>
      <div
        class="fb-like"
        data-href="https://eforealifestyle.com/blog/he-den-roi-dung-bo-4-kieu-toc-hot-sau"
        data-width="32"
        data-layout="button"
        data-action="like"
        data-size="large"
        data-show-faces="true"
        data-share="false"
      />
      <div
        class="fb-share-button"
        data-href="https://eforealifestyle.com/blog/he-den-roi-dung-bo-4-kieu-toc-hot-sau"
        data-layout="button"
        data-size="large"
        data-mobile-iframe="true"
      >
        <a
          target="_blank"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
          class="fb-xfbml-parse-ignore"
          >Chia sẻ</a
        >
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      pwd: '',
    }
  },
  mounted() {},
  methods: {
    validationLogin() {
      if (this.email === 'tu' && this.pwd === 'deptrai') {
        return true
      }
      return false
    },
    login() {
      if (this.validationLogin()) {
        this.$store.dispatch('login', { router: this.$router })
      }
    },
    loginWithFacebook() {},
  },
}
</script>
