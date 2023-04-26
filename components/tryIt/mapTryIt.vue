<template>
	<div class="try-it">
		<client-only>
			<div class="try-it__modal" v-if="inArea">
				<h1>ТЫ В ОБЛАСТИ!</h1>
			</div>

			<yandex-map 
				class="try-it__body" 
				:coords="[coords.lat, coords.long]" 
				@map-was-initialized="initHandler"
			>
				<ymap-marker
					marker-id="0"
					marker-type="placemark"
					:coords="[coords.lat, coords.long]"
					:icon="{
						layout: 'default#image',
						imageHref: 'https://e7.pngegg.com/pngimages/416/863/png-clipart-wind-turbine-design-engineer-monochrome-graphy-man-icon-miscellaneous-photography.png',
						imageSize: [30, 30]
					}"
					cluster-name="0"
				></ymap-marker>

				<ymap-marker
					marker-id="1"
					marker-type="placemark"
					:coords="[58.11528, 56.29918]"
					:icon="{
						layout: 'default#image',
						imageHref: 'https://e7.pngegg.com/pngimages/54/528/png-clipart-computer-icons-house-home-graphics-symbol-house-angle-building.png',
						imageSize: [40, 40]
					}"
					cluster-name="1"
				></ymap-marker>

				<ymap-marker
					marker-id="2"
					marker-type="placemark"
					:coords="[58.11593, 56.30194]"
					:icon="{
						layout: 'default#image',
						imageHref: 'https://e7.pngegg.com/pngimages/54/528/png-clipart-computer-icons-house-home-graphics-symbol-house-angle-building.png',
						imageSize: [40, 40]
					}"
					cluster-name="2"
				></ymap-marker>
			</yandex-map>
		</client-only>
	</div>
</template>

<script>
import mathDestanation from '~/plugins/mathDestanation'

export default {
	name: 'mapTryIt',

	data() {
		return {
			map: null,
			coords: {
				lat: null,
				long: null
			},
			placeCoords: {
				lat: 58.11593, 
				long: 56.30194
			}
		}
	},

	mounted() {
		if (!"geolocation" in navigator) {
			console.log('Geo ERROR')
			return
		}

		navigator.geolocation.watchPosition(
			position => this.changePosition(position), 
			err => this.errorGeolocation(err),
			{
				enableHighAccuracy: true
			}
		)
	},

	methods: {
		initHandler(obj) {
			this.map = obj
		},

		changeCoords(position) {
			this.coords = {
				lat: position.latitude,
				long: position.longitude
			}
		},

		changePosition(position) {
			this.changeCoords(position.coords)
			console.log(position)
		},

		errorGeolocation(err) {
			alert(err)
		},

		fetchDest() {
			return Math.trunc(mathDestanation(
				this.coords.lat, 
				this.placeCoords.lat, 
				this.coords.long, 
				this.placeCoords.long
			) * 1000)
		}
	},

	computed: {
		inArea() {
			console.log('Расстояние в м.', this.fetchDest())

			return this.fetchDest() < 30
		},
	}
}
</script>

<style scoped lang="scss">
.try-it {
	&__body {
		width: 100%;
		height: calc(100vh - 100px);
	}

	&__modal {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: inline-block;
		z-index: 2;

		& h1 {
			color: red;
		}
	}

}
</style>