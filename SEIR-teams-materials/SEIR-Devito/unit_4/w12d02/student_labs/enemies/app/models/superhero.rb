class Superhero
  DB = PG.connect({
    :host => "localhost",
    :port => 5432,
    :dbname => 'enemies_development'
    })


  def self.all
    results = DB.exec( "SELECT * FROM superheros;")
    return results.map do |result|
      {
        "id" => result["id"],
        "name" => result["name"],
        "battlecry" => result["battlecry"]
      }
    end
  end

  def self.find(id)
    results = DB.exec( "SELECT * FROM superheros WHERE id = #{id};")
    result = results.first
    return {
        "id" => result["id"],
        "name" => result["name"],
        "battlecry" => result["battlecry"]
      }
  end

  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO superheros (name, battlecry)
        VALUES ('#{opts["name"]}', '#{opts["battlecry"]}')
        RETURNING id, name, battlecry
      SQL
    )
    result = results.first
    return {
      "id" => result["id"].to_i,
      "name" => result["name"],
      "battlecry" => result["battlecry"]
    }
  end

  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE superheros
        SET name='#{opts['name']}', battlecry='#{opts["battlecry"]}'
        WHERE id=#{id}
        RETURNING id, name, battlecry
      SQL
    )
    result = results.first
    return {
      "id" => result["id"].to_i,
      "name" => result["name"],
      "battlecry" => result["battlecry"]
    }
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM superheros WHERE id=#{id};")
    p "RESULTS ", results
    return { "deleted" => true }
  end
end
