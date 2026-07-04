# Problems Hints

Use these only after you have tried the exercise.

## twoSumBruteForce

- Can you test every pair?
- Make sure you do not use the same index twice.
- What is the time complexity of the nested-loop version?

## twoSumOptimized

- Can you avoid nested loops with a `Map`?
- For each number, what complement are you looking for?
- Should you check the complement before storing the current number?

## containsDuplicateBruteForce

- Compare each item with every later item.
- What should happen with empty input?

## containsDuplicateOptimized

- Can you solve this with a `Set`?
- Do you only need existence, or do you need counts?

## validAnagramSort

- What is the time complexity of sort?
- What should happen if the lengths differ?
- Is this case-sensitive?

## validAnagramMap

- Do you need a frequency counter?
- Can you count from the first string and subtract from the second?
- What happens if a count goes below zero?

## validPalindrome

- Should punctuation and spaces matter?
- Should uppercase and lowercase be treated the same?
- Can you normalize first, then use two pointers?
