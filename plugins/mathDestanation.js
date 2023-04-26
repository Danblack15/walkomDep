export default function destanation(lat1, lat2, long1, long2) {
	let r = 6371 //Радиус

	//Перевод в радианы
	lat1 = lat1 * (Math.PI / 180)//Широта 1
	lat2 = lat2 * (Math.PI / 180)// Широта 2

	long1 = long1 * (Math.PI / 180) //Долгота 1
	long2 = long2 * (Math.PI / 180) //Долгота 2

	return 2 * r * Math.asin(Math.sqrt(Math.pow(Math.sin((lat2 - lat1) / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin((long2 - long1) / 2), 2)))
}