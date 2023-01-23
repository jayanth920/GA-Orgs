require_relative '../lib/insurance_company'
# Creating a company with a name
aetna = InsuranceCompany.new("Aetna")
puts aetna.name

# Creating tom
tom = Person.new("Tom", "Dyer")
jill = Person.new("Jill", "Stein")

# Adding tom as a Aetna client
aetna.add_client(tom)
aetna.add_client(jill)

# Give me all of the aetna client
my_clients = aetna.get_clients

# symbol to proc '&:' 
# shorcut to invoke methods
# Call/Invoke the full_name method for each element 
# of the my_clients array
puts "client are #{my_clients.map(&:full_name)}"
