class OrdersController < ApplicationController
	def index
		@orders = current_user.orders
	end
	
	def create
	  # Amount in cents
	  @amount = current_user.line_items.in_cart.sum {|item| item.product.price * 100 }.to_i

	  customer = Stripe::Customer.create(
	    email: current_user.email,
	    card: params[:stripeToken]
	  )

	  stripe_order = Stripe::Charge.create(
	    customer: customer.id,
	    amount: @amount,
	    description: 'Rails Stripe customer',
	    currency: 'usd'
	  )

	# We now need to change the line_item products now to be purchased as part of an Order
	order = Order.create(total: @amount)
	current_user.line_items.in_cart.each do |cart_item|
		cart_item.order = order
		cart_item.save
	end

	rescue Stripe::CardError => e
	  flash[:error] = e.message
	  redirect_to orders_path
	end
end
