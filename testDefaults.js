/*function defaults(obj, defaultProps) {
     Fill in undefined properties that match properties on the `defaultProps` parameter object.
     Return `obj`.
     http://underscorejs.org/#defaults
}*/
// const getDefaults=require('../defaults');
// //const { testObject } = require('../objects.js');
// const object=require('./inventory');
// let hidden = {secret_identity: 'batman', super_powers: 'very rich'};

// console.log(getDefaults(testObject, hidden));
// console.log(getDefaults({first: "David" }, {first: "Mark", last: "Beckham"}));

let object=require('./inventory');
let defaultsFnc=require('../defaults');
let defaultProps = {secret_identity: 'batman', super_powers: 'very rich'};
let result=defaultsFnc(object,defaultProps);
console.log(result);
console.log(defaultsFnc({ name: 'Robin', age: 26, location: 'Gotham' },defaultProps));
//{ name: 'Bruce Wayne', age: 36, location: 'Gotham' };