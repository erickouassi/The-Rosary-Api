const data54Days = require("./data_rosary_54_days");



class Controller54Days {

	/* All 54 Days */

 async getDay54Data() {
    // return all data
    return new Promise((resolve, _) => resolve(data54Days));
  }
	// add above
}
module.exports = Controller54Days;