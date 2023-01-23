# Linked List Diagrams

## Singly Linked List With a Tail

![image](https://media.git.generalassemb.ly/user/16320/files/a99bb200-0efd-11eb-922b-f2421338aa8f)
> [Linked List w/ tail whiteboard](https://miro.com/app/board/o9J_kiEtqgY=/)

## Doubly Linked List with `tail`

![image](https://i.imgur.com/MOSe4t5.png)

> [Doubly Linked List w/ tail whiteboard](https://miro.com/app/board/o9J_lcXiFc0=/)

## Linked List Considerations

![image](https://media.git.generalassemb.ly/user/16320/files/8df06900-34b5-11eb-9e53-cc10a838c246)

## prepend

<details>
<summary>Step 0: Start with a Linked List</summary>

![image](https://media.git.generalassemb.ly/user/16320/files/7b6da080-0f04-11eb-976d-0918735f44d7)
</details>

<details>
<summary>Step 1: Create a new node</summary>

![image](https://media.git.generalassemb.ly/user/16320/files/86283580-0f04-11eb-980a-a0f890a1c226)
</details>

<details>
<summary>Step 2: Update the new node's next reference to the previous head</summary>

![image](https://media.git.generalassemb.ly/user/16320/files/93ddbb00-0f04-11eb-8664-ae403e322ef8)
</details>

<details>
<summary>Step 3: Update the head to be the new node we created</summary>

![image](https://media.git.generalassemb.ly/user/16320/files/9d672300-0f04-11eb-8755-b70eb40ccaed)
</details>

> [Linked List Prepend Whiteboard](https://miro.com/app/board/o9J_kiE-mac=/)

## last

![image](https://media.git.generalassemb.ly/user/16320/files/48b74180-348b-11eb-8452-e7a60e327954)

> [Linked List Last Whiteboard](https://miro.com/app/board/o9J_lctmchM=/)

## append

<details>
<summary>Step 0: Start with a Linked List</summary>

![image](https://media.git.generalassemb.ly/user/16320/files/a34e9e80-3487-11eb-9ac4-0d34ba1b6c68)
</details>

<details>
<summary>Step 1: Create a new node</summary>

![image](https://media.git.generalassemb.ly/user/16320/files/c7aa7b00-3487-11eb-9509-5e080577a216)

</details>

<details>
<summary>Step 2: Update the tail's next reference to be the node we just created</summary>

![image](https://media.git.generalassemb.ly/user/16320/files/0fc99d80-3488-11eb-8aaf-02bdea9a97a2)


</details>

<details>
<summary>Step 3: Update the head to be the new node we created</summary>

![image](https://media.git.generalassemb.ly/user/16320/files/50291b80-3488-11eb-9455-9d6eb881c8e2)

</details>

> [Linked List Append Whiteboard](https://miro.com/app/board/o9J_lcuEOEw=/)

## Iterating Through a LinkedList

<details>
<summary>Step 0: Start with a Linked List</summary>

![image](https://media.git.generalassemb.ly/user/16320/files/5d98d280-3495-11eb-8274-6f21a4aa8459)
</details>

<details>
<summary>step 1: Set currentNode to head reference whose value is '🍎'</summary>

![image](https://media.git.generalassemb.ly/user/16320/files/b5cfd480-3495-11eb-8c04-51538f479858)



</details>

<details>
<summary>step 2: Advance currentNode from '🍎' to the next reference whose value is '🍌'</summary>

![image](https://media.git.generalassemb.ly/user/16320/files/d0a24900-3495-11eb-9cea-787838b2ce0e)

</details>

<details>
<summary>step 3: Advance currentNode from '🍌' to the next reference whose value is '🍒'</summary>


![image](https://media.git.generalassemb.ly/user/16320/files/43abbf80-3496-11eb-96a0-811ecdd64922)



</details>

<details>
<summary>step 4: Advance currentNode from '🍒' to the next reference which is undefined</summary>


![image](https://media.git.generalassemb.ly/user/16320/files/152de480-3496-11eb-9456-bfda4bbbee2c)


</details>

> [Linked List Iterate Whiteboard](https://miro.com/app/board/o9J_lct8Xvk=/)

## Insert After

<details>
<summary>Step 0: Start with a linked list. We will insert a '🥔' after the '🍌'</summary>

![image](https://media.git.generalassemb.ly/user/16320/files/10772980-34b2-11eb-93e4-bf4b33328e04)


</details>

<details>
<summary>Step 1: Find the target node which contains the target, the value we are searching for.</summary>

![image](https://media.git.generalassemb.ly/user/16320/files/2389f980-34b2-11eb-81c4-45bd7adfa988)




</details>

<details>
<summary>Step 2: Create a new node for the value we want to insert after the target node</summary>

![image](https://media.git.generalassemb.ly/user/16320/files/369cc980-34b2-11eb-9d21-6a793dcb368c)



</details>

<details>
<summary>Step 3: Set the new node's next property to the target node's next property</summary>


![image](https://media.git.generalassemb.ly/user/16320/files/5d5b0000-34b2-11eb-9d53-b13e7e63af52)





</details>

<details>
<summary>Step 4: Set the target node's next reference to the node we just created</summary>


![image](https://media.git.generalassemb.ly/user/16320/files/6ea40c80-34b2-11eb-81b3-909e9b1a5c49)




</details>



> [Linked List insertAfter Whiteboard](https://miro.com/app/board/o9J_lczF_lk=/)

## Bonus

### Remove

<details>
<summary>Step 0: Start with a Linked List we will be removing the '🥔'</summary>

![image](https://media.git.generalassemb.ly/user/16320/files/3f879e00-34a6-11eb-88a8-85a2c3d10767)

</details>

<details>
<summary>Step 1: Set currentNode to the head node whose value is '🍎'</summary>

![image](https://media.git.generalassemb.ly/user/16320/files/647c1100-34a6-11eb-875c-13158a908d35)




</details>

<details>
<summary>Step 2: Set prevNode to undefined</summary>

![image](https://media.git.generalassemb.ly/user/16320/files/85dcfd00-34a6-11eb-8c35-f8d5c6cee627)


</details>

<details>
<summary>Step 3: Set prevNode from undefined to the currentNode whose value is '🍎'</summary>


![image](https://media.git.generalassemb.ly/user/16320/files/a1480800-34a6-11eb-984f-8f6be20262fa)




</details>

<details>
<summary>Step 4: Advance currentNode from '🍎' to the next reference whose value is 🍌</summary>


![image](https://media.git.generalassemb.ly/user/16320/files/b58c0500-34a6-11eb-9f75-0584e66fa2f8)



</details>

<details>
<summary>step 5: Advance currentNode from '🍌' to the next reference whose value is '🍒'</summary>


![image](https://media.git.generalassemb.ly/user/16320/files/152de480-3496-11eb-9456-bfda4bbbee2c)
![image](https://media.git.generalassemb.ly/user/16320/files/c89ed500-34a6-11eb-8c8d-d198c03c061d)



</details>

<details>
<summary>Step 6: Advance currentNode from '🍌' to the next reference whose value is '🥔'</summary>


![image](https://media.git.generalassemb.ly/user/16320/files/deac9580-34a6-11eb-8f52-cb4cfe5e5274)


</details>

<details>
<summary>Step 7: Update the prevNode's next to skip the currentNode</summary>


![image](https://media.git.generalassemb.ly/user/16320/files/f4ba5600-34a6-11eb-8694-a1d787ca7e45)


</details>

> [Linked List Remove Whiteboard](https://miro.com/app/board/o9J_lcsd-tk=/)
