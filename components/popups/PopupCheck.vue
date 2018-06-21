<template>
  <div class="popup_check">
    <img src="~static/img/order_inspection_bg_1.jpg"/>
    <div class="content">
      <span class="grey_text">Экспертная</span>
      <span class="orange_text">Проверка</span>
      <span class="orange_text">Вашего Макета</span>
      <span class="grey_text">Нашим дизайнером</span>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from "nuxt-property-decorator"

  @Component({})
  export default class PopupCheck extends Vue {
  }
</script>

<style lang="scss" scoped>
  @import '~assets/scss/vars';
  .popup_check {
    display: flex;
    .content {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        display: block;
      }
      span:nth-of-type(1) {
        margin-top: 93px;
      }
      span:nth-of-type(2) {
        margin-top: 14px;
      }
      span:nth-of-type(4) {
        margin-top: 14px;
      }
      .grey_text {
        font-family: $c35;
        font-size: 20px;
        font-weight: 700;
        color: $color_dark_grey;
        text-transform: uppercase;
      }
      .orange_text {
        font-family: $germ;
        font-size: 38px;
        font-weight: bold;
        color: $color_orange;
        text-transform: uppercase;
        line-height: 1.15;
      }
    }
  }
</style>