class Person
 # create a connection to to postgres
  DB = PG.connect({:host => "localhost", :port => 5432, :dbname => 'contacts_development'})

  def self.all
    # execute an sql query
    results = DB.exec(
        <<-SQL
            SELECT
                people.*,
                locations.street,
                locations.city,
                locations.state
            FROM people
            LEFT JOIN locations
                ON people.home_id = locations.id;
        SQL
    )
    return results.map do |result|
      if result["home_id"]
          home = {
              "id" => result["home_id"],
              "street" => result["street"],
              "city" => result["city"],
              "state" => result["state"]
          }
      end
      {
        "id" => result["id"].to_i,
        "name" => result["name"],
        "age" => result["age"].to_i,
        "home" => home
      }
    end #end map

  end #ends def self.all

  def self.find(id)
    results = DB.exec(
        <<-SQL
            SELECT
                people.*,
                locations.street,
                locations.city,
                locations.state
            FROM people
            LEFT JOIN locations
                ON people.home_id = locations.id
            WHERE people.id=#{id};
        SQL
    )
    result = results.first
    if result["home_id"]
        home = {
            "id" => result["home_id"],
            "street" => result["street"],
            "city" => result["city"],
            "state" => result["state"]
        }
    end
    return {
      "id" => results.first["id"].to_i,
      "name" => results.first["name"],
      "age" => results.first["age"].to_i,
      "home" => home
    }
  end

  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO people (name, age, home_id)
        VALUES ( '#{opts["name"]}', #{opts["age"]}, #{opts["home_id"] ? opts["home_id"] : "NULL" } )
        RETURNING id, name, age, home_id;
      SQL
    )

    return {
      "id" => results.first["id"].to_i,
      "name" => results.first["name"],
      "age" => results.first["age"].to_i,
      "home_id" => results.first["home_id"].to_i
    }
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM people WHERE id=#{id};")
    return { "deleted" => true }
  end

  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE people
        SET name='#{opts["name"]}', age=#{opts["age"]}, home_id=#{opts["home_id"] ? opts["home_id"] : "NULL"}
        WHERE id=#{id}
        RETURNING id, name, age, home_id;
      SQL
    )
    return {
      "id" => results.first["id"].to_i,
      "name" => results.first["name"],
      "age" => results.first["age"].to_i,
      "home_id" => results.first["home_id"].to_i
    }
  end

end # ends Person class
