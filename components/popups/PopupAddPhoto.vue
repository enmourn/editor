<template>
  <div class="popup_add_photo">
    <aside class="resource_set">
      <span class="title">Загрузить фотографии</span>
      <hr>
      <button
        class="resource device"
        :class="{active: resource === 'device'}"
        type="button"
        @click="resource = 'device'"
      >
        <span class="icon"></span>
        <span class="title">Устройство</span>
      </button>
      <button
        class="resource vk"
        :class="{active: resource === 'vk'}"
        type="button"
        @click="resource = 'vk'"
      >
        <span class="icon"></span>
        <span class="title">ВКонтакте</span>
      </button>
      <button
        class="resource odnoklassniki"
        :class="{active: resource === 'odnoklassniki'}"
        type="button"
        @click="resource = 'odnoklassniki'"
      >
        <span class="icon"></span>
        <span class="title">Одноклассники</span>
      </button>
      <button
        class="resource facebook"
        :class="{active: resource === 'facebook'}"
        type="button"
        @click="resource = 'facebook'"
      >
        <span class="icon"></span>
        <span class="title">Facebook</span>
      </button>
      <button
        class="resource instagram"
        :class="{active: resource === 'instagram'}"
        type="button"
        @click="resource = 'instagram'"
      >
        <span class="icon"></span>
        <span class="title">Instagram</span>
      </button>
      <button
        class="resource archive"
        :class="{active: resource === 'archive'}"
        type="button"
        @click="resource = 'archive'"
      >
        <span class="icon"></span>
        <span class="title">Архив</span>
      </button>
    </aside>
    <section class="photo_set">
      <label class="autocomplete">
        <input type="checkbox"
               :checked="$store.state.photo_autocomplete"
               @click="changePhotoAutocomplete"
        />
        <span class="checkbox"></span>
        Автозаполнение
      </label>
      <form class="device" v-show="resource === 'device'">
        <img src="~static/img/from_device.png"/>
        <span>загружайте фотографии с вашего устройства</span>
        <button type="button">нажмите, чтобы добавить фото</button>
      </form>
      <form class="vk" v-show="resource === 'vk'">
        <img src="~static/img/from_social.png"/>
        <span>загружайте фотографии из вконтакте</span>
        <button type="button">подключить вконтакте</button>
      </form>
      <form class="odnoklassniki" v-show="resource === 'odnoklassniki'">
        <img src="~static/img/from_social.png"/>
        <span>загружайте фотографии из одноклассников</span>
        <button type="button">подключить одноклассники</button>
      </form>
      <form class="facebook" v-show="resource === 'facebook'">
        <img src="~static/img/from_social.png"/>
        <span>загружайте фотографии из facebook</span>
        <button type="button">подключить facebook</button>
      </form>
      <form class="instagram" v-show="resource === 'instagram'">
        <img src="~static/img/from_social.png"/>
        <span>загружайте фотографии из instagram</span>
        <button type="button">подключить instagram</button>
      </form>
      <form class="archive" v-show="resource === 'archive'">
        Архив
      </form>
    </section>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Provide, Watch } from "nuxt-property-decorator"

  @Component({})
  export default class PopupAddPhoto extends Vue {
    @Provide() photo_autocomplete: boolean = this.$store.state.photo_autocomplete;
    @Provide() resource: string = 'vk';
    @Provide() changePhotoAutocomplete () {
      this.$store.commit('change_photo_autocomplete');
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/base.scss";
  .popup_add_photo {
    display: flex;
    .resource_set {
      width: 255px;
      background: $color_grey;
      padding: 50px 30px 30px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      > .title {
        font-family: $c35;
        font-size: 20px;
        font-weight: 700;
        text-transform: uppercase;
        color: $color_dark_grey;
      }
      hr {
        width: 15px;
        height: 2px;
        border: none;
        background: $color_orange;
        margin: 15px auto 60px 0;
      }
      .resource {
        $active_color: none;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        cursor: pointer;
        min-width: 185px;
        border-radius: 3px;
        > .title {
          font-family: $c35;
          font-size: 15px;
          color: $color_dark_grey;
          padding: 0 10px;
        }
        .icon {
          width: 50px;
          height: 50px;
          background: #d8dde0;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          &:after {
            content: '';
            display: block;
          }
        }
        &.device {
          .icon:after {
            @include sprite($device);
          }
          &.active {
            background: #009d51;
            .icon {
              background: #009d51;
            }
          }
        }
        &.vk {
          .icon:after {
            @include sprite($vk);
          }
          &.active {
            background: #466a90;
            .icon {
              background: #466a90;
            }
          }
        }
        &.odnoklassniki {
          .icon:after {
            @include sprite($odnoklassniki);
          }
          &.active {
            background: #f07b21;
            .icon {
              background: #f07b21;
            }
          }
        }
        &.facebook {
          .icon:after {
            @include sprite($facebook);
          }
          &.active {
            background: #0f55a0;
            .icon {
              background: #0f55a0;
            }
          }
        }
        &.instagram {
          .icon:after {
            @include sprite($instagram);
          }
          &.active {
            background: #000000;
            .icon {
              background: #000000;
            }
          }
        }
        &.archive {
          .icon {
            background: #9ea5aa;
            &:after {
              @include sprite($archive);
            }
          }
          &.active {
            background: #9ea5aa;
            .icon {
              background: #9ea5aa;
            }
          }
        }
        &.active {
          > .title {
            color: white;
          }
        }
      }
    }
    .photo_set {
      padding: 50px 30px 30px 45px;
      .autocomplete {
        font-family: $c35;
        font-size: 15px;
        color: $color_dark_grey;
        display: flex;
        align-items: center;
        cursor: pointer;
        user-select: none;
        input {
          display: none;
        }
        .checkbox {
          content: '';
          width: 15px;
          height: 15px;
          border: 1px solid #d3d3d3;
          border-radius: 2px;
          margin-right: 8px;
          position: relative;
          &:after {
            content: '';
            width: 8px;
            height: 6px;
            border-left: 2px solid $color_dark_grey;
            border-bottom: 2px solid $color_dark_grey;
            transform: rotate(310deg);
            position: absolute;
            display: none;
            left: 2px;
            top: 2px;
          }
        }
        input:checked + .checkbox:after {
          display: block;
        }
      }
      form {
        width: 850px;
        height: 380px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        > span {
          font-family: $c55;
          font-size: 16px;
          text-transform: uppercase;
          color: $color_dark_grey;
          margin: 10px 0;
        }
        &.device {
          button {
            @include button(#009d51);
            font-size: 16px;
          }
        }
        &.vk {
          button {
            @include button(#466a90);
            font-size: 16px;
          }
        }
        &.odnoklassniki {
          button {
            @include button(#f07b21);
            font-size: 16px;
          }
        }
        &.facebook {
          button {
            @include button(#0f55a0);
            font-size: 16px;
          }
        }
        &.instagram {
          button {
            @include button(#000000);
            font-size: 16px;
          }
        }
      }
    }
  }
</style>