class Order < ActiveRecord::Base
	has_many :line_items
	has_many :products, through: :line_items
	has_one :user, through: :line_items
end
