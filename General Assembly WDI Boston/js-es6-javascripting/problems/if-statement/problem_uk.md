Умовні оператори викоритовують для контролю ходу виконання програми, в залежності від спеціальних булевих виразів (умов).

Умовні оператори виглядають якось так:

```js
if (n > 1) {
  console.log('the variable n is greater than 1.');
} else {
  console.log('the variable n is less than or equal to 1.');
}
```

Всередині круглих дужок має бути логічний вираз (умова). Це означає, що результат виразу має бути істиним (true) або хибним (false).

Блок else є опціональним і містить код, що буде виконаний, якщо логічний вираз (умова) буде хибною (false).

## Завдання:

Створити файл `if-statement.js`.

У цьому файлі оголосити змінну `fruit`.

Зробити змінну `fruit` рівною значенню **orange** з типом **String (Рядок)**.

Тоді використайте `console.log()`, щоб вивести "**The fruit name has more than five characters."**, якщо довжина значення `fruit` є більшою за 5.
В іншому випадку, виведіть "**The fruit name has five characters or less.**"

Перевірте вашу відповідь запустивши команду:

```bash
node bin/javascripting verify if-statement.js
```
