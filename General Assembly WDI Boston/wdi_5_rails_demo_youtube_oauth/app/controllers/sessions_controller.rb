class SessionsController < ApplicationController

#   def new
#     logger.debug "params: #{params.inspect}"
#     services = ['youtube', 'tumblr', 'google_oauth2', 'twitter', 'github', 'facebook', 'vimeo'] # TODO extract from OmniAuth.config
#     links = services.sort.map{|service| "<li style='margin: 15px;'><a href='/auth/#{service}'>#{service}</a></li>" }
#     render :text => "Authenticate with: <ul style='font-size: 20pt;'>#{links.join}</ul>", :layout => true
#   end

#   def create
#     current_user ||= nil

#     @user = User.find_for_youtube_oauth(request.env["omniauth.auth"], current_user)

#     if @user.persisted?
#       flash[:notice] = I18n.t "devise.omniauth_callbacks.success", kind: "Youtube"
#       sign_in_and_redirect @user, event: :authentication
#     else
#       session["devise.youtube_data"] = request.env["omniauth.auth"]
#       redirect_to new_user_registration_url
#     end

#   end

#   def failure
#     render :text => "FAILURE :-("
#   end
	def destroy
		session.destroy
		redirect_to :root
	end
end
