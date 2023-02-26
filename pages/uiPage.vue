<template>
	<div class="ui-page">
		<section class="wrapper ui-page__item">
			<h1 class="ui-page__title">Кнопки</h1>
			<div class="ui-page__kit">
				<ButtonUI link="/feqwf">Внутренняя ссылка</ButtonUI>
				<ButtonUI 
					another 
					link="https://ya.ru/"
				>Внешняя ссылка</ButtonUI>
				<ButtonUI disabled>Неактивная</ButtonUI>
			</div>
		</section>

		<section class="wrapper ui-page__item">
			<h1 class="ui-page__title">Ссылки</h1>
			<div class="ui-page__kit">
				<LinkUI link="https://dzen.ru/">Попробуй!</LinkUI>
				<a href="#">Обычная ссылка</a>
			</div>
		</section>

		<section class="wrapper ui-page__item">
			<h1 class="ui-page__title">Экскурсии</h1>
			<div class="ui-page__kit">
				<ExcursionUI />
			</div>
		</section>

		<section class="wrapper ui-page__item">
			<h1 class="ui-page__title">Иконки</h1>
			<div class="ui-page__kit ui-page__kit-icons">
				<IconUI name="arrow" alt="стрелка"/>
				<IconUI name="mail" alt="почта"/>
				<IconUI name="phone" alt="телефон"/>
				<IconUI name="user" alt="аккаунт"/>
			</div>
		</section>

		<section class="wrapper ui-page__item">
			<h1 class="ui-page__title">Шрифты</h1>
			<div class="ui-page__kit ui-page__kit-fonts">
				<h1 class="ui-page__h1">Заголовок H1</h1>
				<h2 class="ui-page__h2">Заголовок H2</h2>
				<h3 class="ui-page__h3">Заголовок H3</h3>

				<p class="ui-page__text-bg">Большой текст</p>
				<p class="ui-page__text-md">Средний текст</p>
				<p class="ui-page__text-sm">Маленький текст</p>
				<p class="ui-page__text-lt">Очень маленький текст</p>
			</div>
		</section>
	</div>
</template>

<script>
import ButtonUI from '~/components/ui/ButtonUI'
import LinkUI from '~/components/ui/LinkUI'
import ExcursionUI from '~/components/ui/ExcursionUI'
import IconUI from '~/components/ui/IconUI'

export default {
	components: {
		ButtonUI,
		LinkUI,
		ExcursionUI,
		IconUI
	},

	name: 'uiPage'
}
</script>

<style lang="scss">
.ui-page {
	&__title {
		@include h1;
		margin-bottom: 40px;
		text-decoration: underline;
	}

	&__item {
		margin-top: 100px;
		margin-bottom: 100px;
	}

	&__kit {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		grid-row-gap: 40px;
	}

	&__kit-icons {
		flex-direction: row;
		grid-column-gap: 50px;
		background: $white;
		padding: 30px;
		align-items: center;
	}

	&__kit-fonts {
		flex-direction: column;
		grid-column-gap: 50px;
	}

	//fonts
	&__h1 {@include h1}
	&__h2 {@include h2}
	&__h3 {@include h3}

	&__text-bg {@include text-bg}
	&__text-md {@include text-md}
	&__text-sm {@include text-sm}
	&__text-lt {@include text-lt}
}
</style>