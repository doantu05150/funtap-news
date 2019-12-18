<template>
  <div id="ndt-content">
    <h1>{{ `Quy đổi RP – Nhận thêm 30% giá trị quy đổi từ 00:00 13/12 đến 23:59 19/12` }}</h1>
    <div class="alias">{{ `Quy đổi nhận thêm 30% giá trị ngay hôm nay` }}</div>
    <div class="n-cat my-1">
      <div>Tin Game</div>
    </div>
    <div class="mi-new mb-2">
      <div class="dop-news mr-2"><i class="cti">Ngày đăng: </i>{{ `December 13, 2019` }},</div>
      <div class="ato-news"><i class="cti">Bởi </i>{{ `DoanTu` }}</div>
    </div>
    <div class="mi-wrapper">
      <img
        src="https://cdn.smobgame.com/5cf4b31b3dd69.png"
        class="img-fluid mb-3 main-img"
        alt="main-img"
      />
    </div>
    <p class="ctp-content">
      {{
        `Bắt buộc phải quy đổi từ Sò sang RP mới được tính trong sự kiện, hình thức nạp RP bằng tin nhắn SMS hoặc AirPay sẽ KHÔNG được nhận khuyến mãi.
Quy đổi không tích lũy, bạn chọn mốc quy đổi nào sẽ nhận được RP khuyến mãi của mốc đó, bạn sẽ có TỔNG CỘNG 5 LẦN nhận khuyến mãi khi quy đổi RP.
Các mốc quy đổi KHÔNG cộng dồn với nhau. Ví dụ: nếu lần đầu tiên bạn quy đổi ngay lập tức 2000 RP, bạn được 600 RP tặng thêm của mốc đó (tổng cộng là 2800 RP), đến lần thứ 2 bạn quy đổi 1000 RP bạn sẽ được tặng thêm 300 RP tổng cộng 1370 RP cho lần đó.
Quy đổi dưới 40 RP, dĩ nhiên là bạn không nhận được RP khuyến mãi và lần quy đổi đó vẫn sẽ bị tính vào số lần tham gia sự kiện. Ví dụ: Lần đầu bạn quy đổi 5 RP, bạn sẽ không nhận được RP khuyến mại và số lần tham gia sự kiện bị giảm còn 4.
Có thể nhận cả 5 lần khuyến mãi trên một mốc quy đổi. Ví dụ: Bạn quy đổi 5 lần 2000 RP thì bạn sẽ nhận được tương ứng 5 lần 2800 RP, nhưng sau 5 lần quy đổi, bạn sẽ không nhận khuyến mãi ở bất kì mốc nào nữa.
RP thưởng thêm từ hệ thống khi quy đổi sẽ không được tính vào chương trình khuyến mãi.`
      }}
    </p>
  </div>
</template>

<script>
import { NewsHeader } from '~/components/news-funtap'

export default {
  layout: 'news',
  components: {
    NewsHeader,
  },
  data() {
    return {
      showDrawer: false,
    }
  },
  methods: {
    handleToggleDrawer() {
      this.showDrawer = true
    },
  },
}
</script>

<style lang="stylus" scoped>
#ndt-content
  padding 15px 15px 0px 15px
  .mi-new
    display flex
    align-items center
    .ato-news, .dop-news
      font-size 10px
      font-weight 600
      .cti
        color #575757
  .mi-wrapper
    width 100%
    text-align center
  .ctp-content
    font-size 15px
    line-height 1.6
    letter-spacing 1px
  .n-cat
    div
      padding 4px
      width fit-content
      border-radius 8px
      font-size 11px
      font-weight 900
      color #fff
      background #acacac
</style>
