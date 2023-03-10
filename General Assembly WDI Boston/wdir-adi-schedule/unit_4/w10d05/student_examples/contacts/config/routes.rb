Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get('/people', { :to => 'people#index'})
  get '/people', to: 'people#index'
  get '/people/:id', to: 'people#show'
  post '/people', to: 'people#create'
  delete '/people/:id', to: 'people#delete'
  put '/people/:id', to: 'people#update'

  get '/locations', to: 'locations#index'
  get '/locations/:id', to: 'locations#show'
  post '/locations', to: 'locations#create'
  delete '/locations/:id', to: 'locations#delete'
  put '/locations/:id', to: 'locations#update'

  get '/companies', to: 'companies#index'
  get '/companies/:id', to: 'companies#show'
  post '/companies', to: 'companies#create'
  delete '/companies/:id', to: 'companies#delete'
  put '/companies/:id', to: 'companies#update'

  get '/jobs', to: 'jobs#index'
  get '/jobs/:id', to: 'jobs#show'
  post '/jobs', to: 'jobs#create'
  delete '/jobs/:id', to: 'jobs#delete'
  put '/jobs/:id', to: 'jobs#update'
end
