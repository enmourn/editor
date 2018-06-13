<template>
  <div class="instrument background" :class="{active: is_active()}">
    <button type="button" class="tab" @click="openTab">
      <span class="icon"></span>
    </button>
    <div class="head">
      <span class="title">Фоны</span>
      <span class="library">Библиотека</span>
    </div>
    <div class="body"></div>
  </div>
</template>

<script lang="ts">
  import { Component, Provide } from "nuxt-property-decorator"
  import Instrument from './mixins/instrument'

  @Component({})
  export default class InstrumentBackground extends Instrument {
    @Provide() instrument_name = 'background';
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/vars.scss";
  @import "../assets/scss/sprite.scss";
  @import "../assets/scss/instrument.scss";
  @include instrument($background, $background_active, 1);
</style>