[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Django Template

## Preparation

1. Create a psql database for the project with `createdb db-name`, or use the shell:
    1. Type `psql` (`psql -U postgres` on Windows) to get into interactive shell.
    2. Run `CREATE DATABASE <db-name>;`.
    3. Exit shell with `\q`.
2. Run `pipenv shell` in the virtual environment folder, `sei/django-env`.
3. Fork and clone this repository **into the virtual environment folder**.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Change into the repository directory.
2. Create and checkout to a new branch, `training`, for your work.
3. Open in your text editor, and edit `config/settings.py` to replace `'<db-name>'` with your database name in quotes.
4. Generate and run migrations with `python3 manage.py makemigrations` and `python3 manage.py migrate`.
5. Run the server with `python3 manage.py runserver`.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
