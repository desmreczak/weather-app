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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const React = __importStar(require("react"));
const mobx_react_1 = require("mobx-react");
require("./App.css");
let App = class App extends react_1.Component {
    constructor() {
        super(...arguments);
        this.handleChangeDate = (increaseDate, typeOfDate) => {
            let store = this.props.TestStore;
            let currentTypeOfDate = NaN;
            let minBoundary = NaN;
            let maxBoundary = NaN;
            let resetValue = NaN;
            let incrementBy = increaseDate ? 1 : -1;
            switch (typeOfDate) {
                case "day":
                    currentTypeOfDate = store.returnDay;
                    minBoundary = 1;
                    maxBoundary = 31;
                    break;
                case "month":
                    currentTypeOfDate = store.returnMonth;
                    minBoundary = 1;
                    maxBoundary = 12;
                    break;
                case "year":
                    currentTypeOfDate = store.returnYear;
                    minBoundary = 2000;
                    maxBoundary = 2020;
                    break;
                default:
                    try {
                        throw new TypeError("Incorrect typeOfdate given. Shoud be 'day', 'month', or 'year'");
                    }
                    catch (e) {
                        console.log(e);
                    }
            }
            if (currentTypeOfDate < maxBoundary && currentTypeOfDate > minBoundary) {
                resetValue = NaN;
            }
            else if (currentTypeOfDate === maxBoundary && increaseDate) {
                resetValue = minBoundary;
            }
            else if (currentTypeOfDate === minBoundary && !increaseDate) {
                resetValue = maxBoundary;
            }
            switch (typeOfDate) {
                case "day":
                    isNaN(resetValue) ? store.changeDay(currentTypeOfDate + incrementBy) : store.changeDay(resetValue);
                    break;
                case "month":
                    isNaN(resetValue) ? store.changeMonth(currentTypeOfDate + incrementBy) : store.changeMonth(resetValue);
                    break;
                case "year":
                    isNaN(resetValue) ? store.changeYear(currentTypeOfDate + incrementBy) : store.changeYear(resetValue);
                    break;
                default:
                    try {
                        throw new TypeError("Incorrect typeOfdate given. Shoud be 'day', 'month', or 'year'");
                    }
                    catch (e) {
                        console.log(e);
                    }
            }
        };
    }
    render() {
        const { TestStore } = this.props;
        return (<div className="background">
      <div id="top-arrow-container">
      <i id="month-up" className="up" onClick={e => this.handleChangeDate(true, "month")}></i>
      <i id="day-up" className="up" onClick={e => this.handleChangeDate(true, "day")}></i>
      <i id="year-up" className="up" onClick={e => this.handleChangeDate(true, "year")}></i>
      </div>
      <div className="app">
      {TestStore.returnDate}
      </div>
      <div id="bot-arrow-container">
      <i id="month-down" className="down" onClick={e => this.handleChangeDate(false, "month")}></i>
      <i id="day-down" className="down" onClick={e => this.handleChangeDate(false, "day")}></i>
      <i id="year-down" className="down" onClick={e => this.handleChangeDate(false, "year")}></i>
      </div>
      <div id="container">
      <div id="div1" className="weather">
      <div className="time">
      <div className="child">
      9 am
      </div>
      </div>
      <div className="icon">
      <img src={TestStore.returnWeatherForGivenHour(9)}/>
      </div>
      <div className="degrees">
      <div className="child">
      {TestStore.returnTempForGivenHour(9)}
      </div>
      </div>
      </div>
      <div id="div2" className="weather"><div className="time"><div className="child">12 pm</div></div><div className="icon"><img src={TestStore.returnWeatherForGivenHour(12)}/></div><div className="degrees"><div className="child">{TestStore.returnTempForGivenHour(12)}</div></div></div>
      <div id="div3" className="weather"><div className="time"><div className="child">3 pm</div></div><div className="icon"><img src={TestStore.returnWeatherForGivenHour(15)}/></div><div className="degrees"><div className="child">{TestStore.returnTempForGivenHour(15)}</div></div></div>
      <div id="div4" className="weather"><div className="time"><div className="child">6 pm</div></div><div className="icon"><img src={TestStore.returnWeatherForGivenHour(18)}/></div><div className="degrees"><div className="child">{TestStore.returnTempForGivenHour(18)}</div></div></div>
      <div id="div5" className="weather"><div className="time"><div className="child">9 pm</div></div><div className="icon"><img src={TestStore.returnWeatherForGivenHour(21)}/></div><div className="degrees"><div className="child">{TestStore.returnTempForGivenHour(21)}</div></div></div>
      </div>
      </div>);
    }
};
App = __decorate([
    mobx_react_1.inject('TestStore'),
    mobx_react_1.observer
], App);
exports.default = App;
