<template>
  <div>
    <div class="bg-container">
      <div class="form-container">
        <div class="d-flex flex-column form-content">
          <div class="text-white text-center uppercase title py-3">Đăng nhập</div>
          <div v-if="state === null" class="d-flex flex-column">
            <b-button @click="changeState(`funid`)" variant="danger" class="uppercase mb-3"
              >Tài khoản Funid</b-button
            >
            <b-button
              @click="loginWithFacebook"
              class=" custom-fb-bt uppercase mb-3"
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
            <b-button @click="login" variant="danger" class="uppercase mb-3">Đăng nhập</b-button>
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
export default {
  data() {
    return {
      username: '',
      password: '',
      state: null,
      error: '',
    }
  },
  methods: {
    validationLogin() {
      if (!this.username || !this.password) {
        return 0
      } else if (this.username === 'tu' && this.password === 'deptrai') {
        return 1
      }
      return 2
    },
    changeState(value) {
      this.state = value
    },
    login() {
      this.error = ''
      switch (this.validationLogin()) {
        case 1:
          // do something
          this.error = 'Đăng nhập thành công'
          break
        case 2:
          this.error = 'Sai tên đăng nhập'
          break
        case 0:
          this.error = 'Vui lòng điền đầy đủ các trường'
          break
      }
    },
    loginWithFacebook() {
      this.error = ''
      this.$auth.loginWith('facebook').catch(e => {
        this.error = e + ''
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
