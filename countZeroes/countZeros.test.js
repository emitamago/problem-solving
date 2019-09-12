const countZeros = require("./countZeros")

describe("countZeros", function() {
    it("it will return count of zero", function() {
      expect(countZeroes([1,1,1,1,0,0])).toEqual(2);
      // expect(countZeroes([1,0,0,0,0])).toEqual(4);
      // expect(countZeroes([0, 0, 0])).toEqual(3);
      // expect(countZeroes([1,1,1,1])).toEqual();

    });
  })

  