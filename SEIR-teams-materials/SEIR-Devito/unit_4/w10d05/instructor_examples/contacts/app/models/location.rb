class Location
 # create a connection to to postgres
  DB = PG.connect({:host => "localhost", :port => 5432, :dbname => 'contacts_development'})

  def self.all
    # execute an sql query
    results = DB.exec(
        <<-SQL
            SELECT
                locations.*,
                people.id AS person_id,
                people.name,
                people.age
            FROM locations
            LEFT JOIN people
                ON locations.id = people.home_id
            ORDER BY id ASC;
        SQL
    )
    locations = []
    last_location_id = nil
    results.each do |result|
      if result["id"] != last_location_id
        locations.push({
          "id" => result["id"].to_i,
          "street" => result["street"],
          "city" => result["city"],
          "state" => result["state"],
          "inhabitants" => []
        })
        last_location_id = result["id"]
      end

      if result["person_id"]
          new_person = {
              "id" => result["person_id"].to_i,
              "name" => result["name"],
              "age" => result["age"].to_i
          }
          locations.last["inhabitants"].push(new_person)
      end
    end
    return locations
  end #ends def self.all

  def self.find(id)
    results = DB.exec(
        <<-SQL
            SELECT
                locations.*,
                people.id AS person_id,
                people.name,
                people.age,
                people.home_id
            FROM locations
            LEFT JOIN people
                ON locations.id = people.home_id
            WHERE locations.id = #{id};
        SQL
    )
    inhabitants = []
    results.each do |result|
        if result["person_id"]
            inhabitants.push({
                "id" => result["person_id"].to_i,
                "name" => result["name"],
                "age" => result["age"].to_i
            })
        end
    end
    return  {
        "id" => results.first["id"].to_i,
        "street" => results.first["street"],
        "city" => results.first["city"],
        "state" => results.first["state"],
        "inhabitants" => inhabitants
    }
  end

  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO locations (street, city, state)
        VALUES ( '#{opts["street"]}', '#{opts["city"]}', '#{opts["state"]}')
        RETURNING id, street, city, state;
      SQL
    )

    return {
       "id" => results.first["id"].to_i,
       "street" => results.first["street"],
       "city" => results.first["city"],
       "state" => results.first["state"]
     }
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM locations WHERE id=#{id};")
    return { "deleted" => true }
  end

  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE locations
        SET
          street='#{opts["street"]}',
          city='#{opts["city"]}',
          state='#{opts["state"]}'
        WHERE id=#{id}
        RETURNING street, city, state;
      SQL
    )
    return {
       "id" => results.first["id"].to_i,
       "street" => results.first["street"],
       "city" => results.first["city"],
       "state" => results.first["state"]
     }
  end

end # ends Person class
