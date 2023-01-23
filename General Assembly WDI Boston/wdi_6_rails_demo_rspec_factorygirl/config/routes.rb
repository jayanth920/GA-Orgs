ContactManager::Application.routes.draw do
  devise_for :users
  root to: 'contacts#index'
end
