# Strings Hints

Use these only after you have tried the exercise.

## reverseString

- Strings are immutable. Do you need to convert to an array?
- Can you use two pointers or built-in array methods?

## isPalindrome

- This one is exact and case-sensitive.
- Can you compare from both ends toward the center?
- What should the empty string return?

## countCharacters

- Do you need a `Map`?
- For each character, can you read the old count and add one?
- Is `"A"` the same key as `"a"`?

## firstUniqueCharacter

- Do you need to count frequency first?
- After counting, how can you preserve original order?
- What should happen when there is no unique character?

## isValidAnagram

- If lengths differ, can the strings be anagrams?
- Do you need to count frequency?
- Can you decrement counts from the second string?

## longestCommonPrefix

- What should happen with an empty word list?
- Can you start with the first word as the candidate prefix?
- How do you shrink the prefix until every word starts with it?
