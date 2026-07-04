import { describe, expect, it } from "vitest";
import {
  containsDuplicateBruteForce,
  containsDuplicateOptimized,
  twoSumBruteForce,
  twoSumOptimized,
  validAnagramMap,
  validAnagramSort,
  validPalindrome
} from "../exercises/problems";

describe("interview problems", () => {
  it("twoSumBruteForce returns indexes or null", () => {
    expect(twoSumBruteForce([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSumBruteForce([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSumBruteForce([-3, 4, 3, 90], 0)).toEqual([0, 2]);
    expect(twoSumBruteForce([1, 2, 3], 10)).toBeNull();
  });

  it("twoSumOptimized returns indexes or null", () => {
    expect(twoSumOptimized([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSumOptimized([3, 3], 6)).toEqual([0, 1]);
    expect(twoSumOptimized([-1, -2, -3, -4], -6)).toEqual([1, 3]);
    expect(twoSumOptimized([], 1)).toBeNull();
  });

  it("containsDuplicateBruteForce detects duplicates", () => {
    expect(containsDuplicateBruteForce([1, 2, 3])).toBe(false);
    expect(containsDuplicateBruteForce([1, 2, 1])).toBe(true);
    expect(containsDuplicateBruteForce(["a", "A"])).toBe(false);
    expect(containsDuplicateBruteForce([])).toBe(false);
  });

  it("containsDuplicateOptimized detects duplicates", () => {
    expect(containsDuplicateOptimized([1, 2, 3])).toBe(false);
    expect(containsDuplicateOptimized([1, 2, 1])).toBe(true);
    expect(containsDuplicateOptimized(["x", "y", "x"])).toBe(true);
    expect(containsDuplicateOptimized([])).toBe(false);
  });

  it("validAnagramSort checks exact anagrams by sorting", () => {
    expect(validAnagramSort("race", "care")).toBe(true);
    expect(validAnagramSort("Race", "care")).toBe(false);
    expect(validAnagramSort("aabb", "baba")).toBe(true);
    expect(validAnagramSort("rat", "car")).toBe(false);
  });

  it("validAnagramMap checks exact anagrams with character counts", () => {
    expect(validAnagramMap("race", "care")).toBe(true);
    expect(validAnagramMap("Race", "care")).toBe(false);
    expect(validAnagramMap("aabb", "baba")).toBe(true);
    expect(validAnagramMap("rat", "car")).toBe(false);
    expect(validAnagramMap("", "")).toBe(true);
  });

  it("validPalindrome ignores case and non-alphanumeric characters", () => {
    expect(validPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    expect(validPalindrome("race a car")).toBe(false);
    expect(validPalindrome("")).toBe(true);
    expect(validPalindrome("0P")).toBe(false);
  });
});
