このワークショップで使うディレクトリを作りましょう。

次のコマンドを実行して、`node bin/javascripting` ディレクトリを作ります。

```bash
mkdir node bin/javascripting
```

`node bin/javascripting` ディレクトリに移動しましょう。

```bash
cd node bin/javascripting
```

次のコマンドで `introduction.js` ファイルを作成します。

```bash
touch introduction.js
```
 (Windowsを使っているのであれば `type NUL > introduction.js`)

お好みのエディタでファイルを開きます。次の文を書き足しましょう。

```js
console.log('hello');
```

ファイルを保存します。次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

```bash
node bin/javascripting verify introduction.js
```

