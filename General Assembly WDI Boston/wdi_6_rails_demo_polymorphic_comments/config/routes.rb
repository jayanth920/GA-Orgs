PolyDemo::Application.routes.draw do

  resources :computers do
    resources :comments, defaults: {commentable: 'photo'}
  end

  resources :cars do
    resources :comments, defaults: {commentable: 'post'}
  end

end
