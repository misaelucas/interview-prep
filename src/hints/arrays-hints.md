# Arrays Hints

Use these only after you have tried the exercise.

## findMax / findMin

- What should happen with empty input?
- Can you keep one variable for the best value seen so far?
- Do you need to sort?

## reverseArray

- Can you return a new array instead of mutating the original?
- Could two pointers help?
- What is the space cost of creating a new array?

## removeDuplicates

- Can you solve this with a `Set`?
- How do you keep the first occurrence order?
- What should happen with empty input?

## hasDuplicateBruteForce

- Can you compare each item with every later item?
- Why should the inner loop start after the outer index?
- What is the time complexity of nested loops?

## hasDuplicateOptimized

- Can you avoid nested loops?
- Do you need to count frequency, or only check existence?
- What does a `Set` give you?

## mergeSortedArrays

- Can you use two pointers?
- What happens when one array finishes first?
- Should the result be sorted without calling `sort`?

## moveZerosToEnd

- Can you collect non-zero values first?
- How many zeros do you need to append?
- Can you preserve the order of non-zero values?

## rotateArray

- What if `k` is larger than the array length?
- What if the array is empty?
- Can `slice` help split the array into two parts?
