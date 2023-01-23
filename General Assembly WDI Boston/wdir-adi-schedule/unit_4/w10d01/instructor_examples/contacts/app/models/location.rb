class Location
  DB = PG.connect(
    {
      :host => "localhost",
      :port => 5432,
      :dbname => 'contacts_development'
    }
  )

  def self.all
    results = DB.exec("SELECT * FROM locations;")
    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "street" => result["street"],
        "city" => result["city"],
        "state" => result["state"],
      }
    end
  end

  def self.find(id)
    # different than notes
    # .first here! Save typing!
    results = DB.exec("SELECT * FROM locations WHERE id=#{id}").first
    return {
      "id" => results["id"].to_i,
      "street" => results["street"],
      "city" => results["city"],
      "state" => results["state"],
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
      "state" => results.first["state"],
    }

  end

  def self.delete(id)
    results = DB.exec("DELETE FROM locations WHERE id=#{id};")
    return {"deleted" => true}
  end

  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE locations
        SET street='#{opts["street"]}', city='#{opts["city"]}', state='#{opts["state"]}'
        WHERE id=#{id}
        RETURNING id, street, city, state;
      SQL
    )
    return {
      "id" => results.first["id"].to_i,
      "street" => results.first["street"],
      "city" => results.first["city"],
      "state" => results.first["state"],
    }

  end

end
