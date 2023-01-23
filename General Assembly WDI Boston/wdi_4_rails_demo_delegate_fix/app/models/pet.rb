class Pet < ActiveRecord::Base
  belongs_to :user

  # gives me a method of `user_name` on an instance of pet
  # which if it doesn't work returns nil, but doesn't error
  delegate :name, to: :user, allow_nil: true, prefix: true
end
