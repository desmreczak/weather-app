import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
import './App.css';

@inject('TestStore')
@observer

class App extends Component {

  handleChangeMonth = (e) => {

    var store = this.props.TestStore;
    var month = store.returnMonth;

    if (e) {

      if (month < 11) {

        store.changeMonth(month + 1);

      } else {

        store.changeMonth(0);

      }


    } else {

      if (month > 0) {

        store.changeMonth(month - 1);

      } else {

        store.changeMonth(11);

      }

    }

  };

  handleChangeDay = (e) => {

    var store = this.props.TestStore;
    var day = store.returnDay;

    if (e) {

      if (day < 31) {

        store.changeDay(day + 1);

      } else {

        store.changeDay(1);

      }

      
    } else {

      if (day > 1) {

        store.changeDay(day - 1);

      } else {

        store.changeDay(31);

      }

    }

  };

  handleChangeYear = (e) => {

    var store = this.props.TestStore;
    var year = store.returnYear;

    if (e) {

      if (year < 2020) {

        store.changeYear(year + 1);

      } else {

        store.changeYear(2000);

      }

      
    } else {

      if (year > 2000) {

        store.changeYear(year - 1);

      } else {

        store.changeYear(2020);

      }

    }

  };

  render() {

    const {TestStore} = this.props;

    return (
      <div className="background">
        <div id="top-arrow-container">
          <i id="month-up" className="up" onClick={e => this.handleChangeMonth(true)}></i>
          <i id="day-up" className="up" onClick={e => this.handleChangeDay(true)}></i>
          <i id="year-up" className="up" onClick={e => this.handleChangeYear(true)}></i>
        </div>
        <div className="app">
          {TestStore.returnDate}
        </div>
        <div id="bot-arrow-container">
          <i id="month-down" className="down" onClick={e => this.handleChangeMonth(false)}></i>
          <i id="day-down" className="down" onClick={e => this.handleChangeDay(false)}></i>
          <i id="year-down" className="down" onClick={e => this.handleChangeYear(false)}></i>
        </div>
        <div id="container">
          <div id="div1" className="weather">
            <div className="time">
              <div className="child">
                9 am
              </div>
            </div>
            <div className="icon">
              <img src={TestStore.returnWeatherForGivenHour(9)} />
            </div>
            <div className="degrees">
              <div className="child">
                {TestStore.returnTempForGivenHour(9)}
              </div>
            </div>
          </div>
          <div id="div2" className="weather"><div className="time"><div className="child">12 pm</div></div><div className="icon"><img src={TestStore.returnWeatherForGivenHour(12)} /></div><div className="degrees"><div className="child">{TestStore.returnTempForGivenHour(12)}</div></div></div>
          <div id="div3" className="weather"><div className="time"><div className="child">3 pm</div></div><div className="icon"><img src={TestStore.returnWeatherForGivenHour(15)} /></div><div className="degrees"><div className="child">{TestStore.returnTempForGivenHour(15)}</div></div></div>
          <div id="div4" className="weather"><div className="time"><div className="child">6 pm</div></div><div className="icon"><img src={TestStore.returnWeatherForGivenHour(18)} /></div><div className="degrees"><div className="child">{TestStore.returnTempForGivenHour(18)}</div></div></div>
          <div id="div5" className="weather"><div className="time"><div className="child">9 pm</div></div><div className="icon"><img src={TestStore.returnWeatherForGivenHour(21)} /></div><div className="degrees"><div className="child">{TestStore.returnTempForGivenHour(21)}</div></div></div>
        </div>
      </div>      
      );

  }

}

export default App;
