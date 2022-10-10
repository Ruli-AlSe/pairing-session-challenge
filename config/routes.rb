Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # courses
      get 'courses/index', to: 'courses#index'
      post 'courses/create', to: 'courses#create'
      get 'courses/show/:id', to: 'courses#show'
      put 'courses/update/:id', to: 'courses#update'
      delete 'courses/destroy/:id', to: 'courses#destroy'
      get 'courses/enrollments/:id', to: 'courses#enrollments'

      # students
      get 'students/index', to: 'students#index'
      get 'students/show/:id', to: 'students#show'
      post 'students/create', to: 'students#create'
      put 'students/update/:id', to: 'students#update'
      delete 'students/destroy/:id', to: 'students#destroy'
      post 'students/enroll/:id/:course_id', to: 'students#enroll_to'
      get 'students/enrollments/:id', to: 'students#enrollments'

      # course grades
      get 'course_grades/index', to: 'course_grades#index'
      get 'course_grades/create', to: 'course_grades#create'
      get 'course_grades/update/:id', to: 'course_grades#update'
    end
  end
  
  root 'homepage#index'
  get '/*path', to: 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end