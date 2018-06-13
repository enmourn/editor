<template>
  <div class="instrument text" :class="{active: is_active()}">
    <button type="button" class="tab" @click="openTab">
      <span class="icon"></span>
    </button>
    <div class="head">
      <span class="title">Текст</span>
    </div>
    <div class="body"></div>
  </div>
</template>

<script lang="ts">
  import { Component, Provide } from "nuxt-property-decorator"
  import Instrument from './mixins/instrument'

  @Component({})
  export default class InstrumentText extends Instrument {
    @Provide() instrument_name = 'text';
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/vars.scss";
  @import "../assets/scss/sprite.scss";
  @import "../assets/scss/instrument.scss";
  @include instrument($text, $text_active, 4);
</style>