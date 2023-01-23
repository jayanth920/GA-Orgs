# CSS Colors

Each pixel on your screen contains three tiny lights: one each of red, green, and blue. Each of those tiny lights has a minimum brightness of 0, and a maximum of 255. To make white you'd need all three on full-blast, or all at 255. Blue would be `0 0 255` &mdash; red is off, green is off, blue is full-blast.

To represent the numbers 0 - 255, CSS uses the **hexadecimal** system, or Base-16.

In everyday life we use the **decimal** system, with the digits 0 - 9. Instead of just going from 0 - 9, hexadecimal goes from 0 to 15. We don't have any digits to represent the numbers above 9, so hex represents them with letters:

```
0 = 0
1 = 1
...
9 = 9
a = 10
b = 11
c = 12
d = 13
e = 14
f = 15
```

That 16 total values, hence: `hex` (six) `decimal` (10). A few more:

```
10 = 16
11 = 17
12 = 18
...
1c = 28
1d = 29
1e = 30
1f = 31
20 = 32
...
bf = 191
c0 = 192
c1 = 193
```

So `ff` is actually 256 &mdash; or, if you start everything at 0 like programmers do (instead of at 1 like normal people), it's 255.

Take a CSS color, like `#2b00ff`. That's actually 3 values squished together: `2b` `00` `ff`. These correspond to the red, green, and blue lights in each pixel. Converted to decimal, those numbers are `43 0 255`. This tells the computer to make the red light is a little bright, green is all the way off, and blue is on full-blast. These lights combine to make an .

Knowing this is nice because it lets you tweak colors really easily. You don't need to be a human calculator and convert decimals numbers into hex -- just remember that `ff` is a little brighter than `fe`, which is brighter than `fd`... `fc` `fb` `fa` `f9` `f8`... `9f` `9e` `9d`...

You may see a color written like `#3f9`. That's a shortcut for writing `#33ff99`.

## Match the colors to their hexadecimal values!

| Hex | English |
| --- | --- |
| `#FFFF00` | black |
| `#FF00FF` | gray |
| `#FFFFFF` | white |
| `#FF8000` | red |
| `#000000` | bright green|
| `#00FF00` | blue |
| `#00FFFF` | yellow |
| `#804000` | purple |
| `#0000FF` | sky blue |
| `#FF0000` | orange |
| `#008080` | teal |
| `#999999` | brown |

## Extra Credit

What words can you make using 6 hex characters? For example:

- `0ff1ce` is sea green
- `beaded` is soft purple
- `c0ffee` is very light blue
- `defec8` is kind of a pastel yellow-green
