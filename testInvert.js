/*function invert(obj) {
     Returns a copy of the object where the keys have become the values and the values the keys.
     Assume that all of the object's values will be unique and string serializable.
     http://underscorejs.org/#invert
}*/
let inventory=require('./inventory');
let invertFnc=require('../invert');
let result=invertFnc(inventory);
console.log(result);