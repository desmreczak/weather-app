import { Component } from 'react';
import * as React from 'react';
import {inject, observer} from 'mobx-react';
import WeatherCards from './WeatherCards';
import AdditionalInfo from './AdditionalInfo';
import '../App.css';
import * as actions from '../actions/action';

@inject('TestStore')
@observer
class App extends Component<any, {}> {

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
      isNaN(resetValue) ? actions.updateDay(currentTypeOfDate + incrementBy) : actions.updateDay(resetValue);
      break;

      case "month":
      isNaN(resetValue) ? actions.updateMonth(currentTypeOfDate + incrementBy) : actions.updateMonth(resetValue);
      break;

      case "year":
      isNaN(resetValue) ? actions.updateYear(currentTypeOfDate + incrementBy) : actions.updateYear(resetValue);
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

    let date = match.params.date;

    let time = parseInt(match.params.time);

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

      let splitDate: string[] = (date !== undefined) ? date.split('-') : [NaN, NaN, NaN];

      let parsedYear: number = parseInt(splitDate[0]);

      let parsedMonth: number = parseInt(splitDate[1]);

      let parsedDay: number = parseInt(splitDate[2]);

    //if undefined - show today's weather cards
    if (date === undefined) {

      //show weather cards
      weatherInfo.push(<WeatherCards key="weatherCards" />);


    //if date valid and time not defined - show weather cards of given date
    } else if (splitDate.length === 3 && !isNaN(parsedYear) && !isNaN(parsedMonth) && !isNaN(parsedDay) && (time === undefined || isNaN(time))) {

      weatherInfo.push(<WeatherCards key="weatherCards" day={parsedDay} month={parsedMonth} year={parsedYear} />);

    //if date and time valid - show additional info
    } else if ((splitDate.length === 3 && !isNaN(parsedYear) && !isNaN(parsedMonth) && !isNaN(parsedDay)) && (time === 9 || time === 12 || time === 15 || time === 18 || time === 21)) {

      weatherInfo.push(<AdditionalInfo key="AdditionalInfo" day={parsedDay} month={parsedMonth} year={parsedYear} time={time} />);

    //either date or time are not valid - show 404
    } else {
          
          //show 404 page
          console.log("Not valid date or time.");
          return (
            <div id="pageNotFound">
            404
            <br />
            Page Not Found
            </div>
            );
    }

    return (
      <div className="background">
        {weatherInfo}
      </div>
      );
  }

}

export default App;
