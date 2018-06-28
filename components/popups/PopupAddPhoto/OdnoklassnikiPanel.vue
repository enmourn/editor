<template>
  <section class="panel odnoklassniki">
    <button class="navigation">
      <span class="icon"></span>
      <span class="text">одноклассники</span>
    </button>
    <section class="content" v-show="$store.state.popup_add_photo_active_panel === 'odnoklassniki'">
      контент
    </section>
  </section>
</template>

<script lang="ts">
  import {Vue, Component} from 'nuxt-property-decorator';
  @Component({})
  export default class OdnoklassnikiPanel extends Vue {}
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/base.scss";
  @import "panel.scss";
  .odnoklassniki {
    .navigation {
      .icon {
        &:after {
          @include sprite($odnoklassniki);
        }
      }
    }
  }
</style>