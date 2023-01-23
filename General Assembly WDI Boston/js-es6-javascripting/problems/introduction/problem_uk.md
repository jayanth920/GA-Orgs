Давайте створемо окрему директорію для цього воркшопу, щоб зберігати чистоту в наших файлах.

Запустіть цю команду, щоб створити директорію, яка називатиметься `node bin/javascripting` (або будь-як інакше):

```bash
mkdir node bin/javascripting
```

Перейдіть в директорію `node bin/javascripting` командою:

```bash
cd node bin/javascripting
```

Створіть файл `introduction.js`:

```bash
touch introduction.js
```
 або якщо ви на Windows, 

```bash
type NUL > introduction.js
```
 (`type` це частина команди!)

Відкрийте файл у вашому улюбленому текстовому редакторі та додайте цей текст:

```js
console.log('hello');
```
Збережіть файл, а потім перевірте вашу програму запустивши команду:

```bash
node bin/javascripting verify introduction.js
```

До речі, на процязі цього курсу ви можете можете називати файли так, як вам подобається. Якщо ви хочете назвати файл ім’ям `catsAreAwesome.js` для кожної вправи, то зробіть це. Лише не забудьте потім перевірити його:

```bash
node bin/javascripting verify catsAreAwesome.js
```
