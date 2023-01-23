class Movie < ApplicationRecord
  has_many :appearance, dependent: :destroy
  has_many :actors, through: :appearance
end
