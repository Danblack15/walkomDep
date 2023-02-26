<template>
	<div class="default-layout">
		<MainLoading class="laoding" v-if="isLoading && isInit" />
		<div v-else>
			<theHeader class="default-layout__header default-layout__header--show" />
			<Nuxt />
			<theFooter />
		</div>
	</div>
</template>

<script>
import theHeader from '~/components/site/theHeader'
import theFooter from '~/components/site/theFooter'

export default {
	components: {
		theHeader,
		theFooter
	},

	data() {
		return {
			isLoading: false, //true
			isInit: false
		}
	},

	mounted() {
		setTimeout(() => {
			this.isLoading = false
		}, 2000),
		this.isInit = true
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

.default-layout {
	&__header {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 100;

		&--show {
			background: rgba(240, 240, 240, 0.8);
			backdrop-filter: blur(5px);
		}
	}
}
</style>