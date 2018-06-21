<template>
  <span class="icon"></span>
</template>

<script lang="ts">
  import { Component, Vue } from "nuxt-property-decorator"

  @Component({})
  export default class CarrotQuest extends Vue {
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/sprite";
  .icon {
    position: absolute;
    top: 15px;
    right: 15px;
    display: block;
    cursor: pointer;
    @include sprite($design_help);
    &:hover {
      @include sprite($design_help_active);
    }
  }
</style>