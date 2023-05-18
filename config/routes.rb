Rails.application.routes.draw do
  # ###! the 5 below are just only: as a sketch
  # ###! these are not final, these are just during testing purposes
  # ###! there will be likely less for all non-reviews models
  resources :bars, only: %i[index show]
  resources :bar_cocktails, only: %i[index show]
  resources :cocktails, only: %i[index show]
  resources :users, only: %i[create update]
  resources :reviews, only: %i[index create update destroy]

  ## the login, logout, and user-authentication routes
  get '/me', to: 'application#show_user'
  patch '/user_location', to: 'application#user_location'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/hello', to: 'application#hello_world'
  get '/location', to: 'application#location_finder'
  get '/where', to: 'application#remote_ip'

  # Defines the root path route ("/")
  # root "articles#index"
end

# ## from my ticketblaster app
#   ## the login, logout, and user-authentication routes
#   get '/me', to: "users#show"
#   post '/login', to: "sessions#create"
#   delete '/logout', to: "sessions#destroy"
