<template>
	<div id="app">
		<EditorHeader></EditorHeader>
		<EditorInstruments></EditorInstruments>
		<EditorWorkspace></EditorWorkspace>
		<EditorPopup></EditorPopup>
		<EditorLoader v-if="$store.state.global_loader"></EditorLoader>
	</div>
</template>

<script lang="ts">
  import { Component, Vue, Provide } from "nuxt-property-decorator"
	import EditorHeader from '~/components/EditorHeader.vue'
	import EditorInstruments from '~/components/EditorInstruments.vue'
	import EditorWorkspace from '~/components/EditorWorkspace.vue'
	import EditorPopup from '~/components/EditorPopup.vue'
  import EditorLoader from "../components/EditorLoader";

  @Component({
    components: {
      EditorLoader,
      EditorHeader,
			EditorInstruments,
			EditorWorkspace,
			EditorPopup
    }
  })
  export default class App extends Vue {}
</script>

<style type="scss">
  @import "../assets/scss/normalize.scss";
	#app {
		display: grid;
		grid-template-areas:
			"header header"
			"instruments workspace";
		grid-auto-columns: min-content 1fr;
	}
</style>