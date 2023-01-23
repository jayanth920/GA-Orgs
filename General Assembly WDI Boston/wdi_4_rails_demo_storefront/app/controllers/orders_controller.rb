class OrdersController < ApplicationController
	def create

		#### IN REALITY, payment processing should happen in here too

		# Find all the user's current items in 'cart' (line_items)
		cart_items = current_user.line_items.in_cart

		# Find total price of items
		total_amount = cart_items.sum {|item| item.product.price }

		# Create a new order with a total price from line_items
		order = Order.create(total_price: total_amount)

		# Associate those line items with Order
		cart_items.each do |item|
			item.order = order
			item.save
		end

		# Redirect somewhere and say ok
		redirect_to :root, notice: "Checkout complete"
	end
end