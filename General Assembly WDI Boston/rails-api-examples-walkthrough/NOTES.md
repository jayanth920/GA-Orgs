## Delivery Notes

### Controller Comparison Diagram

![Controller Comparison](https://git.generalassemb.ly/storage/user/5693/files/8ef52d46-b4ba-11e7-9a7f-8acbab0aa748)

![](https://git.generalassemb.ly/storage/user/3667/files/ce9182ee-448c-11e8-8c52-16edb26fedd2)

## Recap

Which controller(s) can you model your custom resource from?
```md
ExamplesController
```

Which controller(s) can be used to inherit a custom resource controller from?
When would you use the controller(s)?
```md
ProtectedController should be used when custom resource requires all controller
actions to be authenticated.
OpenReadController should be used when custom resource does not allow
authentication for read actions.
```

How can user owned resources be created? How can they be modified?
```md
User owned resources are created using the `.build` instance method available
from the `has_many` macro.
User owned resources can be modified through using `current_user` to access the
currently signed in user's resource.
```
