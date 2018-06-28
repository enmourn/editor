<template>
  <section class="panel instagram">
    <button class="navigation">
      <span class="icon"></span>
      <span class="text">instagram</span>
    </button>
    <section class="content" v-show="$store.state.popup_add_photo_active_panel === 'instagram'">
      контент
    </section>
  </section>
</template>

<script lang="ts">
  import {Vue, Component} from 'nuxt-property-decorator';
  @Component({})
  export default class InstagramPanel extends Vue {}
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/base.scss";
  @import "panel.scss";
  .instagram {
    .navigation {
      .icon {
        &:after {
          @include sprite($instagram);
        }
      }
    }
  }
</style>