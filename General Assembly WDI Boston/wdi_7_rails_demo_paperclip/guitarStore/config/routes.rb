GuitarStore::Application.routes.draw do
  root to: 'guitars#index'
  resources :guitars
end
