Gli oggetti sono liste di valori simili agli array, con l'eccezione che i valori sono identificati tramite chiavi anziché numeri interi.

Ecco un esempio

```js
var foodPreferences = {
  pizza: 'yum',
  salad: 'gross'
};
```

## La sfida:

Crea un file dal nome `objects.js`.

In questo file, definisci una variabile chiamata `pizza` come segue:

```js
var pizza = {
  toppings: ['cheese', 'sauce', 'pepperoni'],
  crust: 'deep dish',
  serves: 2
};
```

Usa `console.log()` per stampare l'oggetto `pizza` sul terminale.

Verifica che il tuo programma sia corretto eseguendo questo comando:

```bash
node bin/javascripting verify objects.js
```
