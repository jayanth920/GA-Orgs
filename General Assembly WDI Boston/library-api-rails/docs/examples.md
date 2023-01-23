# Examples

| Verb   | URI Pattern  | Controller#Action |
|:-------|:-------------|:------------------|
| GET    | `/examples`     | `examples#index`     |
| GET    | `/examples/:id` | `examples#show`      |
| POST   | `/examples`     | `examples#create`    |
| PATCH  | `/examples/:id` | `examples#update`    |
| DELETE | `/examples/:id` | `examples#destroy`   |

### GET /examples

Curl Request:

```sh
#!/bin/bash

curl --include --request GET "https://sei-library-api.herokuapp.com/examples"

echo
```

Example Terminal Command:

```sh
sh curl-scripts/examples/index.sh
```

Example API Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"examples": [{"id":1,"text":"Here is an example"},{"id":2,"text":"Another example lives!"},{"id":3,...}]}
```

**Note:** You will receive more than 3 examples within a successful response.

---

### GET /examples/:id

Curl Request:

```sh
#!/bin/bash

curl --include --request GET "https://sei-library-api.herokuapp.com/examples/${ID}"

echo
```

Example Terminal Command:

```sh
ID=5 sh curl-scripts/examples/show.sh
```

Example API Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"example":{"id":5,"text":"Beware of the example!!!!"}}
```

---

### POST /examples

Curl Request:

```sh
#!/bin/bash

curl --include --request POST "https://sei-library-api.herokuapp.com/examples/" \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{
    "example": {
      "text": "'"${TEXT}"'"
    }
  }'

echo
```

Example Terminal Command:

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa TEXT="My shiny new example" sh curl-scripts/examples/create.sh
```

Example API Response:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{"example":{"id":10,"text":"My shiny new example"}}
```

---

### PATCH /examples/:id

Curl Request:

```sh
#!/bin/bash

curl --include --request PATCH "https://sei-library-api.herokuapp.com/examples/${ID}" \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{
    "example": {
      "text": "'"${TEXT}"'"
    }
  }'

echo
```

Example Terminal Command:

```sh
ID=10 TOKEN=33ad6372f795694b333ec5f329ebeaaa TEXT="My updated example" sh curl-scripts/examples/update.sh
```

Example API Response:

```md
HTTP/1.1 204 No Content
```

---

### DELETE /examples/:id

Curl Request:

```sh
#!/bin/bash

curl --include --request DELETE "https://sei-library-api.herokuapp.com/examples/${ID}" \
  --header "Authorization: Token token=${TOKEN}" \

echo
```

Example Terminal Command:

```sh
ID=10 TOKEN=33ad6372f795694b333ec5f329ebeaaa sh curl-scripts/examples/destroy.sh
```

Example API Response:

```md
HTTP/1.1 204 No Content
```
