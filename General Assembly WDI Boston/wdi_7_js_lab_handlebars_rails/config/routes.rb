Rails.application.routes.draw do
  root 'home#show'
  get 'articles', to: 'articles#index'
  get 'profile', to: 'profiles#show'
  get 'reference', to: 'profiles#reference'
end
