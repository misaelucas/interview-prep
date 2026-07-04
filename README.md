# Interview Prep Day 1

Day 1 focuses on Big O, arrays, strings, and improving brute force `O(n^2)` solutions into `O(n)` solutions with `Set` and `Map`.

The goal is to identify patterns, explain complexity, and improve brute force solutions only when the tradeoff makes sense. This is a deliberate practice repo: the exercise files contain TODOs, the tests fail first, and hints live outside the implementation files.

## Commands

```bash
npm install
npm test
npm run test:watch
npm run check
```

## Recommended Workflow

1. Read the problem.
2. Write the brute force version first.
3. Analyze Big O for time and space.
4. Improve using `Set` or `Map` when appropriate.
5. Run tests.
6. Explain the solution out loud.
7. Write mistakes in `notes/mistakes-log.md`.

## Where To Work

- Exercises: `src/exercises`
- Tests: `src/tests`
- Hints: `src/hints`
- Reference solutions: `src/reference-solutions`

Do not open `src/reference-solutions` before attempting the exercises.

## Suggested First Exercise Order

1. `hasDuplicateBruteForce`
2. `hasDuplicateOptimized`
3. `containsDuplicateBruteForce`
4. `containsDuplicateOptimized`
5. `twoSumBruteForce`
6. `twoSumOptimized`
7. `isValidAnagram`
8. `validAnagramMap`
9. `isPalindrome`
10. `validPalindrome`
