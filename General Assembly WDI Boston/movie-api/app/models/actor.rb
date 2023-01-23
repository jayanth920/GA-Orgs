class Actor < ApplicationRecord
  has_many :appearance
  has_many :movies, through: :appearance

  validates :first_name, uniqueness: { scope: :last_name }
end
