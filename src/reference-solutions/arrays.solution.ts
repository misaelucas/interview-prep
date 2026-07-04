/**
 * Do not open before attempting the exercises.
 *
 * Reference solutions for array exercises.
 */

export function findMax(numbers: number[]): number | null {
  if (numbers.length === 0) return null;

  let max = numbers[0];
  for (const number of numbers) {
    if (number > max) max = number;
  }

  return max;
}
// Time: O(n). Space: O(1).
// Explanation: scan once and keep the largest value seen.

export function findMin(numbers: number[]): number | null {
  if (numbers.length === 0) return null;

  let min = numbers[0];
  for (const number of numbers) {
    if (number < min) min = number;
  }

  return min;
}
// Time: O(n). Space: O(1).
// Explanation: scan once and keep the smallest value seen.

export function reverseArray<T>(items: T[]): T[] {
  const result: T[] = [];

  for (let i = items.length - 1; i >= 0; i -= 1) {
    result.push(items[i]);
  }

  return result;
}
// Time: O(n). Space: O(n).
// Explanation: create a reversed copy without mutating the original.

export function removeDuplicates<T>(items: T[]): T[] {
  const seen = new Set<T>();
  const result: T[] = [];

  for (const item of items) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }

  return result;
}
// Time: O(n). Space: O(n).
// Explanation: Set gives fast duplicate checks while result preserves order.

export function hasDuplicateBruteForce<T>(items: T[]): boolean {
  for (let i = 0; i < items.length; i += 1) {
    for (let j = i + 1; j < items.length; j += 1) {
      if (items[i] === items[j]) return true;
    }
  }

  return false;
}
// Time: O(n^2). Space: O(1).
// Explanation: compare every pair without extra memory.

export function hasDuplicateOptimized<T>(items: T[]): boolean {
  const seen = new Set<T>();

  for (const item of items) {
    if (seen.has(item)) return true;
    seen.add(item);
  }

  return false;
}
// Time: O(n). Space: O(n).
// Explanation: trade memory for faster lookup.

export function mergeSortedArrays(a: number[], b: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      result.push(a[i]);
      i += 1;
    } else {
      result.push(b[j]);
      j += 1;
    }
  }

  while (i < a.length) {
    result.push(a[i]);
    i += 1;
  }

  while (j < b.length) {
    result.push(b[j]);
    j += 1;
  }

  return result;
}
// Time: O(n + m). Space: O(n + m).
// Explanation: each input item is copied once.

export function moveZerosToEnd(numbers: number[]): number[] {
  const result: number[] = [];
  let zeroCount = 0;

  for (const number of numbers) {
    if (number === 0) {
      zeroCount += 1;
    } else {
      result.push(number);
    }
  }

  for (let i = 0; i < zeroCount; i += 1) {
    result.push(0);
  }

  return result;
}
// Time: O(n). Space: O(n).
// Explanation: keep non-zero order, then append the counted zeros.

export function rotateArray(numbers: number[], k: number): number[] {
  if (numbers.length === 0) return [];

  const steps = k % numbers.length;
  if (steps === 0) return [...numbers];

  return [...numbers.slice(numbers.length - steps), ...numbers.slice(0, numbers.length - steps)];
}
// Time: O(n). Space: O(n).
// Explanation: normalize k, then split and join two slices.
