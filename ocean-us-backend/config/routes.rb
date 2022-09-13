Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:create]
  post "/login", to: "users#login"
  get "/auto_login", to: "users#auto_login"

  resources :states, only: [:index, :create]
  resources :cities, only: [:index, :create]
  resources :events, only: [:index, :create]
end
