class AttendancesController < ApplicationController
  def create
    current_user.attendances.create!(:show_id => params[:show_id])
    redirect_to show_path(params[:show_id])
  end
  def destroy
    current_user.attendances.find_by(:show_id => params[:show_id]
      ).destroy
    redirect_to show_path(params[:show_id])
  end
end