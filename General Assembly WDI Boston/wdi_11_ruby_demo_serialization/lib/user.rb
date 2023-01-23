require 'securerandom'

require_relative './mailing_address'
require_relative './user_preference'

class User
  attr_accessor :mailing_address, :phone_num, :email, :uid, :user_preference

  def initialize(mailing_address, phone_num,  email='')
    @mailing_address = mailing_address
    @user_preference = UserPreference.new
    @phone_num = phone_num
    @email = email
    @uid = SecureRandom::uuid
  end

  def to_s
    [
     "uuid: #{uid}, email: #{self.email}, phone_num: #{phone_num}",
     "#{mailing_address}",
     "#{user_preference}"
     ].join("\n")

  end
end
