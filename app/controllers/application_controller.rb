class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


  ##^ as soon as a user is logged in, or authenticated
  ##! -- their IP_address is saved to the user[:ip_address]
  ##! -- their location is geocoded

    ## a show method that returns the user matching session[:user_id]
    def show_user
      user = User.find_by!(id: session[:user_id])
      render json: user, status: 200
    end


  private 
  
  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response(invalid)
    render json: { error: invalid.message }, status: :not_found
  end


end



  #   ## an update method that updates the address and returns lat, longitude
  # def user_location
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
  #   user.update!(
  #     latitude: results.first.coordinates[0],
  #     longitude: results.first.coordinates[1],
  #     address: full_address
  #   )
  #   render json: user, status: 200
  # end



  # ##^ as soon as a user is logged in, or authenticated
  # ##! -- their IP_address is saved to the user[:ip_address]
  # ##! -- their location is geocoded

  #   ## a show method that returns the user matching session[:user_id]
  #   def show_user
  #     # binding.break
  #     user = User.find_by!(id: session[:user_id])
  #     if user[:ip_address].blank?
  #       user[:ip_address] = request.remote_ip
  #       results = Geocoder.search(request.remote_ip)
  #       user[:latitude] = results.first.coordinates[0]
  #       user[:longitude] = results.first.coordinates[1]
  #     end
  #     #  how to save the update on user? does above save it to DB?
  #     render json: user, status: 200
  #   end



  # ##! this model is for finding the user's location via IP or location allowed
  # def location_finder
  #   session[:ip] ||= request.remote_ip
  #   render json: {ip: session[:ip]}
  # end





   ##! here is where I'll contain the user authorization pre-checks
    ## move the user_authorization check to the Application Controller

    ## check the session[:user_id] and return only that user 
    ## that's the authorization
    ## then this goes down to every level beneath 

    # ## this gets only the user who matches the cookies
    # ##? does this qualify as authorization? 
    # def get_user
    #   user = User.find_by!(session[:user_id])
    #   if user? 
    #   render json: user 
    #   else user.blank?
    #     render json: { error: "Can't find this user." }, status: :unauthorized
    # end