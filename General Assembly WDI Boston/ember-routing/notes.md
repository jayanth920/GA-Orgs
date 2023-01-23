# Delivery Notes

## Whiteboard Diagrams

![](https://git.generalassemb.ly/storage/user/5689/files/ef40cc10-b8c4-11e7-869b-7835f92948d9)

| Route   | Template   | Outlet | Route Handler |
|:---:|:---:|:---:|:--:|
| `this.route('routeName')` | `<h1>Some HTML</h1>` | `{{outlet}}` | `Ember.Route.extend({model: function(){}})` |
| Tells our router the name of the route, and which template to load  | The HTML that will be rendered by the route  | Somewhere for the nested template to be rendered  | Returns data through the model hook to be referenced in the template  |

-----

![Ember Templates and Outlet Explained](https://git.generalassemb.ly/storage/user/3667/files/67b40e10-263e-11e7-8e97-e35327c95088)

The URLs are in blue.

```md
/team
/team/engineering
/team/leadership
```

The file names are in red

```md
application.hbs
team.hbs
team/index.hbs
team/engineering.hbs
team/leadership.hbs
```
