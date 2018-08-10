"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const dispatcher_1 = __importDefault(require("../dispatcher/dispatcher"));
class TestStore {
    constructor() {
        this.today = new Date();
        //fresh data: http://api.openweathermap.org/data/2.5/forecast?id=4945952&APPID=ad8bfcd4059c773054c2317bfa15b873
        this.forecast = JSON.parse('{"cod":"200","message":0.0047,"cnt":40,"list":[{"dt":1533157200,"main":{"temp":299.53,"temp_min":299.062,"temp_max":299.53,"pressure":1021.53,"sea_level":1030.32,"grnd_level":1021.53,"humidity":79,"temp_kf":0.47},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":3.41,"deg":180.001},"rain":{"3h":0.18},"sys":{"pod":"d"},"dt_txt":"2018-08-01 21:00:00"},{"dt":1533168000,"main":{"temp":299.09,"temp_min":298.742,"temp_max":299.09,"pressure":1020.89,"sea_level":1029.78,"grnd_level":1020.89,"humidity":84,"temp_kf":0.35},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":100},"wind":{"speed":3.43,"deg":201.001},"rain":{"3h":0.0875},"sys":{"pod":"n"},"dt_txt":"2018-08-02 00:00:00"},{"dt":1533178800,"main":{"temp":298.5,"temp_min":298.264,"temp_max":298.5,"pressure":1021.82,"sea_level":1030.66,"grnd_level":1021.82,"humidity":86,"temp_kf":0.23},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":88},"wind":{"speed":3.56,"deg":209.505},"rain":{"3h":0.1075},"sys":{"pod":"n"},"dt_txt":"2018-08-02 03:00:00"},{"dt":1533189600,"main":{"temp":298.33,"temp_min":298.215,"temp_max":298.33,"pressure":1021.7,"sea_level":1030.66,"grnd_level":1021.7,"humidity":87,"temp_kf":0.12},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":76},"wind":{"speed":3.66,"deg":218.502},"rain":{"3h":0.145},"sys":{"pod":"n"},"dt_txt":"2018-08-02 06:00:00"},{"dt":1533200400,"main":{"temp":298.335,"temp_min":298.335,"temp_max":298.335,"pressure":1021.72,"sea_level":1030.69,"grnd_level":1021.72,"humidity":85,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":64},"wind":{"speed":3.97,"deg":224.001},"rain":{"3h":0.055},"sys":{"pod":"n"},"dt_txt":"2018-08-02 09:00:00"},{"dt":1533211200,"main":{"temp":299.75,"temp_min":299.75,"temp_max":299.75,"pressure":1022.92,"sea_level":1031.79,"grnd_level":1022.92,"humidity":77,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":24},"wind":{"speed":3.46,"deg":240.501},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-08-02 12:00:00"},{"dt":1533222000,"main":{"temp":302.77,"temp_min":302.77,"temp_max":302.77,"pressure":1022.8,"sea_level":1031.77,"grnd_level":1022.8,"humidity":66,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":24},"wind":{"speed":3.32,"deg":227.504},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-08-02 15:00:00"},{"dt":1533232800,"main":{"temp":303.857,"temp_min":303.857,"temp_max":303.857,"pressure":1022.17,"sea_level":1031.19,"grnd_level":1022.17,"humidity":62,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":36},"wind":{"speed":4.05,"deg":223.001},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-08-02 18:00:00"},{"dt":1533243600,"main":{"temp":303.074,"temp_min":303.074,"temp_max":303.074,"pressure":1022.37,"sea_level":1031.33,"grnd_level":1022.37,"humidity":61,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":44},"wind":{"speed":3.72,"deg":228.503},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-08-02 21:00:00"},{"dt":1533254400,"main":{"temp":301.096,"temp_min":301.096,"temp_max":301.096,"pressure":1022.9,"sea_level":1031.78,"grnd_level":1022.9,"humidity":63,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.5,"deg":220},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-08-03 00:00:00"},{"dt":1533265200,"main":{"temp":299.261,"temp_min":299.261,"temp_max":299.261,"pressure":1023.89,"sea_level":1032.86,"grnd_level":1023.89,"humidity":73,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":24},"wind":{"speed":3.33,"deg":215.5},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-08-03 03:00:00"},{"dt":1533276000,"main":{"temp":298.456,"temp_min":298.456,"temp_max":298.456,"pressure":1023.76,"sea_level":1032.66,"grnd_level":1023.76,"humidity":82,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":88},"wind":{"speed":3.21,"deg":209.001},"rain":{"3h":0.125},"sys":{"pod":"n"},"dt_txt":"2018-08-03 06:00:00"},{"dt":1533286800,"main":{"temp":298.066,"temp_min":298.066,"temp_max":298.066,"pressure":1023.42,"sea_level":1032.3,"grnd_level":1023.42,"humidity":85,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":76},"wind":{"speed":3.26,"deg":213.504},"rain":{"3h":0.17},"sys":{"pod":"n"},"dt_txt":"2018-08-03 09:00:00"},{"dt":1533297600,"main":{"temp":299.164,"temp_min":299.164,"temp_max":299.164,"pressure":1024.16,"sea_level":1033.14,"grnd_level":1024.16,"humidity":81,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":3.21,"deg":221.504},"rain":{"3h":0.045},"sys":{"pod":"d"},"dt_txt":"2018-08-03 12:00:00"},{"dt":1533308400,"main":{"temp":301.334,"temp_min":301.334,"temp_max":301.334,"pressure":1024.42,"sea_level":1033.31,"grnd_level":1024.42,"humidity":72,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":100},"wind":{"speed":3.12,"deg":215.501},"rain":{"3h":0.025},"sys":{"pod":"d"},"dt_txt":"2018-08-03 15:00:00"},{"dt":1533319200,"main":{"temp":302.844,"temp_min":302.844,"temp_max":302.844,"pressure":1023.85,"sea_level":1032.87,"grnd_level":1023.85,"humidity":65,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":48},"wind":{"speed":3.82,"deg":214.001},"rain":{"3h":0.005},"sys":{"pod":"d"},"dt_txt":"2018-08-03 18:00:00"},{"dt":1533330000,"main":{"temp":302.115,"temp_min":302.115,"temp_max":302.115,"pressure":1023.8,"sea_level":1032.58,"grnd_level":1023.8,"humidity":65,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":64},"wind":{"speed":4.1,"deg":214.004},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-08-03 21:00:00"},{"dt":1533340800,"main":{"temp":300.209,"temp_min":300.209,"temp_max":300.209,"pressure":1023.83,"sea_level":1032.8,"grnd_level":1023.83,"humidity":69,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":44},"wind":{"speed":3.91,"deg":212.006},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-08-04 00:00:00"},{"dt":1533351600,"main":{"temp":298.757,"temp_min":298.757,"temp_max":298.757,"pressure":1023.85,"sea_level":1032.84,"grnd_level":1023.85,"humidity":74,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":68},"wind":{"speed":3.77,"deg":210.501},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-08-04 03:00:00"},{"dt":1533362400,"main":{"temp":298.111,"temp_min":298.111,"temp_max":298.111,"pressure":1023.3,"sea_level":1032.27,"grnd_level":1023.3,"humidity":80,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":92},"wind":{"speed":3.67,"deg":206.505},"rain":{"3h":0.095},"sys":{"pod":"n"},"dt_txt":"2018-08-04 06:00:00"},{"dt":1533373200,"main":{"temp":297.188,"temp_min":297.188,"temp_max":297.188,"pressure":1022.06,"sea_level":1031.07,"grnd_level":1022.06,"humidity":88,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":92},"wind":{"speed":3.17,"deg":200.006},"rain":{"3h":0.47},"sys":{"pod":"n"},"dt_txt":"2018-08-04 09:00:00"},{"dt":1533384000,"main":{"temp":296.318,"temp_min":296.318,"temp_max":296.318,"pressure":1021.71,"sea_level":1030.58,"grnd_level":1021.71,"humidity":90,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":4.07,"deg":186.002},"rain":{"3h":0.94},"sys":{"pod":"d"},"dt_txt":"2018-08-04 12:00:00"},{"dt":1533394800,"main":{"temp":296.31,"temp_min":296.31,"temp_max":296.31,"pressure":1021.42,"sea_level":1030.43,"grnd_level":1021.42,"humidity":99,"temp_kf":0},"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":2.96,"deg":205.501},"rain":{"3h":3.51},"sys":{"pod":"d"},"dt_txt":"2018-08-04 15:00:00"},{"dt":1533405600,"main":{"temp":297.844,"temp_min":297.844,"temp_max":297.844,"pressure":1021.11,"sea_level":1029.95,"grnd_level":1021.11,"humidity":91,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":80},"wind":{"speed":1.53,"deg":259.502},"rain":{"3h":0.19},"sys":{"pod":"d"},"dt_txt":"2018-08-04 18:00:00"},{"dt":1533416400,"main":{"temp":300.049,"temp_min":300.049,"temp_max":300.049,"pressure":1021.18,"sea_level":1030.12,"grnd_level":1021.18,"humidity":77,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":56},"wind":{"speed":2.12,"deg":309.502},"rain":{"3h":0.12},"sys":{"pod":"d"},"dt_txt":"2018-08-04 21:00:00"},{"dt":1533427200,"main":{"temp":297.347,"temp_min":297.347,"temp_max":297.347,"pressure":1022.57,"sea_level":1031.42,"grnd_level":1022.57,"humidity":76,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.62,"deg":320.5},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-08-05 00:00:00"},{"dt":1533438000,"main":{"temp":294.155,"temp_min":294.155,"temp_max":294.155,"pressure":1024.05,"sea_level":1033.07,"grnd_level":1024.05,"humidity":88,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":0.96,"deg":254.505},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-08-05 03:00:00"},{"dt":1533448800,"main":{"temp":293.276,"temp_min":293.276,"temp_max":293.276,"pressure":1024.56,"sea_level":1033.47,"grnd_level":1024.56,"humidity":88,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2,"deg":262.502},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-08-05 06:00:00"},{"dt":1533459600,"main":{"temp":291.879,"temp_min":291.879,"temp_max":291.879,"pressure":1025.08,"sea_level":1034.04,"grnd_level":1025.08,"humidity":91,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.02,"deg":273.002},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-08-05 09:00:00"},{"dt":1533470400,"main":{"temp":297.122,"temp_min":297.122,"temp_max":297.122,"pressure":1026.05,"sea_level":1035.08,"grnd_level":1026.05,"humidity":72,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.47,"deg":265.5},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-08-05 12:00:00"},{"dt":1533481200,"main":{"temp":302.563,"temp_min":302.563,"temp_max":302.563,"pressure":1026.12,"sea_level":1035.05,"grnd_level":1026.12,"humidity":57,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.52,"deg":272.5},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-08-05 15:00:00"},{"dt":1533492000,"main":{"temp":304.43,"temp_min":304.43,"temp_max":304.43,"pressure":1024.54,"sea_level":1033.57,"grnd_level":1024.54,"humidity":50,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":24},"wind":{"speed":1.63,"deg":239.501},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-08-05 18:00:00"},{"dt":1533502800,"main":{"temp":304.229,"temp_min":304.229,"temp_max":304.229,"pressure":1023.56,"sea_level":1032.52,"grnd_level":1023.56,"humidity":47,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":64},"wind":{"speed":2.07,"deg":248.502},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-08-05 21:00:00"},{"dt":1533513600,"main":{"temp":301.702,"temp_min":301.702,"temp_max":301.702,"pressure":1023.84,"sea_level":1032.76,"grnd_level":1023.84,"humidity":54,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":80},"wind":{"speed":2.31,"deg":253},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-08-06 00:00:00"},{"dt":1533524400,"main":{"temp":298.933,"temp_min":298.933,"temp_max":298.933,"pressure":1024.52,"sea_level":1033.46,"grnd_level":1024.52,"humidity":65,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":20},"wind":{"speed":1.86,"deg":236.5},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-08-06 03:00:00"},{"dt":1533535200,"main":{"temp":297.123,"temp_min":297.123,"temp_max":297.123,"pressure":1024.01,"sea_level":1033.02,"grnd_level":1024.01,"humidity":74,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":68},"wind":{"speed":1.61,"deg":227},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-08-06 06:00:00"},{"dt":1533546000,"main":{"temp":295.542,"temp_min":295.542,"temp_max":295.542,"pressure":1023.43,"sea_level":1032.38,"grnd_level":1023.43,"humidity":82,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":48},"wind":{"speed":1.07,"deg":221.001},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-08-06 09:00:00"},{"dt":1533556800,"main":{"temp":298.788,"temp_min":298.788,"temp_max":298.788,"pressure":1023.63,"sea_level":1032.54,"grnd_level":1023.63,"humidity":68,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":64},"wind":{"speed":1.48,"deg":237.005},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-08-06 12:00:00"},{"dt":1533567600,"main":{"temp":303.346,"temp_min":303.346,"temp_max":303.346,"pressure":1023.19,"sea_level":1032,"grnd_level":1023.19,"humidity":52,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":68},"wind":{"speed":1.52,"deg":268},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-08-06 15:00:00"},{"dt":1533578400,"main":{"temp":304.465,"temp_min":304.465,"temp_max":304.465,"pressure":1021.76,"sea_level":1030.66,"grnd_level":1021.76,"humidity":47,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":64},"wind":{"speed":1.5,"deg":261},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-08-06 18:00:00"}],"city":{"id":4945952,"name":"Norwood","coord":{"lat":42.1945,"lon":-71.1996},"country":"US"}}');
        //icons location: https://www.iconfinder.com/iconsets/the-weather-is-nice-today
        this.weatherIcons = ["https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-512.png", "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_6-512.png", "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_2-512.png"];
        this.changeDay = (day) => {
            this.day = day;
        };
        this.changeMonth = (month) => {
            this.month = month;
        };
        this.changeYear = (year) => {
            this.year = year;
        };
        this.day = this.today.getDate();
        this.month = this.today.getMonth() + 1;
        this.year = this.today.getFullYear();
    }
    get returnDate() {
        return formatDate(this.month, this.day, this.year);
    }
    ;
    get returnDay() {
        return this.day;
    }
    ;
    get returnMonth() {
        return this.month;
    }
    ;
    get returnYear() {
        return this.year;
    }
    ;
    ForGivenHour(info, hour) {
        let parsedDate;
        let parsedHour;
        let forecastList = this.forecast.list;
        let i;
        for (i = 0; i < forecastList.length; i++) {
            parsedDate = parseDate(forecastList[i].dt_txt);
            parsedHour = parseHour(forecastList[i].dt_txt);
            if (parseInt(this.day, 10) === parsedDate[0] && this.month === parsedDate[1] && this.year === parsedDate[2] && hour === parsedHour) {
                switch (info) {
                    case "temp":
                        return KelvinToFahrenheit(forecastList[i].main.temp) + "°F";
                        break;
                    case "weather":
                        return getIconURL(forecastList[i].weather[0].main, this.weatherIcons);
                        break;
                    case "detailedWeather":
                        return forecastList[i].weather[0].description;
                        break;
                    case "humidity":
                        return forecastList[i].main.humidity + "%";
                        break;
                    case "windSpeed":
                        return MeterPerSecondtoMilesPerHour(forecastList[i].wind.speed) + " mph";
                        break;
                    default:
                        return "";
                }
            }
        }
        return "";
    }
    handleActions(action) {
        switch (action.type) {
            case "UPDATE_DAY":
                this.changeDay(action.day);
                break;
            case "UPDATE_MONTH":
                this.changeMonth(action.month);
                break;
            case "UPDATE_YEAR":
                this.changeYear(action.year);
                break;
            default:
                break;
        }
    }
}
__decorate([
    mobx_1.observable,
    __metadata("design:type", Object)
], TestStore.prototype, "day", void 0);
__decorate([
    mobx_1.observable,
    __metadata("design:type", Number)
], TestStore.prototype, "month", void 0);
__decorate([
    mobx_1.observable,
    __metadata("design:type", Number)
], TestStore.prototype, "year", void 0);
__decorate([
    mobx_1.computed,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], TestStore.prototype, "returnDate", null);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], TestStore.prototype, "returnDay", null);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], TestStore.prototype, "returnMonth", null);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], TestStore.prototype, "returnYear", null);
