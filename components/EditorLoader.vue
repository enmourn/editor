<template>
  <div class="loader">
    <div class="overlay"></div>
    <span class="icon"></span>
  </div>
</template>

<script lang="ts">
  import { Vue, Component} from "nuxt-property-decorator"

  @Component({})
  export default class EditorLoader extends Vue {
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/sprite";
  .loader {
    position: absolute;
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
      background: white;
      opacity: 0.5;
    }
    .icon {
      position: absolute;
      display: block;
      @keyframes spin {
        to { transform: rotateY(360deg) }
      }
      @include sprite($logo);
      animation: spin 1.2s infinite linear;
    }
    &.hidden {
      display: none;
    }
  }
</style>
