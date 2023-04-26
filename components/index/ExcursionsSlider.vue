<template>
	<div class="excurs-slider swiper">
		<div class="swiper-wrapper excurs-slider__wrapper">
			<div 
				v-for="excursion in excursions" 
				:key="excursion.id" 
				class="swiper-slide excurs-slider__slide"
			>
				<ExcursionUI class="excurs-slider__item" :excursion="excursion" />
			</div>
		</div>

		<div class="excurs-slider__navigation">
			<div class="excurs-slider__btn excurs-slider__btn--prev">
				<img src="/img/icons/white-arrow.svg" alt="arrow" class="excurs-slider__img-prev" />
			</div>
			<div class="excurs-slider__btn excurs-slider__btn--next">
				<img src="/img/icons/white-arrow.svg" alt="arrow" class="excurs-slider__img-next" />
			</div>
		</div>
	</div>
</template>

<script>
import Swiper, { Navigation } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'

import ExcursionUI from '~/components/ui/ExcursionUI' 

import {mapGetters, mapActions} from "vuex";

Swiper.use([Navigation])
export default {
	components: {
		ExcursionUI
	},

	async mounted() {
		await this.fetchExcursions()

		const excursionsSlider = new Swiper('.excurs-slider', {
			slidesPerView: 1.1,
			spaceBetween: 10,
			allowTouchMove: true,
			modules: [Navigation],
			navigation: {
				nextEl: '.excurs-slider__btn--next',
				prevEl: '.excurs-slider__btn--prev'
			},
			breakpoints: {
				768: {
					slidesPerView: 2.1
				},
				992: {
					slidesPerView: 2.5,
					spaceBetween: 30,
					allowTouchMove: false
				},
				1440: {
					slidesPerView: 3.5,
					allowTouchMove: false
				},
				1600: {
					slidesPerView: 3.5,
					spaceBetween: 50,
					allowTouchMove: false
				}
			}
		})
		
	},

	methods: {
		...mapActions({
			fetchExcursions: "excursions/fetchExcursions"
		})
	},

	computed: {
		...mapGetters({
			excursions: "excursions/getExcursions"
		})
	},

	name: 'ExcursionsSlider'
}
</script>

<style lang="scss" scoped>
.excurs-slider {
	position: relative;

	&:hover {
		.excurs-slider__btn {
			opacity: 1;
			visibility: visible;
		}
	}

	&__wrapper {}

	&__slide {
		@media (max-width: $md) {
			transition: .4s transform;
			transform: scale(0.9);
		}
	}

	&__item {
		width: 100%;
	}

	&__navigation {
		@media (max-width: $lg) {
			display: none;
		}
	}

	.swiper-button-disabled {
		opacity: 0 !important;
		visibility: hidden !important;
	}

	.swiper-slide-active {
		@media (max-width: $md) {
			transform: scale(1);
		}
	}

	&__btn {
		position: absolute;

		top: 50%;

		height: 100%;
		width: 200px;

		display: flex;
		justify-content: center;
		align-items: center;

		background: rgba(47, 47, 47, 0.8);
		backdrop-filter: blur(2.5px);
		transition: .5s all;

		opacity: 0;
		visibility: hidden;

		cursor: pointer;

		z-index: 2;

		@media (max-width: $xxxl) {
			width: 120px;
		}

		&:hover {
			background: rgba(47, 47, 47, 0.9);
		}

		&--prev {
			left: 0;
			transform: translate(-60px, -50%);

			@media (max-width: $xl) {
				transform: translate(-30px, -50%);
			}
		}

		&--next {
			right: 0;
			transform: translate(60px, -50%);

			@media (max-width: $xl) {
				transform: translate(30px, -50%);
			}
		}
	}

	&__img-prev {
		transform: rotate(180deg);
	}

	&__img-next {}

	&__btn-img {
		transform: rotate(-90deg);
	}
}
</style>