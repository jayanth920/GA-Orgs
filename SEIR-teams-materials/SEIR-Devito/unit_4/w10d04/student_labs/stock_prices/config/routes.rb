Rails.application.routes.draw do
  get '/stocks', to: 'stocks#index'
  get '/stocks/:id', to: 'stocks#show'
  post '/stocks', to: 'stocks#create'
  delete '/stocks/:id', to: 'stocks#delete'
  put '/stocks/:id', to: 'stocks#update'
end
