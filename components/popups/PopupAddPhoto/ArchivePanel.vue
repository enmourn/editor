<template>
  <section class="panel archive">
    <button class="navigation">
      <span class="icon"></span>
      <span class="text">архив</span>
    </button>
    <section class="content" v-show="$store.state.popup_add_photo_active_panel === 'archive'">
      контент
    </section>
  </section>
</template>

<script lang="ts">
  import {Vue, Component} from 'nuxt-property-decorator';
  @Component({})
  export default class ArchivePanel extends Vue {}
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/base.scss";
  @import "panel.scss";
  .archive {
    .navigation {
      .icon {
        &:after {
          @include sprite($archive);
        }
      }
    }
  }
</style>