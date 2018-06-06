<template>
	<div id="app">
		<TheHeading></TheHeading>
		<TheInstruments></TheInstruments>
		<TheWorkspace></TheWorkspace>
	</div>
</template>

<script lang="ts">
  import { Component, Vue } from "nuxt-property-decorator"
	import TheHeading from '~/components/TheHeading.vue'
	import TheInstruments from '~/components/TheInstruments.vue'
	import TheWorkspace from '~/components/TheWorkspace.vue'

  @Component({
    components: {
      TheHeading,
			TheInstruments,
			TheWorkspace
    }
  })
  export default class App extends Vue {}
</script>

<style type="scss">
	#app {
		display: flex;
		flex-direction: column;
	}
</style>