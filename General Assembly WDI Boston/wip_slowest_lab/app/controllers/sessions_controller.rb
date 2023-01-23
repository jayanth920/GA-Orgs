class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    user=User.find_by_email(params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      # Sign the user in and redirect to the user's show page.
      sign_in user
      redirect_to root_path
    else
      # Create an error message and re-render the signin form.
      flash.now[:error]='Invalid email/password combination'
      @user = User.new
      render 'new'
    end
  end

  def destroy
      sign_out
      redirect_to root_url
  end
end