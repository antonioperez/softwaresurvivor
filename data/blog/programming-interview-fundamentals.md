---
title: "Programming Interview Fundamentals"
date: 2020-02-07
categories: 
  - "misc"
---

Notes for reviewing **computer science and programming interview fundamentals**. Helpful for last minute pre-interview studying!

## Problem Approach

**ESTCV (Examples, Solutions/Approach, Test Cases, Code, Verify)**

## Time Complexity

- If a problem is halved each time, likely O(log(n)).
- If algorithm is in the form of "Do this then when done do that", then you add the runtimes. (Two separate loops).
- If algorithm is in the form of "Do this for each time you do that" then you multiple the runtimes. (Loops within Loops).

| Sorting Algorithm | Time |
| --- | --- |
| Selection Sort | n^2 |
| Insertion Sort | n - n^2 |
| Quick Sort | nLog(n) - n^2 |
| Merge Sort | nLog(n) |
| Heap Sort | nLog(n) |

| Data Structures | Average | Worst |
| --- | --- | --- |
| Array | O(n) | O(n) |
| Stack | O(n) | O(1) |
| Queue | O(n) | O(1) |
| Hash | O(1) | O(n) |
| Binary Search Tree | O(log(n)) | O(log(n)) |

## Trees

### Binary Search Tree

A binary search search tree imposes the condition that for all nodes, the left children are less than or equal to the current node which is less than all the right nodes.

### Balanced Trees

Balancing a tree implies only that the depth of subtrees will not vary by more than a certain amount. It does not mean that the right & left subtree are exactly the same.

### Full & Complete Trees

Full and Complete trees have all leaves at the bottom & all non-leaf nodes have exactly two children. Must have 2^n -1 nodes to meet the condition.

### Tree Balancing & Graph Transversal

Depth first search (DFS) is easier if you want to visit each node. If the tree is really big, you want to use Breath First Search (BFS) to quit when you get too far from the original node.

#### Depth First Search

In Depth First Search, we visit a node **r** and then iterate through each of **r**'s adjacent node. When visiting a node **n** that is adjacent to **r**, we visit all of **n**'s adjacent node before going on to **r**'s other adjacent nodes. That is, **n**, is exhaustively searched before **r** moves on to searching its other children.

**Searching a node and all it's children before proceeding to siblings.**

#### Breadth First Search

Breadth First Search is considerably less intuitive. We visit each of a node **r**'s adjacent nodes before searching any of **r'**s grandchildren. An iterative solution involing a queue usually works best.

**Searching a node and it's silblings before any children. Use queue.**

### Tries \*try\*

A tree with each node having N possible nodes to build a path for finding a word. The word is broken up, a character per node. The next word is broken up and inserted to any existing paths.

### Must Know Tree Algorithm

- In Order
    - Go left node, current, then right (BST)
- Pre Order
    - Go current, then left, then right
- Post Order
    - Go left, right, then current
- Insert Node
    - BST, insert by comparing to root if **Insert** > root, go right, else go left. Go until an empty spot.

## Recursion

A good hint is to be built off sub-problems. Some things to watch for

- Can the problem be solved iteratively & better?
- Recursive algorithms cost a lot of space. Each recursive call adds a new layer to the stach. O(n) call = O(n) memory.
- Dynamic programming is mostly taking a recursive algorithm, finding overlapping subproblems and caching results.

Appoaching problem by..

1. How many sub problems does f(n) depend on?
2. Solve for a base case
3. Solve for f(2)
4. solve for f(3), understand the exact process of translating to subs.
5. solve f(n)

## Searching Algorithms

- Bubble Sort | O(n^2)
    - Start at beginning of array, swap first two elements, go to next pair until sorted.
- Selection Sort | O(n^2)
    - Find the smallest element in array, move to front of array, then find the second smallest and move it to second place. Repeat.
- Merge Sort | O(nLog(n))
    - Sort each pair of elements, then sort every four elements by merging the pairs, then sort every 8 elements.
- Quick Sort | Expecting: O(nLog(n)) Worst: O(n^2)
    - Pick a random element and partition the array such that all numbers are less than it come before all elements that are greater than it. Then do that for each half.
- Bucket Sort | O(m+n)
    - Partition the array into finite number of buckets then sort each bucket individually. N = number of items. M = number of distinct items.
