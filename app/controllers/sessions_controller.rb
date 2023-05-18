class SessionsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :user_doesnt_exist

  def create
    user = User.find_by!(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: { error: 'Wrong password but no problem, try again!' }, status: :unauthorized
    end
  end

  # delete the user from the session
  def destroy
    session.delete :user_id
    head :no_content
  end

  private

  def user_doesnt_exist
    render json: { error: "Looks like you don't have an account but that's ok! Click the 'FIRST TIME HERE? SIGN UP!' button to get started!" },
           status: 404
  end
end
