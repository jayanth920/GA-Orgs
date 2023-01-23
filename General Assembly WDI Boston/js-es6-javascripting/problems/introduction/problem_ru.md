Для поддержания порядка давайте создадим для этого воркшопа отдельную папку.

Выполните в терминале эту команду, чтобы создать папку под названием `node bin/javascripting` (можете использовать другое название, если хотите):

```bash
mkdir node bin/javascripting
```

Перейдите в папку `node bin/javascripting`:

```bash
cd node bin/javascripting
```

Создайте файл `introduction.js`:

```bash
touch introduction.js
```

или, если у вас Windows,
```bash
type NUL > introduction.js
```
(`type` это тоже часть команды!)

Откройте этот файл в вашем любимом редакторе и добавьте следующий текст:

```js
console.log('hello');
```

Сохраните файл, и, чтобы проверить что ваша программа работает правильно, запустите в терминале следующую команду:

```bash
node bin/javascripting verify introduction.js
```

Кстати, работая с практическими заданиями, можете называть файлы как вам нравится, если например для каждого упражнения вы хотите использовать файл с именем `catsAreAwesome.js`, полный вперёд! Просто удостоверьтесь, что вы запускаете в терминале:

```bash
node bin/javascripting verify catsAreAwesome.js
```
