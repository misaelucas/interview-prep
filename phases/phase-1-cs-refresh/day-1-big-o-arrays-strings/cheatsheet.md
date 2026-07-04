# Day 1 Cheatsheet

## Big O Quick Reference

| Complexity | Meaning | Common Example |
| --- | --- | --- |
| `O(1)` | Constant work | Array index access |
| `O(log n)` | Halve search space | Binary search |
| `O(n)` | One pass | Linear search |
| `O(n log n)` | Efficient sort range | Sorting |
| `O(n^2)` | Nested comparisons | Brute-force duplicate detection |

## Array Operation Complexities

| Operation | Complexity | Notes |
| --- | --- | --- |
| Access by index | `O(1)` | `items[i]` |
| Search by value | `O(n)` | May scan all items |
| `push` | Usually `O(1)` | Add to end |
| `pop` | `O(1)` | Remove from end |
| `shift` | `O(n)` | Reindexes items |
| `unshift` | `O(n)` | Reindexes items |
| `slice` | `O(k)` | Returns copy |
| `splice` | `O(n)` | Mutates array |
| `sort` | Usually `O(n log n)` | Mutates array |

## Array Methods Table

| Method | Mutates? | Use | Complexity |
| --- | --- | --- | --- |
| `map` | No | Transform each item | `O(n)` |
| `filter` | No | Keep matching items | `O(n)` |
| `reduce` | No by itself | Accumulate result | `O(n)` |
| `find` | No | First match | `O(n)` worst case |
| `some` | No | Any match? | `O(n)` worst case |
| `every` | No | All match? | `O(n)` worst case |
| `sort` | Yes | Order items | `O(n log n)` usually |

## String Patterns

| Pattern | Tool |
| --- | --- |
| Reverse | Convert to array or use two pointers |
| Palindrome | Two pointers |
| Anagram | Sort or `Map` frequency |
| Character count | `Map<string, number>` |
| Normalize phrase | Lowercase and remove non-alphanumeric |

## Set vs Map Decision Table

| Need | Use |
| --- | --- |
| Know if value exists | `Set` |
| Remove duplicates | `Set` |
| Count values | `Map` |
| Store index by value | `Map` |
| Group values by key | `Map` |

## Common Problem Pattern Table

| Signal | Pattern |
| --- | --- |
| Duplicate? | `Set` |
| Frequency/counting? | `Map` |
| Pair sum? | `Map` |
| Anagram? | Sort or `Map` |
| Palindrome? | Two pointers |
| Repeated fast lookup? | `Set`/`Map` |