__decorate([
    mobx_1.action,
    __metadata("design:type", Object)
], TestStore.prototype, "changeDay", void 0);
__decorate([
    mobx_1.action,
    __metadata("design:type", Object)
], TestStore.prototype, "changeMonth", void 0);
__decorate([
    mobx_1.action,
    __metadata("design:type", Object)
], TestStore.prototype, "changeYear", void 0);
function formatDate(month, day, year) {
    return formatMonth(month) + " " + formatDay(day) + ", " + year;
}
exports.formatDate = formatDate;
function getTodaysDate() {
    let today = new Date();
    return formatMonth(today.getMonth()) + " " + formatDay(today.getDate()) + ", " + today.getFullYear();
}
function formatMonth(month) {
    let months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
}
exports.formatMonth = formatMonth;
function formatDay(day) {
    let days = ["", "st", "nd", "rd", "rth", "th"];
    let tempArray = ("" + day).split("");
    let lastDigitOfDay = parseInt(tempArray[tempArray.length - 1], 10);
    if ((lastDigitOfDay < 5 && lastDigitOfDay > 0) && (day < 10 || day > 20)) {
        return "" + day + days[lastDigitOfDay];
    }
    else {
        return "" + day + days[5];
    }
}
exports.formatDay = formatDay;
function parseHour(date) {
    let parsedHour = date.split(/[\s:]+/);
    return parseInt(parsedHour[1], 10);
}
exports.parseHour = parseHour;
function parseDate(date) {
    let temp = date.split(/[\s-]+/);
    let parsedDate = [parseInt(temp[2], 10), parseInt(temp[1], 10), parseInt(temp[0], 10)];
    return parsedDate;
}
exports.parseDate = parseDate;
function KelvinToFahrenheit(kelvin) {
    let value = parseFloat((1.80 * (kelvin - 273.15) + 32).toFixed(3));
    return properRounding(value);
}
exports.KelvinToFahrenheit = KelvinToFahrenheit;
function MeterPerSecondtoMilesPerHour(mps) {
    return parseFloat((mps * 2.2369).toFixed(2));
}
function properRounding(value) {
    if (value >= 0) {
        return Math.round(value);
    }
    else {
        return (value % 0.5 === 0) ? Math.floor(value) : Math.round(value);
    }
}
function getIconURL(weather, weatherIcons) {
    switch (weather) {
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
exports.getIconURL = getIconURL;
const store = new TestStore();
dispatcher_1.default.register(store.handleActions.bind(store));
exports.default = store;
