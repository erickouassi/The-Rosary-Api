const dataPrayers = require("./data_rosary_prayers");

class ControllerPrayers {

	/* All Basic Prayers */

	async getPrayersData() {
		return new Promise((resolve, _) => resolve(dataPrayers));
	}


	// add above
}
module.exports = ControllerPrayers;