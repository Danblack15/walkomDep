<template>
	<object :data="iconLink()" type="image/svg+xml" class="icon-ui">
		<img 
			:src="iconReservLink()" 
			:alt="alt"
		>
	</object>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true
		},
		alt: {
			type: String,
			default: 'icon'
		}
	},

	methods: {
		iconLink() {
			return `img/icons/${this.name}.svg`
		},

		iconReservLink() {
			return `img/iconsReserve/${this.name}.png`
		}
	}
}
</script>

<style lang="scss" scoped>
.icon-ui {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>