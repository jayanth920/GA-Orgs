Иногда необходимо представить число в виде строки.

В этом случае используйте метод `.toString()`. Например:

```js
var n = 256;
n = n.toString();
```

## Условие задачи:

Создайте файл `number-to-string.js`.

В этом файле объявите переменную `n`, которая ссылается на число `128`.

Вызовите у переменной `n` метод `.toString()`.

Используйте `console.log()` и выведите в терминал результат работы метода `.toString()`.

Чтобы удостовериться в правильности решения задачи, запустите в терминале следующую команду:

```bash
node bin/javascripting verify number-to-string.js
```
