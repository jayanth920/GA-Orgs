# frozen_string_literal: true
Rails.application.routes.draw do
  resources :examples, except: %i[new edit]
  post '/sign-up' => 'users#signup'
  post '/sign-in' => 'users#signin'
  delete '/sign-out' => 'users#signout'
  patch '/change-password' => 'users#changepw'
  resources :users, only: %i[index show]

  resources :lists, except: %i[new edit] do
    resources :items, only: %i[index create]
  end
  resources :items, only: %i[show update destroy]
end
