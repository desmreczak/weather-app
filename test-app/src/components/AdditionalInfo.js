"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const React = __importStar(require("react"));
const mobx_react_1 = require("mobx-react");
require("../App.css");
const TestStore_1 = __importDefault(require("../stores/TestStore"));
let AdditionalInfo = class AdditionalInfo extends react_1.Component {
    componentDidMount() {
        const { day } = this.props;
        const { month } = this.props;
        const { year } = this.props;
        //if defined - update values / not defined - do nothing
        if (day !== undefined && month !== undefined && year !== undefined) {
            TestStore_1.default.changeYear(year);
            TestStore_1.default.changeMonth(month);
            TestStore_1.default.changeDay(day);
        }
    }
    render() {
        const { TestStore } = this.props;
        const { time } = this.props;
        const windSpeed = TestStore.ForGivenHour("windSpeed", time);
        const detailedWeather = TestStore.ForGivenHour("detailedWeather", time);
        const humidity = TestStore.ForGivenHour("humidity", time);
        return (<div id="addInfo">
				<u>Detailed Weather</u>: {detailedWeather}
					<br />
					<br />
				<u>Humidity</u>: {humidity}
					<br />
					<br />
				<u>Wind Speed</u>: {windSpeed}
			</div>);
    }
};
AdditionalInfo = __decorate([
    mobx_react_1.inject('TestStore'),
    mobx_react_1.observer
], AdditionalInfo);
exports.default = AdditionalInfo;
