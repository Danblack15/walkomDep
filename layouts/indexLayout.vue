<template>
	<div class="index-layout">
		<MainLoading class="laoding" v-if="isLoading && isInit" />
		<div v-else>
			<theHeader 
				class="index-layout__header" 
				:class="{ 
					'index-layout__header--show': headerShow,
					'index-layout__header--hide': !headerShow
			 	}" 
			/>
			<Nuxt />
			<theFooter />
		</div>
	</div>
</template>

<script>
import theHeader from '~/components/site/theHeader'
import theFooter from '~/components/site/theFooter'

export default {
	layout: 'indexLayout',
	name: 'indexLayout',

	components: {
		theHeader,
		theFooter
	},

	data() {
		return {
			isLoading: false, //true
			headerShow: false,
			isInit: false
		}
	},

	mounted() {
		setTimeout(() => {
			this.isLoading = false
		}, 2000),
		this.isInit = true
	},

	beforeMount() {
		window.addEventListener('scroll', this.handleScroll)
	},

	beforeDestory() {
		window.removeEventListener('scroll', this.handleScroll)
	},

	methods: {
		handleScroll() {
			if (window.scrollY >= window.innerHeight - 100)
				this.headerShow = true
			else
				this.headerShow = false
		}
	}

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

.index-layout {
	&__header {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 100;

		transition: .6s all;

		&--show {
			background: rgba(240, 240, 240, 0.8);
			backdrop-filter: blur(5px);
		}

		&--hide {
			background: rgba(240, 240, 240, 0);
		}
	}
}
</style>