// controller.js
// Logic behind the functionalities
let d = new Date();
//let currentHour = d.getHours(); // 18
//let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
//let oneJan = new Date(d.getFullYear(), 0, 1);
//let numberOfDays = Math.floor((d - oneJan) / (24 * 60 * 60 * 1000));
//let weekNumber = Math.ceil((d.getDay() + 1 + numberOfDays) / 7);  // 37
let month = allMonths[d.getMonth()];  // May
//let day = weekday[d.getDay()];   // Monday
let yyyy = d.getFullYear();  // 2022
let dd = String(d.getDate()).padStart(1, '0'); // 17

let today = month +' '+ dd +', '+ yyyy;   //  -> October 22, 2022
//console.log(today);

//const data = require("./data");
const data = require("./data2022");

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

      if (todayData) {
        // return the data
        resolve(todayData);
      } else {
        // return an error
        reject(`Object random  not found `);
      }
    });
  }
  
  // add below
}
module.exports = Controller;