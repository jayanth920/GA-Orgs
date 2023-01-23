class Guitar < ActiveRecord::Base
  attr_accessible :color, :description, :make, :model, :price, :year
end
