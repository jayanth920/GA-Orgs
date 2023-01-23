ArticlesApi::Application.routes.draw do
  resources :comments, except: [:new, :edit]
  root 'articles#index'
  
  resources :articles, except: [:new, :edit]
end
