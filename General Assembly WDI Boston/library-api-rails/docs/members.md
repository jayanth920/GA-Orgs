# Members

| Verb   | URI Pattern  | Controller#Action  |
|:-------|:-------------|:-------------------|
| GET    | `/members`     | `members#index`  |
| GET    | `/members/:id` | `members#show`   |
| POST   | `/members`     | `members#create` |
| PATCH  | `/members/:id` | `members#update` |
| DELETE | `/members/:id` | `members#destroy`|

### GET /members

Example Curl Request:

```sh
#!/bin/bash

curl --include --request GET "https://sei-library-api.herokuapp.com/members"

echo
```

Example Terminal Command:

```sh
sh curl-scripts/members/index.sh
```

Example API Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"members":[{"id":1,"first_name":"Spencer","last_name":"Smith", books_read:320, member_since: 2004-08-12},{"id":2,"first_name":"Karla","last_name":"Khurram",books_read:67, member_since: 2010-05-18},{"id":3,...}]}
```

**Note:** You will receive more than 3 members within a successful response.

---

### GET /members/:id

Example Curl Request:

```sh
#!/bin/bash

curl --include --request GET "https://sei-library-api.herokuapp.com/members/${ID}"

echo
```

Example Terminal Command:

```sh
ID=27 sh curl-scripts/members/show.sh
```

Example API Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"member":{"id":27,"first_name":"Jordan","last_name":"Allain", books_read:10001, member_since:1995-05-05}}
```

---

### POST /members

Example Curl Request:

```sh
#!/bin/bash

curl --include --request POST "https://sei-library-api.herokuapp.com/members/" \
  --header "Content-type: application/json" \
  --data '{
    "member": {
      "first_name": "'"${FIRST}"'",
      "last_name":  "'"${LAST}"'",
      "books_read": "'"${READ}"'",
      "member_since":  "'"${MEMBER}"'"
    }
  }'

echo
```

Example Terminal Command:

```sh
FIRST="Ethan" LAST="Salig" READ=34 MEMBER="1990-10-26" sh curl-scripts/members/create.sh
```

Example API Response:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{"member":{"id":180,"first_name":"Ethan","last_name":"Salig","books_read":34,"member_since":"1990-10-26"}}
```

---

### PATCH /members/:id

Example Curl Request:

```sh
#!/bin/bash

curl --include --request PATCH "https://sei-library-api.herokuapp.com/members/${ID}" \
  --header "Content-type: application/json" \
  --data '{
    "member": {
      "first_name": "'"${FIRST}"'",
      "last_name":  "'"${LAST}"'",
      "books_read": "'"${READ}"'",
      "member_since":  "'"${MEMBER}"'"
    }
  }'

echo
```

Example Terminal Command:

```sh
ID=180 FIRST="Ethan" LAST="Sailing" READ=354 MEMBER="1990-10-26" sh curl-scripts/members/update.sh
```

Example API Response:

```md
HTTP/1.1 204 No Content
```

---

### DELETE /members/:id

Example Curl Request:

```sh
#!/bin/bash

curl --include --request DELETE "https://sei-library-api.herokuapp.com/members/${ID}"

echo
```

Example Terminal Command:

```sh
ID=19 sh curl-scripts/members/destroy.sh
```

Example API Response:

```md
HTTP/1.1 204 No Content
```
