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
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
class TestStore {
    constructor() {
        this.today = new Date();
        //fresh data: http://api.openweathermap.org/data/2.5/forecast?id=4945952&APPID=ad8bfcd4059c773054c2317bfa15b873
        this.forecast = JSON.parse('{"cod":"200","message":0.0056,"cnt":40,"list":[{"dt":1531170000,"main":{"temp":303.75,"temp_min":303.75,"temp_max":303.842,"pressure":1022.09,"sea_level":1031.13,"grnd_level":1022.09,"humidity":39,"temp_kf":-0.09},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.56,"deg":235.001},"sys":{"pod":"d"},"dt_txt":"2018-07-09 21:00:00"},{"dt":1531180800,"main":{"temp":300.05,"temp_min":300.05,"temp_max":300.114,"pressure":1021.08,"sea_level":1030.14,"grnd_level":1021.08,"humidity":44,"temp_kf":-0.07},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.26,"deg":224.506},"sys":{"pod":"n"},"dt_txt":"2018-07-10 00:00:00"},{"dt":1531191600,"main":{"temp":296.47,"temp_min":296.47,"temp_max":296.514,"pressure":1021.11,"sea_level":1030.17,"grnd_level":1021.11,"humidity":52,"temp_kf":-0.04},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.86,"deg":213.505},"sys":{"pod":"n"},"dt_txt":"2018-07-10 03:00:00"},{"dt":1531202400,"main":{"temp":294.64,"temp_min":294.64,"temp_max":294.661,"pressure":1020.08,"sea_level":1029.04,"grnd_level":1020.08,"humidity":60,"temp_kf":-0.02},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.72,"deg":217},"sys":{"pod":"n"},"dt_txt":"2018-07-10 06:00:00"},{"dt":1531213200,"main":{"temp":293.673,"temp_min":293.673,"temp_max":293.673,"pressure":1019.05,"sea_level":1028.04,"grnd_level":1019.05,"humidity":67,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.47,"deg":226.001},"sys":{"pod":"n"},"dt_txt":"2018-07-10 09:00:00"},{"dt":1531224000,"main":{"temp":297.017,"temp_min":297.017,"temp_max":297.017,"pressure":1018.47,"sea_level":1027.35,"grnd_level":1018.47,"humidity":61,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.97,"deg":229.501},"sys":{"pod":"d"},"dt_txt":"2018-07-10 12:00:00"},{"dt":1531234800,"main":{"temp":303.083,"temp_min":303.083,"temp_max":303.083,"pressure":1016.98,"sea_level":1025.84,"grnd_level":1016.98,"humidity":48,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.86,"deg":237.509},"sys":{"pod":"d"},"dt_txt":"2018-07-10 15:00:00"},{"dt":1531245600,"main":{"temp":305.513,"temp_min":305.513,"temp_max":305.513,"pressure":1014.87,"sea_level":1023.81,"grnd_level":1014.87,"humidity":40,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.46,"deg":247.001},"sys":{"pod":"d"},"dt_txt":"2018-07-10 18:00:00"},{"dt":1531256400,"main":{"temp":305.768,"temp_min":305.768,"temp_max":305.768,"pressure":1013.43,"sea_level":1022.39,"grnd_level":1013.43,"humidity":35,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.61,"deg":253.003},"sys":{"pod":"d"},"dt_txt":"2018-07-10 21:00:00"},{"dt":1531267200,"main":{"temp":302.394,"temp_min":302.394,"temp_max":302.394,"pressure":1013.78,"sea_level":1022.95,"grnd_level":1013.78,"humidity":41,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":36},"wind":{"speed":2.11,"deg":258.503},"sys":{"pod":"n"},"dt_txt":"2018-07-11 00:00:00"},{"dt":1531278000,"main":{"temp":298.008,"temp_min":298.008,"temp_max":298.008,"pressure":1016.49,"sea_level":1025.5,"grnd_level":1016.49,"humidity":62,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":68},"wind":{"speed":2.22,"deg":341.001},"rain":{"3h":0.08},"sys":{"pod":"n"},"dt_txt":"2018-07-11 03:00:00"},{"dt":1531288800,"main":{"temp":294.21,"temp_min":294.21,"temp_max":294.21,"pressure":1017.36,"sea_level":1026.21,"grnd_level":1017.36,"humidity":85,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":64},"wind":{"speed":1.31,"deg":42.0012},"rain":{"3h":0.02},"sys":{"pod":"n"},"dt_txt":"2018-07-11 06:00:00"},{"dt":1531299600,"main":{"temp":293.073,"temp_min":293.073,"temp_max":293.073,"pressure":1017.87,"sea_level":1026.93,"grnd_level":1017.87,"humidity":96,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":76},"wind":{"speed":1.33,"deg":39.0061},"rain":{"3h":0.68},"sys":{"pod":"n"},"dt_txt":"2018-07-11 09:00:00"},{"dt":1531310400,"main":{"temp":292.738,"temp_min":292.738,"temp_max":292.738,"pressure":1019.39,"sea_level":1028.41,"grnd_level":1019.39,"humidity":94,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":1.96,"deg":16.5039},"rain":{"3h":0.33},"sys":{"pod":"d"},"dt_txt":"2018-07-11 12:00:00"},{"dt":1531321200,"main":{"temp":293.97,"temp_min":293.97,"temp_max":293.97,"pressure":1020.59,"sea_level":1029.56,"grnd_level":1020.59,"humidity":86,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":2.86,"deg":25.0013},"rain":{"3h":0.27},"sys":{"pod":"d"},"dt_txt":"2018-07-11 15:00:00"},{"dt":1531332000,"main":{"temp":292.533,"temp_min":292.533,"temp_max":292.533,"pressure":1021.8,"sea_level":1030.74,"grnd_level":1021.8,"humidity":80,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":3.72,"deg":32.5079},"rain":{"3h":0.37},"sys":{"pod":"d"},"dt_txt":"2018-07-11 18:00:00"},{"dt":1531342800,"main":{"temp":291.727,"temp_min":291.727,"temp_max":291.727,"pressure":1022.87,"sea_level":1031.71,"grnd_level":1022.87,"humidity":81,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":76},"wind":{"speed":3.41,"deg":27.5},"rain":{"3h":0.41},"sys":{"pod":"d"},"dt_txt":"2018-07-11 21:00:00"},{"dt":1531353600,"main":{"temp":292.706,"temp_min":292.706,"temp_max":292.706,"pressure":1022.53,"sea_level":1031.48,"grnd_level":1022.53,"humidity":67,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02n"}],"clouds":{"all":8},"wind":{"speed":2.77,"deg":25.502},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-12 00:00:00"},{"dt":1531364400,"main":{"temp":290.817,"temp_min":290.817,"temp_max":290.817,"pressure":1023.11,"sea_level":1032.03,"grnd_level":1023.11,"humidity":75,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.77,"deg":19.5087},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-12 03:00:00"},{"dt":1531375200,"main":{"temp":289.704,"temp_min":289.704,"temp_max":289.704,"pressure":1022.47,"sea_level":1031.51,"grnd_level":1022.47,"humidity":81,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.21,"deg":358.003},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-12 06:00:00"},{"dt":1531386000,"main":{"temp":289.307,"temp_min":289.307,"temp_max":289.307,"pressure":1022.6,"sea_level":1031.65,"grnd_level":1022.6,"humidity":78,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.51,"deg":354.005},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-12 09:00:00"},{"dt":1531396800,"main":{"temp":292.594,"temp_min":292.594,"temp_max":292.594,"pressure":1023.63,"sea_level":1032.66,"grnd_level":1023.63,"humidity":61,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.76,"deg":6.00079},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-12 12:00:00"},{"dt":1531407600,"main":{"temp":297.79,"temp_min":297.79,"temp_max":297.79,"pressure":1024.12,"sea_level":1033.18,"grnd_level":1024.12,"humidity":50,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.87,"deg":16.501},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-12 15:00:00"},{"dt":1531418400,"main":{"temp":299.288,"temp_min":299.288,"temp_max":299.288,"pressure":1024.57,"sea_level":1033.43,"grnd_level":1024.57,"humidity":42,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.08,"deg":21.502},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-12 18:00:00"},{"dt":1531429200,"main":{"temp":299.561,"temp_min":299.561,"temp_max":299.561,"pressure":1024.21,"sea_level":1033.12,"grnd_level":1024.21,"humidity":40,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.8,"deg":14.5014},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-12 21:00:00"},{"dt":1531440000,"main":{"temp":296.955,"temp_min":296.955,"temp_max":296.955,"pressure":1024.58,"sea_level":1033.65,"grnd_level":1024.58,"humidity":49,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":76},"wind":{"speed":0.94,"deg":329.003},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-13 00:00:00"},{"dt":1531450800,"main":{"temp":295.231,"temp_min":295.231,"temp_max":295.231,"pressure":1025.11,"sea_level":1034.24,"grnd_level":1025.11,"humidity":51,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":68},"wind":{"speed":1.83,"deg":292.502},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-13 03:00:00"},{"dt":1531461600,"main":{"temp":292.814,"temp_min":292.814,"temp_max":292.814,"pressure":1024.57,"sea_level":1033.73,"grnd_level":1024.57,"humidity":55,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":44},"wind":{"speed":1.97,"deg":263.01},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-13 06:00:00"},{"dt":1531472400,"main":{"temp":291.253,"temp_min":291.253,"temp_max":291.253,"pressure":1025.09,"sea_level":1034.04,"grnd_level":1025.09,"humidity":65,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.01,"deg":244.002},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-13 09:00:00"},{"dt":1531483200,"main":{"temp":295.653,"temp_min":295.653,"temp_max":295.653,"pressure":1025.6,"sea_level":1034.58,"grnd_level":1025.6,"humidity":57,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.46,"deg":258.501},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-13 12:00:00"},{"dt":1531494000,"main":{"temp":301.195,"temp_min":301.195,"temp_max":301.195,"pressure":1024.92,"sea_level":1033.81,"grnd_level":1024.92,"humidity":44,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.46,"deg":305},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-13 15:00:00"},{"dt":1531504800,"main":{"temp":302.072,"temp_min":302.072,"temp_max":302.072,"pressure":1023.37,"sea_level":1032.23,"grnd_level":1023.37,"humidity":40,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":48},"wind":{"speed":1.51,"deg":306.502},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-13 18:00:00"},{"dt":1531515600,"main":{"temp":302.091,"temp_min":302.091,"temp_max":302.091,"pressure":1022.19,"sea_level":1031.18,"grnd_level":1022.19,"humidity":38,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":32},"wind":{"speed":1.51,"deg":295.501},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-13 21:00:00"},{"dt":1531526400,"main":{"temp":298.883,"temp_min":298.883,"temp_max":298.883,"pressure":1021.98,"sea_level":1030.96,"grnd_level":1021.98,"humidity":50,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.16,"deg":256},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-14 00:00:00"},{"dt":1531537200,"main":{"temp":294.818,"temp_min":294.818,"temp_max":294.818,"pressure":1022.45,"sea_level":1031.45,"grnd_level":1022.45,"humidity":53,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.47,"deg":221.504},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-14 03:00:00"},{"dt":1531548000,"main":{"temp":295.218,"temp_min":295.218,"temp_max":295.218,"pressure":1022.23,"sea_level":1031.18,"grnd_level":1022.23,"humidity":55,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":32},"wind":{"speed":2.96,"deg":221.008},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-14 06:00:00"},{"dt":1531558800,"main":{"temp":294.685,"temp_min":294.685,"temp_max":294.685,"pressure":1022.02,"sea_level":1031.02,"grnd_level":1022.02,"humidity":60,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":12},"wind":{"speed":2.57,"deg":218.001},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-14 09:00:00"},{"dt":1531569600,"main":{"temp":296.823,"temp_min":296.823,"temp_max":296.823,"pressure":1021.56,"sea_level":1030.52,"grnd_level":1021.56,"humidity":61,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":44},"wind":{"speed":2.51,"deg":218.501},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-14 12:00:00"},{"dt":1531580400,"main":{"temp":300.685,"temp_min":300.685,"temp_max":300.685,"pressure":1020.64,"sea_level":1029.57,"grnd_level":1020.64,"humidity":55,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":68},"wind":{"speed":2.5,"deg":211.018},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-14 15:00:00"},{"dt":1531591200,"main":{"temp":302.405,"temp_min":302.405,"temp_max":302.405,"pressure":1019.1,"sea_level":1027.98,"grnd_level":1019.1,"humidity":49,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":24},"wind":{"speed":2.56,"deg":207.001},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-14 18:00:00"},{"dt":1531602000,"main":{"temp":298.224,"temp_min":298.224,"temp_max":298.224,"pressure":1022.13,"sea_level":1031.06,"grnd_level":1022.13,"humidity":43,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":80},"wind":{"speed":2.91,"deg":28.5005},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-14 21:00:00"},{"dt":1531612800,"main":{"temp":294.844,"temp_min":294.844,"temp_max":294.844,"pressure":1022.24,"sea_level":1031.07,"grnd_level":1022.24,"humidity":48,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":64},"wind":{"speed":2.01,"deg":42.5008},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-15 00:00:00"},{"dt":1531623600,"main":{"temp":291.81,"temp_min":291.81,"temp_max":291.81,"pressure":1022.26,"sea_level":1031.21,"grnd_level":1022.26,"humidity":60,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":44},"wind":{"speed":1.22,"deg":12.5011},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-15 03:00:00"},{"dt":1531634400,"main":{"temp":289.835,"temp_min":289.835,"temp_max":289.835,"pressure":1021.62,"sea_level":1030.57,"grnd_level":1021.62,"humidity":70,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":20},"wind":{"speed":1.51,"deg":340.002},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-15 06:00:00"},{"dt":1531645200,"main":{"temp":289.369,"temp_min":289.369,"temp_max":289.369,"pressure":1021.62,"sea_level":1030.6,"grnd_level":1021.62,"humidity":74,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02n"}],"clouds":{"all":8},"wind":{"speed":2.06,"deg":357.507},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-15 09:00:00"},{"dt":1531656000,"main":{"temp":293.901,"temp_min":293.901,"temp_max":293.901,"pressure":1022.36,"sea_level":1031.23,"grnd_level":1022.36,"humidity":61,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":44},"wind":{"speed":1.91,"deg":4.00464},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-15 12:00:00"},{"dt":1531666800,"main":{"temp":298.512,"temp_min":298.512,"temp_max":298.512,"pressure":1022.36,"sea_level":1031.19,"grnd_level":1022.36,"humidity":52,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":24},"wind":{"speed":2.66,"deg":33.5007},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-15 15:00:00"},{"dt":1531677600,"main":{"temp":300.249,"temp_min":300.249,"temp_max":300.249,"pressure":1022.06,"sea_level":1030.85,"grnd_level":1022.06,"humidity":46,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":20},"wind":{"speed":3.52,"deg":43.0002},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-15 18:00:00"},{"dt":1531688400,"main":{"temp":299.151,"temp_min":299.151,"temp_max":299.151,"pressure":1022,"sea_level":1030.82,"grnd_level":1022,"humidity":43,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":32},"wind":{"speed":3.28,"deg":47.0012},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-15 21:00:00"},{"dt":1531699200,"main":{"temp":295.813,"temp_min":295.813,"temp_max":295.813,"pressure":1022.44,"sea_level":1031.38,"grnd_level":1022.44,"humidity":47,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":48},"wind":{"speed":2.11,"deg":49.5016},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-16 00:00:00"},{"dt":1531710000,"main":{"temp":291.536,"temp_min":291.536,"temp_max":291.536,"pressure":1022.64,"sea_level":1031.63,"grnd_level":1022.64,"humidity":67,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":64},"wind":{"speed":0.91,"deg":31.0005},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-16 03:00:00"},{"dt":1531720800,"main":{"temp":290.272,"temp_min":290.272,"temp_max":290.272,"pressure":1021.89,"sea_level":1030.89,"grnd_level":1021.89,"humidity":70,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":76},"wind":{"speed":1.07,"deg":317.009},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-16 06:00:00"},{"dt":1531731600,"main":{"temp":290.274,"temp_min":290.274,"temp_max":290.274,"pressure":1021.62,"sea_level":1030.71,"grnd_level":1021.62,"humidity":68,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":88},"wind":{"speed":1.06,"deg":329.001},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-07-16 09:00:00"},{"dt":1531742400,"main":{"temp":294.725,"temp_min":294.725,"temp_max":294.725,"pressure":1022.09,"sea_level":1031.12,"grnd_level":1022.09,"humidity":56,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":88},"wind":{"speed":1.47,"deg":313.001},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-07-16 12:00:00"}],"city":{"id":4945952,"name":"Norwood","coord":{"lat":42.1945,"lon":-71.1996},"country":"US"}}');
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
    returnTempForGivenHour(hour) {
        let parsedDate;
        let parsedHour;
        let forecastList = this.forecast.list;
        let i;
        for (i = 0; i < forecastList.length; i++) {
            parsedDate = parseDate(forecastList[i].dt_txt);
            parsedHour = parseHour(forecastList[i].dt_txt);
            if (parseInt(this.day) === parsedDate[0] && this.month === parsedDate[1] && this.year === parsedDate[2] && hour === parsedHour) {
                return KelvinToFahrenheit(forecastList[i].main.temp) + "°F";
            }
        }
        return "";
    }
    returnWeatherForGivenHour(hour) {
        let parsedDate;
        let parsedHour;
        let forecastList = this.forecast.list;
        let i;
        for (i = 0; i < forecastList.length; i++) {
            parsedDate = parseDate(forecastList[i].dt_txt);
            parsedHour = parseHour(forecastList[i].dt_txt);
            if (parseInt(this.day) === parsedDate[0] && this.month === parsedDate[1] && this.year === parsedDate[2] && hour === parsedHour) {
                return getIconURL(forecastList[i].weather[0].main, this.weatherIcons);
            }
        }
        return "";
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
    if (day < 5) {
        return "" + day + days[day];
    }
    else {
        return "" + day + days[5];
    }
}
exports.formatDay = formatDay;
function parseHour(date) {
    let parsedHour = date.split(/[\s:]+/);
    return parseInt(parsedHour[1]);
}
exports.parseHour = parseHour;
function parseDate(date) {
    let temp = date.split(/[\s-]+/);
    let parsedDate = [parseInt(temp[2]), parseInt(temp[1]), parseInt(temp[0])];
    return parsedDate;
}
exports.parseDate = parseDate;
function KelvinToFahrenheit(kelvin) {
    return Math.round((9.0 / 5.0) * (kelvin - 273) + 32);
}
exports.KelvinToFahrenheit = KelvinToFahrenheit;
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
exports.default = store;
