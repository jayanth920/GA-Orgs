class Comment < ActiveRecord::Base
  belongs_to :blogpost, inverse_of: :comments
end
