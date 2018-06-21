<template>
  <div class="instrument photo" :class="{active: is_active()}">
    <button type="button" class="tab" @click="openTab">
      <span class="icon"></span>
    </button>
    <div class="head">
      <span class="title">Фотографии</span>
      <label class="autocomplete">
        <input type="checkbox"
               :checked="$store.state.photo_autocomplete"
               @click="changePhotoAutocomplete"
        />
        Автозаполнение
      </label>
      <label class="hide_used_photo">
        <input type="checkbox"/>Скрыть использованные
      </label>
    </div>
    <div class="body">
      <button class="add_photo" type="button" @click="openPopup('PopupAddPhoto')">Добавить фото</button>
      <EditorLoader v-if="!$store.state.global_loader && instrument_photo_loader"></EditorLoader>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Provide, Watch } from "nuxt-property-decorator"
  import Instrument from '../mixins/instrument/instrument'
  import EditorLoader from '~/components/EditorLoader.vue'

  @Component({
    components: {
      EditorLoader
    }
  })
  export default class InstrumentPhoto extends Instrument {
    @Provide() instrument_name = 'photo';
    @Provide() instrument_photo_loader = false;
    @Provide() openPopup(name: string) {
      this.$store.commit('set_popups_active_popup', name);
    }
    @Provide() changePhotoAutocomplete () {
      this.$store.commit('change_photo_autocomplete');
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/base.scss";
  @import "../mixins/instrument/instrument";
  @include instrument($photo, $photo_active, 0)
  .instrument.photo {
    .head {
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
    .body {
      .add_photo {
        @include button($color_blue);
        margin: 15px;
      }
    }
  }
</style>