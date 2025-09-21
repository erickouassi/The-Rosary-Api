//data202X.js
// For active year

const array1 = require("./years/data_rosary_2025.js");
const array2 = require("./years/data_rosary_2026.js");

const newArray = array1.concat(array2);


//console.log(newArray);

module.exports = newArray;
