[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# rails-api-campus-server

## Cafeteria Documentation

### User Stories

- Version 1
  - As a user, I want to view a single ingredient
  - As a user, I want to view all ingredients
  - As a user, I want to create an ingredient with name and unit
  - As a user, I want to edit an ingredient's name and unit
  - As a user, I want to delete an ingredient

- Version 2
  - As a user, I want to view a single ingredient
  - As a user, I want to view all ingredients
  - As a user, I want to create an ingredient with name and unit
  - As a user, I want to edit an ingredient's name and unit
  - As a user, I want to delete an ingredient
  - As a user, I want to view a recipe
  - As a user, I want to view all recipes
  - As a user, I want to create a recipe with a name and description
  - As a user, I want to edit a recipe's name and description
  - As a user, I want to delete a recipe
  - As a user, I want to assign a single recipe to an ingredient
  - As a user, I want to assign multiple ingredients to a recipe

- Version 3
  - As a user, I want to view a single ingredient
  - As a user, I want to view all ingredients
  - As a user, I want to create an ingredient with a name
  - As a user, I want to edit an ingredient's name
  - As a user, I want to delete an ingredient
  - As a user, I want to view a recipe
  - As a user, I want to view all recipes
  - As a user, I want to create a recipe with a name and description
  - As a user, I want to edit a recipe's name and description
  - As a user, I want to delete a recipe
  - As a user, I want to assign multiple ingredients to a recipe
  - As a user, I want to assign multiple recipes to an ingredient
  - As a user, I want to create a Meal with an amount and unit that
    is specific for an ingredient being used in a specific recipe

### Entity Relationship Diagrams

#### Version 1

**Ingredients**

<table>
  <th colspan="2" style="text-align:center">Ingredients</th>
  <tr>
    <td>id</td>
    <td>primary key</td>
  </tr>
  <tr>
    <td>name</td>
    <td>string</td>
  </tr>
  <tr>
    <td>unit</td>
    <td>string</td>
  </tr>
  <tr>
    <td>created_at</td>
    <td>datetime</td>
  </tr>
  <tr>
    <td>updated_at</td>
    <td>datetime</td>
  </tr>
</table>

#### Version 2

`Recipes` -|--< `Ingredients`

**Recipe** has many **Ingredients**

**Ingredients** belongs to **Recipe**

<table style="display:inline">
  <th colspan="2" style="text-align:center">Ingredients</th>
  <th colspan="2" style="text-align:center">
  Recipes
  </th>
  <tr>
    <td>id</td>
    <td>primary key</td>
    <td>id</td>
    <td>primary key</td>
  </tr>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>name</td>
    <td>string</td>
  </tr>
  <tr>
    <td>unit</td>
    <td>string</td>
    <td>description</td>
    <td>string</td>
  </tr>
  <tr>
    <td>recipe_id</td>
    <td>foreign key</td>
    <td>created_at</td>
    <td>datetime</td>
  </tr>
  <tr>
    <td>created_at</td>
    <td>datetime</td>
    <td>updated_at</td>
    <td>datetime</td>
  </tr>
  <tr>
    <td>updated_at</td>
    <td>string</td>
    <td></td>
    <td></td>
  </tr>
</table>

#### Version 3

`Ingredients` -|--< `Meals` >--|- `Recipes`

**Ingredients** have many **Recipes** through **Meals**

**Recipes** have many **Ingredients** through **Meals**

**Meals** belongs to both an **Ingredient** and a **Recipe**

<table style="display:inline">
  <th colspan="2" style="text-align:center">Ingredients</th>
  <th colspan="2" style="text-align:center">
  Meals
  </th>
  <th colspan="2" style="text-align:center">
  Recipes
  </th>
  <tr>
    <td>id</td>
    <td>primary key</td>
    <td>id</td>
    <td>primary key</td>
    <td>id</td>
    <td>primary key</td>
  </tr>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>amount</td>
    <td>integer</td>
    <td>name</td>
    <td>string</td>
  </tr>
  <tr>
    <td>created_at</td>
    <td>datetime</td>
    <td>unit</td>
    <td>string</td>
    <td>description</td>
    <td>string</td>
  </tr>
  <tr>
    <td>updated_at</td>
    <td>datetime</td>
    <td>recipe_id</td>
    <td>foreign key</td>
    <td>created_at</td>
    <td>datetime</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>ingredient_id</td>
    <td>foreign key</td>
    <td>updated_at</td>
    <td>datetime</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>created_at</td>
    <td>datetime</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>updated_at</td>
    <td>datetime</td>
    <td></td>
    <td></td>
  </tr>
</table>

## [License](../LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
