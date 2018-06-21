<template>
  <section class="workspace">
    <InstrumentAction></InstrumentAction>
    <CarrotQuest></CarrotQuest>
    <WorkspacePages></WorkspacePages>
  </section>
</template>

<script lang="ts">
  import { Vue, Component } from "nuxt-property-decorator"
  import InstrumentAction from "~/components/instruments/InstrumentAction.vue"
  import CarrotQuest from "~/components/CarrotQuest.vue"
  import WorkspacePages from "~/components/WorkspacePages.vue";

  @Component({
    components: {
      InstrumentAction,
      CarrotQuest,
      WorkspacePages
    }
  })
  export default class EditorWorkspace extends Vue {
  }
</script>

<style lang="scss" scoped>
  .workspace {
    position: relative;
    grid-area: workspace;
    height: calc(100vh - 48px);
  }
</style>