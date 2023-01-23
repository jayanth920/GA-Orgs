class FollowsController < ApplicationController
  def create
    current_user.outward_follows.create!(:followed_id => params[:user_id])
    redirect_to user_path(params[:user_id])
  end
  def destroy
    current_user.outward_follows.find_by(:followed_id => params[:user_id]
      ).destroy
    redirect_to user_path(params[:user_id])
  end
end