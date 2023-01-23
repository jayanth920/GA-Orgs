Rails.application.routes.draw do
  resources :drums
  resources :guitars, only: [:index, :show]
end
