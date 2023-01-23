class HomeController < ApplicationController
	def show
	end

	# POST to send_email
	def send_email
		Resque.enqueue(SendBackgroundEmail, current_user.email, params)
		redirect_to root_url, notice: "Email sent"
	end
end