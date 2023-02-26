<template>
	<div class="loading">
		<section class="loading__text">
			<p class="loading__text-item">walk with me</p>
			<p class="loading__text-item">walk with me</p>
			<p class="loading__text-item">walk with me</p>
		</section>
	</div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.loading {
	background: $black;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	grid-row-gap: 100px;

	&__text {
		display: flex;
		flex-direction: column;
		align-items: center;
		grid-row-gap: 30px;
	}

	&__text-item {
		font-weight: 700;
		font-size: 128px;
		line-height: 154px;
		animation-iteration-count: infinite;
		animation-duration: 3s;

		@media (max-width: $xxl) {
			font-size: 96px;
			line-height: 100%;
		}

		@media (max-width: $md) {
			font-size: 52px;
		}

		@media (max-width: $xs) {
			font-size: 45px;
		}

		&:nth-child(1) {
			opacity: 0;
			animation-name: load-item-1;
		}

		&:nth-child(2) {
			animation-name: load-item-2;
			animation-delay: .2s;
			opacity: 0;
		}

		&:nth-child(3) {
			animation-name: load-item-3;
			animation-delay: .4s;
			opacity: 0;
		}

		@keyframes load-item-1 {
			0% {
				opacity: 0;
			}
			50% {
				opacity: 1;
			}
			80% {
				opacity: 0;
			}
			100% {
				opacity: 0;
			}
		}

		@keyframes load-item-2 {
			0% {
				opacity: 0;
			}
			60% {
				opacity: 1;
			}
			80% {
				opacity: 0;
			}
			100% {
				opacity: 0;
			}
		}

		@keyframes load-item-3 {
			0% {
				opacity: 0;
			}
			50% {
				opacity: 1;
			}
			90% {
				opacity: 0;
			}
			100% {
				opacity: 0;
			}
		}
	}
}
</style>