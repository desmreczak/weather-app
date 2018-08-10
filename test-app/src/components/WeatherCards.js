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
const react_router_dom_1 = require("react-router-dom");
let WeatherCards = class WeatherCards extends react_1.Component {
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
        let cards = [];
        let i;
        let timeSuffix;
        let TwelveHourClock;
        for (i = 9; i < 22; i += 3) {
            timeSuffix = (i < 12) ? " am" : " pm";
            TwelveHourClock = (i === 12) ? 12 : (i % 12);
            cards.push(<div id="div1" key={i} className="weather">
					<react_router_dom_1.Link to={`/${TestStore.returnYear}-${TestStore.returnMonth}-${TestStore.returnDay}/${i}`} style={{ textDecoration: 'none' }}>
						<div className="time">
							<div className="child">
							{TwelveHourClock} {timeSuffix}
							</div>
						</div>
						<div className="icon">
							<img src={TestStore.ForGivenHour("weather", i)} alt=""/>
						</div>
						<div className="degrees">
							<div className="child">
								{TestStore.ForGivenHour("temp", i)}
							</div>
						</div>
						</react_router_dom_1.Link>
					</div>);
        }
        return (<div id="container">
				{cards}
			</div>);
    }
};
WeatherCards = __decorate([
    mobx_react_1.inject('TestStore'),
    mobx_react_1.observer
], WeatherCards);
exports.default = WeatherCards;
