Rails.application.routes.draw do
  resources :teams do
    resources :games do
    end
    member do
      get 'futuregames'
    end
    member do 
      get 'pastgames'
    end


  end

  resources :moonphases
end
