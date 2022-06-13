/*function mapObject(obj, cb) {
    Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
    http://underscorejs.org/#mapObject
}*/
let objects=require('./inventory');
let mapObjectFnc=require('../mapObject');
let key=[5,'H'];
let result=mapObjectFnc(objects,key);
console.log(result);