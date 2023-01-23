Storefront::Application.routes.draw do
  get "main/index"
  devise_for :users
  # These entry points are used by Angular clients to:
  # login, logout and register users.
  devise_scope :user do
    post 'login' => 'sessions#create', :as => 'login'
    post 'logout' => 'sessions#destroy', :as => 'logout'
    get 'current_user' => 'sessions#show_current_user', :as => 'show_current_user'
  end

  #root 'products#index'
  root 'main#index'
  resources :products, only: [:index, :show, :create]
  resources :orders, only: [:new, :create]
  post '/products/:product_id/add_to_cart', to: 'line_items#create', as: 'add_product_to_cart'
  get '/cart', to: 'line_items#index', as: 'cart'
  delete '/cart/:id', to: 'line_items#delete', as: 'remove_product_from_cart'
end
