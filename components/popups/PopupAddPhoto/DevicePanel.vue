<template>
  <section class="panel device">
    <button class="navigation"
            :class="{connected: connected, active: active}"
            @click="$store.commit('set_popup_add_photo_active_panel', 'device')">
      <span class="icon"></span>
      <span class="text">устройство</span>
    </button>
    <section class="content" v-show="active">
      <img src="../../../static/img/from_device.png"/>
      <span>загружайте фотографии с вашего устройства</span>
      <button type="button">нажмите, чтобы добавить фото</button>
    </section>
  </section>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Provide} from 'nuxt-property-decorator';
  @Component({})
  export default class DevicePanel extends Vue {
    @Prop() connected?: boolean;
    @Provide() get active() {
      return this.$store.state.popup_add_photo_active_panel === 'device';
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/base.scss";
  @import "panel.scss";
  .device {
    $base_color: #009d51;
    .navigation {
      .icon {
        &:after {
          @include sprite($device);
        }
      }
      &.active {
        background: $base_color;
        .icon {
          background: $base_color;
        }
      }
      &.connected {
        .icon {
          background: $base_color;
        }
      }
    }
    .content {
      button {
        @include button($base_color);
        font-size: 16px;
      }
    }
  }
</style>