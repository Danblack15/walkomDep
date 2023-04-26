<template>
	<div class="ar-layout">
		<theHeader class="ar-layout__header" />
		<Nuxt />
	</div>
</template>

<script>
import theHeader from '~/components/site/theHeader'

export default {
	layout: 'arLayout',
	name: 'arLayout',

	components: {
		theHeader
	},

	data() {
		return {}
	},
}
</script>

<style lang="scss">
body {
	//background: $black;
}

.laoding {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 10000;
}

.ar-layout {
	&__header {
		width: 100%;
		z-index: 100;

		transition: .6s all;
		background: rgba(240, 240, 240, 0.8);
		backdrop-filter: blur(5px);
	}
}
</style>