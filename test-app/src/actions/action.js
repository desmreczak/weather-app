import dispatcher from "../dispatcher";

export function updateDay(day) {
	dispatcher.dispatch({
		type: "UPDATE_DAY",
		day,
	});
}

export function updateMonth(month) {
	dispatcher.dispatch({
		type: "UPDATE_MONTH",
		month,
	});
}

export function updateYear(year) {
	dispatcher.dispatch({
		type: "UPDATE_YEAR",
		year,
	});
}

