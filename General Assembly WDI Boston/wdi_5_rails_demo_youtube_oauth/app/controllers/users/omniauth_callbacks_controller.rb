class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
	def google_oauth2
	    @user = User.find_for_google_oauth2(request.env["omniauth.auth"], current_user)
	    binding.pry
	    if @user.persisted?
	      flash[:notice] = I18n.t "devise.omniauth_callbacks.success", kind: "Google"
	      sign_in_and_redirect @user, event: :authentication
	    else
	      session["devise.google_data"] = request.env["omniauth.auth"]
	      redirect_to new_user_registration_url
	    end
	end

		def youtube
	    @user = User.find_for_youtube(request.env["omniauth.auth"], current_user)
	    binding.pry
	    if @user.persisted?
	      flash[:notice] = I18n.t "devise.omniauth_callbacks.success", kind: "Youtube"
	      sign_in_and_redirect @user, event: :authentication
	    else
	      session["devise.youtube_data"] = request.env["omniauth.auth"]
	      redirect_to new_user_registration_url
	    end
	end
end