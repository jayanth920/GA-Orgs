# One to Many Relationship in Rails - Additional Options

## Create a person for a location

in `config/routes.rb`:

```ruby
post '/locations/:id/inhabitants', to: 'people#create'
```

in `app/controllers/people_controller.rb`:

```ruby
def create
    #takes the :id for the location and converts it to home_id for person
    if params["id"]
        params["person"]["home_id"] = params["id"].to_i
    end
    render json: Person.create(params["person"])
end
```

## Create a location for a person

In `config/routes.rb`:

```ruby
post '/people/:id/home', to: 'locations#create'
```

In `app/models/person.rb`:

```ruby
def self.setHome(person_id, home)
    results = DB.exec(
        <<-SQL
            UPDATE people
            SET home_id = #{home.id}
            WHERE id = #{person_id}
            RETURNING id, name, age;
        SQL
    )
    # above, we don't return home_id so that the Person created here doesn't have a home property
    # this helps us in locations#create
    return Person.new(results.first)
    return {
        "id" => results.first["id"].to_i,
        "name" => results.first["name"],
        "age" => results.first["age"].to_i,
    }
end
```

In `app/controllers/locations_controller.rb`:

```ruby
def create
    created_location = Location.create(params["location"])
    if params["id"]
        updated_person = Person.setHome(params["id"], created_location)
        # in previous step, we set it up so that now, updated_person doesn't have a home attribute
        # this is nice so that we don't have created_location.inhabitants[0].home which is a repeat of created_location
        created_location.inhabitants.push(updated_person)
    end
    render json: created_location
end
```
