Para mantener el orden, procederemos a crear una carpeta para este workshop.

Ejecuta el siguiente comando, cambiando el nombre de la carpeta o colocando el path que necesites:

```bash
mkdir node bin/javascripting
```

Cambia de directorio a la carpeta que acabas de crear:

```bash
cd node bin/javascripting
```

Crea un archivo llamado `introduction.js` utilizando:
```bash
touch introduction.js
```
, o si utilizas Windows
```bash
type NUL > introduction.js
```
(`type` es parte del comando!)

Agrega el siguiente texto al archivo:

```js
console.log('hello');
```
  
Comprueba si tu programa es correcto ejecutando el siguiente comando:

```bash
node bin/javascripting verify introduction.js
```


