Rails.application.routes.draw do
  resources :guitars, only: [:index, :show, :create, :new]
end
