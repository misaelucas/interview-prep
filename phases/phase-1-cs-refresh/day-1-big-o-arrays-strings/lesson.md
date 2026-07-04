# Lesson: Big O, Arrays, Strings, Set/Map Optimization

## 1. What Big O Means

Big O describes the cost of code as input grows. It is not mainly about exact milliseconds. It is about how runtime or memory changes when the input becomes much larger.

### O(1): Constant Time

Plain English: the code does the same amount of work no matter how large the input is.

```ts
function first<T>(items: T[]): T | undefined {
  return items[0];
}
```

Time complexity: `O(1)`

Space complexity: `O(1)`

Interview explanation: "This is constant time because accessing an array index does not require scanning the whole array."

### O(n): Linear Time

Plain English: the work grows in direct proportion to the input.

```ts
function contains(numbers: number[], target: number): boolean {
  for (const number of numbers) {
    if (number === target) return true;
  }

  return false;
}
```

Time complexity: `O(n)`

Space complexity: `O(1)`

Interview explanation: "In the worst case, I may need to check every element once."

### O(n²): Quadratic Time

Plain English: each item is compared against many other items, usually through nested loops.

```ts
function hasDuplicateBruteForce<T>(items: T[]): boolean {
  for (let i = 0; i < items.length; i += 1) {
    for (let j = i + 1; j < items.length; j += 1) {
      if (items[i] === items[j]) return true;
    }
  }

  return false;
}
```

Time complexity: `O(n^2)`

Space complexity: `O(1)`

Interview explanation: "The nested loops compare pairs of elements, so the amount of work grows quadratically."

### O(log n): Logarithmic Time

Plain English: each step removes a large part of the remaining search space.

```ts
function binarySearch(numbers: number[], target: number): number {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (numbers[middle] === target) return middle;
    if (numbers[middle] < target) left = middle + 1;
    else right = middle - 1;
  }

  return -1;
}
```

Time complexity: `O(log n)`

Space complexity: `O(1)`

Interview explanation: "Because the array is sorted, each comparison eliminates half of the remaining candidates."

### O(n log n): Linearithmic Time

Plain English: common in efficient sorting algorithms. The input is repeatedly divided, and each level processes many items.

```ts
function sortedCopy(numbers: number[]): number[] {
  return [...numbers].sort((a, b) => a - b);
}
```

Time complexity: usually `O(n log n)`

Space complexity: usually `O(n)` for the copied array, with engine-specific sorting details.

Interview explanation: "Sorting is typically `O(n log n)`, so if I sort before solving, my total runtime is at least `O(n log n)`."

## 2. Arrays

Arrays are indexed ordered collections. They are good when order matters and when you need fast access by index.

```ts
const numbers = [10, 20, 30];
const second = numbers[1]; // O(1)
```

Access by index is `O(1)` because the index points directly to a position.

Search by value is `O(n)` because the value could be anywhere.

```ts
function indexOfValue(numbers: number[], target: number): number {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === target) return i;
  }

  return -1;
}
```

`push` and `pop` are usually `O(1)` because they work at the end of the array.

```ts
const items = [1, 2];
items.push(3);
items.pop();
```

`shift` and `unshift` are `O(n)` because existing elements must usually move.

```ts
const queue = [2, 3];
queue.unshift(1); // moves existing elements
queue.shift(); // moves remaining elements
```

`slice` returns a copy and does not mutate the original array.

```ts
const original = [1, 2, 3, 4];
const copy = original.slice(1, 3); // [2, 3]
```

`splice` mutates the original array.

```ts
const original = [1, 2, 3, 4];
original.splice(1, 2); // original is now [1, 4]
```

Sorting is usually `O(n log n)`.

```ts
const sorted = [...numbers].sort((a, b) => a - b);
```

Use a copied array when you do not want to mutate the input.

## 3. JavaScript Array Methods

### map

Transforms every item and returns a new array. Does not mutate the original array.

Common interview use: convert values into another shape.

Complexity: `O(n)` time, `O(n)` space.

```ts
const doubled = [1, 2, 3].map((number) => number * 2);
```

### filter

Keeps items that pass a condition and returns a new array. Does not mutate the original array.

Common interview use: remove unwanted values.

Complexity: `O(n)` time, up to `O(n)` space.

```ts
const positives = [-1, 0, 3].filter((number) => number > 0);
```

### reduce

Accumulates a result. Does not mutate the original array unless your callback mutates something.

Common interview use: totals, grouped objects, frequency counters.

Complexity: usually `O(n)` time.

```ts
const sum = [1, 2, 3].reduce((total, number) => total + number, 0);
```

### find

Returns the first item that matches. Does not mutate the original array.

Common interview use: locate a matching item.

Complexity: `O(n)` worst case.

```ts
const firstEven = [1, 3, 4].find((number) => number % 2 === 0);
```

### some

Returns true if at least one item matches. Does not mutate the original array.

Common interview use: existence checks.

Complexity: `O(n)` worst case.

```ts
const hasNegative = [1, -2, 3].some((number) => number < 0);
```

### every

Returns true if every item matches. Does not mutate the original array.

Common interview use: validate all items.

Complexity: `O(n)` worst case.

```ts
const allPositive = [1, 2, 3].every((number) => number > 0);
```

### sort

Sorts the array in place and returns the same array reference. It mutates.

Common interview use: anagram checks, interval ordering, two-pointer setup.

Complexity: usually `O(n log n)` time.

