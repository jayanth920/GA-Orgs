class Company
    attr_reader :id, :name, :industry, :employees

    DB = PG.connect(host: "localhost", port: 5432, dbname:'contacts')

    def initialize(opts)
        @id = opts["id"].to_i
        @name = opts["name"]
        @industry = opts["industry"]
        if opts["employees"]
            @employees = opts["employees"]
        end
    end

    def self.all
        results = DB.exec(
            <<-SQL
                SELECT
                    companies.*,
                    people.id AS person_id,
                    people.name AS person_name,
                    people.age
                FROM companies
                LEFT JOIN jobs
                    ON companies.id=jobs.company_id
                LEFT JOIN people
                    ON jobs.person_id = people.id;
            SQL
        )
        companies = []
        last_company_id = nil
        results.each do |result|
            if result["id"] != last_company_id
                company = Company.new({
                    "id" => result["id"],
                    "name" => result["name"],
                    "industry" => result["industry"],
                    "employees" => []
                })
                companies.push(company)
                last_company_id = result["id"]
            end
            if result["person_id"]
                companies.last.employees.push(Person.new({
                    "id" => result["person_id"],
                    "name" => result["person_name"],
                    "age" => result["age"],
                }))
            end
        end
        return companies
    end
    def self.find(id)
        results = DB.exec(
            <<-SQL
                SELECT
                    companies.*,
                    people.id AS person_id,
                    people.name AS person_name,
                    people.age
                FROM companies
                LEFT JOIN jobs
                    ON companies.id=jobs.company_id
                LEFT JOIN people
                    ON jobs.person_id = people.id
                WHERE companies.id = #{id};
            SQL
        )
        employees = [];
        results.each do |result|
            if result["person_id"]
                employees.push(Person.new({
                    "id" => result["person_id"],
                    "name" => result["person_name"],
                    "age" => result["age"]
                }))
            end
        end
        return Company.new({
            "id" => results.first["id"],
            "name" => results.first["name"],
            "industry" => results.first["industry"],
            "employees" => employees
        })
    end
    def self.create(opts)
        results = DB.exec(
            <<-SQL
                INSERT INTO companies (name, industry)
                VALUES ('#{opts["name"]}', '#{opts["industry"]}')
                RETURNING id, name, industry
            SQL
        )
        return Company.new(results.first)
    end
    def self.delete(id)
        results = DB.exec("DELETE FROM companies WHERE id=#{id}")
        return { delete:true }
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
        return Company.new(results.first)
    end
end
