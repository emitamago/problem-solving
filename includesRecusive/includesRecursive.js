
/**take array, target, index. 
 * return boolean if target is in array. Recursive solution */

function includesRecursive(array, target, index=0){
    if(index === array.length) return false;
    if(array[index]===target) return true;
    if(array[index] !== target) return includesRecursive(array, target, index+1)
}

module.exports = includesRecursive;