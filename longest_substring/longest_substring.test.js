const longestSubstring = require("./longest_substring")

describe("longestSubstring", function() {
    it("it will return length of sub string that no characters repeat", function() {
      expect(longestSubstring("aaa")).toEqual(1);
      expect(longestSubstring("abcabcbb")).toEqual(3);
      expect(longestSubstring("pwwkew")).toEqual(3);

    });
  });