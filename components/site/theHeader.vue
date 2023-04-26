<template>
	<header class="header">
		<section class="wrapper header__inside">
			<img src="img/icons/logo-nb.svg" class="header__logo" @click="$router.push('/')"/>

			<nuxt-link to="/login" class="header__auth">
				<img src="img/icons/user.svg" alt="войти" class="header__auth-icon" />
				<p class="header__auth-text">Войти</p>
			</nuxt-link>
		</section>
	</header>
</template>

<script>
import IconUI from '~/components/ui/IconUI'

export default {
	components: {
		IconUI
	},

	name: 'theHeader'
}
</script>

<style lang="scss" scoped>
.header {
	padding: 25px 0;
	display: flex;
	justify-content: center;

	@media (max-width: $xxl) {
		padding: 30px 0;
	}

	@media (max-width: $md) {
		padding: 15px 0;
	}

	&__inside {
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media (max-width: $md) {
        	margin: 0 30px 0 30px;
    	}
	}

	&__logo {
		height: 50px;
		cursor: pointer;

		@media (max-width: $xxxl) {
			height: 40px;
		}
	}

	&__auth {
		display: flex;
		align-items: center;
		grid-column-gap: 10px;

		@include text-md;
		font-weight: 700;

		z-index: 2;

		@media (max-width: $xxxl) {
			@include text-sm;
			font-weight: 600;
		}

		&:hover {
			opacity: 0.6;
		}
	}

	&__auth-icon {
		@media (max-width: $xxxl) {
			height: 20px;
		}
	}

	&__auth-text {
		color: $black;
	}
}
</style>