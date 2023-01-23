require 'yaml'
require_relative '../lib/user'

file_name = "data/users.yaml"

all_users = YAML::load(File.read(file_name))

all_users.each do |user|
  puts "User: \n#{user}"
end
