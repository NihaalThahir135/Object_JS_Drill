/*function defaults(obj, defaultProps) {
     Fill in undefined properties that match properties on the `defaultProps` parameter object.
     Return `obj`.
     http://underscorejs.org/#defaults
}*/
function defaultsFnc(object,defaultProps){
    if(!object){
        return {};
    }
    for(let keys in defaultProps){
        if(!object.hasOwnProperty(keys)){
            object[keys]=defaultProps[keys];
        }
    }
    return object;
}
module.exports=defaultsFnc;