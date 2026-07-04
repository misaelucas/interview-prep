# Day 1 Mental Models

## 1. Big O Mental Model

Small input hides bad code.

Large input exposes bad complexity.

If an algorithm feels fine for 10 items, ask what happens with 10 million items.

## 2. O(n²) Nested Loop Mental Model

If I compare every item against every other item, suspect `O(n^2)`.

Visual:

```text
item 1 -> compare with many items
item 2 -> compare with many items
item 3 -> compare with many items
...
```

That repeated comparison grows quickly.

## 3. Set Mental Model

"Have I seen this before?"

Use a `Set` when existence is enough.

```text
seen: { 2, 7, 11 }
question: have I seen 7?
answer: yes
```

## 4. Map Mental Model

"What value is attached to this key?"

Use a `Map` when existence is not enough and you need stored information.

```text
key: number
value: index

7 -> 1
11 -> 2
```

## 5. Two Sum Mental Model

For each number:

```text
complement = target - current
Have I seen the complement before?
```

If yes, return the old index and current index.

If no, store current number with its index.

## 6. Anagram Mental Model

Do both strings have the same character counts?

```text
"banana"
b -> 1
a -> 3
n -> 2
```

If any character count differs, it is not an anagram.

## 7. Palindrome Mental Model

Compare left and right pointers moving toward the center.

```text
r a c e c a r
^           ^
left      right
```

If every pair matches, it is a palindrome.
