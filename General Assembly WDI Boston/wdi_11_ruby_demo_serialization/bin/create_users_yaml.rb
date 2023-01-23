require 'faker'
require_relative './create_users'

user_count = 437
users = CreateUsers.create(user_count)

file_name = "data/users.yaml"
File.open(file_name, "w") do |file|
  serialized_users = YAML::dump(users)
  file.write(serialized_users)
  puts "Wrote #{user_count} users to #{file_name}"
end
