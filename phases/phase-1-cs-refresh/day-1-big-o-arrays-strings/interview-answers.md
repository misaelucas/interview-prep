# Day 1 Interview Answers

## 1. What is Big O?

English: Big O describes how the cost of an algorithm grows as the input gets larger. It helps compare solutions by scalability rather than exact runtime.

Portuguese: Big O descreve como o custo de um algoritmo cresce conforme a entrada aumenta. Ele ajuda a comparar soluções pela escalabilidade, não pelo tempo exato em milissegundos.

## 2. What is time complexity?

English: Time complexity describes how the runtime grows as input size grows.

Portuguese: Complexidade de tempo descreve como o tempo de execução cresce conforme o tamanho da entrada cresce.

## 3. What is space complexity?

English: Space complexity describes how much extra memory an algorithm uses as input size grows.

Portuguese: Complexidade de espaço descreve quanta memória extra um algoritmo usa conforme o tamanho da entrada cresce.

## 4. Why can O(n) be better than O(n²)?

English: `O(n)` grows linearly, while `O(n^2)` grows much faster because it often compares each item with many other items. For large inputs, the difference becomes significant.

Portuguese: `O(n)` cresce de forma linear, enquanto `O(n^2)` cresce muito mais rápido porque geralmente compara cada item com muitos outros. Em entradas grandes, a diferença fica significativa.

## 5. What is the difference between Set and Map?

English: A `Set` stores unique values. A `Map` stores key-value pairs.

Portuguese: Um `Set` armazena valores únicos. Um `Map` armazena pares chave-valor.

## 6. When would you use a Set?

English: I use a `Set` when I only need to know whether a value has already appeared or when I need uniqueness.

Portuguese: Eu uso um `Set` quando só preciso saber se um valor já apareceu ou quando preciso garantir unicidade.

## 7. When would you use a Map?

English: I use a `Map` when I need to associate a key with information, such as a count, an index, or a grouped list.

Portuguese: Eu uso um `Map` quando preciso associar uma chave a alguma informação, como uma contagem, um índice ou uma lista agrupada.

## 8. How do you optimize Contains Duplicate?

English: The brute-force version compares every pair, which is `O(n^2)`. I can optimize it by scanning once and storing seen values in a `Set`. If I see a value already in the set, I return true. That gives `O(n)` time and `O(n)` space.

Portuguese: A versão brute force compara todos os pares, o que é `O(n^2)`. Eu posso otimizar percorrendo uma vez e guardando valores vistos em um `Set`. Se encontro um valor que já está no set, retorno true. Isso fica `O(n)` em tempo e `O(n)` em espaço.

## 9. How do you optimize Two Sum?

English: For each number, I compute the complement as `target - current`. I use a `Map` to store previous values and their indexes. If the complement already exists in the map, I found the pair. This improves brute force `O(n^2)` to `O(n)` time with `O(n)` space.

Portuguese: Para cada número, eu calculo o complemento como `target - current`. Uso um `Map` para guardar valores anteriores e seus índices. Se o complemento já existe no map, encontrei o par. Isso melhora de `O(n^2)` para `O(n)` em tempo, usando `O(n)` de espaço.

## 10. How do you solve Valid Anagram?

English: One solution is to sort both strings and compare them, which is usually `O(n log n)`. A faster solution is to count characters with a `Map`, then subtract counts using the second string. That gives `O(n)` time with extra memory.

Portuguese: Uma solução é ordenar as duas strings e comparar, o que geralmente é `O(n log n)`. Uma solução mais rápida é contar caracteres com um `Map` e depois subtrair usando a segunda string. Isso fica `O(n)` em tempo com memória extra.

## 11. What is the trade-off of using a Set or Map?

English: The trade-off is memory for speed. `Set` and `Map` use extra memory, but they can avoid repeated scans and reduce runtime.

Portuguese: O trade-off é memória por velocidade. `Set` e `Map` usam memória extra, mas podem evitar buscas repetidas e reduzir o tempo de execução.

## 12. How do you explain brute force vs optimized solution?

English: I first explain the brute-force approach and its complexity. Then I identify the repeated work and replace it with faster lookup using a data structure like `Set` or `Map`. Finally, I explain the new time and space complexity.

Portuguese: Primeiro eu explico a abordagem brute force e sua complexidade. Depois identifico o trabalho repetido e substituo por uma busca mais rápida usando uma estrutura como `Set` ou `Map`. Por fim, explico a nova complexidade de tempo e espaço.
