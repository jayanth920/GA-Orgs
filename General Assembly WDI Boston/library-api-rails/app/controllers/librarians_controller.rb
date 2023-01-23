# frozen_string_literal: true

class LibrariansController < ApplicationController
  before_action :set_librarian, only: %i[show update destroy]

  # GET /librarians
  def index
    @librarians = Librarian.all

    render json: @librarians
  end

  # GET /librarians/1
  def show
    render json: @librarian
  end

  # POST /librarians
  def create
    @librarian = Librarian.new(librarian_params)

    if @librarian.save
      render json: @librarian, status: :created, location: @librarian
    else
      render json: @librarian.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /librarians/1
  def update
    if @librarian.update(librarian_params)
      render json: @librarian
    else
      render json: @librarian.errors, status: :unprocessable_entity
    end
  end

  # DELETE /librarians/1
  def destroy
    @librarian.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_librarian
    @librarian = Librarian.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def librarian_params
    params.require(:librarian).permit(:first_name, :last_name, :favorite_book, :born_on)
  end
end
