/*function keys(obj) {
     Retrieve all the names of the object's properties.
     Return the keys as strings in an array.
     Based on http://underscorejs.org/#keys
}*/

let object=require('./inventory');
let keys=require('../keys');
let result=keys(object);
console.log(result);