const dataMysteries = require("./data_rosary_mysteries");

class ControllerMysteries {

	/* All the the mysteries */

	// return all the mysteries
	async getMysteriesData() {
		return new Promise((resolve, _) => resolve(dataMysteries));
	}

	// getting Joyful data
	async getJoyfulData() {
		return new Promise((resolve, reject) => {
			// get the data
			let joyfulData = dataMysteries.filter(function(JoyfulIn) {
				return JoyfulIn.group_by == "Joyful";
			});
			// console.log(joyfulData);
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
				return SorrowfulIn.group_by == "Sorrowful";
			});
			// console.log(sorrowfulData);
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
				return GloriousIn.group_by == "Glorious";
			});
			// console.log(gloriousData);
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
				return LuminousIn.group_by == "Luminous";
			});
			// console.log(luminousData);
			if (luminousData) {
				// return the data
				resolve(luminousData);
			} else {
				// return an error
				reject(`Luminous object not found `);
			}
		});
	}


	// add above
}
module.exports = ControllerMysteries;