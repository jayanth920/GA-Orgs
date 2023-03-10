Для цього завдання ми використаємо **цикл for** для доступу та маніпуляції списку значень в масиві.

Доступ до значень масиву можна здійснити з допомогою цілих чисел.

Кожен елемент в масиві ідентифікується з допомогою числа, починаючи з `0`.

Тому в цьому масиві `hi` ідентифікується числом `1`:

```js
var greetings = ['hello', 'hi', 'good morning'];
```

Доступ до нього можна отримати так:

```js
greetings[1];
```

Всередині **циклу for** ми можемо використати змінну `i` всередині квадратних дужок, замість звичайного цілого числа.

## Завдання:

Створити файл `looping-through-arrays.js`.

У цьому файлі задати змінну під назвою `pets`, що вказуватиме на масив:

```js
['cat', 'dog', 'rat'];
```

Створити цикл for loop, що змінює кожен рядок масиву так, щоб слова в однині стали словами в множині (в англійській мові множина утворюється додаванням закінчення `-s` ).

Ви можете використати такий вираз всередині циклу for:

```js
pets[i] = pets[i] + 's';
```

Після циклу, використайте `console.log()`, щоб вивести масив `pets` до термінала.

Перевірте вашу відповідь запустивши команду:

```bash
node bin/javascripting verify looping-through-arrays.js
```
