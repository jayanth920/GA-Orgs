class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    if @user = User.find_by(username: params[:username]) # Is the username in my database?
      if @user.authenticate(params[:password])           # Did the user enter the right password?
        session[:current_user] = @user.id
        redirect_to users_path
      else
        render :new
      end
    else
      @user = User.new # If incorrect username, create a blank user object for 'new' form
      render :new
    end
  end

  def destroy
    session[:current_user] = nil
    redirect_to users_path
  end
end
