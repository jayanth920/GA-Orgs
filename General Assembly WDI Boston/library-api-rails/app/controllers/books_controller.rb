# frozen_string_literal: true

# BooksController class
class BooksController < ApplicationController
  before_action :set_book, only: %i[show update destroy]

  # GET /books
  # GET /books.json
  def index
    @books = Book.all

    render json: @books
  end

  # GET /books/1
  # GET /books/1.json
  def show
    render json: @book
  end

  # POST /books
  # POST /books.json
  def create
    @book = Book.new(book_params)

    if @book.save
      render json: @book, status: :created
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /books/1
  # PATCH/PUT /books/1.json
  def update
    if @book.update(book_params)
      render json: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # DELETE /books/1
  # DELETE /books/1.json
  def destroy
    @book.destroy

    head :no_content
  end

  def set_book
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:title, :author)
  end

  # Return 418 for incoming POST with an id in the route, like POST /books/1
  # Intended to be an easter egg, and if devs are curious what / why and get here,
  # it will show how to make a custom route with custom status code response
  # More on 418: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418
  def teapot
    render json: { error: { message: 'You cannot POST with an ID, as the database provides the ID' } }, status: 418
  end

  private :set_book, :book_params
end
