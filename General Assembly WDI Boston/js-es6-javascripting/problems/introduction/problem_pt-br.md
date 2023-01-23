Para manter uma boa organização, vamos criar uma pasta para este workshop.

Execute este comando para criar um diretório chamado `node bin/javascripting`:

```bash
mkdir node bin/javascripting
```

Mude o diretório do console para a pasta que você acabou de criar:

```bash
cd node bin/javascripting
```

Crie um arquivo chamado `introduction.js`:

```bash
touch introduction.js
```
 ou se você estiver no Windows execute o comando: 

```bash
type NUL > introduction.js
```

Abra o arquivo no seu editor favorito, e adicione este texto:

```js
console.log('hello');
```

Salve o arquivo, e então verifique se o seu programa está correto executando este comando:

```bash
node bin/javascripting verify introduction.js
```


