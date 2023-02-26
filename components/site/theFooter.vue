<template>
	<footer class="footer">
		<p class="footer__back-text" v-if="$route.path == '/'">walk with me</p>
		<div class="footer__inside">
			<IconUI name="logo-full-white" class="footer__logo" />

			<div class="footer__contacts">
				<div class="footer__contacts-item">
					<div class="footer__contacts-icon">
						<IconUI name="mail" />
					</div>
					<a href="mailto:mail@yandex.ru" class="footer__contacts-link">mail@yandex.ru</a>
				</div>
				<div class="footer__contacts-item">
					<div class="footer__contacts-icon">
						<IconUI name="phone" />
					</div>
					<a href="tel:+7-999-888-77-66" class="footer__contacts-link">+7-999-888-77-66</a>
				</div>
			</div>

			<div class="footer__desc">
				<p class="footer__desc-text">Copyright © 2023 | Powered by Team</p>
			</div>
		</div>
	</footer>
</template>

<script>
import IconUI from '~/components/ui/IconUI'
import LinkUI from '~/components/ui/LinkUI'

export default {
	components: {
		IconUI,
		LinkUI
	}
}
</script>

<style lang="scss" scoped>
.footer {
	position: relative;

	padding: 50px 0 50px 0;

	background: $black;
	border-top: 1px solid $black--light;

	@media (max-width: $md) {
		padding: 30px 0 30px 0;
	}

	&__inside {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		grid-row-gap: 15px;
	}

	&__logo {
		width: 200px;
	}

	&__contacts {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;
		grid-column-gap: 30px;
		grid-row-gap: 15px;
	}

	&__contacts-item {
		display: flex;
		align-items: center;
		grid-column-gap: 5px;
	}

	&__contacts-icon {
		width: 30px;
		height: 30px;

		background: $white;
		border-radius: 50%;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	&__contacts-link {}

	&__desc {}

	&__desc-text {}

	&__back-text {
		font-weight: 700;
		font-size: 96px;
		line-height: 116px;

		color: rgba(240, 240, 240, 0.8);
		text-shadow: 0px -5px 10px rgba(240, 240, 240, 0.4);
		white-space: nowrap;
		user-select: none;

		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -60%);

		z-index: -1;

		@media (max-width: $md) {
			font-size: 64px;
			line-height: 77px;
		}

		@media (max-width: $sm) {
			font-size: 48px;
			line-height: 58px;
		}
	}
}
</style>