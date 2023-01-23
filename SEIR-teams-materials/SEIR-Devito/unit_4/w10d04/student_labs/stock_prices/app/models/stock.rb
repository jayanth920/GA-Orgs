class Stock
  DB = PG.connect({:host=> "localhost", :port => 5432, :dbname => 'stock_prices'})

  def self.all
    results = DB.exec("SELECT * FROM stocks;")
    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "company" => result["company"],
        "symbol" => result["symbol"]
      }
    end
  end

  def self.find(id)
    results = DB.exec("SELECT * FROM stocks WHERE id=#{id};")
    result = results.first;
    return {
      "id" => result["id"].to_i,
      "company" => result["company"],
      "symbol" => result["symbol"]
    }
  end

  def self.create(opts)
    puts "OPTS", opts
    results = DB.exec(
      <<-SQL
        INSERT INTO stocks (company, symbol)
        VALUES ( '#{opts["company"]}', '#{opts["symbol"]}')
        RETURNING id, company, symbol;
      SQL
    )
    result = results.first
    return {
      "id" => result["id"].to_i,
      "company" => result["company"],
      "symbol" => result["symbol"]
    }
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM stocks WHERE id=#{id};")
    return { "deleted" => true }
  end

  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE stocks
        SET company='#{opts["company"]}', symbol='#{opts["symbol"]}'
        WHERE id=#{id}
        RETURNING id, company, symbol
      SQL
    )
    result = results.first
    return {
      "id" => result["id"].to_i,
      "company" => result["company"],
      "symbol" => result["symbol"]
    }
  end
end
