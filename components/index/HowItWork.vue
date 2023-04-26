<template>
	<div class="how-work">
		<section class="wrapper how-work__inside">
			<h2 class="how-work__title">Как это работает?</h2>

			<div class="how-work__wrapper-body">
				<section class="how-work__body">
					<div class="how-work__item">
						<img src="img/ears.png" alt="солёные уши" class="how-work__item-img" />

						<div class="how-work__item-info">
							<h3 class="how-work__item-title">Наведи камеру</h3>
							<p class="how-work__item-text">Наводим камеру телефона на объект культуры сайта www.нашсайт.ru
							</p>
							<LinkUI link="/TryIt" class="how-work__item-link">Попробуй!</LinkUI>
						</div>
					</div>

					<div class="how-work__item">
						<div class="how-work__item-info">
							<h3 class="how-work__item-title">Система все сделает за тебя</h3>
							<p class="how-work__item-text">Наша система сама сможет распознать объект в зоне видимости
								камеры</p>
						</div>

						<img src="img/ears.png" alt="солёные уши" class="how-work__item-img" />
					</div>

					<div class="how-work__item">
						<img src="img/beer.png" alt="пермский медведь"
							class="how-work__item-img how-work__item-img--beer" />

						<div class="how-work__item-info">
							<h3 class="how-work__item-title">Появляются элементы дополненной реальности</h3>
							<p class="how-work__item-text">Как только система распознала объект, она накладывает элементы
								дополненной
								реальности на реальные объекты</p>
							<LinkUI link="/TryIt" class="how-work__item-link">Попробуй!</LinkUI>
						</div>
					</div>
				</section>

				<ButtonUI link="TryIt" class="how-work__btn">Попробовать</ButtonUI>
			</div>
		</section>
	</div>
</template>

<script>
import LinkUI from '~/components/ui/LinkUI'
import ButtonUI from '~/components/ui/ButtonUI'

export default {
	components: {
		LinkUI,
		ButtonUI
	},

	data() {
		return {
			isInit: false
		}
	},

	name: 'HowItWork'
}
</script>

<style lang="scss" scoped>
.how-work {
	display: flex;
	justify-content: center;

	&__inside {}

	&__title {
		@include h2;

		margin-bottom: 75px;

		@media (max-width: $xxxl) {
			@include h3;

			margin-bottom: 60px;
		}

		@media (max-width: $md) {
			@include text-md;
			font-weight: 500;

			margin-bottom: 50px;
		}
	}

	&__wrapper-body {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	&__body {
		display: flex;
		flex-direction: column;
		align-items: center;
		grid-row-gap: 50px;

		@media (max-width: $xxl) {
			grid-row-gap: 60px;
		}

		@media (max-width: $md) {
			grid-row-gap: 80px;
		}
	}

	&__item {
		display: flex;
		align-items: center;
		grid-column-gap: 120px;

		@media (max-width: $xxl) {
			grid-column-gap: 80px;
		}

		@media (max-width: $lg) {
			grid-column-gap: 60px;
		}

		@media (max-width: $md) {
			flex-direction: column;
			text-align: center;
		}

		&:nth-child(2) {
			@media (max-width: $md) {
				flex-direction: column-reverse;
			}
		}
	}

	&__item-img {
		@media (max-width: $xxxl) {
			height: 300px;
		}

		@media (max-width: $lg) {
			height: 250px;
		}

		@media (max-width: $md) {
			height: 300px;
		}

		@media (max-width: $xs) {
			max-width: 100%;
			height: auto;
		}

		&--beer {
			@media (max-width: $xxxl) {
				height: 222px;
			}

			@media (max-width: $lg) {
				height: 180px;
			}

			@media (max-width: $xs) {
				height: auto;
			}
		}
	}

	&__item-info {
		@include text-md;
		@include slide-right(.2s);

		max-width: 440px;

		@media (max-width: $xxxl) {
			@include text-sm;

			max-width: 420px;
		}

		@media (max-width: $md) {
			@include text-sm-2;

			max-width: 315px;
			margin-top: 40px;
		}
	}

	&__item-title {
		@include h3;

		@media (max-width: $xxxl) {
			@include text-md;
			font-weight: 500;
		}

		@media (max-width: $md) {
			@include text-sm;
			font-weight: 500;
		}
	}

	&__item-text {
		margin: 30px 0;

		@media (max-width: $md) {
			margin: 20px 0;
		}
	}

	&__item-link {
		@media (max-width: $xxxl) {
			@include text-sm;
			font-weight: 700;
		}

		@media (max-width: $md) {
			@include text-sm-2;
			font-weight: 700;
		}
	}

	&__btn {
		margin-top: 120px;

		@media (max-width: $xxxl) {
			@include text-sm;
			font-weight: 700;
			padding: 15px 60px;
		}

		@media (max-width: $md) {
			margin-top: 60px;
			padding: 10px 40px;

			@include text-sm-2;
			font-weight: 700;
		}
	}
}</style>