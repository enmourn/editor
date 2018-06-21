<template>
  <div class="instrument option" :class="{active: is_active()}">
    <button type="button" class="tab" @click="openTab">
      <span class="icon"></span>
    </button>
    <div class="head">
      <span class="title">Опции</span>
    </div>
    <div class="body"></div>
  </div>
</template>

<script lang="ts">
  import { Component, Provide } from "nuxt-property-decorator"
  import Instrument from '../mixins/instrument/instrument'

  @Component({})
  export default class InstrumentOption extends Instrument {
    @Provide() instrument_name = 'option';
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/vars";
  @import "../../assets/scss/sprite";
  @import "../mixins/instrument/instrument";
  @include instrument($option, $option_active, 5);
</style>