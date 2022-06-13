// function pairs(obj) { //Done
//     // Convert an object into a list of [key, value] pairs.
//     // http://underscorejs.org/#pairs
// }

function pairs(object={}){
    if(!object){
        return {};
    }
    let output=[];
    for(let index in object){
        let value=[index , object[index]];
        output.push(value);
    } 
    return output;
}
module.exports=pairs;