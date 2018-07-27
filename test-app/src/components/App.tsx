import { Component } from 'react';
import * as React from 'react';
import {inject, observer} from 'mobx-react';
import WeatherCards from './WeatherCards';
import AdditionalInfo from './AdditionalInfo';
import '../App.css';

@inject('TestStore')
@observer

class App extends Component<any, any> {

  handleChangeDate = (increaseDate: boolean, typeOfDate: string) => {

    let store: any = this.props.TestStore;
    let currentTypeOfDate: number = NaN;
    let minBoundary: number = NaN;
    let maxBoundary: number = NaN;
    let resetValue: number = NaN;
    let incrementBy: number = increaseDate ? 1 : -1;

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
      } catch (e) {
        console.log(e);
      }

    }


    if (currentTypeOfDate < maxBoundary && currentTypeOfDate > minBoundary) {
      resetValue = NaN;
    } else if (currentTypeOfDate === maxBoundary && increaseDate) {
      resetValue = minBoundary;
    } else if (currentTypeOfDate === minBoundary && !increaseDate) {
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
      } catch (e) {
        console.log(e);
      }
    }
  }

  render() {

    const {TestStore} = this.props;

    let match = this.props.match;

    var weatherInfo: any[] = [];

    weatherInfo.push(
      <div key="parent">
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
      </div>
      );

    if (match.date !== undefined) {

      let splitDate: string[] = match.date.split('-');

      console.log(splitDate);

      let parsedYear: number = parseInt(splitDate[0]);

      let parsedMonth: number = parseInt(splitDate[1]);

      let parsedDay: number = parseInt(splitDate[2]);

      if (splitDate.length === 3 && !isNaN(parsedYear) && !isNaN(parsedMonth) && !isNaN(parsedDay)) {

        console.log("matched date");

        TestStore.changeYear(splitDate[0]);
        TestStore.changeMonth(splitDate[1]);
        TestStore.changeDay(splitDate[2]);

      } else {

        //not valid date string - show 404 page

      }

    }

    if (match.time !== undefined) {

      weatherInfo.push(<AdditionalInfo key="AdditionalInfo" />);

    } else {

      weatherInfo.push(<WeatherCards key="weatherCards" />);

    }

    return (
      <div className="background">
        {weatherInfo}
      </div>
      );

  }

}

export default App;
