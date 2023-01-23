Rails.application.routes.draw do
  resources :cars

  resources :books, defaults: {format: 'json'}, except: [:edit, :new]
  resources :authors, defaults: {format: 'json'}, except: [:edit, :new]

  get '/tweets/trending', to: 'tweets#trending'
  get '/tweets/user/:name', to: 'tweets#show_user_tweets'
  get '/tweets/search', to: 'tweets#search'
  get '/home', to: 'home#index'
end
