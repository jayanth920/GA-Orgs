class LineItemsController < ApplicationController
	def index
		@line_items = current_user.line_items.in_cart
	end
	
	def create
		LineItem.create(user_id: params[:user_id], product_id: params[:product_id])
		redirect_to :cart
	end

	def delete
		LineItem.find(params[:line_item_id]).destroy
		redirect_to :cart
	end
end