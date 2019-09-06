
/**Take number of array and number.
 *  Return the minimal length of a contiguous subarray of which the sum is greater
 *  than or equal to the integer passed to the function. 
 * If there isn’t one, return 0 instead.
  */
function minSubArrayLen(numsArray, sum){
    // current total 
    let total = 0;

    // current min length of subarray
    let min = Infinity;

    // left pointer
    let start = 0;

    // right pointer
    let end = 0;

    while(start < numsArray.length){
        // if current total is less than sum and end is in array add element to total
        if(total < sum && end < numsArray.length){
            total += numsArray[end];
            end++;
        
        // if current total is greater than or equal to sum, compare current min length
        // and current end - current start, and assign whichever smaller
        // And subtract first element
        }else if (total >= sum){
            min = Math.min(min, end - start);
            total -= numsArray[start];
            start++;

        // when end reached end of array and still total is less than sum
        // break 
        }else{
            break;
        }  
    }
    
    return min  === Infinity ? 0 : min
}

module.exports = minSubArrayLen;