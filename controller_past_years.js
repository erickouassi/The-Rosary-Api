const ActiveData = require("./years/data_rosary_2024.js");   // For this year (Active)
const data2023years = require("./years/data_rosary_2023.js");
//const data2024years = require("./years/data_rosary_2024.js");





class ControllerPastYears {

	/* ------ */
	// getting all data for current year 
    async getAllData() {
        return new Promise((resolve, _) => resolve(ActiveData));
      }

 async get2023Year() {
    return new Promise((resolve, _) => resolve(data2023years));
  }
	
  
  
  // add above
}
module.exports = ControllerPastYears;