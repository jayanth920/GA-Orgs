# Hash Set & Hash Table

## Hash Set

A hash set, is like an array, where all of the elements are **unique**.

Here's an example of a set created from an array.

```js
new Set(['apple', 'banana', 'cherry', 'apple', 'banana'])
// creates the following Set
// Set { 'apple', 'banana', 'cherry' }
```

A hash set is implemented very similarly to a hash table, so we'll learn how a hash set works first.

### Hash Functions

#### Evenly Distributed Hash Function

![Evenly Distributed Hash Function](https://i.imgur.com/2nM8TOg.png)

> [Evenly Distributed Hash Function Whiteboard](https://miro.com/app/board/o9J_lb-01D0=/)

#### Worst Case Hash Function

![Worst Case Hash Function](https://i.imgur.com/XWCLfEx.png)

> [Worst Case Hash Function Whiteboard](https://miro.com/app/board/o9J_lb-lSLU=/)

#### Insert Elements Into a Hash Set

<details>
<summary>Step 0: Start with an empty array of buckets. Each bucket can contain multiple elements and are commonly implemented as linked lists or arrays.</summary>

![Step 0](https://i.imgur.com/ngNPhgZ.png)


</details>

<details>
<summary>Step 1: Insert the key 5 into the bucket at index 0.</summary>

![Step 1](https://i.imgur.com/lbpXANZ.png)


</details>

<details>
<summary>Step 2: Insert the key 8 into the bucket at index 3.</summary>

![Step 2](https://i.imgur.com/PlvveS1.png)


</details>

<details>
<summary>Step 3: Insert the key 13 into the bucket at index 3. There is already a key in that bucket, so a <strong>hash collision</strong> has occurred!</summary>

![Step 3](https://i.imgur.com/vdHHle0.png)


</details>

<details>
<summary>Step 4: Insert the key 9 into the bucket at index 4.</summary>

![Step 4](https://i.imgur.com/90ewp5a.png)


</details>

<details>
<summary>Step 5: Insert the key 6 into the bucket at index 1.</summary>

![Step 5](https://i.imgur.com/FSc0hUG.png)


</details>

<details>
<summary>Step 6: Insert the key 4 into the bucket at index 4. There is already a key in that bucket, so a <strong>hash collision</strong> has occurred!</summary>

![Step 6](https://i.imgur.com/G0vYUvm.png)


</details>

<details>
<summary>Step 7: Insert the key 10 into the bucket at index 0. There is already a key in that bucket, so a <strong>hash collision</strong> has occurred!</summary>

![Step 7](https://i.imgur.com/7ALiO6Z.png)


</details>

<details>
<summary>Step 8: Insert the key 3 into the bucket at index 3. There is already a key in that bucket, so a <strong>hash collision</strong> has occurred!</summary>

![Step 8](https://i.imgur.com/EOjjb6m.png)


</details>

> [Hash Set Whiteboard](https://miro.com/app/board/o9J_lcW9KT0=/)

## Hash Table

### Insert Elements Into a Hash Table

<details>
<summary>Step 0: Start with an empty array of buckets. Each bucket can contain multiple elements and are commonly implemented as linked lists or arrays.</summary>

![Step 0](https://i.imgur.com/Loy3VRY.png)


</details>

<details>
<summary>Step 1: Insert a <strong>new</strong> key/value pair with the key of 'make', and the value of 'Toyota'</summary>

![Step 1](https://i.imgur.com/kpIlwid.png)


</details>

<details>
<summary>Step 2: Insert a <strong>new</strong> key/value pair with the key of 'mileage', and the value of 78062</summary>

![Step 2](https://i.imgur.com/9lajFjR.png)


</details>

<details>
<summary>Step 3: Insert a <strong>new</strong> key/value pair with the key of 'year', and the value of 1992</summary>

![Step 3](https://i.imgur.com/34UdnwY.png)


</details>

<details>
<summary>Step 4: Insert a <strong>new</strong> key/value pair with the key of 'model', and the value of '4Runner'</summary>

![Step 4](https://i.imgur.com/CbTlNx8.png)


</details>

<details>
<summary>Step 5: Since bucket 2 contains a key/value pair with the key of 'mileage', update the value to 80000</summary>

![Step 5](https://i.imgur.com/JS7nPDU.png)


</details>

<details>
<summary>Step 6: Since bucket 4 contains a key/value pair with the key of 'year', update the value to 2000</summary>

![Step 6](https://i.imgur.com/hI6n4QX.png)


</details>

> [Hash Table Whiteboard](https://miro.com/app/board/o9J_lb88JU4=/)
