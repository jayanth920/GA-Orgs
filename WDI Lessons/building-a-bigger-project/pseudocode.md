# What needs to happen
* I need to be able to switch between players
```
If player1 is playing
    current player is player2
if player2 is playing
    current player is player1
```

* I need to be able to check if a spot has been used already
```
If HTML tag has clicked attribute
    exit
```
* I need to be able to check if somebody has won

I can create an array for the rows, columns, and diagonals. In that array, I will have an array for each row and column. That array will contain two zeroed values -- one for each player's score in that direction. When somebody clicks on a spot, I will take the row, column, and diagonal (if applicable) and give them a point for that area. If their score for that row is 3 the person wins!

```
cols = [[0, 0], [0, 0], [0, 0]]
rows = [[0, 0], [0, 0], [0, 0]]
diags = [[0, 0], [0, 0]]

person clicked on the box at coordinate x, y
    cols[x][person] += 1
    rows[y][person] += 1
    
    if score == 3
        person wins!
        reset the board
```

* I need to be able to reset the board if someone has won

```
make the grid blank again
reset my data structures
```