require 'faker'
require_relative '../lib/user'

class CreateUsers
  def self.create(num_of_users)
    all_users = []

    num_of_users.times do |i|
      address = MailingAddress.new(Faker::Address.street_address, Faker::Address.city, Faker::Address.state_abbr, Faker::Address.zip)
      prefs = UserPreference.new()
      user = User.new(address, Faker::PhoneNumber.cell_phone, Faker::Internet.email)
      # puts "Created User #{user}"
      all_users << user
    end
    all_users
  end

end
