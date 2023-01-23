Rails.application.routes.draw do
  root to: 'application#index'

  resources :songs, only: [:index, :show]
  resources :artists do
    resources :songs
    resources :genres
  end
end
