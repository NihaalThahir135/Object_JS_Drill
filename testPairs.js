/*function pairs(obj) {
     Convert an object into a list of [key, value] pairs.
     http://underscorejs.org/#pairs
}*/
let objects=require('./inventory');
let pairsFnc=require('../pairs');
let result=pairsFnc(objects);
console.log(result);