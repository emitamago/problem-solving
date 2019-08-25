const twoSum = require("./twoSum")

describe("twoSum", function() {
    it("Return indices of the two numbers such that they add up to target", function() {
      expect(twoSum([1,2,3], 5)).toEqual([1,2]);
      expect(twoSum([3,4,5,1,10,14,15,3, 7], 5)).toEqual([1,3]);

    });
  });