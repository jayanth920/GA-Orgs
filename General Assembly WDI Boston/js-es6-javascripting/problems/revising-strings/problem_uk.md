Часто необхідно буде змінювати вміст рядка.

Рядки мають вбудований функціонал, що дозволяє вам переглядати та маніпулювати їх вмістом.

Ось приклад використання методу `.replace()`:

```js
var example = 'this example exists';
example = example.replace('exists', 'is awesome');
console.log(example);
```

Зверніть увагу, що для зміни значення змінної `example` ми повинні використати оператор присвоєння знову, цього разу з методом `example.replace()` праворуч від операторa присвоєння.

## Завдання:

Створити файл `revising-strings.js`.

Оголосити змінну `pizza`, що вказуватиме на рядок: `'pizza is alright'`

Використайте метод `.replace()`, щоб змінити `alright` на `wonderful`.

Скористайтесь `console.log()`, щоб вивести результат роботи методу `.replace()` до терміналу.

Перевірте вашу відповідь запустивши команду:

`node bin/javascripting verify revising-strings.js`
