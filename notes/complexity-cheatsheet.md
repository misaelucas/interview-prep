# Complexity Cheatsheet

## Common Big O Classes

| Complexity | Name | Meaning |
| --- | --- | --- |
| `O(1)` | Constant | Same work regardless of input size |
| `O(log n)` | Logarithmic | Search space shrinks each step |
| `O(n)` | Linear | One pass over input |
| `O(n log n)` | Linearithmic | Common efficient sorting bound |
| `O(n^2)` | Quadratic | Nested comparisons |

## How To Explain Complexity

1. Identify loops.
2. Identify nested loops.
3. Identify sorting.
4. Identify recursion depth.
5. Identify extra data structures.
6. State time and space separately.

## Common Trade-Off

Using `Set` or `Map` often improves lookup speed but increases space complexity.
