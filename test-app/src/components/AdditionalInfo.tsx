import { Component } from 'react';
import * as React from 'react';
import {inject, observer} from 'mobx-react';
import '../App.css';
import TestStore from '../stores/TestStore';

@inject('TestStore')
@observer
class AdditionalInfo extends Component<any, {}> {

	componentDidMount() {

		const {day} = this.props;
		const {month} = this.props;
		const {year} = this.props;

		//if defined - update values / not defined - do nothing
		if(day !== undefined && month !== undefined && year !== undefined) {
			TestStore.changeYear(year);
        	TestStore.changeMonth(month);
        	TestStore.changeDay(day);
		}

	}

	render() {

		const {TestStore} = this.props;
		const {time} = this.props;

		const windSpeed = TestStore.ForGivenHour("windSpeed", time);
		const detailedWeather = TestStore.ForGivenHour("detailedWeather", time);
		const humidity = TestStore.ForGivenHour("humidity", time);

		return (
			<div id="addInfo">
				<u>Detailed Weather</u>: {detailedWeather}
					<br />
					<br />
				<u>Humidity</u>: {humidity}
					<br />
					<br />
				<u>Wind Speed</u>: {windSpeed}
			</div>
		);
	}
}

export default AdditionalInfo;