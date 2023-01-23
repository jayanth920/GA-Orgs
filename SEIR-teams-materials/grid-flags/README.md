# CSS Grid and Flags of the World!

![globe](https://acegif.com/wp-content/uploads/globe.gif)

## Setup

1. Clone,
2. Get hacking!

## Instructions

After opening the file, you should see some color blocks and some country names. The goal of this exercise is to use CSS Grid to make the divs with the id of each country match their flag! There are 8 countries to work through in total.

Each of the flags are already set to a certain height and to have `display: grid`, so all that is necessary here is to arrange the parts of the flag!

```css
/* this is the pre-existing CSS */
.flag {
  border: 5px solid black;
  display: grid;
  height: 160px;
  box-sizing: border-box;
  border-radius: 6px;
}

.flag div {
  min-width: 25px;
  min-height: 25px;
}
```

We'll be working __exclusively__ in _index.css_, below the existing style rulesets. Happy hacking!
___

## Columns and Rows

For this section, please use `grid-template-columns` and `grid-template-rows` to create your rows and columns. Each row and column should be `1fr` large. 

### Poland 🇵🇱

Poland's flag has two parts, one red, and one white. These parts are in order already, and because `display: grid` was called on all of the flags (via the `flag` class), all that's necessary to ensure this displays correctly is to give our grid __1__ column and __2__ rows.

1. Assign the `#poland` div __1__ column and __2__ rows.

<details>
  <summary>
  Answer:
  </summary>
  
```css
#poland {
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
}
```
We're using the `repeat()` keyword instead of writing out `grid-template-rows: 1fr 1fr;`.
</details>

### Germany 🇩🇪

Similar to Poland, Germany's flag has horizontal stripes. This time, we'll use the `grid-row` property to tell the flag parts where to sit.

1. Assign the `#germany` div __1__ column and  __3__ rows.
2. Assign the `#germany .black` div a `grid-row` property so that it sits between the 1st and 2nd tracks.
3. Assign the `#germany .red` div a `grid-row` property so that it sits between the 2nd and 3rd tracks.
4. Assign the `#germany .yellow` div a `grid-row` property so that it sits between the 3rd and 4th tracks.

<details>
<summary>
Answer:
</summary>

```css
#germany {
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
}

#germany .black {
  grid-row: 1 / 2;
}

#germany .red {
  grid-row: 2 / 3;
}

#germany .yellow {
  grid-row: 3 / 4;
}
```
</details>

### Belgium 🇧🇪

Belgium's flag is made of vertical stripes, so instead of changing our `grid-row`, we'll change our `grid-column`.

1. Assign the `#belgium` div __3__ columns and __1__ row.
2. Assign the `#belgium .black` div a `grid-column` property so that it sits between the 1st and 2nd tracks.
3. Assign the `#belgium .yellow` div a `grid-column` property so that it sits between the 2nd and 3rd tracks.
4. Assign the `#belgium .red` div a `grid-column` property so that it sits between the 3rd and 4th tracks.

<details>
  <summary>Answer:</summary>

```css
#belgium {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
}

#belgium .black {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

#belgium .yellow {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

#belgium .red {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
}
```
</details>

### Mauritius 🇲🇺

Mauritius' flag has four stripes of the same size, so instead of keeping track of both the start and end track via a number, we can use the `span` keyword to tell Grid how many columns/rows an item should take up.

1. Assign the `#mauritius` div __1__ column and  __4__ rows.
2. Assign the `#mauritius .red` div a `grid-row` property so that it starts at the 1st track and `span`s 1.
3. Assign the `#mauritius .blue` div a `grid-row` property so that it starts at the 2nd track and `span`s 1.
4. Assign the `#mauritius .yellow` div a `grid-row` property so that it starts at the 3rd track and `span`s 1.
5. Assign the `#mauritius .green` div a `grid-row` property so that it starts at the 4th track and `span`s 1.

<details>
  <summary>Answer:</summary>

```css
#mauritius {
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
}

#mauritius .red {
  grid-row: 1 / span 1;
}

#mauritius .blue {
  grid-row: 2 / span 1;
}

#mauritius .yellow {
  grid-row: 3 / span 1;
}

#mauritius .green {
  grid-row: 4 / span 1;
}
```
</details>

### Chile 🇨🇱

Chile's flag is in two dimensions, so this time we need a grid with multiple rows, and multiple columns. We'll use the `span` keyword again, instead of calculating both start and end.

1. Assign the `#chile` div __3__ columns and __2__ rows.
2. Assign the `#chile .blue` div a `grid-column` property so that it starts at the 1st track and `span`s 1, and a `grid-row` property so that it starts at the 1st track and `span`s 1. 
3. Assign the `#chile .white` div a `grid-column` property so that it starts at the 2nd track and `span`s 2, and a `grid-row` property so that it starts at the 1st track and `span`s 1. 
4. Assign the `#chile .red` div a `grid-column` property so that it starts at the 1st track and `span`s 3, and a `grid-row` property so that it starts at the 2nd track and `span`s 1. 

<details>
  <summary>Answer:</summary>

```css
#chile {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

#chile .blue {
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
}

#chile .white {
  grid-column: 2 / span 2;
  grid-row: 1 / span 1;
}

#chile .red {
  grid-column: 1 / span 3;
  grid-row: 2 / span 1;
}
```
</details>

## Areas

For this section, please use `grid-template-areas` to create your rows and columns.

### Benin 🇧🇯

Benin's flag can be split evenly into five columns and two rows (with the green stripe taking up two columns and two rows).

1. Assign the `#benin` div __5__ columns and __2__ rows, using "bg" to represent the Benin green, "by" for the Benin yellow, and "br" for the Benin red.
2. Assign the `#benin .green` div a `grid-area` of `bg`. 
3. Assign the `#benin .yellow` div a `grid-area` of `by`. 
4. Assign the `#benin .red` div a `grid-area` of `br`. 

<details>
  <summary>Answer:</summary>

```css
#benin {
  grid-template-areas:
  "bg bg by by by"
  "bg bg br br br";
}

#benin .green {
  grid-area: bg;
}

#benin .yellow {
  grid-area: by;
}

#benin .red {
  grid-area: br;
}
```

</details>


> Note: This shorthand is for convenience, the names of the grid-area can be [any valid string](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas#Values).

### Madagascar 🇲🇬

Madagascar's flag is similarly designed, with four columns and two rows. 

1. Assign the `#madagascar` div __4__columns and __2__ rows, and create the areas for the parts of the flag using the same shorthand as before (e.g. `#madagascar .red` would be `mr`).
2. Assign the `#madagascar .white` div a `grid-area` property of `mw` 
3. Assign the `#madagascar .red` div a `grid-area` property of `mr` 
4. Assign the `#madagascar .green` div a `grid-area` property of `mg` 


<details>
  <summary>Answer:</summary>

```css
#madagascar {
  grid-template-areas:
  "mw mr mr mr"
  "mw mg mg mg";
}

#madagascar .white {
  grid-area: mw;
}

#madagascar .red {
  grid-area: mr;
}

#madagascar .green {
  grid-area: mg;
}
```

</details>

### UAE 🇦🇪

The United Arab Emirates' flag has four columns, and three rows.

1. Assign the `#uae` div __4__ columns and __3__ rows, and create the areas for the parts of the flag using the same shorthand as before.
2. Assign the `#uae .red` div a `grid-area` property of `ur` 
3. Assign the `#uae .green` div a `grid-area` property of `ug` 
4. Assign the `#uae .white` div a `grid-area` property of `uw` 
5. Assign the `#uae .black` div a `grid-area` property of `ub` 

<details>
  <summary>Answer:</summary>

```css
#uae {
  grid-template-areas:
  "ur ug ug ug"
  "ur uw uw uw"
  "ur ub ub ub";
}

#uae .red {
  grid-area: ur;
}

#uae .green {
  grid-area: ug;
}

#uae .white {
  grid-area: uw;
}

#uae .black {
  grid-area: ub;
}
```

</details>
