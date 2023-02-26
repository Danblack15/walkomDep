<template>
	<div class="excursion">
		<div class="excursion__img-wrapper">
			<img 
				:src="excursion.image" 
				alt="фото экскурсии" 
				class="excursion__img" 
			/>
			<div class="excursion__hint">
				<p>Подробнее</p>
			</div>
		</div>

		<div class="excursion__info">
			<p class="excursion__title">{{ excursion.title }}</p>
			<p class="excursion__subtitle">{{ excursion.desc }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		excursion: {
			type: Object,
			default() {
				return {
					image: 'https://cdn.tripster.ru/thumbs2/53a4f5d4-08c5-11eb-ab6c-be2c449e3dcd.800x600.jpg',
					title: 'О Перми — с интересом и любовью',
					desc: 'Получить объемное впечатление о городе, познакомиться с его историей и послушать пермские легенды'
				}
			}
		}
	},
}
</script>

<style lang="scss" scoped>
.excursion {
	display: flex;
	flex-direction: column;
	
	width: 400px;
	height: 524px;

	border-radius: 10px;

	overflow: hidden;
	cursor: pointer;
	
	transition: .4s all;

	@media (max-width: $xxxl) {
		height: 474px;
	}

	@media (max-width: $lg) {
		height: 520px;
	}

	@media (max-width: $md) {
		height: 420px;
	}

	&:hover {
		background: $black--light2;

		.excursion__hint {
			opacity: 1;
		}

		@media (max-width: $md) {
			background: none;
		}
	}

	&__img-wrapper {
		position: relative;
		width: 100%;
		min-height: 302px;

		@media (max-width: $xxxl) {
			min-height: 264px;
		}

		@media (max-width: $lg) {
			min-height: 303px;
		}

		@media (max-width: $md) {
			min-height: 230px;
		}
	}

	&__img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	&__hint {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		display: flex;
		justify-content: center;
		align-items: center;

		background: rgba(47, 47, 47, 0.8);
		backdrop-filter: blur(2.5px);

		@include text-md;
		font-weight: 600;
		opacity: 0;

		transition: .4s all;

		@media (max-width: $md) {
			display: none;
		}
	}

	&__info {
		height: 100%;
		padding: 15px;

		border-width: 0px 1px 1px 1px;
		border-style: solid;
		border-color: $black--light2;
		border-radius: 0px 0px 10px 10px;
	}

	&__title {
		@include text-md;
		font-weight: 600;
		margin-bottom: 10px;

		@media (max-width: $xxxl) {
			@include text-sm;
			font-weight: 600;
		}

		@media (max-width: $md) {
			@include text-sm-2;
			font-weight: 600;

			margin-bottom: 5px;
		}
	}

	&__subtitle {
		@include text-sm;
		font-weight: 500;

		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
						line-clamp: 3; 
		-webkit-box-orient: vertical;

		@media (max-width: $xxxl) {
			@include text-sm-2;
			font-weight: 600;
		}

		@media (max-width: $md) {
			font-size: 15px;
			line-height: 150%;
			font-weight: 500;
		}
	}
}
</style>