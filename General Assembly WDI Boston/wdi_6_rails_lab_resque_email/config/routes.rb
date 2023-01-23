GaResqueEmailLab::Application.routes.draw do
  root 'home#show'
  post '/send_email' => 'home#send_email', as: :send_email
  devise_for :users
end
