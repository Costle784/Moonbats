Rails.application.routes.draw do
  resources :teams do
    resources :games
  end
  resources :moonphases
end
