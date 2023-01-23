# Notes

The library API is hosted on Heroku, with the app name of `sei-library-api`. You can do GET requests to each non-protected resource, like https://sei-library-api.herokuapp.com/books.

**Do this!** At the beginning of each `ajax` sequence, we should be dropping, creating, and
migrating the db using the following commands.

```bash
heroku pg:reset --app sei-library-api
heroku run rails db:migrate db:seed db:examples --app sei-library-api
```
