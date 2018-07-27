import { Component } from 'react';
import * as React from 'react';
import {inject, observer} from 'mobx-react';
import '../App.css';
import TestStore from '../stores/TestStore';

@inject('TestStore')
@observer

class AdditionalInfo extends Component<any, {}> {

	render() {

		const {TestStore} = this.props;

		const urlTime: number = parseInt(this.props.match.params.time);

    	console.log(urlTime);

		return (
			<div>
				The wind speed: {TestStore.ForGivenHour("windSpeed", {urlTime})}
				<br />
				Detailed Weather: {TestStore.ForGivenHour("detailedWeather", {urlTime})}
				<br />
				Chance of rain: {TestStore.ForGivenHour("rainChance", {urlTime})}
			</div>
		);
	}
}

export default AdditionalInfo;