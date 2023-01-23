Rails.application.routes.draw do
  # Default root for '/' in this application
  root 'movies#index'

  # create routes for movie resource
  resources :movies, except: [:new, :edit] do
    # create nested routes for the movie reviews
    resources :reviews, except: [:new, :edit, :update]
  end

  # create routes for album resource
  resources :albums, except: [:new, :edit] do
    # create nested routes for the album songs
    resources :songs, except: [:new, :edit, :update]
  end

end
