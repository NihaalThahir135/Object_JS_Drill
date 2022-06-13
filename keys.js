/*function keys(obj) {
     Retrieve all the names of the object's properties.
     Return the keys as strings in an array.
     Based on http://underscorejs.org/#keys
}*/
function keys(object={}){
    if(!object){
        return []; 
    }
    let output=Object.entries(object).map((keys)=>keys[0]);
    return output;
}
module.exports=keys;