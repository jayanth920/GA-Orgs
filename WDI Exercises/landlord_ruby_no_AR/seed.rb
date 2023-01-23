require 'faker'
require 'pry'

apartments = []
tenants = []
20.times do |i|
  apartments << {id: i + 1, address: Faker::Address.street_address, monthly_rent: rand(500..1000), square_feet: rand(600..1500)}
end


50.times do |i|
  tenants << {id: i + 1, name: Faker::Name.name, age: rand(18..90), apartment_id: apartments.sample[:id] }
end

puts tenants.join(", ")
