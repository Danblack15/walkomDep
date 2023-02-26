<template>
	<nuxt-link
		:to="link" 
		class="link-ui"
	>
		<slot></slot>
	</nuxt-link>	
</template>

<script>
export default {
	props: {
		link: {
			type: String,
			default: '#'
		}
	},

	name: 'LinkUI'
}
</script>

<style lang="scss" scoped>
.link-ui {
	@include text-md;
	font-weight: 700;
	color: $orange;

	text-shadow: -3px 5px 10px rgba(255, 152, 64, 0.4), 
							3px -5px 10px rgba(255, 152, 64, 0.4);

	transition: .3s all;

	&:hover {
		color: $orange--light;
		text-shadow: -5px 7px 10px rgba(255, 180, 115, 0.4), 
									5px -7px 10px rgba(255, 180, 115, 0.4);									
	}
}
</style>