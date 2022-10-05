Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'courses/index', to: 'courses#index'
      post 'courses/create', to: 'courses#create'
      put 'courses/update/:id', to: 'courses#update'
      delete 'courses/destroy/:id', to: 'courses#destroy'
    end
  end
  
  root 'homepage#index'
  get '/*path', to: 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end