# When a req is made to /libraries GET
# Router says "Make a new instance of a LibrariesController
# and then execute the index method/action"

class LibrariesController < ApplicationController
  def index
    @libraries = Library.all
  end

  def show
    @library = Library.find(params[:id])
    @book = Book.new(library_id: @library.id)
    @books = @library.books
  end
end
