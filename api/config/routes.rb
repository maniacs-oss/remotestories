# For details on the DSL available within this file, see
# http://guides.rubyonrails.org/routing.html

Rails.application.routes.draw do
  root to: 'welcome#index'

  resources :stories, only: %i(index show create) do
    resources :comments, only: %i(create), module: 'stories'
    resources :reactions, only: %i(create destroy), module: 'stories'
  end

  namespace :my do
    resource :users, only: %i(show create)
  end

  post 'user_token' => 'user_token#create'
end