```ts
const numbers = [3, 1, 2];
numbers.sort((a, b) => a - b); // numbers is now [1, 2, 3]
```

## 4. Strings

Strings are immutable sequences of characters. You can read characters by index, but you cannot change a string in place.

```ts
const name = "misa";
const first = name[0]; // "m"
```

To transform a string, create a new string.

```ts
const reversed = "abc".split("").reverse().join("");
const lower = "Hello".toLowerCase();
```

Normalization means converting input into a form that is easier to compare.

```ts
function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}
```

This is useful for phrase palindromes such as `"A man, a plan, a canal: Panama"`.

## 5. Palindrome

A palindrome reads the same forward and backward.

Simple examples:

- `"level"` -> palindrome
- `"racecar"` -> palindrome
- `"hello"` -> not a palindrome

Two-pointer mental model: compare the leftmost and rightmost characters, then move both pointers toward the center.

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

Time complexity: `O(n)`

Space complexity: `O(1)` if you do not normalize into a new string.

Edge cases:

- Empty string
- One character
- Case sensitivity
- Spaces and punctuation, if the problem asks for normalized comparison

## 6. Anagram

An anagram uses the same characters with the same frequencies.

Examples:

- `"listen"` and `"silent"` -> anagrams
- `"rat"` and `"car"` -> not anagrams

Sorting solution:

```ts
function isAnagramBySort(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  return a.split("").sort().join("") === b.split("").sort().join("");
}
```

Time complexity: `O(n log n)` because sorting dominates.

Space complexity: `O(n)` for arrays created from strings.

Map frequency solution:

```ts
function isAnagramByMap(a: string, b: string): boolean {
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

Time complexity: `O(n)`

Space complexity: `O(k)`, where `k` is the number of unique characters.

Trade-off: the `Map` version can be faster, but it uses extra memory.

## 7. Character Counting

Character counting is a frequency counter pattern. Use a `Map` when you need `character -> count`.

Example:

```ts
function countCharacters(value: string): Map<string, number> {
  const counts = new Map<string, number>();

  for (const character of value) {
    counts.set(character, (counts.get(character) ?? 0) + 1);
  }

  return counts;
}

countCharacters("banana"); // b:1, a:3, n:2
```

Time complexity: `O(n)`

Space complexity: `O(k)`, where `k` is the number of unique characters.

## 8. Set vs Map

Use `Set` when I only need to know if a value exists.

Use `Map` when I need `key -> value`.

Examples:

- Duplicate detection -> `Set`
- Frequency counter -> `Map`
- Two Sum -> `Map` from value to index
- Anagram -> `Map` from character to count

```ts
const seen = new Set<number>();
seen.add(10);
seen.has(10); // true
```

```ts
const countByCharacter = new Map<string, number>();
countByCharacter.set("a", 3);
countByCharacter.get("a"); // 3
```

## 9. The Key Day 1 Pattern

Brute force `O(n^2)` often looks like this:

```ts
for (let i = 0; i < items.length; i += 1) {
  for (let j = i + 1; j < items.length; j += 1) {
    // compare items[i] and items[j]
  }
}
```

For each item, compare with every other item.

Optimized `O(n)` often uses `Set` or `Map` for constant-time lookup.

Exact interview sentence:

"The brute-force solution compares each element with every other element, which gives O(n²) time. We can improve it to O(n) by using a Set to track values we have already seen. This uses extra memory, so the space complexity becomes O(n)."

## 10. Two Sum

Problem statement: given an array of numbers and a target, return the indexes of two numbers that add up to the target.

Brute-force idea: compare every pair.

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

Time complexity: `O(n^2)`

Space complexity: `O(1)`

Optimized Map idea:

- For each number, compute `complement = target - current`.
- Ask whether the complement was already seen.
- Store current value and index for future checks.

```ts
function twoSumOptimized(numbers: number[], target: number): [number, number] | null {
  const indexByNumber = new Map<number, number>();

  for (let i = 0; i < numbers.length; i += 1) {
    const complement = target - numbers[i];
    const complementIndex = indexByNumber.get(complement);

    if (complementIndex !== undefined) return [complementIndex, i];

    indexByNumber.set(numbers[i], i);
  }

  return null;
}
```

Why `Map` is better than `Set` here: we do not only need to know that a value exists. We need the index attached to that value.

Time complexity: `O(n)`

Space complexity: `O(n)`

Edge cases:

- No solution
- Duplicate numbers
- Negative numbers
- Target of zero
- Empty array

## 11. Contains Duplicate

Problem statement: return true if any value appears more than once.

Brute-force idea: compare every pair.

Time complexity: `O(n^2)`

Space complexity: `O(1)`

Optimized Set idea:

```ts
function containsDuplicate<T>(items: T[]): boolean {
  const seen = new Set<T>();

  for (const item of items) {
    if (seen.has(item)) return true;
    seen.add(item);
  }

  return false;
}
```

Time complexity: `O(n)`

Space complexity: `O(n)`

Edge cases:

- Empty array -> false
- One item -> false
- Duplicate at the beginning
- Duplicate at the end

## 12. Valid Anagram

Problem statement: return true if two strings contain the same characters with the same frequencies.

Sorting solution: sort both strings and compare.

Time complexity: `O(n log n)`

Space complexity: `O(n)`

Map frequency solution: count characters from the first string, subtract counts using the second string.

Time complexity: `O(n)`

Space complexity: `O(k)`

Edge cases:

- Different lengths
- Empty strings
- Repeated characters
- Case sensitivity
- Spaces or punctuation, if the problem includes normalization
