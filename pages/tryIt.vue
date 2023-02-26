<template>
	<div class="try-it">
		<section class="try-it__inside">
			<iframe src="/index.html" frameborder="0" class="try-it__iframe"></iframe>
		</section>
	</div>
</template>

<script>
export default {
	name: 'TryIt',

	data() {
		return {}
	},

	mounted() {
		
	}
}
</script>

<style lang="scss" scoped>
.try-it {
	&__inside {
		padding-top: 100px;
		height: 100vh;
	}

	&__iframe {
		width: 100%;
		height: 100%;
	}
}
</style>