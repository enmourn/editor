<template>
	<div id="app">
		<EditorHeader></EditorHeader>
		<EditorInstruments></EditorInstruments>
		<EditorWorkspace></EditorWorkspace>
	</div>
</template>

<script lang="ts">
  import { Component, Vue } from "nuxt-property-decorator"
	import EditorHeader from '~/components/EditorHeader.vue'
	import EditorInstruments from '~/components/EditorInstruments.vue'
	import EditorWorkspace from '~/components/EditorWorkspace.vue'

  @Component({
    components: {
      EditorHeader,
			EditorInstruments,
			EditorWorkspace
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