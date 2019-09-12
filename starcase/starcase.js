/**Staircase dynamic programming solution */

/**Take n number of staircase, 1,2 or 3 steps allowed. 
 * Return how many possible ways to climb bottom to top*/

function staircase(n) {
    var steps = [];
    //if n === 1
    steps[0] = 1;
    // if n === 2
    steps[1] = 2;
    // if n === 3
    steps[2] = 4;

    for(var i = 3; i < n; i++) {
        steps[i] = steps[i - 1] + steps[i - 2] + steps[i - 3];
    }
    return steps[n - 1];
}

module.exports = staircase;