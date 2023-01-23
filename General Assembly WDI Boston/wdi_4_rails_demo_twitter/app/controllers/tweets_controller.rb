class TweetsController < ApplicationController
	def index
		@tweets = Tweet.all
	end

	def show
		@tweet = Tweet.find(params[:id])
	end

	def new
		# Will tell why I need this in a second
		@tweet = Tweet.new
	end

	def create
		@tweet = Tweet.new
		@tweet.text = params[:text]
		if @tweet.save
			redirect_to @tweet, notice: "ok!"
		else
			# If the save doesn't work, then we want to keep
			# the errors around, so we can show them!
			# The following renders the view of 'new'
			render action: "new"
		end
	end

end