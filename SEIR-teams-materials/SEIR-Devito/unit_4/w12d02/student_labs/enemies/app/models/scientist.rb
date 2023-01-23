class Scientist
  DB = PG.connect({
    :host => "localhost",
    :port => 5432,
    :dbname => 'enemies_development'
    })


  def self.all
    results = DB.exec( "SELECT * FROM scientists;")
    return results.map do |result|
      {
        "id" => result["id"],
        "name" => result["name"],
        "lair_type" => result["lair_type"]
      }
    end
  end

  def self.find(id)
    results = DB.exec( "SELECT * FROM scientists WHERE id = #{id};")
    result = results.first
    return {
        "id" => result["id"],
        "name" => result["name"],
        "lair_type" => result["lair_type"]
      }
  end

  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO scientists (name, lair_type)
        VALUES ('#{opts["name"]}', '#{opts["lair_type"]}')
        RETURNING id, name, lair_type
      SQL
    )
    result = results.first
    return {
      "id" => result["id"].to_i,
      "name" => result["name"],
      "lair_type" => result["lair_type"]
    }
  end

  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE scientists
        SET name='#{opts['name']}', lair_type='#{opts["lair_type"]}'
        WHERE id=#{id}
        RETURNING id, name, lair_type
      SQL
    )
    result = results.first
    return {
      "id" => result["id"].to_i,
      "name" => result["name"],
      "lair_type" => result["lair_type"]
    }
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM scientists WHERE id=#{id};")
    p "RESULTS ", results
    return { "deleted" => true }
  end
end
