[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Rails API Examples Walkthrough

## Prerequisites

- [Rails API](https://git.generalassemb.ly/ga-wdi-boston/rails-api)

## Objectives

By the end of this, developers should be able to:

- Identify the controllers included in the `rails-api-template`.
- Explain when to use `OpenReadController` and `ProtectedController`.
- Create a custom resource controller that inherits from `OpenReadController`
    or `ProtectedController`.
- Create a custom resource controller using `ExamplesController` as a guide.
- Implement user owned resources utilizing `current_user`.

## Preparation

1. Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Open [rails-api-template controllers](https://git.generalassemb.ly/ga-wdi-boston/rails-api-template/tree/master/app/controllers)
   in a new tab.

## Rails API Template Controllers Explained

The purpose of this repo is to explain a little more about the purpose of each
of the controllers provided in the `rails-api-template`. We'll walkthrough the
controllers provided therein, which should give you a better understanding of
the tooling provided, and assist you in implementing proper authentication and
user ownership for your project(s) here at SEI!

## ApplicationController

This is the Rails default controller that resource controllers inherit from.
This controller defines the `authenticate` and `set_current_user` methods.

Authentication is very important and not easy to implement correctly. This is
why as a junior level developer, we will never need to be the ones writing
authentication code. We will however need to know how to use it successfully.

We like to refer to complex systems like Authentication as a power drill. You
don't necessarily need to know how a power drill works to use it correctly. So
for now, just make sure that your controller inherits from `OpenReadController`
or `ProtectedController`, both of those controllers inherit the Authentication
related methods from `ApplicationController`

Make sure not to change any of the code in `ApplicationController`, and also
don't change how `OpenReadController` or `ProtectedController` are defined.

## ProtectedController

**Inherit from this controller to require authenticated access to all actions.**

`ProtectedController` inherits from `ApplicationController`. As a result,
this controller has access to the methods specified in its parent.

```rb
class ProtectedController < ApplicationController
  before_action :authenticate
end
```

This controller:

- Invokes the `authenticate` method, inherited from `ApplicationController`,
  before **every** controller action.

Inherit from this controller if the desired effect for a resource is to have a
user authenticated for all controller actions.

## OpenReadController

**Inherit from this controller to allow unauthenticated access to read actions.**

`OpenReadController` inherits from `ProtectedController`. As a result,
this controller has access to the methods specified in its parent.

```rb
class OpenReadController < ProtectedController
  READ_ACTIONS = %i[index show].freeze
  skip_before_action :authenticate, only: READ_ACTIONS
  before_action :set_current_user, only: READ_ACTIONS
end
```

This controller:

- Overrides the `ProtectedController` `before_action` to:
  - **Not** invoke the `authenticate` method for the `index` and `show` actions.
  - Instead, invoke the `set_current_user` method for the `index` and `show`
    actions.

Inherit from this controller if the desired effect for a resource is to allow
unauthenticated `index` and `show` actions.

## ExamplesController

**Model custom resource after this controller to implement user owned resources.**

`ExamplesController` inherits from `OpenReadController`. As a result,
this controller has access to the methods specified in its parent.

_Note: `ExamplesController` could also inherit from `ProtectedController`._

```rb
class ExamplesController < OpenReadController
  before_action :set_example, only: %i[update destroy]
```

This controller:

- Invokes the `set_example` method before the `update` and `destroy` actions.
- Handles example resource actions.

### User Owned Resource Actions

`current_user` is available as an `attr_reader`. We can use it in the
`ExamplesController` to create and modify user authenticated resources.

#### Create

To create a user owned resource, we access the resource through the
`current_user` object.

```rb
@example = current_user.examples.build(example_params)
```

The one-to-many relationship between Users and Examples where a User `has_many`
Examples makes this possible. One of the
[instance methods available](http://api.rubyonrails.org/classes/ActiveRecord/Associations/ClassMethods.html#module-ActiveRecord::Associations::ClassMethods-label-Collection+associations+-28one-to-many+-2F+many-to-many-29)
from the `has_many` macro is `.build`. Now, we can create examples which belong
to the currently authenticated user.

#### Update & Destroy

In order to `update` or `destroy` an example, we need to specify which example
we want to modify. The `before_action`, `set_example`, needs to indicate
which of the `current_user`'s examples to modify.

```rb
def set_example
   @example = current_user.examples.find(params[:id])
end
```

Here we are searching through the `current_user`'s examples for the example
with the given `id`.

Once `set_example` has selected the example to perform a modification on, the
`update` or `destroy` action will be invoked on the specific example.

## Example Serializer

The serializer is where we can tell Rails which attributes we want to send back
to the client about the resource they requested.

Any column from the Examples table can be listed as an attribute to be sent
back to the client in the Example Serializer.

If there is some information that we don't want to respond with we can simply
exclude it from the list of attributes.

We can even list a new attribute that doesn't come from the database as long as
we define it as a method in the serializer beneath the list of attributes.
Whatever gets returned from that method will be the value listed for the new
attribute you added.

Let's look at an example from the Example Serializer:

```ruby
  attributes :id, :text, :editable

  def editable
    scope == object.user
  end
end
```

Here we have listed two attributes that come directly from the Examples table
in the database: `:id` and `:text`. Then we added a third attribute called
`:editable` that is not a column in the table.

Therefore we need to define a method with the same name beneath the list of
attributes. Whatever value the method returns (in this case either `true` or
`false`) is what will be listed as the editable value in the response.

### Keywords in the Serializer

Now that we know what we can use Serializers for, let's talk briefly about the
code from that last example. We are using the `active_model_serializers` gem to
provide a bunch of nice functionality to our serializers. Because of that we
have some methods included that will give us access to certain data.

- `scope`: From within the Serializer, `scope` will have the value of the
  currently signed in user.
- `object`: From within the Serializer, `object` will be how we refer to the
  instance of the resource that we are currently serializing.

Now that we know what those words mean, we can see that comparing `scope` to
`object.user` will tell us if the user associated with the resource we are
serializing out matches the user of the currently signed in user.

There are other keywords you can use from within the Serializer but these two
will probably be the most useful. If you want to check out the docs here's a
[link](https://www.rubydoc.info/gems/active_model_serializers).

## Summary

Whew that was a lot. Let's do a brief recap.

- Inherit from `ProtectedController` to require authenticated access to *all*
  controller actions.
- Inherit from `OpenReadController` to allow unauthenticated access to *read*
  *actions* (index & show).
- Model custom resource after `ExamplesController`  to implement user owned
  resources.
- Implement user owned resources utilizing `current_user`
  - Create action:
    `@example = current_user.examples.build(example_params)`
  - `set_example` for Update & Delete actions:
      `@example = current_user.examples.find(params[:id])`

### Controller Authentication Table

![](https://git.generalassemb.ly/storage/user/3667/files/ce9182ee-448c-11e8-8c52-16edb26fedd2)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
