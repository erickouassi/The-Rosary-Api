//const data = require("./data");
const data = require("./js_active_en_rosary.js");
const dataFr = require("./js_active_fr_rosaire.js");

// Logic behind the functionalities
var serverTime = "America/New_York"; // America/New_York /

// current datetime string inAmerica/New_York timezone
let local_datetime_str = new Date().toLocaleString("en-US", {
	timeZone: serverTime
});

// create new Date object
//let date_local = new Date(local_datetime_str);
let d = new Date(local_datetime_str);

// Months
let allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthTxt = allMonths[d.getMonth()]; // May

// year as (YYYY) format
let year = d.getFullYear();

// month as (MM) format
let month = ("0" + (d.getMonth() + 1)).slice(-2); // 01
let d_month = d.getMonth() + 1; // 1

// date as (DD) format
let date = ("0" + d.getDate()).slice(-2);

// date as (D) format
let d_dd = d.getDate();

// date time in YYYY-MM-DD format
//let date_time = year + "-" + month + "-" + date;
// "2021-03-22"
//console.log(date_time);

//
let today = monthTxt + ' ' + d_dd + ', ' + year; //  -> May 18, 2022
//console.log(today);

let d_today = d_month + '/' + d_dd + '/' + year; //  -> 1/1/2023
//console.log(d_today);

let jour_j = year + "-" + month + "-" + date;
// "2021-03-22"
//console.log(jour_j);

//
// Yesterday
const y = new Date(d);
y.setDate(y.getDate() - 1);
let y_dd = String(y.getDate()).padStart(1, '0'); // 17
//let y_day = weekday[y.getDay()];   // Tuesday
let y_month = allMonths[y.getMonth()]; // May
let y_yyyy = y.getFullYear(); // 2022

let yesterday = y_month + ' ' + y_dd + ', ' + y_yyyy; //  -> May 17, 2022


// Tomorrow
const t = new Date(d);
t.setDate(t.getDate() + 1);
let t_dd = String(t.getDate()).padStart(1, '0'); // 19
//let t_day = weekday[t.getDay()];   // Thursday
let t_month = allMonths[t.getMonth()]; // May
let t_yyyy = t.getFullYear(); // 2022

let tomorrow = t_month + ' ' + t_dd + ', ' + t_yyyy; //  -> May 19, 2022

// Novena start & end
const n = new Date(d);
n.setDate(n.getDate() + 9);
let n_dd = String(n.getDate()).padStart(1, '0'); // 19
//let n_day = weekday[n.getDay()];   // Thursday
let n_month = allMonths[n.getMonth()]; // May
let n_yyyy = n.getFullYear(); // 2022

let end_novena = n_month + ' ' + n_dd + ', ' + n_yyyy; //  -> May 19, 2022


const index = data.map(i => i.currentDate).indexOf(today);
//console.log(index);
const novena_index = data.map(i => i.currentDate).indexOf(end_novena);
//console.log(novena_index);




class Controller {

	// getting a single data
	async getSingleData(X) {
		return new Promise((resolve, reject) => {
			// get the data
			let singleData = data.find((Y) => Y.dateMMDDYY === X);

			if (singleData) {
				// return the data
				resolve(singleData);
			} else {
				// return an error
				reject(`Object with id ${X} not found `);
			}
		});
	}
	//
	// getting a novena data
	async getNovenaData() {
		return new Promise((resolve, reject) => {
			// get the data
			// slice from 1..3 - add 1 as the end index is not included
			const novenaData = data.slice(index, novena_index);

			if (novenaData) {
				// return the data
				resolve(novenaData);
			} else {
				// return an error
				reject(`Object Novena  not found `);
			}
		});
	}
	//
	// getting novena data
	async getDataNovena(N) {
		return new Promise((resolve, reject) => {
			// get the data
			const indexNovena = data.map(i => i.dateMMDDYY).indexOf(N);
			const start = indexNovena;
			const end = indexNovena + 9;
			// get the data
			// slice from 1..3 - add 1 as the end index is not included
			const dataNovena = data.slice(start, end);
			if (dataNovena) {
				// return the data
				resolve(dataNovena);
			} else {
				// return an error
				reject(`Object with id ${N} not found `);
			}
		});
	}
	//
	// getting a random data
	async getRandomData() {
		return new Promise((resolve, reject) => {
			// get the data
			let randomIndex = Math.floor(Math.random() * data.length);
			let randomData = data[randomIndex];

			if (randomData) {
				// return the data
				resolve(randomData);
			} else {
				// return an error
				reject(`Object random  not found `);
			}
		});
	}
	//////// add below
	// getting today data
	async getTodayData() {
		return new Promise((resolve, reject) => {
			// get the data
			let todayData = data.filter(function(todayIn) {
				return todayIn.rosary_date == d_today;
			});
			// console.log(todayData);
			//
			if (todayData) {
				// return the data
				resolve(todayData);
			} else {
				// return an error
				reject(`Today object not found `);
			}
		});
	}
	//
	// getting today data
	async getLeJourData() {
		return new Promise((resolve, reject) => {
			// get the data
			let todayData = dataFr.filter(function(todayIn) {
				return todayIn.j_rosaire == d_today;
			});
			// console.log(todayData);
			//
			if (todayData) {
				// return the data
				resolve(todayData);
			} else {
				// return an error
				reject(`Today object not found `);
			}
		});
	}

	// getting yesterday data
	async getYesterdayData() {
		return new Promise((resolve, reject) => {
			// get the data
			let yesterdayData = data.filter(function(yesterdayIn) {
				return yesterdayIn.currentDate == yesterday;
			});
			// console.log(yesterdayData);
			if (yesterdayData) {
				// return the data
				resolve(yesterdayData);
			} else {
				// return an error
				reject(`Yesterday object not found `);
			}
		});
	}

	// getting tomorrow data
	async getTomorrowData() {
		return new Promise((resolve, reject) => {
			// get the data
			let tomorrowData = data.filter(function(tomorrowIn) {
				return tomorrowIn.currentDate == tomorrow;
			});
			// console.log(tomorrowData);
			if (tomorrowData) {
				// return the data
				resolve(tomorrowData);
			} else {
				// return an error
				reject(`Tomorrow object not found `);
			}
		});
	}
	//



	// add above
}
module.exports = Controller;