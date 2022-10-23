// controller.js
// Logic behind the functionalities
let d = new Date();
//let currentHour = d.getHours(); // 18
//let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
//let oneJan = new Date(d.getFullYear(), 0, 1);
//let numberOfDays = Math.floor((d - oneJan) / (24 * 60 * 60 * 1000));
//let weekNumber = Math.ceil((d.getDay() + 1 + numberOfDays) / 7);  // 37


// Today
let dd = String(d.getDate()).padStart(1, '0'); // 18
//let day = weekday[d.getDay()];   // Wednesday
let month = allMonths[d.getMonth()];  // May
let yyyy = d.getFullYear();  // 2022

let today = month +' '+ dd +', '+ yyyy;   //  -> May 18, 2022

// Yesterday
const y = new Date(d);
y.setDate(y.getDate() - 1);
let y_dd = String(y.getDate()).padStart(1, '0'); // 17
//let y_day = weekday[y.getDay()];   // Tuesday
let y_month = allMonths[y.getMonth()];  // May
let y_yyyy = y.getFullYear();  // 2022

let yesterday = y_month +' '+ y_dd +', '+ y_yyyy;   //  -> May 17, 2022


// Tomorrow
const t = new Date(d);
t.setDate(t.getDate() + 1);
let t_dd = String(t.getDate()).padStart(1, '0'); // 19
//let t_day = weekday[t.getDay()];   // Thursday
let t_month = allMonths[t.getMonth()];  // May
let t_yyyy = t.getFullYear();  // 2022

let tomorrow = t_month +' '+ t_dd +', '+ t_yyyy;   //  -> May 19, 2022

// Novena start & end
const n = new Date(d);
n.setDate(n.getDate() + 9);
let n_dd = String(n.getDate()).padStart(1, '0'); // 19
//let n_day = weekday[n.getDay()];   // Thursday
let n_month = allMonths[n.getMonth()];  // May
let n_yyyy = n.getFullYear();  // 2022

let end_novena = n_month +' '+ n_dd +', '+ n_yyyy;   //  -> May 19, 2022

//console.log(today);
//console.log(end_novena);
//console.log(tomorrow);
//console.log(y_dd);


//const data = require("./data");
const data = require("./data2022");

const index = data.map(i => i.currentDate).indexOf(today);
//console.log(index);
const novena_index = data.map(i => i.currentDate).indexOf(end_novena);
//console.log(novena_index);
// slice from 1..3 - add 1 as the end index is not included
//const novenaData = data.slice(index, novena_index + 1);
//console.log(novenaData);



class Controller {
  // getting all data
  async getAllData() {
    // return all data
    return new Promise((resolve, _) => resolve(data));
  }

  // getting a single data
  async getSingleData(id) {
    return new Promise((resolve, reject) => {
      // get the data
      let singleData = data.find((Y) => Y.id === id);

      if (singleData) {
        // return the data
        resolve(singleData);
      } else {
        // return an error
        reject(`Object with id ${id} not found `);
      }
    });
  }
//
 // getting a novena data
 async getNovenaData() {
  return new Promise((resolve, reject) => {
    // get the data
   // slice from 1..3 - add 1 as the end index is not included
const novenaData = data.slice(index, novena_index + 1);

    if (novenaData) {
      // return the data
      resolve(novenaData);
    } else {
      // return an error
      reject(`Object Novena  not found `);
    }
  });
}
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
    return todayIn.currentDate == today; });
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
    return yesterdayIn.currentDate == yesterday; });
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
    return tomorrowIn.currentDate == tomorrow; });
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
  
  // add below
}
module.exports = Controller;