# Interview Patterns

## Lookup Patterns

| Problem Signal | Data Structure | Reason |
| --- | --- | --- |
| Duplicate detection | `Set` | Need existence only |
| Frequency counting | `Map` | Need key -> count |
| Pair sum | `Map` | Need value -> index |
| Grouping | `Map` | Need key -> collection |
| Fast repeated lookup | `Set` or `Map` | Avoid repeated scans |

## Pointer Patterns

| Problem Signal | Pattern |
| --- | --- |
| Palindrome | Left/right pointers |
| Sorted pair search | Two pointers |
| Linked list cycle | Slow/fast pointers |

## Communication Pattern

1. Start with the brute-force idea.
2. State its complexity.
3. Identify repeated work.
4. Choose a data structure to remove repeated work.
5. State the new time and space complexity.
6. Explain the trade-off.
