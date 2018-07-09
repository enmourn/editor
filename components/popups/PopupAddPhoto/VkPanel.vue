<template>
  <section class="panel vk">
    <button class="navigation"
            :class="{connected: resource_connected, active: panel_active}"
            @click="activatePanel('vk')">
      <span class="icon"></span>
      <span class="text">вконтакте</span>
    </button>
    <section class="content" v-show="panel_active">
      <EditorLoader v-show="loader_active"/>
      <div class="dynamic">

        <div class="albums" v-if="albums.length">
          <figure class="album" v-for="album in albums" @click="getPhotoFromAlbum(album.id)">
            <img :src="album.img_src"/>
           <figcaption>{{album.title}}</figcaption>
          </figure>
        </div>

        <div class="instruments" v-if="photos.length">
          <button class="back_to_albums" type="button" @click="activatePanel">
            ← Вернуться к выбору альбомов
          </button>
          <AutocompleteCheckbox/>
          <EditorCheckbox class="select_all"
            :label="'Выбрать все'"
            @change="selectAllChange"
          />
          <button class="done" type="button"
            :class="{active: done_active}"
          >
            готово
          </button>
        </div>

        <div class="photos" v-if="photos.length">
          <PhotoPreview
            v-for="(value, index) in photos"
            :key="index"
            :img_src="value.img_src"
            :img_src_to_load="value.img_src_to_load"
            v-model="value.selected"
            @loaded="photoPreviewLoaded(index)"
          />
        </div>

      </div>
      <div class="static" v-show="static_active">
        <img src="../../../static/img/from_social.png"/>
        <span>загружайте фотографии из вконтакте</span>
        <button type="button">подключить вконтакте</button>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
  import PhotoPreview from "./PhotoPreview";
  import EditorCheckbox from '~/components/EditorCheckbox';

  interface Album {
    img_src: string
    title: string,
    id: number
  }
  interface Photo {
    img_src: string,
    img_src_to_load: string,
    selected: boolean,
    image_loaded: boolean
  }

  import {Vue, Component, Prop, Provide, Watch} from 'nuxt-property-decorator';
  import EditorLoader from "../../EditorLoader";
  import {AxiosResponse} from "axios";
  import SelectAllCheckbox from "./SelectAllCheckbox";
  import AutocompleteCheckbox from "./AutocompleteCheckbox";

  @Component({
    components: {PhotoPreview, SelectAllCheckbox, AutocompleteCheckbox, EditorLoader, EditorCheckbox}
  })
  export default class VkPanel extends Vue {
    @Prop() resource_connected?: boolean | undefined;

    @Provide() host: string = 'http://localhost:3008';
    @Provide() get panel_active() {
      return this.$store.state.popup_add_photo_active_panel === 'vk';
    }
    @Provide() loader_active: boolean = false;
    @Provide() static_active: boolean = false;
    @Provide() one_selected_photo_preview: boolean = false;
    @Provide() albums: Array<Album> = [];
    @Provide() photos: Array<Photo> = [];
    @Provide() async activatePanel() {
      this.albums = [];
      this.photos = [];
      this.$store.commit('set_popup_add_photo_active_panel', 'vk');
      if (this.resource_connected) {
        this.loader_active = true;
        let url = this.host + '/user-photos/api/load/vk-oauth2';
        let res_str: AxiosResponse = await this.$axios.get(url);
        let res = JSON.parse(res_str.request.response);
        for (let item of res.albums) {
          let album = {
            img_src: item.thumb_src,
            title: item.title,
            id: item.id
          };
          this.albums.push(album);
        }
        this.loader_active = false;
      } else {
        this.static_active = true;
      }
    }
    @Provide() async getPhotoFromAlbum(id: number) {
      let getUrlWithMaxSizePhoto = (photo: {[items: string]: string}) => {
        let max_size = 0;
        for (let key in photo) {
          if (photo.hasOwnProperty(key)) {
            let keyParts = key.split('_');
            if (keyParts[0] === 'photo' && parseInt(keyParts[1]) > max_size) {
              max_size = parseInt(keyParts[1]);
            }
          }
        }
        return photo['photo_' + max_size];
      };
      this.loader_active = true;
      let url = this.host + '/user-photos/api/load/vk-oauth2' + '/' + id;
      let res_str: AxiosResponse = await this.$axios.get(url);
      let res = JSON.parse(res_str.request.response);
      this.albums = [];
      for (let item of res.photos) {
        let photo = {
          img_src: item.photo_130,
          img_src_to_load: getUrlWithMaxSizePhoto(item),
          selected: false,
          image_loaded: false,
        };
        this.photos.push(photo);
      }
      this.loader_active = false;
    }
    @Provide() photoPreviewLoaded(index: number) {
      this.photos[index].image_loaded = true;
    }
    @Provide() selectAllChange(val: boolean) {
      for (let value of this.photos) {
        value.selected = val
      }
    }
    @Provide() get done_active() {
      for (let value of this.photos) {
        if (value.selected && value.image_loaded) {
          return true;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/base.scss";
  @import "panel.scss";
  .vk {
    $base_color: #466a90;
    .navigation {
      .icon {
        &:after {
          @include sprite($vk);
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
      .static {
        button {
          @include button($base_color);
          font-size: 16px;
        }
      }
    }
  }
</style>