<template>
  <div class="instrument grid" :class="{active: is_active()}">
    <button type="button" class="tab" @click="openTab">
      <span class="icon"></span>
    </button>
    <div class="head">
      <span class="title">Сетки</span>
      <span class="library">Библиотека</span>
    </div>
    <div class="body"></div>
  </div>
</template>

<script lang="ts">
  import { Component, Provide } from "nuxt-property-decorator"
  import Instrument from '../mixins/instrument/instrument'

  @Component({})
  export default class InstrumentGrid extends Instrument {
    @Provide() instrument_name = 'grid';
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/vars";
  @import "../../assets/scss/sprite";
  @import "../mixins/instrument/instrument";
  @include instrument($grid, $grid_active, 3);
</style>