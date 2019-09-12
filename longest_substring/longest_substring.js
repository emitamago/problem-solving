
/**take string return longest substring length that no character repeats */
function longestSubstring(string){
    const visited = new Set();
    let left = 0;
    let right = 0;
    let result = 0;
  
    // sliding window solution
    while (right < string.length) {
        // set character in question as char pointed by right 
        const currentChar = string[right]
       
        // check if current char is in visited set. 
      if (!visited.has(currentChar)) {

        // add current char to visited 
        visited.add(currentChar);
       
        // increment right pointer by one
        right++;

      } else {

         // update result --- take longer count previous result or current size of set
        result = Math.max(result, visited.size);

        // if current char is in visited, delete the most left char
        visited.delete(string[left]);
        
        // increment left pointer by one
        left++;
      }

    }
    return result;
};


module.exports = longestSubstring