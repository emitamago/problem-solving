const staircase = require("./starcase")

describe("staircase", function() {
    it("it will return all possibility ", function() {
      expect(staircase(4)).toEqual(7);
      expect(staircase(10)).toEqual(274);
      expect(staircase(1)).toEqual(1);
      expect(staircase(45)).toEqual(501774317241);
      expect(staircase(50)).toEqual(10562230626642);
    });
  });




