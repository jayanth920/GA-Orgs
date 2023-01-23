Rails.application.routes.draw do
  root :to => redirect('/bleets.json')
  resources :bleets do
    resources :comments
  end
end
