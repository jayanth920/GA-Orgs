PostResponder::Application.routes.draw do
  resources :posts
  root to: "post#index"
end
