import { describe, expect, it } from "vitest";
import {
  findMax,
  findMin,
  hasDuplicateBruteForce,
  hasDuplicateOptimized,
  mergeSortedArrays,
  moveZerosToEnd,
  removeDuplicates,
  reverseArray,
  rotateArray
} from "../exercises/arrays";

describe("array exercises", () => {
  it("findMax returns the largest number or null for empty input", () => {
    expect(findMax([3, 1, 9, 2])).toBe(9);
    expect(findMax([-10, -3, -20])).toBe(-3);
    expect(findMax([])).toBeNull();
  });

  it("findMin returns the smallest number or null for empty input", () => {
    expect(findMin([3, 1, 9, 2])).toBe(1);
    expect(findMin([-10, -3, -20])).toBe(-20);
    expect(findMin([])).toBeNull();
  });

  it("reverseArray returns a reversed copy without mutating input", () => {
    const input = [1, 2, 3];
    expect(reverseArray(input)).toEqual([3, 2, 1]);
    expect(input).toEqual([1, 2, 3]);
    expect(reverseArray<string>([])).toEqual([]);
  });

  it("removeDuplicates keeps first occurrence order", () => {
    expect(removeDuplicates([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
    expect(removeDuplicates(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
    expect(removeDuplicates([])).toEqual([]);
  });

  it("hasDuplicateBruteForce detects duplicates with normal and edge cases", () => {
    expect(hasDuplicateBruteForce([1, 2, 3])).toBe(false);
    expect(hasDuplicateBruteForce([1, 2, 1])).toBe(true);
    expect(hasDuplicateBruteForce([-1, 0, -1])).toBe(true);
    expect(hasDuplicateBruteForce([])).toBe(false);
  });

  it("hasDuplicateOptimized detects duplicates with normal and edge cases", () => {
    expect(hasDuplicateOptimized([1, 2, 3])).toBe(false);
    expect(hasDuplicateOptimized([1, 2, 1])).toBe(true);
    expect(hasDuplicateOptimized(["A", "a"])).toBe(false);
    expect(hasDuplicateOptimized([])).toBe(false);
  });

  it("mergeSortedArrays merges sorted arrays including negatives and empty arrays", () => {
    expect(mergeSortedArrays([1, 3], [2, 4])).toEqual([1, 2, 3, 4]);
    expect(mergeSortedArrays([-3, -1, 5], [-2, 0, 4])).toEqual([-3, -2, -1, 0, 4, 5]);
    expect(mergeSortedArrays([], [1, 2])).toEqual([1, 2]);
    expect(mergeSortedArrays([1, 2], [])).toEqual([1, 2]);
  });

  it("moveZerosToEnd keeps non-zero order and handles all-zero input", () => {
    expect(moveZerosToEnd([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
    expect(moveZerosToEnd([0, 0])).toEqual([0, 0]);
    expect(moveZerosToEnd([1, 2, 3])).toEqual([1, 2, 3]);
    expect(moveZerosToEnd([])).toEqual([]);
  });

  it("rotateArray rotates right by k steps", () => {
    expect(rotateArray([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
    expect(rotateArray([1, 2, 3], 3)).toEqual([1, 2, 3]);
    expect(rotateArray([1, 2, 3], 4)).toEqual([3, 1, 2]);
    expect(rotateArray([], 3)).toEqual([]);
  });
});
