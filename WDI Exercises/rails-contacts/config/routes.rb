Contacts::Application.routes.draw do
  root to: 'people#index'

  # default route
  get 'people', to: 'people#index'

end
