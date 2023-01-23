Rails.application.routes.draw do
  devise_for :users
  root to: 'artists#index'
  resources :artists do
    resources :songs, only: [:index, :create, :new, :update]
    resources :genres
  end
  resources :songs, only: [:index, :edit, :show, :destroy]
end
