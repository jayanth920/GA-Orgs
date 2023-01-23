Rails.application.routes.draw do
  get "artists" => "artists#index"
  get "artists/new" => "artists#new"
  post "artists" => "artists#create"
  get "artists/:id" => "artists#show"
  get "artists/:id/edit" => "artists#edit"
  put "artists/:id" => "artists#update"
  delete "artists/:id" => "artists#destroy"

  get "songs" => "songs#index"
  get "songs/new" => "songs#new"
  post "songs" => "songs#create"
  get "songs/:id" => "songs#show"
  get "songs/:id/edit" => "songs#edit"
  put "songs/:id" => "songs#update"
  delete "songs/:id" => "songs#destroy"
end
