const bracy = require("./bracy")

describe("minSubArray", function() {
    it("it will return length of sub string that no characters repeat", function() {
      expect(bracy("[[]]")).toEqual(true);
      expect(bracy("[{}]")).toEqual(true);
      expect(bracy("[]")).toEqual(true);
      expect(bracy("[[{[{}]}]]")).toEqual(true);
      expect(bracy("")).toEqual(true);
      expect(bracy("[}")).toEqual(false);
      expect(bracy("[")).toEqual(false);
      expect(bracy("[{]}")).toEqual(false);
      expect(bracy("}")).toEqual(false);
    });
  });