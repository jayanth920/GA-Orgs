class LineItemsController < ApplicationController
  before_filter :authenticate_user!

	def create
		product = Product.find(params[:product_id])
		line_item = product.line_items.build(user: current_user)
		line_item.save
		respond_to do |format|
			format.html	{redirect_to :cart}
			format.json {render nothing: true}
		end
	end

	def index
		respond_to do|format|
			format.html {@line_items = current_user.line_items.in_cart}
			# TODO: replace this when the json request has a current_user
			format.json { render :json => current_user.line_items.in_cart, :root => false }
			#format.json {render :json => LineItem.in_cart, :root => false}
		end

	end

	def delete
		LineItem.find(params[:id]).destroy
		redirect_to :cart
	end
end
