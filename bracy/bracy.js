/**Take string consist of "[", "]", "{", "}" return if the string is valid 
 * combination and order
 */
function bracy(str){
    let bracyStack = [];
    for(let i = 0; i < str.length; i++){
        if( str[i]==="[" || str[i]==="{"){
            bracyStack.push(str[i]);
        }else if (str[i]==="]" && bracyStack[bracyStack.length-1]==="["){
            bracyStack.pop();
        }else if (str[i]==="}" && bracyStack[bracyStack.length-1]==="{"){
            bracyStack.pop();
        }else{
            return false;
        }
    }
    return bracyStack.length === 0;
}

module.exports = bracy;