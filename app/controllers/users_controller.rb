class UsersController < ApplicationController
  # before_action :set_user, only: %i[ show update destroy ]

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  ## an update method that updates the address and returns lat, longitude
  def update
    # this is the geolocation version
    user = User.find_by!(id: session[:user_id])
    street = params[:street]
    city = params[:city]
    state = params[:state]
    postcode = params[:postcode]
    address = params[:address]
    full_address = [street, city, state].compact.join(', ')

    results = Geocoder.search(full_address)
    if results.empty?
      postcode_search = Geocoder.search(postcode)

      lat_long = postcode_search.first.coordinates unless postcode_search.empty?
    else
      lat_long = results.first.coordinates
    end
    if lat_long && !lat_long.empty?
      user.update(
        latitude: lat_long[0],
        longitude: lat_long[1],
        address: full_address,
        city: params[:city],
        state: params[:state],
        postcode: params[:postcode]
      )
      user.save(validate: false)
    end

    render json: user, status: 200
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def user_params
    params.permit(:username, :password, :password_confirmation, :latitude, :longitude, :address, :ip_address, :state,
                  :city, :postcode)
  end
end

# ## a working version for all address but doesnt save the user
# def update
#   # this is the geolocation version
#   user = User.find_by!(id: session[:user_id])
#   street = params[:street]
#   city = params[:city]
#   state = params[:state]
#   country = params[:country]
#   postcode = params[:postcode]
#   address = params[:address]
#   full_address = [street, city, state, country].compact.join(', ')

#   results = Geocoder.search(full_address)
# if results.empty?
#   postcode_search = Geocoder.search(postcode)
#   # binding.break
#   if !postcode_search.empty?
#     lat_long = postcode_search.first.coordinates
#   end
#   else
#     lat_long = results.first.coordinates
#   end
#   if lat_long && !lat_long.empty?
#     user.latitude = lat_long[0]
#     user.longitude = lat_long[1]
#   end

#   render json: user, status: 200
# end

# ## an update method that updates the address and returns lat, longitude
# def update
#   # this is the geolocation version
#   user = User.find_by!(id: session[:user_id])
#   street = params[:street]
#   city = params[:city]
#   state = params[:state]
#   country = params[:country]
#   address = [street, city, state, country].compact.join(', ')
#   # results = Geocoder.search(street)
#   # binding.break
#   # user.update(
#   #   latitude: results.lat,
#   #   longitude: results.lon,
#   #   address: full_address
#   # )
#   #  save these results also to the database so they persist
#   # binding.break
#   # ! if results are nil then set an error condition to choose a different address
#   # for whatever reason, password validation is checked here which isn't essential
#   results = Geocoder.search(address)
#   if (results.coordinates[0] === nil){
#     puts "nil, try a new address!"
#   }
#   elsif (results.coordinates.exist?){
#     user.update(
#       latitude: results.first.coordinates[0],
#       longitude: results.first.coordinates[1],
#       address: address
#     )
#     user.save(:validate => false)
# }
#   end
#   render json: user, status: 200
# end

# ^^ the original method
# ## an update method that updates the address and returns lat, longitude
# def update
#   # this is the geolocation version
#   user = User.find_by!(id: session[:user_id])
#   street = params[:street]
#   city = params[:city]
#   state = params[:state]
#   country = params[:country]
#   full_address = [street, city, state, country].compact.join(', ')
#   results = Geocoder.search(full_address)
#   #  save these results also to the database so they persist

#   # for whatever reason, password validation is checked here which isn't essential
#   user.update(
#     latitude: results.first.coordinates[0],
#     longitude: results.first.coordinates[1],
#     address: full_address
#   )
#   user.save(:validate => false)
#   render json: user, status: 200
# end
