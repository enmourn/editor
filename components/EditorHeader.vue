<template>
  <section class="header">
    <a class="link_back" :href="link_back">{{product}}</a>
    <span class="price">{{price}}</span>
    <button class="checkout">Оформить заказ</button>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from "nuxt-property-decorator"

  @Component({})
  export default class EditorHeader extends Vue {
    link_back: string = 'https://papara.ru/photobooks/graduation-albums/15x21/kindergarten/';
    product: string =  'Фотокнига «Для дошкольников»';
    price: number = 610
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/vars.scss";
  @import "../assets/scss/sprite.scss";
  .header {
    grid-area: header;
    width: 100%;
    height: 48px;
    background: $color_grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .link_back {
    	flex-grow: 2;
    	font-family: $c35;
      font-size: 15px;
    	color: $color_dark_grey;
    	padding-left: 25px;
    	position: relative;
    	&:before {
    		content: '';
		    display: block;
		    width: 7px;
		    height: 7px;
		    border-top: 1px solid $color_dark_grey;
		    border-left: 1px solid $color_dark_grey;
		    left: 15px;
		    top: 6px;
		    position: absolute;
		    transform: rotate(-45deg);
    	}
    }
    .price {
    	height: 100%;
    	padding: 0 25px;
    	font-family: $c45;
    	font-size: 22px;
    	color: $color_green;
    	background: #dfe1e0;
    	display: flex;
    	align-items: center;
    	&:after {
    		content: 'руб';
        margin-left: 4px;
    	}
    }
    .checkout {
      height: 100%;
      background: $color_orange;
      padding: 0 75px;
      font-family: $c45;
      font-size: 16px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: white;
      cursor: pointer;
      display: flex;
      position: relative;
      &:before {
        @include sprite($basket);
        content: '';
        display: block;
        margin-right: 20px;
        position: absolute;
        left: 30px;
      }
    }
  }
</style>