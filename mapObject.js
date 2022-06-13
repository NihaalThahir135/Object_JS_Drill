/*function mapObject(obj, cb) {
    Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
    http://underscorejs.org/#mapObject
}*/
function mapObjectFnc(objects={},key=0){
    if(!objects ){
        return [];
    }
    let array=Object.entries(objects);
    let output=[];
    for(let index in array){
        let a = array[index][1];
        if(typeof( a) ==='string'){
            let temp=(array[index][1] +' '+ key[1]);
            output.push(temp);
        }
        else{
            let temp=(array[index][1] + key[0]);
            output.push(temp);
        }
    }
    return(output);
}
module.exports=mapObjectFnc;

