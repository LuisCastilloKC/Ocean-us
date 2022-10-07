Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:index]
  post "/login", to: "users#login"
  post "/signup", to: "users#create"
 

  resources :states, only: [:index, :create]
  resources :cities, only: [:index, :create]
  resources :events, only: [:index, :create, :show, :update, :destroy]
end
