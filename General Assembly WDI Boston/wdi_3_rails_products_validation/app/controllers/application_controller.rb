class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # Run this before every action
  before_filter :set_title

  private 

  def set_title
    @title = self.class.name.split('Controller').first
  end
end
