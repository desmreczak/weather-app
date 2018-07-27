import {observable, action, computed} from 'mobx';
import * as React from 'react';

class TestStore {

	today: Date = new Date();
	//fresh data: http://api.openweathermap.org/data/2.5/forecast?id=4945952&APPID=ad8bfcd4059c773054c2317bfa15b873
	forecast: any = JSON.parse('{"cod":"200","message":0.0451,"cnt":40,"list":[{"dt":1532552400,"main":{"temp":296.1,"temp_min":295.531,"temp_max":296.1,"pressure":1020.31,"sea_level":1029.23,"grnd_level":1020.31,"humidity":99,"temp_kf":0.57},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":3.91,"deg":178.501},"rain":{"3h":1.95},"sys":{"pod":"d"},"dt_txt":"2018-07-25 21:00:00"},{"dt":1532563200,"main":{"temp":296.07,"temp_min":295.686,"temp_max":296.07,"pressure":1019.01,"sea_level":1027.9,"grnd_level":1019.01,"humidity":98,"temp_kf":0.38},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":92},"wind":{"speed":3.42,"deg":170.5},"rain":{"3h":1.01},"sys":{"pod":"n"},"dt_txt":"2018-07-26 00:00:00"},{"dt":1532574000,"main":{"temp":295.52,"temp_min":295.329,"temp_max":295.52,"pressure":1016.88,"sea_level":1025.78,"grnd_level":1016.88,"humidity":99,"temp_kf":0.19},"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10n"}],"clouds":{"all":92},"wind":{"speed":3.02,"deg":155.5},"rain":{"3h":3.53},"sys":{"pod":"n"},"dt_txt":"2018-07-26 03:00:00"},{"dt":1532584800,"main":{"temp":294.965,"temp_min":294.965,"temp_max":294.965,"pressure":1012.77,"sea_level":1021.74,"grnd_level":1012.77,"humidity":97,"temp_kf":0},"weather":[{"id":502,"main":"Rain","description":"heavy intensity rain","icon":"10n"}],"clouds":{"all":88},"wind":{"speed":3.21,"deg":174.504},"rain":{"3h":13.07},"sys":{"pod":"n"},"dt_txt":"2018-07-26 06:00:00"},{"dt":1532595600,"main":{"temp":294.981,"temp_min":294.981,"temp_max":294.981,"pressure":1013.13,"sea_level":1021.99,"grnd_level":1013.13,"humidity":97,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":80},"wind":{"speed":3.36,"deg":249.003},"rain":{"3h":0.785},"sys":{"pod":"n"},"dt_txt":"2018-07-26 09:00:00"},{"dt":1532606400,"main":{"temp":296.084,"temp_min":296.084,"temp_max":296.084,"pressure":1014.89,"sea_level":1023.73,"grnd_level":1014.89,"humidity":92,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":80},"wind":{"speed":2.31,"deg":229.002},"rain":{"3h":0.024999999999999},"sys":{"pod":"d"},"dt_txt":"2018-07-26 12:00:00"},{"dt":1532617200,"main":{"temp":297.18,"temp_min":297.18,"temp_max":297.18,"pressure":1015.15,"sea_level":1024.04,"grnd_level":1015.15,"humidity":90,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":80},"wind":{"speed":2.76,"deg":215.501},"rain":{"3h":0.1},"sys":{"pod":"d"},"dt_txt":"2018-07-26 15:00:00"},{"dt":1532628000,"main":{"temp":299.543,"temp_min":299.543,"temp_max":299.543,"pressure":1015.02,"sea_level":1023.93,"grnd_level":1015.02,"humidity":81,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":24},"wind":{"speed":2.78,"deg":227.001},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-26 18:00:00"},{"dt":1532638800,"main":{"temp":299.971,"temp_min":299.971,"temp_max":299.971,"pressure":1015.4,"sea_level":1024.4,"grnd_level":1015.4,"humidity":79,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":92},"wind":{"speed":2.81,"deg":241.001},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-26 21:00:00"},{"dt":1532649600,"main":{"temp":297.993,"temp_min":297.993,"temp_max":297.993,"pressure":1016.5,"sea_level":1025.49,"grnd_level":1016.5,"humidity":84,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":20},"wind":{"speed":2.06,"deg":237.5},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-27 00:00:00"},{"dt":1532660400,"main":{"temp":295.996,"temp_min":295.996,"temp_max":295.996,"pressure":1018.01,"sea_level":1026.98,"grnd_level":1018.01,"humidity":92,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":36},"wind":{"speed":2.02,"deg":213.004},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-27 03:00:00"},{"dt":1532671200,"main":{"temp":295.117,"temp_min":295.117,"temp_max":295.117,"pressure":1018.1,"sea_level":1027.05,"grnd_level":1018.1,"humidity":97,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":20},"wind":{"speed":1.81,"deg":214.003},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-27 06:00:00"},{"dt":1532682000,"main":{"temp":294.807,"temp_min":294.807,"temp_max":294.807,"pressure":1018.37,"sea_level":1027.31,"grnd_level":1018.37,"humidity":98,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":64},"wind":{"speed":1.56,"deg":215.004},"rain":{"3h":0.02},"sys":{"pod":"n"},"dt_txt":"2018-07-27 09:00:00"},{"dt":1532692800,"main":{"temp":296.47,"temp_min":296.47,"temp_max":296.47,"pressure":1018.82,"sea_level":1027.72,"grnd_level":1018.82,"humidity":92,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":76},"wind":{"speed":1.51,"deg":195.505},"rain":{"3h":0.029999999999998},"sys":{"pod":"d"},"dt_txt":"2018-07-27 12:00:00"},{"dt":1532703600,"main":{"temp":299.968,"temp_min":299.968,"temp_max":299.968,"pressure":1018.74,"sea_level":1027.62,"grnd_level":1018.74,"humidity":80,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":44},"wind":{"speed":1.97,"deg":179.004},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-27 15:00:00"},{"dt":1532714400,"main":{"temp":300.604,"temp_min":300.604,"temp_max":300.604,"pressure":1017.54,"sea_level":1026.45,"grnd_level":1017.54,"humidity":72,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":64},"wind":{"speed":1.98,"deg":215.501},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-27 18:00:00"},{"dt":1532725200,"main":{"temp":301.788,"temp_min":301.788,"temp_max":301.788,"pressure":1016.29,"sea_level":1025.29,"grnd_level":1016.29,"humidity":63,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":24},"wind":{"speed":2.26,"deg":207.504},"rain":{"3h":0.035},"sys":{"pod":"d"},"dt_txt":"2018-07-27 21:00:00"},{"dt":1532736000,"main":{"temp":297.154,"temp_min":297.154,"temp_max":297.154,"pressure":1016.97,"sea_level":1025.96,"grnd_level":1016.97,"humidity":81,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":36},"wind":{"speed":1.87,"deg":207.006},"rain":{"3h":0.39},"sys":{"pod":"n"},"dt_txt":"2018-07-28 00:00:00"},{"dt":1532746800,"main":{"temp":295.505,"temp_min":295.505,"temp_max":295.505,"pressure":1017.41,"sea_level":1026.33,"grnd_level":1017.41,"humidity":90,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":12},"wind":{"speed":1.89,"deg":205.003},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-28 03:00:00"},{"dt":1532757600,"main":{"temp":294.688,"temp_min":294.688,"temp_max":294.688,"pressure":1017.7,"sea_level":1026.7,"grnd_level":1017.7,"humidity":96,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":36},"wind":{"speed":1.96,"deg":241.501},"rain":{"3h":0.010000000000002},"sys":{"pod":"n"},"dt_txt":"2018-07-28 06:00:00"},{"dt":1532768400,"main":{"temp":293.764,"temp_min":293.764,"temp_max":293.764,"pressure":1018.37,"sea_level":1027.35,"grnd_level":1018.37,"humidity":97,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02n"}],"clouds":{"all":8},"wind":{"speed":1.47,"deg":244},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-28 09:00:00"},{"dt":1532779200,"main":{"temp":296.123,"temp_min":296.123,"temp_max":296.123,"pressure":1019.44,"sea_level":1028.25,"grnd_level":1019.44,"humidity":83,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":12},"wind":{"speed":1.48,"deg":300.502},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-28 12:00:00"},{"dt":1532790000,"main":{"temp":299.633,"temp_min":299.633,"temp_max":299.633,"pressure":1019.76,"sea_level":1028.56,"grnd_level":1019.76,"humidity":65,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":36},"wind":{"speed":1.31,"deg":319.002},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-28 15:00:00"},{"dt":1532800800,"main":{"temp":301.446,"temp_min":301.446,"temp_max":301.446,"pressure":1018.64,"sea_level":1027.74,"grnd_level":1018.64,"humidity":58,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":48},"wind":{"speed":1.62,"deg":204.01},"rain":{"3h":0.024999999999999},"sys":{"pod":"d"},"dt_txt":"2018-07-28 18:00:00"},{"dt":1532811600,"main":{"temp":301.296,"temp_min":301.296,"temp_max":301.296,"pressure":1018.39,"sea_level":1027.36,"grnd_level":1018.39,"humidity":60,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":32},"wind":{"speed":2.12,"deg":209.001},"rain":{"3h":0.46},"sys":{"pod":"d"},"dt_txt":"2018-07-28 21:00:00"},{"dt":1532822400,"main":{"temp":296.586,"temp_min":296.586,"temp_max":296.586,"pressure":1018.88,"sea_level":1027.7,"grnd_level":1018.88,"humidity":73,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":0},"wind":{"speed":1.48,"deg":218.003},"rain":{"3h":0.030000000000001},"sys":{"pod":"n"},"dt_txt":"2018-07-29 00:00:00"},{"dt":1532833200,"main":{"temp":295.037,"temp_min":295.037,"temp_max":295.037,"pressure":1020.02,"sea_level":1028.96,"grnd_level":1020.02,"humidity":79,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":36},"wind":{"speed":1.81,"deg":224.002},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-29 03:00:00"},{"dt":1532844000,"main":{"temp":293.238,"temp_min":293.238,"temp_max":293.238,"pressure":1020.23,"sea_level":1029.27,"grnd_level":1020.23,"humidity":84,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.41,"deg":273.002},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-29 06:00:00"},{"dt":1532854800,"main":{"temp":292.671,"temp_min":292.671,"temp_max":292.671,"pressure":1021.33,"sea_level":1030.28,"grnd_level":1021.33,"humidity":80,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":12},"wind":{"speed":2.06,"deg":314.507},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-29 09:00:00"},{"dt":1532865600,"main":{"temp":294.226,"temp_min":294.226,"temp_max":294.226,"pressure":1022.34,"sea_level":1031.3,"grnd_level":1022.34,"humidity":71,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.86,"deg":318.003},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-29 12:00:00"},{"dt":1532876400,"main":{"temp":298.179,"temp_min":298.179,"temp_max":298.179,"pressure":1022.6,"sea_level":1031.51,"grnd_level":1022.6,"humidity":58,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.61,"deg":294.012},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-29 15:00:00"},{"dt":1532887200,"main":{"temp":300.523,"temp_min":300.523,"temp_max":300.523,"pressure":1021.71,"sea_level":1030.57,"grnd_level":1021.71,"humidity":50,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":2.12,"deg":274.001},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-29 18:00:00"},{"dt":1532898000,"main":{"temp":300.754,"temp_min":300.754,"temp_max":300.754,"pressure":1020.98,"sea_level":1029.83,"grnd_level":1020.98,"humidity":48,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.93,"deg":292},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-29 21:00:00"},{"dt":1532908800,"main":{"temp":297.344,"temp_min":297.344,"temp_max":297.344,"pressure":1022,"sea_level":1030.94,"grnd_level":1022,"humidity":55,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02n"}],"clouds":{"all":8},"wind":{"speed":1.51,"deg":292.002},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-30 00:00:00"},{"dt":1532919600,"main":{"temp":293.625,"temp_min":293.625,"temp_max":293.625,"pressure":1023.2,"sea_level":1032.22,"grnd_level":1023.2,"humidity":71,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.3,"deg":278.509},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-30 03:00:00"},{"dt":1532930400,"main":{"temp":291.875,"temp_min":291.875,"temp_max":291.875,"pressure":1023.8,"sea_level":1032.78,"grnd_level":1023.8,"humidity":76,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.71,"deg":294.502},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-30 06:00:00"},{"dt":1532941200,"main":{"temp":290.446,"temp_min":290.446,"temp_max":290.446,"pressure":1024.2,"sea_level":1033.31,"grnd_level":1024.2,"humidity":85,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.01,"deg":312.502},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-30 09:00:00"},{"dt":1532952000,"main":{"temp":295.72,"temp_min":295.72,"temp_max":295.72,"pressure":1025.39,"sea_level":1034.31,"grnd_level":1025.39,"humidity":65,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.46,"deg":295.506},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-30 12:00:00"},{"dt":1532962800,"main":{"temp":300.124,"temp_min":300.124,"temp_max":300.124,"pressure":1025.12,"sea_level":1034.07,"grnd_level":1025.12,"humidity":53,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":44},"wind":{"speed":1.47,"deg":303.002},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-30 15:00:00"},{"dt":1532973600,"main":{"temp":302.279,"temp_min":302.279,"temp_max":302.279,"pressure":1024.36,"sea_level":1033.3,"grnd_level":1024.36,"humidity":46,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":1.46,"deg":225.002},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-30 18:00:00"}],"city":{"id":4945952,"name":"Norwood","coord":{"lat":42.1945,"lon":-71.1996},"country":"US"}}');
	//icons location: https://www.iconfinder.com/iconsets/the-weather-is-nice-today
	weatherIcons: string[] = ["https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-512.png", "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_6-512.png", "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_2-512.png"];

