class staff
  # connecting to database
  DB = PG.connect({:host => "localhost", :port => 5432, :dbname => 'dunder_mifflin_development'})

  # get all staff
  def self.all
    results = DB.exec("SELECT * FROM staff;")
    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "name" => result["name"],
        "position" => result["position"],
        "age" => result["age"].to_i
      }
    end
  end

  # get one staff
  def find id
    results = DB.exec("SELECT * FROM staff WHERE id=#{id}")
    return {
      "id" => results.first["id"].to_i,
      "name" => results.first["name"],
      "position" => results.first["position"],
      "age" => results.first["age"].to_i
    }
  end

  # create staff
  def self.create opts
    results = DB.exec(
      <<-SQL
        INSERT INTO staff (name, position, age)
        VALUES ( #{opts["name"]}, '#{opts["position"]}', #{opts["age"]} )
        RETURNING id, name, position, age;
      SQL
    )
    return {
      "id" => results.first["id"].to_i,
      "name" => results.first["name"],
      "position" => results.first["position"],
      "age" => results.first["age"].to_i
    }
  end

  # delete one staff
  def self.delete id
    results = DB.exec("DELETE FROM staff WHERE id=#{id};")
    return { "deleted" => true }
  end

  # update one staff
  def self.update id, opts
    results = DB.exec(
      <<-SQL
        UPDATE staff
        SET name='#{opts["name"]}', position='#{opts["position"]}', age=#{opts["age"]}
        WHERE id=#{id}
        RETURNING id, name, position, age;
      SQL
    )
    return {
      "id" => results.first["id"].to_i,
      "name" => results.first["name"],
      "position" => results.first["position"],
      "age" => results.first["age"].to_i
    }
  end

end
