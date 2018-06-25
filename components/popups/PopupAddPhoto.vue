<template>
  <div class="popup_add_photo">
    <aside class="resource_navigation">
      <span class="title">Загрузить фотографии</span>
      <hr>
      <button class="resource device"
        :class="{
          active: app.active_resource === 'device',
          connected: false
        }"
        type="button"
        @click="activeResource(app.device, 'device')"
      >
        <span class="icon"></span>
        <span class="title">Устройство</span>
      </button>
      <button class="resource vk"
        :class="{
          active: app.active_resource === 'vk',
          connected: app.vk.connected
        }"
        type="button"
        @click="activeResource(app.vk, 'vk')"
      >
        <span class="icon"></span>
        <span class="title">ВКонтакте</span>
      </button>
      <button class="resource odnoklassniki"
        :class="{
          active: app.active_resource === 'odnoklassniki',
          connected: app.odnoklassniki.connected
        }"
        type="button"
        @click="activeResource(app.odnoklassniki, 'odnoklassniki')"
      >
        <span class="icon"></span>
        <span class="title">Одноклассники</span>
      </button>
      <button class="resource facebook"
        :class="{
          active: app.active_resource === 'facebook',
          connected: app.facebook.connected
        }"
        type="button"
        @click="activeResource(app.facebook, 'facebook')"
      >
        <span class="icon"></span>
        <span class="title">Facebook</span>
      </button>
      <button class="resource instagram"
        :class="{
          active: app.active_resource === 'instagram',
          connected: app.instagram.connected
        }"
        type="button"
        @click="activeResource(app.instagram, 'instagram')"
      >
        <span class="icon"></span>
        <span class="title">Instagram</span>
      </button>
      <button class="resource archive"
        :class="{
          active: app.active_resource === 'archive',
          connected: app.archive.connected
        }"
        type="button"
        @click="activeResource(app.archive, 'archive')"
      >
        <span class="icon"></span>
        <span class="title">Архив</span>
      </button>
    </aside>
    <section class="resource_content">
      <label class="autocomplete">
        <input type="checkbox"
               :checked="$store.state.photo_autocomplete"
               @click="changePhotoAutocomplete"
        />
        <span class="checkbox"></span>
        Автозаполнение
      </label>
      <EditorLoader v-show="app.loader_visible"></EditorLoader>
      <div class="files"
           v-show="app.files_visible"
      >
        <figure v-for="file in files">
          <img :src="file.img_src"/>
        </figure>
      </div>
      <form class="device"
            v-show="app.active_resource === 'device'"
      >
        <img src="~static/img/from_device.png"/>
        <span>загружайте фотографии с вашего устройства</span>
        <button type="button">нажмите, чтобы добавить фото</button>
      </form>
      <form class="vk"
            v-show="app.active_resource === 'device' && !app.vk.connected"
      >
        <img src="~static/img/from_social.png"/>
        <span>загружайте фотографии из вконтакте</span>
        <button type="button">подключить вконтакте</button>
      </form>
      <form class="odnoklassniki"
            v-show="app.active_resource === 'odnoklassniki' && !app.odnoklassniki.connected">
        <img src="~static/img/from_social.png"/>
        <span>загружайте фотографии из одноклассников</span>
        <button type="button">подключить одноклассники</button>
      </form>
      <form class="facebook"
            v-show="app.active_resource === 'facebook' && !app.facebook.connected"
      >
        <img src="~static/img/from_social.png"/>
        <span>загружайте фотографии из facebook</span>
        <button type="button">подключить facebook</button>
      </form>
      <form class="instagram"
            v-show="app.active_resource === 'instagram' && !app.instagram.connected"
      >
        <img src="~static/img/from_social.png"/>
        <span>загружайте фотографии из instagram</span>
        <button type="button">подключить instagram</button>
      </form>
      <form class="archive"
            v-show="app.active_resource === 'archive' && !app.archive.connected">
        Архив
      </form>
    </section>
  </div>
</template>

