class LineItem < ActiveRecord::Base
  belongs_to :product
  belongs_to :user
  belongs_to :order

  scope :in_cart, -> {where order_id: nil}
end
