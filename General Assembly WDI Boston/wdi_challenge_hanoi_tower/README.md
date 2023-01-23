![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Hanoi Tower

The Tower of Hanoi (also called the Tower of Brahma or Lucas' Tower, and sometimes pluralized) is a mathematical game or puzzle. It consists of three rods, and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top, thus making a conical shape.

The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:

* Only one disk can be moved at a time.
* Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
* No disk may be placed on top of a smaller disk.

With three disks, the puzzle can be solved in seven moves. The minimum number of moves required to solve a Tower of Hanoi puzzle is 2n - 1, where n is the number of disks.

[Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/towers-of-hanoi/a/towers-of-hanoi) has an excellent resource on [Tower of Hanoi](https://www.khanacademy.org/computing/computer-science/algorithms/towers-of-hanoi/a/towers-of-hanoi) which is worth going through before attempting this challenge. 

[Reference on the Tower of Hanoi on the Wikipedia](http://en.wikipedia.org/wiki/Tower_of_Hanoi)

The Tower of Hanoi is a

## Objectives

```ruby
      |         |         |
      —         |         |
     ———        |         |
    —————       |         |
———————————————————————————————
    tower1    tower2    tower3
```

- Try to move all the disks from TOWER 1 to TOWER 3.
- You may only move one disk at a time.
- You must never allow a bigger disk to go on top of a smaller disk.

## Instructions

Write code to make the tests pass. Above is a visual example of the hanoi tower problem. 

