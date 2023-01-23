class LineItem < ActiveRecord::Base
  belongs_to :user
  belongs_to :product
  belongs_to :order

  scope :in_cart, -> {where order_id: nil}
  scope :checked_out, -> {where "order_id IS NOT NULL" }

end
