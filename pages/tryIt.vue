<template>
	<div class="try-it">
		<section class="try-it__inside">
			<mapTryIt />
		</section>
	</div>
</template>

<script>
import mapTryIt from '~/components/tryIt/mapTryIt'

export default {
	name: 'TryIt',
	layout: 'arLayout',

	components: {
		mapTryIt
	},

	data() {
		return {}
	},

	methods: {},
}
</script>

<style lang="scss" scoped>
.try-it {
	&__inside {
		height: calc(100vh - 100px);
	}
}
</style>