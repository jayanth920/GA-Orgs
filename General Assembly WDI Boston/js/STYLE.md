# Style Guide

## Markdown

Use [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli).
Our rules are specified in `.markdownlint.json` to have a full description of
the rules visit [markdownlint-cli Rules](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md).

To run linter use the `markdownlint` command followed by
the files you want to run the linter against. If I wanted to check README.md I would:

```bash
markdownlint README.md
```