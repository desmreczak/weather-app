import {formatDate, formatMonth, formatDay, parseHour, parseDate, KelvinToFahrenheit, getIconURL} from './stores/TestStore';
import TestStore from './stores/TestStore';
import React from 'react';
import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import App from './App'

// This sets up the adapter to be used by Enzyme
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("\nTestStore Functions\n", () => {

	it("should start with the current date", () => {
		const store = TestStore
		expect(store.day).toBe(new Date().getDate())
		expect(store.month).toBe(new Date().getMonth() + 1)
		expect(store.year).toBe(new Date().getFullYear()) 
	})

	it("should set the day", () => {
		const store = TestStore
		store.changeDay(12)
		expect(store.day).toBe(12)
	})

	it("should set the month", () => {
		const store = TestStore
		store.changeMonth(12)
		expect(store.month).toBe(12)
	})

	it("should set the year", () => {
		const store = TestStore
		store.changeYear(12)
		expect(store.year).toBe(12)
	})

	it("should return temperature in Fahrenheit for a given hour(military time)", () => {
		const store = TestStore
		store.day = 12
		store.month = 7
		store.year = 2018
		expect(store.returnTempForGivenHour(15)).toBe("77°F")
	})

	it("should return image url for a given hour(military time)", () => {
		const store = TestStore
		store.day = 12
		store.month = 7
		store.year = 2018
		expect(store.returnWeatherForGivenHour(15)).toBe("https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-512.png")
	})

	it("should return formatted date", () => {
		const store = TestStore
		store.day = 12
		store.month = 7
		store.year = 2018
		expect(store.returnDate).toBe("July 12th, 2018")
	})

	it("should return day", () => {
		const store = TestStore
		store.day = 12
		store.month = 7
		store.year = 2018
		expect(store.returnDay).toBe(12)
	})

	it("should return month", () => {
		const store = TestStore
		store.day = 12
		store.month = 7
		store.year = 2018
		expect(store.returnMonth).toBe(7)
	})

	it("should return year", () => {
		const store = TestStore
		store.day = 12
		store.month = 7
		store.year = 2018
		expect(store.returnYear).toBe(2018)
	})
})

describe("\nTestStore Helper Functions\n", () => {

	it("should format a given month, day, year", () => {
		var day = 12
		var month = 7
		var year = 2018
		expect(formatDate(month, day, year)).toBe("July 12th, 2018")
	})

	it("should return the name of a month for a number", () => {
		expect(formatMonth(1)).toBe("January")
	})

	it("should return the day with the appropriate suffix", () => {
		expect(formatDay(1)).toBe("1st")
		expect(formatDay(2)).toBe("2nd")
		expect(formatDay(3)).toBe("3rd")
		expect(formatDay(4)).toBe("4rth")
		expect(formatDay(5)).toBe("5th")
		expect(formatDay(11)).toBe("11th")
		//expect(formatDay(21)).toBe("21st")
	})

	it("should return an hour from a given date string", () => {
		var date = "2017-05-04 9:00:00"
		expect(parseHour(date)).toBe(9)
	})

	it("should return a date from a given date string", () => {
		var date = "2017-05-04 9:00:00"
		expect(parseDate(date)).toEqual([4, 5, 2017])
	})

	it("should return rounded Fahrenheit value for given Kelvin", () => {
		expect(KelvinToFahrenheit(297)).toBe(75)
		expect(KelvinToFahrenheit(297.54)).toBe(76)
		expect(KelvinToFahrenheit(297.3167)).toBe(76)
		//expect(KelvinToFahrenheit(297.31)).toBe(75)
		//expect(KelvinToFahrenheit(250)).toBe(-10)
		expect(KelvinToFahrenheit(248)).toBe(-13)
		expect(KelvinToFahrenheit(255.372)).toBe(0)
	})

	it("should return a url from a given weather and array of icon urls", () => {
		const store = TestStore
		var urls = store.weatherIcons
		expect(getIconURL("Clear", urls)).toBe("https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-512.png")
		expect(getIconURL("", urls)).toBe("")
	})

})

describe("\nApp Component\n", () => {

	const store = TestStore
	const shallowWrap = shallow(<App TestStore={store} />)
	const renderWrap = render(<App TestStore={store} />)
	const mountWrap = mount(<App TestStore={store} />)

	it("should render App component", () => {
		expect(shallowWrap).toHaveLength(1);
	})

	it("should render the date", () => {
		expect(renderWrap.find(".app").length).toBe(1);
	})

	it("should render 5 weather containers", () => {
		expect(renderWrap.find(".weather").length).toBe(5);
	})

	it("should respond to button click and increase the month", () => {
		var month = mountWrap.find('.app').text().split(" ")[0]
		var monthsList = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var expectedMonth

		if(month === "December") {
			expectedMonth = "January"
		} else {
			expectedMonth = monthsList[monthsList.indexOf(month) + 1]
		}

		for(var i = 0; i < 13; i++) {
		mountWrap.find('#month-up').simulate('click');
		}

		expect(mountWrap.find('.app').text().split(" ")[0]).toBe(expectedMonth);
	})

	it("should respond to button click and increase the day", () => {
		var day = parseInt(mountWrap.find('.app').text().split(/[\s|(th)|(st)|(nd)|(rd)|(rth)]+/)[1])
		var expectedDay

		if(day === 31) {
			expectedDay = 1
		} else {
			expectedDay = day + 1
		}

		for(var i = 0; i < 32; i++) {
		mountWrap.find('#day-up').simulate('click');
		}

		expect(parseInt(mountWrap.find('.app').text().split(/[\s|(th)|(st)|(nd)|(rd)|(rth)]+/)[1])).toBe(expectedDay);
	})

	it("should respond to button click and increase the year", () => {
		var year = mountWrap.find('.app').text().split(" ").map(Number).filter(Boolean)[0]
		var expectedYear

		if(year === 2020) {
			expectedYear = 2000
		} else {
			expectedYear = year + 1
		}

		for(var i = 0; i < 22; i++) {
		mountWrap.find('#year-up').simulate('click');
		}

		expect(mountWrap.find('.app').text().split(" ").map(Number).filter(Boolean)[0]).toBe(expectedYear);
	})

})