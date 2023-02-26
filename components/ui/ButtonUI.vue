<template>
	<a :class="['button', {
			'button--disabled': disabled
		}]"
		:disabled="disabled"
		v-if="another"
		:href="link"
		target="_blank"
	>
		<slot></slot>
	</a>

	<nuxt-link :class="['button', {
			'button--disabled': disabled
		}]"
		:disabled="disabled"
		v-else-if="link && !another"
		:to="link"
	>
		<slot></slot>
	</nuxt-link>

	<button :class="['button', {
			'button--disabled': disabled
		}]"
		:disabled="disabled"
		v-else
	>
		<slot></slot>
	</button>
</template>

<script>
export default {
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		link: {
			type: String,
			default: '#'
		},
		another: {
			type: Boolean,
			default: false
		}
	},

	name: 'ButtonUI'
}
</script>

<style lang="scss" scoped>
.button {
	display: inline-block;
	
	padding: 15px 80px;

	@include text-md;
	font-weight: 700;
	user-select: none;

	background: $green;
	border-radius: 10px;
	color: $white;
	box-shadow: 0px 5px 10px rgba(35, 138, 76, 0.4), 
							0px -5px 10px rgba(35, 138, 76, 0.4), 
							-5px 0px 10px rgba(35, 138, 76, 0.4), 
							5px 0px 10px rgba(35, 138, 76, 0.4);
	
	cursor: pointer;
	transition: .3s all;

	&:hover {
		color: $white;
		background: $green--light;
		box-shadow: 0px 10px 10px rgba(35, 138, 76, 0.6), 
								0px -10px 10px rgba(35, 138, 76, 0.6), 
								-10px 0px 10px rgba(35, 138, 76, 0.6), 
								10px 0px 10px rgba(35, 138, 76, 0.6);
	}

	//disabled button
	&--disabled {
		filter: brightness(50%);
		box-shadow: none;
		pointer-events: none;
	}
}
</style>