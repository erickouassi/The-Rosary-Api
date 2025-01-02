const dataFr = require("./french/fr_data_rosaire_2025");   // For active year (this year)
const an2023Data = require("./french/fr_data_rosaire_2023.js");


class ControllerFrench {

	// getting all data for current year in french
async getAllDataFr() {
    return new Promise((resolve, _) => resolve(dataFr));
  }


  async get2023Ans() {
    return new Promise((resolve, _) => resolve(an2023Data));
  }
	// add above
}
module.exports = ControllerFrench;
