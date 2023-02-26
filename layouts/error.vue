<template>
	<div class="error">
		<p class="error__title">404</p>
		<p class="error__desc">такой страницы<br />не существует</p>
		<ButtonUI link="/" class="error__btn">На главную</ButtonUI>
	</div>
</template>

<script>
import ButtonUI from '~/components/ui/ButtonUI'

export default {
	components: {
		ButtonUI
	},

	name: 'error'
}
</script>

<style lang="scss" scoped>
.error {
	height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	&__title {
		font-weight: 700;
		font-size: 128px;
		line-height: 155px;

		color: $white;

		@media (max-width: $xxxl) {
			font-size: 96px;
			line-height: 100%;
		}

		@media (max-width: $md) {
			font-size: 78px;
		}
	}

	&__desc {
		font-weight: 700;
		font-size: 64px;
		line-height: 77px;

		margin: 20px 0 80px 0;

		text-align: center;

		color: $white;
		opacity: 0.5;

		@media (max-width: $xxxl) {
			font-size: 52px;
			line-height: 100%;

			margin: 20px 0 60px 0;
		}

		@media (max-width: $md) {
			font-size: 36px;

			margin: 20px 0 40px 0;
		}
	}

	&__btn {
		@media (max-width: $xxxl) {
			@include text-sm;
			font-weight: 700;

			padding: 15px 60px;
		}

		@media (max-width: $md) {
			@include text-sm-2;
			font-weight: 700;

			padding: 10px 40px;
		}
	}
}
</style>