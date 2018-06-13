<template>
  <div class="instrument photo" :class="{active: is_active()}">
    <button type="button" class="tab" @click="openTab">
      <span class="icon"></span>
    </button>
    <div class="head">
      <span class="title">Фотографии</span>
      <label class="autocomplete">
        <input type="checkbox"/>Автозаполнение
      </label>
      <label class="hide_used_photo">
        <input type="checkbox"/>Скрыть использованные
      </label>
    </div>
    <div class="body"></div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Provide } from "nuxt-property-decorator"
  import Instrument from './mixins/instrument'

  @Component({})
  export default class InstrumentPhoto extends Instrument {
    @Provide() instrument_name = 'photo';
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/vars.scss";
  @import "../assets/scss/sprite.scss";
  @import "../assets/scss/instrument.scss";
  @include instrument($photo, $photo_active, 0)
  .instrument {
    .autocomplete, .hide_used_photo {
      font-family: $c35;
      font-size: 12px;
      color: #0077e7;
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      user-select: none;
      input {
        margin-right: 5px;
      }
    }
  }
</style>