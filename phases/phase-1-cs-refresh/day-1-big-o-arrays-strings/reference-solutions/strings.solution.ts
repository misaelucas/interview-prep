/**
 * Do not open this file before attempting the exercises.
 *
 * Reference solutions for string exercises.
 */

export function reverseString(value: string): string {
  return Array.from(value).reverse().join("");
}
// Time: O(n). Space: O(n).
// Explanation: strings are immutable, so reversing creates new storage.

export function isPalindrome(value: string): boolean {
  let left = 0;
  let right = value.length - 1;

  while (left < right) {
    if (value[left] !== value[right]) return false;
    left += 1;
    right -= 1;
  }

  return true;
}
// Time: O(n). Space: O(1).
// Explanation: compare matching characters from both ends.

export function countCharacters(value: string): Map<string, number> {
  const counts = new Map<string, number>();

  for (const character of value) {
    counts.set(character, (counts.get(character) ?? 0) + 1);
  }

  return counts;
}
// Time: O(n). Space: O(k), where k is unique character count.
// Explanation: Map stores a frequency for each distinct character.

export function firstUniqueCharacter(value: string): string | null {
  const counts = countCharacters(value);

  for (const character of value) {
    if (counts.get(character) === 1) return character;
  }

  return null;
}
// Time: O(n). Space: O(k).
// Explanation: count first, then scan original order.

export function isValidAnagram(a: string, b: string): boolean {
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
// Explanation: matching frequencies prove the strings are anagrams.

export function longestCommonPrefix(words: string[]): string {
  if (words.length === 0) return "";

  let prefix = words[0];

  for (const word of words.slice(1)) {
    while (!word.startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }

  return prefix;
}
// Time: O(n * m), where m is prefix length. Space: O(1).
// Explanation: shrink the candidate prefix until every word matches it.
