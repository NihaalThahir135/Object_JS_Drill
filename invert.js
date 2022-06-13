/*function invert(obj) {
     Returns a copy of the object where the keys have become the values and the values the keys.
     Assume that all of the object's values will be unique and string serializable.
     http://underscorejs.org/#invert
}*/
function invertFnc(object={}){
    if(!object){
        return {};
    }
    let newArray={};
    for(let keys in object){
        let newValue=object[keys];
        newArray[newValue]=keys;
    }
    return(newArray);
}
module.exports=invertFnc;