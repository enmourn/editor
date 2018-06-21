<template>
  <div class="instrument action">
    <button type="button" class="save" @click="openPopup('PopupSave')">
      <span class="icon"></span>
    </button>
    <button type="button" class="check" @click="openPopup('PopupCheck')">
      <span class="icon"></span>
    </button>
    <button type="button" class="undo disabled">
      <span class="icon"></span>
    </button>
    <button type="button" class="redo disabled">
      <span class="icon"></span>
    </button>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Provide } from "nuxt-property-decorator"

  @Component({})
  export default class InstrumentAction extends Vue {
    @Provide() openPopup(name: string) {
      this.$store.commit('set_popups_active_popup', name);
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/vars";
  @import "../../assets/scss/sprite";
  .instrument.action {
    position: absolute;
    z-index: 1;
    button {
      padding: 15px 5px 15px 15px;
      cursor: pointer;
      .icon {
        display: block;
      }
    }
    .save {
      .icon {
        @include sprite($save);
      }
      &:hover .icon {
        @include sprite($save_active);
      }
    }
    .check {
      .icon {
        @include sprite($check);
      }
      &:hover .icon {
        @include sprite($check_active);
      }
    }
    .undo {
      .icon {
        @include sprite($undo);
      }
      &.disabled {
        opacity: 0.5;
        cursor: auto;
      }
      &:hover:not(.disabled) .icon {
        @include sprite($undo_active);
      }
    }
    .redo {
      .icon {
        @include sprite($redo);
      }
      &.disabled {
        opacity: 0.5;
        cursor: auto;
      }
      &:hover:not(.disabled) .icon {
        @include sprite($redo_active);
      }
    }
  }
</style>