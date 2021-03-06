import {formatDate, formatMonth, formatDay, parseHour, parseDate, KelvinToFahrenheit, getIconURL} from './stores/TestStore';
import TestStore from './stores/TestStore';
import React from 'react';
import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import App from './components/App'
import TestUtils from "react-test-utils";
import {Provider} from 'mobx-react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// This sets up the adapter to be used by Enzyme
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("\nTestStore Functions\n", () => {

	let store;

	beforeEach(() => {
		store = TestStore;
	});

	it("should start with the current date", () => {
		expect(store.day).toBe(new Date().getDate());
		expect(store.month).toBe(new Date().getMonth() + 1);
		expect(store.year).toBe(new Date().getFullYear());
	});

	it("should set the day", () => {
		store.changeDay(12);
		expect(store.day).toBe(12)
	});

	it("should set the month", () => {
		store.changeMonth(12);
		expect(store.month).toBe(12)
	});

	it("should set the year", () => {
		store.changeYear(12);
		expect(store.year).toBe(12)
	});

	it("should return temperature in Fahrenheit for a given hour(military time)", () => {
		store.day = 5;
		store.month = 8;
		store.year = 2018;
		expect(store.ForGivenHour("temp", 9)).toBe("66°F")
	});

	it("should return image url for a given hour(military time)", () => {
		store.day = 5;
		store.month = 8;
		store.year = 2018;
		expect(store.ForGivenHour("weather", 9)).toBe("https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-512.png")
	});

	it("should return formatted date", () => {
		store.day = 12;
		store.month = 7;
		store.year = 2018;
		expect(store.returnDate).toBe("July 12th, 2018")
	});

	it("should return day", () => {
		store.day = 12;
		expect(store.returnDay).toBe(12)
	});

	it("should return month", () => {
		store.month = 7;
		expect(store.returnMonth).toBe(7)
	});

	it("should return year", () => {
		store.year = 2018;
		expect(store.returnYear).toBe(2018)
	})
});

describe("\nTestStore Helper Functions\n", () => {

	let store;

	beforeEach(() => {
		store = TestStore;
	});

	it("should format a given month, day, year", () => {
		let day = 12;
		let month = 7;
		let year = 2018;
		expect(formatDate(month, day, year)).toBe("July 12th, 2018")
	});

	it("should return the name of a month for a number", () => {
		expect(formatMonth(1)).toBe("January")
	});

	it("should return the day with the appropriate suffix", () => {
		expect(formatDay(1)).toBe("1st");
		expect(formatDay(2)).toBe("2nd");
		expect(formatDay(3)).toBe("3rd");
		expect(formatDay(4)).toBe("4rth");
		expect(formatDay(5)).toBe("5th");
		expect(formatDay(6)).toBe("6th");
		expect(formatDay(7)).toBe("7th");
		expect(formatDay(8)).toBe("8th");
		expect(formatDay(9)).toBe("9th");
		expect(formatDay(10)).toBe("10th");
		expect(formatDay(11)).toBe("11th");
		expect(formatDay(20)).toBe("20th");
		expect(formatDay(21)).toBe("21st");
		expect(formatDay(29)).toBe("29th");
		expect(formatDay(30)).toBe("30th");
	});

	it("should return an hour from a given date string", () => {
		let date = "2017-05-04 9:00:00";
		expect(parseHour(date)).toBe(9)
	});

	it("should return a date from a given date string", () => {
		let date = "2017-05-04 9:00:00";
		expect(parseDate(date)).toEqual([4, 5, 2017])
	});

	it("should return rounded Fahrenheit value for given Kelvin", () => {
		expect(KelvinToFahrenheit(297)).toBe(75);
		expect(KelvinToFahrenheit(297.54)).toBe(76);
		expect(KelvinToFahrenheit(297.3167)).toBe(76);
		expect(KelvinToFahrenheit(297.31)).toBe(75);
		expect(KelvinToFahrenheit(250)).toBe(-10);
		expect(KelvinToFahrenheit(248)).toBe(-13);
		expect(KelvinToFahrenheit(255.372)).toBe(0);
	});

	it("should return a url from a given weather and array of icon urls", () => {
		let urls = store.weatherIcons;
		expect(getIconURL("Clear", urls)).toBe("https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-512.png");
		expect(getIconURL("", urls)).toBe("")
	})

});

