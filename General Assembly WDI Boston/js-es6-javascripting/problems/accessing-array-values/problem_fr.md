On peut accéder aux cases du tableau via leurs index.

Les index doivent être des nombres allant de zero à la longueur du tableaux moins un.

Voici un exemple :

```js
var pets = ['cat', 'dog', 'rat'];

console.log(pets[0]);
```

Le code ci-dessus affichera le premier élément du tableau `pets` - la chaine de caractères `cat`.

On ne doit accéder aux éléments de tableaux qu'au travers de la notation « crochets » : la notation en point est invalide.

Notation valide :

```js
console.log(pets[0]);
```

Notation invalide :
```
console.log(pets.1);
```

## Le défi :

Créez un fichier nommé `acces-valeurs-tableau.js`

Dans ce fichier, définissez un tableau `food` :
```js
var food = ['apple', 'pizza', 'pear'];
```


Utilisez `console.log()` pour afficher la `deuxième` valeur du tableau dans le terminal.

Vérifiez si votre programme est correct en exécutant la commande :

```bash
node bin/javascripting verify acces-valeurs-tableau.js
```
