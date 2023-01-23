Rails.application.routes.draw do

  # STAFF ROUTES
  get '/staff', to: 'people#index'
  get '/staff/:id', to: 'staff#show'
  post '/staff', to: 'staff#create'
  delete '/staff/:id', to: 'staff#delete'
  put '/staff/:id', to: 'staff#update'

end
