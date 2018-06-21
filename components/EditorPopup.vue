<template>
  <transition :duration-enter="600" :duration-leave="300" name="fade">
    <div class="popup" v-if="is_active()">
      <div class="overlay" @click=hidePopup></div>
      <div class="content">
        <button type="button" class="close" @click=hidePopup>
          <span class="icon"></span>
        </button>
        <component :is="$store.state.popups_active_popup"></component>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
  import { Vue, Component, Provide} from "nuxt-property-decorator"
  import PopupCheck from "./popups/PopupCheck";
  import PopupSave from "./popups/PopupSave";
  import PopupAddPhoto from "./popups/PopupAddPhoto";

  @Component({
    components: { PopupSave, PopupCheck, PopupAddPhoto }
  })
  export default class EditorPopup extends Vue {
    @Provide() is_active(): boolean {
      return !!this.$store.state.popups_active_popup;
    }
    @Provide() hidePopup() {
      this.$store.commit('set_popups_active_popup', '');
    }
    @Provide() mounted() {
      console.log('popup mounted');
      let self = this;
      document.addEventListener('keyup', function(e) {
        if (e.code === 'Escape') {
          self.$store.commit('set_popups_active_popup', '');
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/vars';
  .popup {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .overlay {
      width: 100%;
      height: 100%;
      background: black;
      opacity: 0.5;
      cursor: pointer;
    }
    .content {
      position: absolute;
      background: white;
      min-width: 300px;
      min-height: 180px;
      border-radius: 2px;
      overflow: hidden;
      .close {
        position: absolute;
        z-index: 1001;
        top: 0;
        right: 0;
        cursor: pointer;
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px;
        .icon {
          &:before, &:after {
            content: '';
            display: block;
            height: 14px;
            width: 1px;
            background-color: $color_dark_grey;
          }
          &:before {
            transform: rotate(45deg);
          }
          &:after {
            position: absolute;
            top: 5px;
            transform: rotate(-45deg);
          }
        }
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
    .content {
      transition: opacity 0.3s 0.3s
    }
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    .content {
      opacity: 0;
    }
  }
</style>
