# Authentication

| Verb   | URI Pattern            | Controller#Action |
|:-------|:-----------------------|:------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password` | `users#changepw`  |
| DELETE | `/sign-out`        | `users#signout`   |

### POST /sign-up

Curl Request:

```sh
#!/bin/bash

curl "https://sei-library-api.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
```

Example Terminal Command:

```sh
EMAIL="an@example.email" PASSWORD="anexamplepassword" sh curl-scripts/auth/sign-up.sh
```

Example API Response:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "email": "an@example.email"
  }
}
```

---

### POST /sign-in

Curl Request:

```sh
#!/bin/bash

curl "https://sei-library-api.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
```

Example Terminal Command:

```sh
EMAIL="an@example.email" PASSWORD="anexamplepassword" sh curl-scripts/auth/sign-in.sh
```

Example API Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "email": "an@example.email",
    "token": "33ad6372f795694b333ec5f329ebeaaa"
  }
}
```

---

### PATCH /change-password

Curl Request:

```sh
#!/bin/bash

curl "https://sei-library-api.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

echo
```

Example Terminal Command:

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa OLDPW="anexamplepassword" NEWPW="newpassword" sh curl-scripts/auth/change-password.sh
```

Example API Response:

```md
HTTP/1.1 204 No Content
```

---

### DELETE /sign-out

Curl Request:

```sh
#!/bin/bash

curl "https://sei-library-api.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
```

Example Terminal Command:

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa sh curl-scripts/auth/sign-out.sh
```

Example API Response:

```md
HTTP/1.1 204 No Content
```
