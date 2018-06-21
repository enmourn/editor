<template>
  <section class="instruments">
    <InstrumentBackground></InstrumentBackground>
    <InstrumentPhoto></InstrumentPhoto>
    <InstrumentSticker></InstrumentSticker>
    <InstrumentGrid></InstrumentGrid>
    <InstrumentText></InstrumentText>
    <InstrumentOption></InstrumentOption>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from "nuxt-property-decorator"
  import InstrumentPhoto from '~/components/instruments/InstrumentPhoto.vue'
  import InstrumentBackground from '~/components/instruments/InstrumentBackground.vue'
  import InstrumentSticker from '~/components/instruments/InstrumentSticker.vue'
  import InstrumentGrid from '~/components/instruments/InstrumentGrid.vue'
  import InstrumentText from '~/components/instruments/InstrumentText.vue'
  import InstrumentOption from '~/components/instruments/InstrumentOption.vue'

  @Component({
    components: {
      InstrumentPhoto,
      InstrumentBackground,
      InstrumentSticker,
      InstrumentGrid,
      InstrumentText,
      InstrumentOption
    }
  })
  export default class EditorInstruments extends Vue {}
</script>

<style lang="scss" scoped>
  .instruments {
    grid-area: instruments;
    width: 277px;
    height: calc(100vh - 48px);
    display: flex;
    position: relative;
  }
</style>