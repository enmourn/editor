<template>
  <div class="instrument sticker" :class="{active: is_active()}">
    <button type="button" class="tab" @click="openTab">
      <span class="icon"></span>
    </button>
    <div class="head">
      <span class="title">Стикеры</span>
      <span class="library">Библиотека</span>
    </div>
    <div class="body"></div>
  </div>
</template>

<script lang="ts">
  import { Component, Provide } from "nuxt-property-decorator"
  import Instrument from '../mixins/instrument/instrument'

  @Component({})
  export default class InstrumentSticker extends Instrument {
    @Provide() instrument_name = 'sticker';
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/vars";
  @import "../../assets/scss/sprite";
  @import "../mixins/instrument/instrument";
  @include instrument($sticker, $sticker_active, 2);
</style>