const dataDays = require("./data_rosary_days");


class ControllerDay {

	/* All the 7 days */

	// getting Sunday data
	async getSundayData() {
		return new Promise((resolve, reject) => {
			// get the data
			let sundayData = dataDays.filter(function(SundayIn) {
				return SundayIn.date == "Sunday";
			});
			// console.log(sundayData);
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
				return MondayIn.date == "Monday";
			});
			// console.log(mondayData);
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
				return TuesdayIn.date == "Tuesday";
			});
			// console.log(tuesdayData);
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
				return WednesdayIn.date == "Wednesday";
			});
			// console.log(wednesdayData);
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
				return ThursdayIn.date == "Thursday";
			});
			// console.log(thursdayData);
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
				return FridayIn.date == "Friday";
			});
			// console.log(fridayData);
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
				return SaturdayIn.date == "Saturday";
			});
			// console.log(saturdayData);
			if (saturdayData) {
				// return the data
				resolve(saturdayData);
			} else {
				// return an error
				reject(`Saturday object not found `);
			}
		});
	}


	// add above
}
module.exports = ControllerDay;