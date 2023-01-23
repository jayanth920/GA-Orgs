# frozen_string_literal: true

Rails.application.routes.draw do
  resources :members, except: %i[new edit]
  resources :librarians, except: %i[new edit]
  resources :authors, except: %i[new edit]
  # RESTful routes
  resources :books, except: %i[new edit]
  resources :examples, except: %i[new edit]

  # Custom routes
  post '/sign-up' => 'users#signup'
  post '/sign-in' => 'users#signin'
  delete '/sign-out' => 'users#signout'
  patch '/change-password' => 'users#changepw'

  # I can't do that
  post '/books/:id' => 'books#teapot'

end
