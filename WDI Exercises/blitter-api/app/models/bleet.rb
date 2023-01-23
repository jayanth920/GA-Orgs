class Bleet < ApplicationRecord
  has_many :comments, dependent: :destroy
end
