SendGridDemo::Application.routes.draw do
  resources :greetings
  root to: 'greetings#index'
end
