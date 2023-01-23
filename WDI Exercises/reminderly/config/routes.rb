Rails.application.routes.draw do
  # get 'todos' => 'todos#index'
  get 'incomplete' => 'todos#incomplete'

  resources :todos, only: [:index, :show, :new, :create, :destroy]
end
