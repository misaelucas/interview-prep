/**
 * Do not open this file before attempting the exercises.
 *
 * Reference solutions for interview problems.
 */

export function twoSumBruteForce(numbers: number[], target: number): [number, number] | null {
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }

  return null;
}
// Time: O(n^2). Space: O(1).
// Explanation: test every possible pair.

export function twoSumOptimized(numbers: number[], target: number): [number, number] | null {
  const indexByNumber = new Map<number, number>();

  for (let i = 0; i < numbers.length; i += 1) {
    const complement = target - numbers[i];
    const complementIndex = indexByNumber.get(complement);

    if (complementIndex !== undefined) {
      return [complementIndex, i];
    }

    indexByNumber.set(numbers[i], i);
  }

  return null;
}
// Time: O(n). Space: O(n).
// Explanation: Map turns previous-number lookup into constant-time work.

export function containsDuplicateBruteForce<T>(items: T[]): boolean {
  for (let i = 0; i < items.length; i += 1) {
    for (let j = i + 1; j < items.length; j += 1) {
      if (items[i] === items[j]) return true;
    }
  }

  return false;
}
// Time: O(n^2). Space: O(1).
// Explanation: compare every pair.

export function containsDuplicateOptimized<T>(items: T[]): boolean {
  const seen = new Set<T>();

  for (const item of items) {
    if (seen.has(item)) return true;
    seen.add(item);
  }

  return false;
}
// Time: O(n). Space: O(n).
// Explanation: Set stores values already seen.

export function validAnagramSort(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  return Array.from(a).sort().join("") === Array.from(b).sort().join("");
}
// Time: O(n log n). Space: O(n).
// Explanation: sorting both strings makes equal frequencies line up.

export function validAnagramMap(a: string, b: string): boolean {
  if (a.length !== b.length) return false;

  const counts = new Map<string, number>();

  for (const character of a) {
    counts.set(character, (counts.get(character) ?? 0) + 1);
  }

  for (const character of b) {
    const nextCount = (counts.get(character) ?? 0) - 1;
    if (nextCount < 0) return false;
    counts.set(character, nextCount);
  }

  return true;
}
// Time: O(n). Space: O(k).
// Explanation: character counts must match exactly.

export function validPalindrome(value: string): boolean {
  const normalized = value.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = normalized.length - 1;

  while (left < right) {
    if (normalized[left] !== normalized[right]) return false;
    left += 1;
    right -= 1;
  }

  return true;
}
// Time: O(n). Space: O(n).
// Explanation: normalize first, then compare from both ends.
