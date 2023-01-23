# Binary + How Computers Work

## Learning Objectives
* Convert between binary and denary systems.
* Discuss the difference between compiled and interpreted languages.
* Discuss memory management in super high level languages.

## What is Binary and Why is it Important?

Number Systems are simply a way to represent numbers.  We commonly use **Base-10**, also called **Decimal**, most likely because we have 10 fingers.  If we were crabs with claws, we very likely would have ended up using 'Base-4'.  If we were octopi, we could have ended up using 'Base-8'.  At the most basic level, computers use what's called **Binary**, or **Base-2**.  Why might this be?

Computer processors contain millions or billions of tiny 'transistors', which is a switch that can either be 'on' or 'off'.  We represent on and off as either 1 or 0, for a total of two possibilities, also known as one bit of information. Little bursts of energy either do or don't pass through circuits based on this on off system. You can also think of on and off like 'true' or 'false'!

**Hexadecimal**, or **Base-16** is used a lot in programming languages because it converts easily into binary.  Hexadecimal uses digits 0-9 and A-F to represent digits. We use hexes for colors in CSS!

![decimal, hex, binary](binary-hexadecimal-decimal-chart-1.png
)
>http://www.wirebiters.com/wp-content/uploads/2014/01/binary-hexadecimal-decimal-chart-1.png

Let's look at some examples of how base-10 numbers can be stored as binary, but first let's think back to the decimal system stores numbers.  

`138` in decimal is really the same as...
<br>
<code>(1 x 10<sup>2</sup>) + (3 x 10<sup>1</sup>) + (8 x 10<sup>0</sup>)</code>

`255` in decimal is really...
<br>
<code>(2 x 10<sup>2</sup>) + (5 x 10<sup>1</sup>) + (5 x 10<sup>0</sup>)</code>


Now let's look at ***binary***...

`101` in binary is really
<br>
<code>(1 x 2<sup>2</sup>) + (0 x 2<sup>1</sup>) + (1 x 2<sup>0</sup>)</code>
<br>or ...
<br>
<code>4 + 0 + 1 = 5</code>

`1000 0000` in binary is really
<br>
<code>(1 x 2<sup>7</sup>)</code>
<br>or ...
<br>
<code>128</code>

![How to Convert Binary from BaseCS](https://cdn-images-1.medium.com/max/880/1*502cf-gX4g88uW_T-BPncg.jpeg)

### You do

Convert the following numbers from binary to decimal

1. `11`

2. `1000`

3. `1111`

4. `1000 1001`

5. `1111 1111`

6. Write your name in 
<details>
	<summary>Answers</summary>

	1. 3

	2. 8

	3. 15

	4. 137

	5. 255
</details>

### Bits and Bytes

A computer bit represents a binary digit -- so a zero or a one. The standard unit above a bit is a byte -- made up of 8 bits. These can represent values from 0 to 255. Different computers process different numbers of bits at a time. Most computers are 32 or 64 bit computers.

[The Story of 256](http://256stuff.com/256.html)

## What is a Compiler? What is the difference between a compiled and interpreted language?

Computers can't understand the code that we write -- they can only really understand numbers like 1's and 0's! The code that we write aka "source code" needs to be translated to binary. We call that code "machine code". Once our source code is in that format, its processed by the CPU or central processing unit. There are two ways of translating code from source code to machine code: interpreters and compilers.

Compilers are programs that take high level languages and converts it to machine code. Then you get an executable file that you can run. You can run it over and over again, but if you change the code, you have to recompile the code! You may see `.exe` files, these are executables.

Compiling example:
```bash
cd /go/src/github.com/user/hello
go build
cat hello
./hello
```

```go
cd /go/src/github.com/user
```

On the other hand, an interpreter is a program that takes a high level language and then runs the code immediately. It runs the code line by line rather than compiling all of it at once. Every time you rerun the code, it re interprets it to machine code line by line.

Compiled code normally runs faster than interpreted code, though it is less developer friendly.

[Ruby Source Code](https://github.com/ruby/ruby)

## What is Garbage Collection?
We've talked about memory and use throughout this class, but how do the languages that we use free up memory as they run? In lower level languages,  you have to manage memory yourself. If you no longer need a variable, you need to run `malloc` or `free` (in C) to release the memory and allow the computer to use that space again. JavaScript does this for us, a process called garbage collection.

JavaScript will:
1. Allocate the memory you need
2. Use the allocated memory (read, write)
3. Release the allocated memory when it is not needed anymore
(from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management))

The garbage collector tracks the memory use to see what items aren't being used anymore, and then it frees those unused pieces of memory.

There are two common algorithms used in garbage collection: reference counting and mark and sweep.

Read [this article](https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec) on memory management in JavaScript.

* What is Mark and Sweep?
* What is Reference Counting?
* What are Memory Leaks?
