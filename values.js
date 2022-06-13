// function values(obj) { //Done
//     // Return all of the values of the object's own properties.
//     // Ignore functions
//     // http://underscorejs.org/#values
// }
function values(object){
    if(!object){
        return [];
    }
    let output=Object.entries(object).map((args)=>args[1]);
    return output;
}
module.exports=values;