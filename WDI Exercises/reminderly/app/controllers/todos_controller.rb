class TodosController < ApplicationController
  def index
    @todos = Todo.all
  end

  def show
    @todo = Todo.find(params[:id])
  end

  def new
    @todo = Todo.new
  end

  def create
    @todo = Todo.new(todo_params)
    @todo.completed = false
    @todo.save
    redirect_to @todo
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    redirect_to todos_path
  end

  def incomplete
    @incomplete_todos = Todo.where(completed: false)
  end

  private
  def todo_params
    params.require(:todo).permit(:body, :author)
  end

end
