# Day 1 TypeScript Examples

These examples are complete and educational. They are separate from the exercise files.

## O(1) Access

```ts
function getFirst<T>(items: T[]): T | undefined {
  // Direct index access is O(1).
  return items[0];
}
```

## O(n) Search

```ts
function includesValue(numbers: number[], target: number): boolean {
  // Worst case: scan every item once.
  for (const number of numbers) {
    if (number === target) return true;
  }

  return false;
}
```

## O(n²) Duplicate Detection

```ts
function hasDuplicateBruteForce<T>(items: T[]): boolean {
  // Compare every item with every later item.
  for (let i = 0; i < items.length; i += 1) {
    for (let j = i + 1; j < items.length; j += 1) {
      if (items[i] === items[j]) return true;
    }
  }

  return false;
}
```

## O(n) Duplicate Detection With Set

```ts
function hasDuplicateWithSet<T>(items: T[]): boolean {
  const seen = new Set<T>();

  for (const item of items) {
    if (seen.has(item)) return true;
    seen.add(item);
  }

  return false;
}
```

## Character Count With Map

```ts
function countCharacters(value: string): Map<string, number> {
  const counts = new Map<string, number>();

  for (const character of value) {
    counts.set(character, (counts.get(character) ?? 0) + 1);
  }

  return counts;
}
```

## Valid Anagram With Sorting

```ts
function validAnagramSort(a: string, b: string): boolean {
  if (a.length !== b.length) return false;

  const sortedA = a.split("").sort().join("");
  const sortedB = b.split("").sort().join("");

  return sortedA === sortedB;
}
```

## Valid Anagram With Map

```ts
function validAnagramMap(a: string, b: string): boolean {
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
```

## Palindrome With Two Pointers

```ts
function isPalindrome(value: string): boolean {
  let left = 0;
  let right = value.length - 1;

  while (left < right) {
    if (value[left] !== value[right]) return false;
    left += 1;
    right -= 1;
  }

  return true;
}
```

## Two Sum Brute Force

```ts
function twoSumBruteForce(numbers: number[], target: number): [number, number] | null {
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }

  return null;
}
```

## Two Sum Optimized With Map

```ts
function twoSumOptimized(numbers: number[], target: number): [number, number] | null {
  const indexByNumber = new Map<number, number>();

  for (let i = 0; i < numbers.length; i += 1) {
    const current = numbers[i];
    const complement = target - current;
    const complementIndex = indexByNumber.get(complement);

    if (complementIndex !== undefined) return [complementIndex, i];

    indexByNumber.set(current, i);
  }

  return null;
}
```
