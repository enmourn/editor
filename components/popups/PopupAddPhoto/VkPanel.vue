<template>
  <section class="panel vk">
    <button class="navigation"
            :class="{connected: connected, active: active}"
            @click="activatePanel('vk')">
      <span class="icon"></span>
      <span class="text">вконтакте</span>
    </button>
    <section class="content" v-show="active">
      <EditorLoader v-show="loader_active"/>
      <figure class="album" v-for="album in albums">
        <img :src="album.img_src" @click="getPhotoFromAlbum(album.id)"/>
        <figcaption>{{album.title}}</figcaption>
      </figure>
    </section>
  </section>
</template>

<script lang="ts">
  interface Album {
    img_src: string
    title: string,
    id: number
  }

  import {Vue, Component, Prop, Provide} from 'nuxt-property-decorator';
  import EditorLoader from "../../EditorLoader";
  import {AxiosResponse} from "axios";
  @Component({
    components: {EditorLoader}
  })
  export default class VkPanel extends Vue {
    @Provide() host: string = 'http://localhost:3008';
    @Prop() connected?: boolean | undefined;
    @Provide() get active() {
      return this.$store.state.popup_add_photo_active_panel === 'vk';
    }
    @Provide() loader_active: boolean = false;
    @Provide() albums: Array<Album> = [];
    @Provide() async activatePanel() {
      this.$store.commit('set_popup_add_photo_active_panel', 'vk');
      if (this.connected === undefined) {

      }
      if (this.connected) {
        this.loader_active = true;
        let url = this.host + '/user-photos/api/load/vk-oauth2';
        let res_str: AxiosResponse = await this.$axios.get(url);
        let res = JSON.parse(res_str.request.response);
        this.albums = [];
        for (let item of res.albums) {
          let album = {
            img_src: item.thumb_src,
            title: item.title,
            id: item.id
          };
          this.albums.push(album);
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
      button {
        @include button($base_color);
        font-size: 16px;
      }
    }
  }
</style>