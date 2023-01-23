# Game Actions

All of the game actions follow the *RESTful* style.

All games action requests must include a valid HTTP header `Authorization:
Bearer <token>` or they will be rejected with a status of `401 Unauthorized`.

Games are owned by users. Actions will only retrieve a game if the user
associated with the `Authorization` header matches the owner's token, which is
generated on sign in and deleted on sign out.

*Summary:*

<table>
  <tr>
    <th colspan="4">Request</th>
    <th colspan="2">Response</th>
  </tr>
  <tr>
    <th>Verb</th>
    <th>URI</th>
    <th>body</th>
    <th>Headers</th>
    <th>Status</th>
    <th>body</th>
  </tr>
  <tr>
    <td>GET</td>
    <td><code>/games</code></td>
    <td>n/a</td>
    <td>token</td>
    <td>200, OK</td>
    <td>array of game objects</td>
  </tr>
  <tr>
    <td>GET</td>
    <td><code>/games/:id</code></td>
    <td>n/a</td>
    <td>token</td>
    <td>200, OK</td>
    <td>game object</td>
  </tr>
  <tr>
    <td>POST</td>
    <td><code>/games</code></td>
    <td><code>'{}'</code></td>
    <td>token</td>
    <td>201, Created</td>
    <td>created game object</td>
  </tr>
  <tr>
    <td>PATCH</td>
    <td><code>/games/:id</code></td>
    <td>game update data<br><a href="#update-request-body">See Example</a></td>
    <td>token</td>
    <td>200, OK</td>
    <td>updated game object</td>
  </tr>
  <tr>
    <th colspan="6">Response Errors</th>
  </tr>
  <tr>
    <th colspan="4">Description</th>
    <th colspan="1">Status</th>
    <th colspan="1">Body</th>
  </tr>
  <tr>
    <td colspan="4">Invalid incoming request data</td>
    <td>400 Bad Request</td>
    <td>UnprocessablDataError object</td>
  </tr>
  <tr>
    <td colspan="4">Missing or invalid `Authorization` token</td>
    <td>401 Unauthorized</td>
    <td>Unauthorized message</td>
  </tr>
  <tr>
    <td colspan="4">Invalid game ID in URL</td>
    <td>422 Unprocessable Entity</td>
    <td>CastError object</td>
  </tr>
  <tr>
    <td colspan="4">ID in URL does not match a game in the database</td>
    <td>404 Not Found</td>
    <td>DocumentNotFoundError object</td>
  </tr>
</table>


## Index `GET /games`

To "index" the games, make a *GET* that retrieves all the games associated with a
user. The response body will contain JSON containing an array of games, e.g.:

```json
{
  "games": [
    {
      "cells": ["","","","","","","","",""],
      "over": false,
      "_id": "5e823ba98929cc4e95e2f5d9",
      "owner": "5e82311c8929cc4e95e2f5d8",
      "createdAt": "2020-03-30T17:30:10.371Z",
      "updatedAt": "2020-03-30T16:34:27.782Z",
      "__v": 0
    },
    {
      "cells": ["x","","","o","","","","",""],
      "over": false,
      "_id": "5ed7e519659863c00ff4907e",
      "owner": "5e82311c8929cc4e95e2f5d8",
      "createdAt": "2020-03-30T16:34:17.792Z",
      "updatedAt": "2020-03-30T18:37:30.232Z",
      "__v": 0
    },
    {
      "cells": ["","o","","","x","o","","x",""],
      "over": false,
      "_id": "5ed7e526cf104aa275b3ef17",
      "owner": "5e82311c8929cc4e95e2f5d8",
      "createdAt": "2020-03-30T15:24:21.743Z",
      "updatedAt": "2020-03-30T18:39:43.382Z",
      "__v": 0
    }
  ]
}
```

If there are no games associated with the user, the response body will contain
 an empty games array, e.g.:

```json
{
  "games": []
}
```

## Show `GET /games/:id`

The `show` action is a *GET* specifing the `id` of the game to retrieve. If the
request is successful the status will be `200, OK`, and the response body will
contain JSON for the game requested, e.g.:

```json
{
  "game": {
    "cells": ["x","","","","","","","",""],
    "over": false,
    "_id": "5e823ba98929cc4e95e2f5d9",
    "owner": "5e82311c8929cc4e95e2f5d8",
    "createdAt": "2020-03-30T18:34:17.772Z",
    "updatedAt": "2020-03-30T18:46:41.383Z",
    "__v": 1
  }
}

```

## Create `POST /games`

To create a game, make a *POST* request with empty object as the body.

If the request is successful, the response will have an HTTP Status of
`201 Created`, and the body will contain JSON of the created game with `owner`
set to the user calling `create`, e.g.:

```json
{
  "game": {
    "cells": ["","","","","","","","",""],
    "over": false,
    "_id": "5e823ba98929cc4e95e2f5d9",
    "owner": "5e82311c8929cc4e95e2f5d8",
    "createdAt": "2020-03-30T18:34:17.772Z",
    "updatedAt": "2020-03-30T18:34:17.772Z",
    "__v": 0
  }
}
```

If the request is unsuccessful, the response will have an HTTP Status of 400 Bad
Request, and the response body will be JSON describing the errors.

## Update `PATCH /games/:id`

To update a game, make a **PATCH** request to `/games/:id`.

### Storing Board Index

When updating a game, the API needs to know which "box" the user clicked on in
the game board. Each box has an index from 0-8, starting with 0 in the top left
and 8 in the bottom right box.

| 0 | 1 | 2 |<br>
| 3 | 4 | 5 |<br>
| 6 | 7 | 8 |

You may want to store the cell `index` on the HTML element that represents this
box. For this, consider utilizing [`data-*` attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). For example, below the
HTML div element is storing a custom data attribute called `data-cell-index` to
identify the box's index as 0. You could later utilize the jQuery [`.data`
method](https://api.jquery.com/data/) to retrive this information from the DOM
when the user clicks on the box.

```html
<div data-cell-index='0'>
</div>
```

### Update Request Body

When making an update request, the API will expect incoming data to look like
this:

```json
{
  "game": {
    "cell": {
      "index": 0,
      "value": "x"
    },
    "over": false
  }
}
```

This object will tell the API what spot was clicked on (`index`), which player
("x" or "o") made the move (`value`), and if the game is `over` or not.
Note that both `index` and `value` are nested inside of an object at key
`cell`.

### Update Response

If the request is successful, the response will have an HTTP Status of `200 OK`,
and the body will be JSON containing the modified game, e.g.:

```json
{
  "game": {
    "cells": ["x","","","","","","","",""],
    "over": false,
    "_id": "5e823ba98929cc4e95e2f5d9",
    "owner": "5e82311c8929cc4e95e2f5d8",
    "createdAt": "2020-03-30T18:34:17.772Z",
    "updatedAt": "2020-03-30T18:46:41.383Z",
    "__v": 1
  }
}
```

If the request is unsuccessful, the response will have an HTTP Status of `400
Bad Request`, and the response body will be JSON describing the errors.
