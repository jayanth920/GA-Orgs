class Company
    # connect to postgres
    DB = PG.connect({:host => "localhost", :port => 5432, :dbname => 'contacts_development'})

    def self.all
        results = DB.exec("SELECT * FROM companies;")
        return results.map do |result|
            {
                "id" => result["id"].to_i,
                "name" => result["name"],
                "industry" => result["industry"],
            }
        end
    end

    def self.find(id)
        results = DB.exec("SELECT * FROM companies WHERE id=#{id};")
        return {
            "id" => results.first["id"].to_i,
            "name" => results.first["name"],
            "industry" => results.first["industry"],
        }
    end

    def self.create(opts)
        results = DB.exec(
            <<-SQL
                INSERT INTO companies (name, industry)
                VALUES ( '#{opts["name"]}', '#{opts["industry"]}' )
                RETURNING id, name, industry;
            SQL
        )
        return {
            "id" => results.first["id"].to_i,
            "name" => results.first["name"],
            "industry" => results.first["industry"],
        }
    end

    def self.delete(id)
        results = DB.exec("DELETE FROM companies WHERE id=#{id};")
        return { "deleted" => true }
    end

    def self.update(id, opts)
        results = DB.exec(
            <<-SQL
                UPDATE companies
                SET name='#{opts["name"]}', industry='#{opts["industry"]}'
                WHERE id=#{id}
                RETURNING id, name, industry;
            SQL
        )
        return {
            "id" => results.first["id"].to_i,
            "name" => results.first["name"],
            "industry" => results.first["industry"],
        }
    end
end