	@observable day: any;
	@observable month: number;
	@observable year: number;

	constructor() {
		this.day = this.today.getDate();
		this.month = this.today.getMonth() + 1;
		this.year = this.today.getFullYear();
	}

	@computed get returnDate(): string {
		return formatDate(this.month, this.day, this.year);
	};

	@computed get returnDay(): number {
		return this.day;
	};

	@computed get returnMonth(): number {
		return this.month;
	};

	@computed get returnYear(): number {
		return this.year;
	};

	@action changeDay = (day: number): void => {
		this.day = day;
	};

	@action changeMonth = (month: number): void => {
		this.month = month;
	};

	@action changeYear = (year: number): void => {
		this.year = year;
	};

	ForGivenHour(info: string, hour: number): string {

		let parsedDate: number[];
		let parsedHour: number;
		let forecastList: any[] = this.forecast.list;
		let i: number;

		for(i = 0; i < forecastList.length; i++) {

			parsedDate = parseDate(forecastList[i].dt_txt);
			parsedHour = parseHour(forecastList[i].dt_txt);

			if(parseInt(this.day) === parsedDate[0] && this.month === parsedDate[1] && this.year === parsedDate[2] && hour === parsedHour) {
				
				switch(info) {

					case "temp":
					return KelvinToFahrenheit(forecastList[i].main.temp) + "°F";
					break;
					case "weather":
					return getIconURL(forecastList[i].weather[0].main, this.weatherIcons);
					break;
					case "detailedWeather":
					return forecastList[i].weather[0].description;
					break;
					case "rainChance":
					return forecastList[i].wind.speed;
					break;
					case "windSpeed":
					return forecastList[i].wind.speed;
					break;

					default:
					return "";
				}
			}
		}
		return "";
	}
} 

