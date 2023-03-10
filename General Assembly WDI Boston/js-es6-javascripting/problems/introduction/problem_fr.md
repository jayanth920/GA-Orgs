Pour rester organisé, créons un dossier pour ce TP.

Exécutez cette commande pour créer un dossier nommé `node bin/javascripting` (ou quelque chose d'autre si vous préférez) :

```bash
mkdir node bin/javascripting
```

Allez dans le dossier `node bin/javascripting` avec cette commande :

```bash
cd node bin/javascripting
```

Créez un fichier nommé `introduction.js` :

```bash
touch introduction.js
```

ou si vous êtes sur Windows :
```bash
type NUL > introduction.js
```
( `type` fait partie de la commande ! )

Ouvrez le fichier dans votre éditeur favori, et ajoutez ce texte :

```js
console.log('hello');
```

Sauvegardez le fichier, puis vérifiez si votre programme s'exécute correctement avec cette commande :

```bash
node bin/javascripting verify introduction.js
```

Au passage, tout au long de ce tutoriel, vous pouvez donner nommer les fichiers comme bon vous semble, donc si vous voulez utiliser quelque chose comme `lesChatsSontGeniaux.js` comme nom de fichier pour tous les exercices, vous pouvez. Assurez-vous juste d'exécuter :

```bash
node bin/javascripting verify lesChatsSontGeniaux.js
```

