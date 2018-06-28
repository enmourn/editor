<template>
  <section class="panel facebook">
    <button class="navigation">
      <span class="icon"></span>
      <span class="text">facebook</span>
    </button>
    <section class="content" v-show="$store.state.popup_add_photo_active_panel === 'facebook'">
      контент
    </section>
  </section>
</template>

<script lang="ts">
  import {Vue, Component} from 'nuxt-property-decorator';
  @Component({})
  export default class FacebookPanel extends Vue {}
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/base.scss";
  @import "panel.scss";
  .facebook {
    .navigation {
      .icon {
        &:after {
          @include sprite($facebook);
        }
      }
    }
  }
</style>