Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :states, only: [:index, :create]
  resources :cities, only: [:index, :create]
  resources :events, only: [:index, :create]
end
