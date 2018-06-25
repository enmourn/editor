<template>
  <div class="files">
    <div class="{{}}" v-for="folder in folders">{{folder.number}}</div>
  </div>
</template>

<script lang="ts">
  interface File {
    title?: string,
    img_src?: string
    type: 'folder' | 'document'
  }

  import { Vue, Component, Provide, Prop } from "nuxt-property-decorator"
  @Component({})
  export default class EditorFileManager extends Vue {
    @Prop() files?: Array<File>;
  }
</script>

<style lang="scss"></style>