class EntriesController < ApplicationController
  before_action :authenticate, only: [:new, :create]
  def index
    @entries = Entry.all
  end

  def new
    @entry = Entry.new
  end

  def create
    @entry = Entry.new(entry_params)
    @entry.user = User.find(session[:current_user])
    if @entry.save
      redirect_to entries_path
    else
      render :new
    end
  end

  private
  def entry_params
    params.require(:entry).permit(:title, :content)
  end
end
