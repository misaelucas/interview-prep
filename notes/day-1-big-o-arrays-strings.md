# Day 1: Big O, Arrays, Strings, Set/Map

## Big O

Big O describes how runtime or memory grows as input size grows.

- `O(1)`: constant time. The work does not grow with input size.
- `O(n)`: linear time. The work grows once per item.
- `O(n^2)`: quadratic time. Common when using nested loops over the same input.
- `O(log n)`: logarithmic time. Common when the search space is cut in half each step.

Time complexity describes how runtime grows.

Space complexity describes how extra memory grows.

Trading memory for speed is common in interviews. A `Set` or `Map` can turn repeated searching into fast lookup, often improving `O(n^2)` into `O(n)` while using `O(n)` extra space.

## Arrays

- Search: scanning an array is usually `O(n)`.
- Insertion: appending is usually cheap, inserting in the middle may shift items.
- Removal: removing from the end is cheap, removing from the front or middle may shift items.
- Sorting: JavaScript `sort` is usually `O(n log n)`.
- `push` / `pop`: add or remove at the end.
- `shift` / `unshift`: remove or add at the beginning, usually requires shifting.
- `slice`: creates a copy of part of an array.
- `splice`: mutates the array by adding or removing items.
- `map`: transform every item.
- `filter`: keep items that match a condition.
- `reduce`: accumulate one result from many items.
- `find`: return the first matching item.
- `some`: check if at least one item matches.
- `every`: check if all items match.
- `sort`: reorder items, usually in place.

## Strings

- Palindrome: reads the same forward and backward after normalization.
- Anagram: two strings contain the same characters with the same frequencies.
- Character counting: use a `Map<string, number>` when you need frequencies.
- Immutability: JavaScript strings cannot be changed in place.
- Converting string to array: `Array.from(value)` handles characters better than some split cases.
- Normalization: lowercase and remove non-alphanumeric characters when the problem asks for phrase-level matching.

## Set and Map

Use `Set` when you only need to know whether a value exists.

Use `Map` when you need a value connected to a key, such as a count or an index.

Common patterns:

- Duplicate detection: `Set`
- Frequency counter: `Map`
- Fast lookup: `Set` or `Map`
- Pair finding: `Map` from value to index

## Interview-Style Questions

### What is Big O?

Big O is a way to describe how an algorithm scales as input size grows.

### Why is O(n) better than O(n²)?

`O(n)` grows one step per item. `O(n^2)` grows roughly one loop for every item inside another loop, so it becomes much slower as input grows.

### When is it worth using more memory?

When extra memory gives a meaningful runtime improvement and the input size makes the tradeoff useful.

### When should I use Set?

Use `Set` when you need uniqueness or fast existence checks.

### When should I use Map?

Use `Map` when you need to store information per key, such as counts, previous indexes, or grouped values.

### How do you explain time and space complexity?

State what grows with input size. Count loops, nested loops, sorting, recursion depth, and extra data structures.
