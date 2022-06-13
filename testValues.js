// function values(obj) { //Done
//     // Return all of the values of the object's own properties.
//     // Ignore functions
//     // http://underscorejs.org/#values
// }
let objects=require('./inventory');
let values=require('../values');
let result=values(objects);
console.log(result);