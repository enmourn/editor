<template>
  <section class="workspace"></section>
</template>

<script lang="ts">
  import { Component, Vue } from "nuxt-property-decorator"

  @Component({})
  export default class EditorWorkspace extends Vue {
  }
</script>

<style scoped>
  .workspace {
    grid-area: workspace;
    height: calc(100vh - 48px);
  }
</style>