describe("\nApp Component\n", () => {

	let store = TestStore;

	let shallowWrap; 
	let mountWrap;

	let monthsList;

	beforeAll(() => {
		shallowWrap = shallow(<App TestStore={store}/>);
		mountWrap = mount(
			<Provider TestStore={TestStore}>
				<BrowserRouter>
					<main>
						<Switch>
							<Route exact path={"/"} component={App} />
							<Route exact path={"/today"} component={App} />
							<Route exact path={"/:date"} component={App} />
							<Route exact path={"/:date/:time"} component={App} />
							<Route render={() =>
								<div id="pageNotFound">
		            				404
		            				<br />
		            				Page Not Found
		            			</div>
		            		} />
						</Switch>
					</main>
				</BrowserRouter>
			</Provider>
			);

		monthsList = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	});

	it("should render App component", () => {
		expect(shallowWrap).toHaveLength(1);
	});

	it("should render the date", () => {
		expect(mountWrap.find(".app").length).toBe(1);
	});

	it("should render 5 weather containers", () => {
		expect(mountWrap.find(".weather").length).toBe(5);
	});

	it("should respond to button click and increase the month (no wrapping)", () => {
		store.month = 1;

		let expectedMonth = monthsList[store.month + 1];

		mountWrap.find('#month-up').simulate('click');

        let month = mountWrap.find('.app').text().split(" ")[0];

		expect(month).toBe(expectedMonth);
	});

	it("should respond to button click and increase the month (wrap around)", () => {
		store.month = 12;

		let expectedMonth = "January";

		mountWrap.find('#month-up').simulate('click');

        let month = mountWrap.find('.app').text().split(" ")[0];

		expect(month).toBe(expectedMonth);
	});

	it("should respond to button click and decrease the month (no wrapping)", () => {
		store.month = 12;

		let expectedMonth = monthsList[store.month - 1];

		mountWrap.find('#month-down').simulate('click');

        let month = mountWrap.find('.app').text().split(" ")[0];

		expect(month).toBe(expectedMonth);
	});

	it("should respond to button click and decrease the month (wrap around)", () => {
		store.month = 1;

		let expectedMonth = "December";

		mountWrap.find('#month-down').simulate('click');

        let month = mountWrap.find('.app').text().split(" ")[0];

		expect(month).toBe(expectedMonth);
	});

	it("should respond to button click and increase the day (no wrapping)", () => {
		store.day = 1;

		let expectedDay = store.day + 1;

		mountWrap.find('#day-up').simulate('click');

        let day = parseInt(mountWrap.find('.app').text().split(/[\s|(th)|(st)|(nd)|(rd)|(rth)]+/)[1]);

		expect(day).toBe(expectedDay);
	});

	it("should respond to button click and increase the day (wrap around)", () => {
		store.day = 31;

		let expectedDay = 1;

		mountWrap.find('#day-up').simulate('click');

        let day = parseInt(mountWrap.find('.app').text().split(/[\s|(th)|(st)|(nd)|(rd)|(rth)]+/)[1]);

		expect(day).toBe(expectedDay);
	});

	it("should respond to button click and decrease the day (no wrapping)", () => {
		store.day = 31;

		let expectedDay = store.day - 1;
	
		mountWrap.find('#day-down').simulate('click');

        let day = parseInt(mountWrap.find('.app').text().split(/[\s|(th)|(st)|(nd)|(rd)|(rth)]+/)[1]);

		expect(day).toBe(expectedDay);
	});

	it("should respond to button click and decrease the day (wrap around)", () => {
		store.day = 1;

		let expectedDay = 31;

		mountWrap.find('#day-down').simulate('click');

        let day = parseInt(mountWrap.find('.app').text().split(/[\s|(th)|(st)|(nd)|(rd)|(rth)]+/)[1]);

		expect(day).toBe(expectedDay);
	});

	it("should respond to button click and increase the year (no wrapping)", () => {
		store.year = 2000;

		let expectedYear = store.year + 1;

		mountWrap.find('#year-up').simulate('click');

        let year = mountWrap.find('.app').text().split(" ").map(Number).filter(Boolean)[0];

		expect(year).toBe(expectedYear);
	});

	it("should respond to button click and increase the year (wrap around)", () => {
		store.year = 2020;

		let expectedYear = 2000;

		mountWrap.find('#year-up').simulate('click');

        let year = mountWrap.find('.app').text().split(" ").map(Number).filter(Boolean)[0];

        expect(year).toBe(expectedYear);
	});

	it("should respond to button click and decrease the year (no wrapping)", () => {
		store.year = 2020;

		let expectedYear = store.year - 1;

		mountWrap.find('#year-down').simulate('click');

        let year = mountWrap.find('.app').text().split(" ").map(Number).filter(Boolean)[0];

        expect(year).toBe(expectedYear);
	});

	it("should respond to button click and decrease the year (wrap around)", () => {
		store.year = 2000;

		let expectedYear = 2020;

		mountWrap.find('#year-down').simulate('click');

        let year = mountWrap.find('.app').text().split(" ").map(Number).filter(Boolean)[0];

        expect(year).toBe(expectedYear);
	});

	it("should throw error if incorrect parameter for handChangeDate() is given", () => {

		//let renderedComponent = TestUtils.renderIntoDocument(mountWrap);

		//create test html

		//setup spy

		//trigger the event

		//verify it's been called 

		//let spy = spyOn('#testContainer', 'click');

       // let year = mountWrap.find('.app').text().split(" ").map(Number).filter(Boolean)[0];

		
	})

});