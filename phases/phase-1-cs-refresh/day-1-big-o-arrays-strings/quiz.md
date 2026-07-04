# Day 1 Quiz

Do not check the answer key until you have attempted every section.

## Conceptual Questions

1. What does Big O describe?
2. What is the difference between time complexity and space complexity?
3. Why can small inputs hide inefficient algorithms?
4. What does `O(1)` mean?
5. What does `O(n)` mean?
6. What usually causes `O(n^2)` complexity?
7. Why is sorting usually considered `O(n log n)`?
8. What is the main trade-off when using a `Set` or `Map`?
9. When should you use a `Set`?
10. When should you use a `Map`?
11. Why is array access by index `O(1)`?
12. Why is searching an unsorted array `O(n)`?
13. Why are `shift` and `unshift` usually `O(n)`?
14. What is the difference between `slice` and `splice`?
15. Which array method mutates: `map`, `filter`, `reduce`, or `sort`?
16. Why are strings described as immutable?
17. What is a palindrome?
18. What is an anagram?
19. Why does Two Sum usually need a `Map` instead of only a `Set`?
20. What should you say when explaining brute force vs optimized solutions?

## Code-Reading Questions

1. What does this return?

```ts
[1, 2, 3].map((n) => n * 2);
```

2. Does this mutate `items`?

```ts
const items = [3, 1, 2];
items.sort((a, b) => a - b);
```

3. What does this return?

```ts
["a", "b", "c"].find((value) => value === "b");
```

4. What does this return?

```ts
[1, 3, 5].some((n) => n % 2 === 0);
```

5. What does this return?

```ts
[2, 4, 6].every((n) => n % 2 === 0);
```

6. What is stored in `seen` after the loop?

```ts
const seen = new Set<number>();
for (const n of [1, 2, 1]) seen.add(n);
```

7. What does `counts.get("a")` return?

```ts
const counts = new Map<string, number>();
counts.set("a", 2);
```

8. What does this normalization produce?

```ts
"A man!".toLowerCase().replace(/[^a-z0-9]/g, "");
```

9. What is the complement when `target = 9` and `current = 4`?
10. In Two Sum, why should you check the complement before storing the current number?

## Complexity Questions

1. Complexity of reading `items[0]`?
2. Complexity of scanning an array once?
3. Complexity of nested loops over the same array?
4. Complexity of binary search on a sorted array?
5. Complexity of sorting an array?
6. Complexity of duplicate detection with brute force?
7. Complexity of duplicate detection with `Set`?
8. Space complexity of duplicate detection with `Set`?
9. Complexity of anagram check with sorting?
10. Complexity of anagram check with `Map`?

## Dry-Run Questions

1. Dry-run `containsDuplicate([1, 2, 3, 2])` with a `Set`.
2. Dry-run Two Sum for `[2, 7, 11]`, target `9`.
3. Dry-run character counting for `"banana"`.
4. Dry-run palindrome check for `"level"` with two pointers.
5. Dry-run anagram count comparison for `"aabb"` and `"baba"`.

## Answer Key

### Conceptual Answers

1. How runtime or memory grows as input size grows.
2. Time is runtime growth; space is extra memory growth.
3. Bad complexity may not be visible until input grows.
4. Constant work independent of input size.
5. Work grows linearly with input size.
6. Nested comparisons or comparing every item with every other item.
7. Efficient comparison sorting commonly takes `O(n log n)`.
8. Faster lookup in exchange for extra memory.
9. When you only need existence or uniqueness.
10. When you need a value attached to a key.
11. The index directly identifies the position.
12. The target may be at the end or absent.
13. Elements must be reindexed or shifted.
14. `slice` copies; `splice` mutates.
15. `sort` mutates.
16. You cannot change characters in place; transformations create new strings.
17. A value that reads the same forward and backward.
18. Strings with the same character frequencies.
19. Two Sum needs the previous index attached to a value.
20. State brute force complexity, optimized data structure, and time/space trade-off.

### Code-Reading Answers

1. `[2, 4, 6]`
2. Yes.
3. `"b"`
4. `false`
5. `true`
6. `Set { 1, 2 }`
7. `2`
8. `"aman"`
9. `5`
10. To avoid using the same index twice.

### Complexity Answers

1. `O(1)`
2. `O(n)`
3. `O(n^2)`
4. `O(log n)`
5. Usually `O(n log n)`
6. `O(n^2)` time, `O(1)` space
7. `O(n)` time
8. `O(n)`
9. `O(n log n)` time
10. `O(n)` time

### Dry-Run Answers

1. See `1`, add; see `2`, add; see `3`, add; see `2`, already exists -> duplicate.
2. `2` needs `7`, store `2 -> 0`; `7` needs `2`, found index `0` -> return `[0, 1]`.
3. `b -> 1`, `a -> 3`, `n -> 2`.
4. `l` equals `l`, `e` equals `e`, center reached -> true.
5. Counts from `aabb`: `a -> 2`, `b -> 2`; subtract `baba` to all zero -> true.
