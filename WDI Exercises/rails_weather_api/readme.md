# Quick_Weather.ly

This is a quick weather app built in Rails. It makes use of the `figaro` and `httparty` gems to make server side API calls.

## Setup

1. Fork or Clone this repository.

2. Run the following commands in the terminal

```bash
$ bundle install
$ bundle exec figaro install
```

Update your `config/application.yml`(must have a [weather underground API](http://www.wunderground.com/weather/api/) key):

```yml
wunderground_api_key: "f28a93cae85945b6"
```

Start rails server

```bash
$ rails s
```
