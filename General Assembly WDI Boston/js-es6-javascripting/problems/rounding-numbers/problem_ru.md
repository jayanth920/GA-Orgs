Мы можем производить вычисления, использую знакомые всем математические операторы, такие как `+`, `-`, `/` и `%`.

Для более сложных вычислений мы можем воспользоваться объектом `Math`.

В этой задаче мы будем использовать объект `Math` для округления чисел.

## Условие задачи:

Создайте файл под названием `rounding-numbers.js`.

Объявите в нём переменную `roundUp` и задайте ей дробное значение `1.5`.

Мы будем использовать метод `Math.round()` для округления этого числа. Этот метод округляет как в большую, так и в меньшую сторону, к ближайшему целому значению.

Пример использования `Math.round()`:

```js
Math.round(0.5);
```

Объявите вторую переменную `rounded`, которая ссылается на результат работы метода `Math.round()`, аргументом которой является переменная `roundUp`.

Воспользуйтесь командой `console.log()`, чтобы вывести результат в консоль.

Чтобы удостовериться в правильности решения задачи, запустите следующую команду из терминала:

```bash
node bin/javascripting verify rounding-numbers.js
```
