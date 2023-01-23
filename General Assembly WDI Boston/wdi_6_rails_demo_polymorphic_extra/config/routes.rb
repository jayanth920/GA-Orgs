PolymorphicExample::Application.routes.draw do

  resources :photos do
    resources :comments, defaults: {commentable: 'photo'}
  end

  resources :posts do
    resources :comments, defaults: {commentable: 'post'}
  end

end
