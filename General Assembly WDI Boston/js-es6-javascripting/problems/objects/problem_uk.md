Об’єкти (Objects) — це списки значень, схожі на масиви, за винятком того, що значення ідентифікуються з допомогою ключових слів (keys) замість цілих чисел.

Приклад:

```js
var foodPreferences = {
pizza: 'yum',
salad: 'gross'
};
```

## Завдання:

Створити файл `objects.js`.

У цьому файлі, оголосіть змінну `pizza` ось так:

```js
var pizza = {
toppings: ['cheese', 'sauce', 'pepperoni'],
crust: 'deep dish',
serves: 2
};
```

Використайте `console.log()`, щоб вивести об’єкт `pizza` до терміналу.

Перевірте вашу відповідь запустивши команду:

```bash
node bin/javascripting verify objects.js
```
