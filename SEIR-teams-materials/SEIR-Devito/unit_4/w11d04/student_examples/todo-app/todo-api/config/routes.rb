Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/tasks', to: 'tasks#index'
  get '/tasks/:id', to: 'tasks#show'
  post '/tasks', to: 'tasks#create'
  delete '/tasks/:id', to: 'tasks#delete'
  put '/tasks/:id', to: 'tasks#update'
end
