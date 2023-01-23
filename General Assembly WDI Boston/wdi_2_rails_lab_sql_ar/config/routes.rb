Rails.application.routes.draw do
  resources :people, except: [:edit, :new]
  resources :products, only: [:index, :show]
end
