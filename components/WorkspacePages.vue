<template>
  <div class="workspace">
    <div class="canvases">
      <div class="canvas"
           v-for="preview in previews"
           :data-id="preview.id"
           v-show="preview.id === active_page_id">
        <img :src="preview.src"/>
      </div>
    </div>
    <div class="navigation">
      <div class="preview"
           v-for="preview in previews"
           :data-id="preview.id"
           @click="openPage(preview.id)"
           :class="{active: preview.id === active_page_id}">
        <div class="instruments"></div>
        <img :src="preview.src"/>
        <span class="title">{{preview.title}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Provide} from "nuxt-property-decorator"
  import {AxiosResponse} from "axios";
  import {Preview} from "../types";

  @Component({})
  export default class EditorPopup extends Vue {
    @Provide() previews: Array<Preview> = [];
    @Provide() active_page_id: number = 0;
    @Provide() openPage(id: number) {
      this.active_page_id = id;
    }
    @Provide() mounted() {
      this.getSomething();
    }
    @Provide() async getSomething() {
      let request: string = 'https://papara.ru/create/api/photobooks/421d9279-6c2b-4d1f-a647-d1afb1d71c96/';
      let res_str: AxiosResponse = await this.$axios.get(request);
      let res = JSON.parse(res_str.request.response);
      let previews: Array<Preview> = [];
      let index = 0;
      for (let value of res.pages) {
        if (this.active_page_id === 0) {
          this.active_page_id = value.id;
        }
        previews.push({
          src: 'http://papara.ru' + value.product_json.preview_img,
          id: value.id,
          title: index === 0 ? 'Обложка' : 'Разворот'
        });
        index++;
      }
      this.previews = previews;
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/scss/vars';
  .workspace {
    $padding_top: 61px;
    padding-top: $padding_top;
    height: calc(100% - #{$padding_top});
    .canvases {
      width: 100%;
      height: calc(100% - 135px);
      display: flex;
      justify-content: center;
      align-items: center;
      .canvas {
        position: absolute;
      }
    }
    .navigation {
      background: $color_grey;
      width: 100%;
      height: 135px;
      display: flex;
      .preview {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 190px;
        opacity: 0.6;
        cursor: pointer;
        .instruments {
          width: 100%;
          height: 22px;
        }
        img {
          height: calc(135px - 22px - 22px);
        }
        .title {
          height: 22px;
          display: flex;
          align-items: center;
          font-family: $c35;
          font-size: 12px;
          color: $color_dark_grey;
        }
        &:hover {
          opacity: 1;
          background: #dcdcdc;
        }
        &.active {
          opacity: 1;
          background: white;
        }
      }
    }
  }
</style>