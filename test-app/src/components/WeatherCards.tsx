import { Component } from 'react';
import * as React from 'react';
import {inject, observer} from 'mobx-react';
import '../App.css';
import TestStore from '../stores/TestStore';

@inject('TestStore')
@observer

class WeatherCards extends Component<any, {}> {

	render() {

		const {TestStore} = this.props;

		let cards: any[] = [];
		let i: number;
		let timeSuffix: string;
		let TwelveHourClock: number;

			for (i = 9; i < 22; i += 3) {

				timeSuffix = (i < 12) ? " am" : " pm";
				TwelveHourClock = (i === 12) ? 12 : (i % 12);

				cards.push(
					<div id="div1" key={i} className="weather">
						<div className="time">
							<div className="child">
							{TwelveHourClock} {timeSuffix}
							</div>
						</div>
						<div className="icon">
							<img src={TestStore.ForGivenHour("weather", i)} />
						</div>
						<div className="degrees">
							<div className="child">
								{TestStore.ForGivenHour("temp", i)}
							</div>
						</div>
					</div>
				);
			}

		return (
			<div id="container">
				{cards}
			</div>
		);
	}
}

export default WeatherCards; 