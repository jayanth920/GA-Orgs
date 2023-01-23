Rails.application.routes.draw do

  # Users
  resources :users

  # Sessions
  get '/login'      => 'sessions#new'
  post '/sessions'  => 'sessions#create'
  get '/logout'     => 'sessions#destroy'

  # Entries
  get '/entries'       => 'entries#index'
  get '/entries/new'   => 'entries#new', as: 'new_entry'
  post '/entries'      => 'entries#create'
end
