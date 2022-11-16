// Logic behind the functionalities
//import jstz from 'jstz';
//var jstz = require('jstz');
//const timezone = jstz.determine();
//var localTime = jstz.determine().name();
//console.log(localTime);
//var serverTime = "Africa/Abidjan";

// current datetime string in America/Chicago timezone
//let local_datetime_str = new Date().toLocaleString("en-US", { timeZone: localTime });

// create new Date object
//let date_local = new Date(local_datetime_str);
//let d = new Date(local_datetime_str);
let d = new Date();

// Months
let allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let monthTxt = allMonths[d.getMonth()];  // May

// year as (YYYY) format
let year = d.getFullYear();

// month as (MM) format
let month = ("0" + (d.getMonth() + 1)).slice(-2);

// date as (DD) format
let date = ("0" + d.getDate()).slice(-2);

// date time in YYYY-MM-DD format
//let date_time = year + "-" + month + "-" + date;
// "2021-03-22"
//console.log(date_time);

//
let today =  monthTxt +' '+ date +', '+ year;   //  -> May 18, 2022
//console.log(today);

//
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

//const data = require("./data");
const data = require("./data_rosary_2022");
const dataMysteries = require("./data_rosary_mysteries");
const dataPrayers = require("./data_rosary_prayers");
const dataDays = require("./data_rosary_days");
const data54Days = require("./data_rosary_54_days");

const index = data.map(i => i.currentDate).indexOf(today);
//console.log(index);
const novena_index = data.map(i => i.currentDate).indexOf(end_novena);
//console.log(novena_index);




class Controller {
  // getting all data
  async getAllData() {
    // return all data
    return new Promise((resolve, _) => resolve(data));
  }
//
async getMysteriesData() {
  // return all data
  return new Promise((resolve, _) => resolve(dataMysteries));
}

//
  async getPrayersData() {
  // return all data
  return new Promise((resolve, _) => resolve(dataPrayers));
}
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
const start = indexNovena ;
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
  //
   // getting Joyful data
   async getJoyfulData() {
    return new Promise((resolve, reject) => {
      // get the data
	  let joyfulData = dataMysteries.filter(function(JoyfulIn) {
    return JoyfulIn.group_by == "Joyful"; });
   // console.log(joyfulData);
//
      if (joyfulData) {
        // return the data
        resolve(joyfulData);
      } else {
        // return an error
        reject(`Joyful object not found `);
      }
    });
  }
  
   // getting Sorrowful data
  async getSorrowfulData() {
    return new Promise((resolve, reject) => {
      // get the data
	  let sorrowfulData = dataMysteries.filter(function(SorrowfulIn) {
    return SorrowfulIn.group_by == "Sorrowful"; });
   // console.log(sorrowfulData);
//
      if (sorrowfulData) {
        // return the data
        resolve(sorrowfulData);
      } else {
        // return an error
        reject(`Sorrowful object not found `);
      }
    });
  }
   // getting Glorious data
  async getGloriousData() {
    return new Promise((resolve, reject) => {
      // get the data
	  let gloriousData = dataMysteries.filter(function(GloriousIn) {
    return GloriousIn.group_by == "Glorious"; });
   // console.log(gloriousData);
//
      if (gloriousData) {
        // return the data
        resolve(gloriousData);
      } else {
        // return an error
        reject(`Glorious object not found `);
      }
    });
  }
   // getting Luminous data
  async getLuminousData() {
    return new Promise((resolve, reject) => {
      // get the data
	  let luminousData = dataMysteries.filter(function(LuminousIn) {
    return LuminousIn.group_by == "Luminous"; });
   // console.log(luminousData);
//
      if (luminousData) {
        // return the data
        resolve(luminousData);
      } else {
        // return an error
        reject(`Luminous object not found `);
      }
    });
  }
  // add below
  // getting Sunday data
  async getSundayData() {
    return new Promise((resolve, reject) => {
      // get the data
	  let sundayData = dataDays.filter(function(SundayIn) {
    return SundayIn.date == "Sunday"; });
   // console.log(sundayData);
//
      if (sundayData) {
        // return the data
        resolve(sundayData);
      } else {
        // return an error
        reject(`Sunday object not found `);
      }
    });
  }
  
  // getting Monday data
  async getMondayData() {
    return new Promise((resolve, reject) => {
      // get the data
	  let mondayData = dataDays.filter(function(MondayIn) {
    return MondayIn.date == "Monday"; });
   // console.log(mondayData);
//
      if (mondayData) {
        // return the data
        resolve(mondayData);
      } else {
        // return an error
        reject(`Monday object not found `);
      }
    });
  }
  
  // getting Tuesday data
  async getTuesdayData() {
    return new Promise((resolve, reject) => {
      // get the data
	  let tuesdayData = dataDays.filter(function(TuesdayIn) {
    return TuesdayIn.date == "Tuesday"; });
   // console.log(tuesdayData);
//
      if (tuesdayData) {
        // return the data
        resolve(tuesdayData);
      } else {
        // return an error
        reject(`Tuesday object not found `);
      }
    });
  }
  
  // getting Wednesday data
  async getWednesdayData() {
    return new Promise((resolve, reject) => {
      // get the data
	  let wednesdayData = dataDays.filter(function(WednesdayIn) {
    return WednesdayIn.date == "Wednesday"; });
   // console.log(wednesdayData);
//
      if (wednesdayData) {
        // return the data
        resolve(wednesdayData);
      } else {
        // return an error
        reject(`Wednesday object not found `);
      }
    });
  }
  
  // getting Thursday data
  async getThursdayData() {
    return new Promise((resolve, reject) => {
      // get the data
	  let thursdayData = dataDays.filter(function(ThursdayIn) {
    return ThursdayIn.date == "Thursday"; });
   // console.log(thursdayData);
//
      if (thursdayData) {
        // return the data
        resolve(thursdayData);
      } else {
        // return an error
        reject(`Thursday object not found `);
      }
    });
  }
  
  // getting Friday data
  async getFridayData() {
    return new Promise((resolve, reject) => {
      // get the data
	  let fridayData = dataDays.filter(function(FridayIn) {
    return FridayIn.date == "Friday"; });
   // console.log(fridayData);
//
      if (fridayData) {
        // return the data
        resolve(fridayData);
      } else {
        // return an error
        reject(`Friday object not found `);
      }
    });
  }
  
  // getting Saturday data
  async getSaturdayData() {
    return new Promise((resolve, reject) => {
      // get the data
	  let saturdayData = dataDays.filter(function(SaturdayIn) {
    return SaturdayIn.date == "Saturday"; });
   // console.log(saturdayData);
//
      if (saturdayData) {
        // return the data
        resolve(saturdayData);
      } else {
        // return an error
        reject(`Saturday object not found `);
      }
    });
  }
 // getting 54 days data
 async getDay54Data() {
  // return all data
  return new Promise((resolve, _) => resolve(data54Days));
}
//
  // add above
}
module.exports = Controller;