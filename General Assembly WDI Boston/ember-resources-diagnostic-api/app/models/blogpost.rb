class Blogpost < ActiveRecord::Base
  has_many :comments, inverse_of: :blogpost
end
