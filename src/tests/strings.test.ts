import { describe, expect, it } from "vitest";
import {
  countCharacters,
  firstUniqueCharacter,
  isPalindrome,
  isValidAnagram,
  longestCommonPrefix,
  reverseString
} from "../exercises/strings";

describe("string exercises", () => {
  it("reverseString reverses normal and empty strings", () => {
    expect(reverseString("abc")).toBe("cba");
    expect(reverseString("")).toBe("");
    expect(reverseString("racecar")).toBe("racecar");
  });

  it("isPalindrome is exact and case-sensitive", () => {
    expect(isPalindrome("level")).toBe(true);
    expect(isPalindrome("Level")).toBe(false);
    expect(isPalindrome("")).toBe(true);
    expect(isPalindrome("ab")).toBe(false);
  });

  it("countCharacters returns character frequencies", () => {
    expect(countCharacters("banana")).toEqual(
      new Map([
        ["b", 1],
        ["a", 3],
        ["n", 2]
      ])
    );
    expect(countCharacters("")).toEqual(new Map());
    expect(countCharacters("Aa")).toEqual(
      new Map([
        ["A", 1],
        ["a", 1]
      ])
    );
  });

  it("firstUniqueCharacter returns the first non-repeated character", () => {
    expect(firstUniqueCharacter("leetcode")).toBe("l");
    expect(firstUniqueCharacter("loveleetcode")).toBe("v");
    expect(firstUniqueCharacter("aabb")).toBeNull();
    expect(firstUniqueCharacter("")).toBeNull();
  });

  it("isValidAnagram uses exact case-sensitive character counts", () => {
    expect(isValidAnagram("listen", "silent")).toBe(true);
    expect(isValidAnagram("Listen", "silent")).toBe(false);
    expect(isValidAnagram("aabb", "baba")).toBe(true);
    expect(isValidAnagram("rat", "car")).toBe(false);
    expect(isValidAnagram("", "")).toBe(true);
  });

  it("longestCommonPrefix returns shared prefix or empty string", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
    expect(longestCommonPrefix(["same"])).toBe("same");
    expect(longestCommonPrefix([])).toBe("");
  });
});
