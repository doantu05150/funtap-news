<template>
  <div>
    <div class="bg-container">
      <!-- <img src="https://cdn.smobgame.com/templates/thosanlinhhon/images/bg1.jpg" alt="logo image" /> -->
      <div class="form-container">
        <div class="d-flex flex-column form-content">
          <div class="text-white text-center uppercase title py-3">Đăng nhập</div>
          <div v-if="state === null" class="d-flex flex-column">
            <b-button @click="changeState(`funid`)" variant="danger" class="uppercase mb-3"
              >Tài khoản Funid</b-button
            >
            <b-button
              class="fb-login-button custom-fb-bt uppercase mb-3"
              data-button-type="login_with"
              data-width="100%"
              data-auto-logout-link="false"
              data-use-continue-as="false"
              variant="primary"
              >facebook</b-button
            >
            <b-button class="uppercase mb-3">chơi ngay</b-button>
          </div>
          <div v-if="state === `funid`" class="d-flex flex-column">
            <font-awesome-icon
              @click="changeState(null)"
              icon="arrow-left"
              color="#fff"
              class="icon-header"
            />
            <b-form-input v-model="username" class="mb-3" placeholder="Tài khoản funid" />
            <b-form-input v-model="password" class="mb-3" placeholder="Mật khẩu" type="password" />
            <a href="#" class="underline text-center text-white my-3">Quên mật khẩu</a>
            <b-button variant="danger" class="uppercase mb-3">Đăng nhập</b-button>
            <div class=" text-center text-white">
              Chưa có tài khoản.
              <span @click="changeState(`signup`)" class="underline">Đăng ký ngay</span>
            </div>
          </div>
          <div v-if="state === `signup`" class="d-flex flex-column">
            <font-awesome-icon
              @click="changeState(`funid`)"
              icon="arrow-left"
              color="#fff"
              class="icon-header"
            />
            <b-form-input v-model="username" class="mb-3" placeholder="Tài khoản funid" />
            <b-form-input v-model="password" class="mb-3" placeholder="Email" />
            <b-form-input v-model="password" class="mb-3" placeholder="Mật khẩu" type="password" />
            <b-form-input
              v-model="password"
              class="mb-3"
              placeholder="Xác nhận mật khẩu"
              type="password"
            />
            <b-button variant="danger" class="uppercase mb-3">Đăng ký</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global FB */

export default {
  data() {
    return {
      username: '',
      password: '',
      state: null,
    }
  },
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
    changeState(value) {
      this.state = value
    },
    loginWithFacebook() {
      FB.login(function(response) {
        if (response.status === 'connected') {
          FB.api('/me', function(response) {
            console.log('Successful login for: ' + response.name)
          })
        } else {
          // The person is not logged into your webpage or we are unable to tell.
        }
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
.uppercase
  text-transform uppercase
  font-weight 600
  font-size 14px
.title
  font-size 18px
.underline
  text-decoration underline
.bg-container
  height 100vh
  width 100%
  position relative
  background-image url('https://cdn.smobgame.com/templates/thosanlinhhon/images/bg1.jpg')
  .form-container
    position absolute
    display flex
    align-items center
    width 100%
    height 100%
    top 0
    left 0
    .form-content
      width 300px
      min-height 320px
      margin 0 auto
      border-radius 10px
      background rgba(0, 0, 0, 0.79)
      padding 15px
      position relative
      .icon-header
        position absolute
        top 35px
</style>
