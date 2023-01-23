require_relative '../lib/user'

file_name = "data/users_binary"

all_users = Marshal::load(File.read(file_name))

all_users.each do |user|
  puts "User: \n#{user}"
end