function formatDate (month: number, day: number, year: number): string {
	return formatMonth(month) + " " + formatDay(day) + ", " + year;
}

function getTodaysDate(): string {
	let today: any = new Date();
	return formatMonth(today.getMonth()) + " " + formatDay(today.getDate()) + ", " + today.getFullYear();
}

function formatMonth(month: number): string {
	let months: string[] = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return months[month];
}

function formatDay(day: number): string {
	let days: string[] = ["", "st", "nd", "rd", "rth", "th"];

	let tempArray: string[] = ("" + day).split("")
	let lastDigitOfDay: number = parseInt(tempArray[tempArray.length - 1])

	if((lastDigitOfDay < 5 && lastDigitOfDay > 0) && (day < 10 || day > 20)) {
		return "" + day + days[lastDigitOfDay];
	} else {
		return "" + day + days[5];
	}
}

function parseHour(date: string): number {
	let parsedHour: string[] = date.split(/[\s:]+/);
	return parseInt(parsedHour[1]);
}

function parseDate(date: string): number[] {
	let temp: string[] = date.split(/[\s-]+/);
	let parsedDate: number[] = [parseInt(temp[2]), parseInt(temp[1]), parseInt(temp[0])];
	return parsedDate;
}

function KelvinToFahrenheit (kelvin: number): number {

	let value: number = parseFloat((1.80 * (kelvin - 273.15) + 32).toFixed(3));

	if (value >= 0) {
		return Math.round(value);
	} else {
		return (value % 0.5 === 0) ? Math.floor(value) : Math.round(value);
	}
}

function getIconURL(weather: string, weatherIcons: string[]): string {
	switch(weather) {
		case "Clear":
		return weatherIcons[0];
		case "Clouds":
		return weatherIcons[1];
		case "Rain":
		return weatherIcons[2];
		default:
		return "";
	}
}

const store = new TestStore();
export default store;
export {formatDate, formatMonth, formatDay, parseHour, parseDate, KelvinToFahrenheit, getIconURL};