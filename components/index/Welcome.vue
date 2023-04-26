<template>
	<div class="welcome">
		<h1 class="welcome__title bold-600">
			<span class="welcome__title--green welcome__title-anim">WALK</span>
			<span class="welcome__title--black welcome__title-anim">WITH</span>
			<span class="welcome__title--orange welcome__title-anim">ME</span>
		</h1>
		<h3 class="welcome__subtitle">
			Ваше путешествие при помощи<br/>
			<span class="bold-600 welcome__subtitle--green">дополненной реальности</span>
		</h3>
		<ButtonUI link="/tryIt" class="welcome__btn">Начать</ButtonUI>

		<img src="/img/icons/arrow.svg" alt="стрелка вниз" class="welcome__arrow" />
	</div>
</template>

<script>
import ButtonUI from '~/components/ui/ButtonUI'
import IconUI from '~/components/ui/IconUI'

export default {
	components: {
		ButtonUI,
		IconUI
	},

	name: 'welcome'
}
</script>

<style lang="scss" scoped>
.welcome {
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	// background-image: url('/img/welcome.jpg');
	background-image: url('https://i.pinimg.com/originals/81/66/44/8166449bef7ba678e1a86c1db983ff8c.png');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	box-shadow: inset 0px -30px 20px $black;

	&__title {
		@include h1;
		font-weight: 600;

		display: flex;
		grid-column-gap: 10px;

		@media (max-width: $xxxl) {
			@include h3-36;
		}

		@media (max-width: $md) {
			@include text-bg;
			font-weight: 600;
		}
		

		&--green {
			display: block;
			color: $green;
			transform: translateX(50%);
			opacity: 0;
			animation-delay: .2s;
		}

		&--black {
			display: block;
			transform: translateX(50%);
			opacity: 0;
			animation-delay: .4s;
			color: $black;
		}

		&--orange {
			display: block;
			color: $orange;
			transform: translateX(50%);
			opacity: 0;
			animation-delay: .6s;
		}

		@keyframes title-welcome {
			50% {
				opacity: 1;
			}
			100% {
				transform: translateX(0);
				opacity: 1;
			}
		}
	}

	&__title-anim {
		animation-name: title-welcome;
		animation-fill-mode: forwards;
		animation-duration: .3s;
	}

	&__subtitle {
		@include h3;
		@include slide-up(.7s);
		font-weight: 400;
		color: $black;
		text-align: center;

		margin: 36px 0 60px 0;

		@media (max-width: $xxxl) {
			@include text-md;

			margin: 30px 0 40px 0;
		}

		@media (max-width: $md) {
			@include text-sm;

			margin: 20px 15px 30px 15px;
		}

		&--green {
			color: $green;
		}
	}

	&__btn {
		@include slide-up(.9s);

		@media (max-width: $xxxl) {
			@include text-sm;
			font-weight: 700;

			padding: 15px 60px;
		}

		@media (max-width: $md) {
			@include text-sm-2;
			font-weight: 700;

			padding: 10px 40px !important;
		}
	}

	&__arrow {
		position: absolute;
		bottom: 100px;
		left: 50%;
		transform: translateX(-50%);

		animation: arrow 4s infinite ease-in-out;

		@media (max-width: $md) {
			bottom: 100px;
			width: 45px;
		}
	}

	@keyframes arrow {
		50% {
			transform: translateX(-50%) translateY(0);
		}
		80% {
			transform: translateX(-50%) translateY(20px);
		}
		100% {
			transform: translateX(-50%) translateY(0);
		}
	}
}
</style>