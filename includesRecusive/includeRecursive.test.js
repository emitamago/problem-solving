const includesRecursive = require("./includesRecursive")

describe("minSubArray", function() {
    it("it will return length of sub string that no characters repeat", function() {
      expect(includesRecursive([1,2,3], 3)).toEqual(true);
      expect(includesRecursive([1,2,"cat"], "cat")).toEqual(true);
      expect(includesRecursive(["cat","cat","cat"], "cat")).toEqual(true);
      expect(includesRecursive(["dog"], "dog")).toEqual(true);
      expect(includesRecursive(["cat","cat","cat"], 1)).toEqual(false);
      expect(includesRecursive(["dog"], 1)).toEqual(false);
      expect(includesRecursive([], 1)).toEqual(false);
    });
  })