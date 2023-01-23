SlowestLab::Application.routes.draw do
  root :to => "dashboard#show"
  resources :users, :only => [:create, :show, :index] do
    resource :follows, :only => [:create, :destroy]
  end
  resources :sessions, :only => [:create, :new]
  delete '/sessions', :to => 'sessions#destroy', :as => :signout
  resources :venues, :only => [:show, :index]
  resources :shows, :only => [:show, :index] do
    resource :attendances, :only => [:create, :destroy]

  end
end