<script lang="ts">
  interface Resource {
    connected: boolean,
    get_albums_url: string
  }
  interface App {
    active_resource: string,
    get_connected_resources_url: string,
    loader_visible: boolean,
    files_visible: boolean,
    device: Resource,
    vk: Resource,
    odnoklassniki: Resource,
    facebook: Resource,
    instagram: Resource,
    archive: Resource
  }
  interface File {
    title: string,
    img_src: string
  }

  import { Vue, Component, Provide } from "nuxt-property-decorator"
  import {AxiosResponse} from "axios";
  import EditorLoader from "../EditorLoader";
  import EditorFolders from "../EditorFileManager";

  @Component({
    components: {EditorFolders, EditorLoader}
  })
  export default class PopupAddPhoto extends Vue {
    @Provide() photo_autocomplete: boolean = this.$store.state.photo_autocomplete;
    @Provide() app: App = {
      active_resource: 'device',
      get_connected_resources_url: 'http://localhost:3008/get_active_resources',
      loader_visible: false,
      files_visible: false,
      device: {
        connected: false,
        get_albums_url: ''
      },
      vk: {
        connected: false,
        get_albums_url: 'http://localhost:3008/vk_get_albums',
      },
      odnoklassniki: {
        connected: false,
        get_albums_url: '',
      },
      facebook: {
        connected: false,
        get_albums_url: '',
      },
      instagram: {
        connected: false,
        get_albums_url: '',
      },
      archive: {
        connected: false,
        get_albums_url: '',
      }
    };
    @Provide() files: Array<File> = [];

    @Provide() changePhotoAutocomplete () {
      this.$store.commit('change_photo_autocomplete');
    }
    @Provide() activeResource(resource: Resource, resource_name: string) {
      let self = this;
      self.app.loader_visible = false;
      self.app.files_visible = false;
      self.app.active_resource = resource_name;
      if (resource.connected) {
        self.app.loader_visible = true;
        self.app.files_visible = true;
        self.$axios.get(resource.get_albums_url).then(function(res) {
          self.files = [];
          for (let i of res.data.albums) {
            let file: File = {
              title: i.title,
              img_src: i.thumb_src
            };
            self.files.push(file);
          }
          self.app.loader_visible = false;
        })
      }
    }
    @Provide() async mounted() {
      let res_str: AxiosResponse = await this.$axios.get(this.app.get_connected_resources_url);
      let res = JSON.parse(res_str.request.response);
      this.app.vk.connected = res.exist_social_links['vk-oauth2'] || false;
      this.app.odnoklassniki.connected = res.exist_social_links['odnoklassniki-oauth2'] || false;
      this.app.facebook.connected = res.exist_social_links['facebook'] || false;
      this.app.instagram.connected = res.exist_social_links['instagram'] || false;
      this.app.archive.connected = res.is_archive;
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/base.scss";
  .popup_add_photo {
    display: flex;
    .resource_navigation {
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
          $color_active: #466a90;
          &.active {
            background: $color_active;
            .icon {
              background: $color_active;
            }
          }
          &.connected {
            .icon {
              background: $color_active;
            }
          }
        }
        &.odnoklassniki {
          .icon:after {
            @include sprite($odnoklassniki);
          }
          $color_active: #f07b21;
          &.active {
            background: $color_active;
            .icon {
              background: $color_active;
            }
          }
          &.connected {
            .icon {
              background: $color_active;
            }
          }
        }
        &.facebook {
          .icon:after {
            @include sprite($facebook);
          }
          $color_active: #0f55a0;
          &.active {
            background: $color_active;
            .icon {
              background: $color_active;
            }
          }
          &.connected {
            .icon {
              background: $color_active;
            }
          }
        }
        &.instagram {
          .icon:after {
            @include sprite($instagram);
          }
          $color_active: #000000;
          &.active {
            background: $color_active;
            .icon {
              background: $color_active;
            }
          }
          &.connected {
            .icon {
              background: $color_active;
            }
          }
        }
        &.archive {
          .icon:after {
            @include sprite($archive);
          }
          $color_active: #9ea5aa;
          &.active {
            background: $color_active;
            .icon {
              background: $color_active;
            }
          }
          &.connected {
            .icon {
              background: $color_active;
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
    .resource_content {
      padding: 50px 30px 30px 45px;
      min-width: 850px;
      position: relative;
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