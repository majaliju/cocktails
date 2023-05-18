class ReviewsController < ApplicationController
  before_action :authorize_user

  # GET /reviews
  def index
    @reviews = Review.all

    render json: @reviews
  end

  # # GET /reviews/1
  # def show
  #   render json: @review
  # end

  # def create
  #   review = Review.create(review_params)
  #   render json: review, status: :created
  # end

  def create
    user = User.find(session[:user_id])
    review = user.reviews.create!(review_params)
    render json: review, status: 201
  end

  # # POST /reviews
  # def create
  #   # user = User.find_by!(id: session[:user_id])
  #   user = User.find_by!(id: params[:user_id])
  #   @review = user.reviews.new(review_params)

  #   if @review.save
  #     render json: @review, status: :created, location: @review
  #   else
  #     render json: @review.errors, status: :unprocessable_entity
  #   end
  # end

  # PATCH/PUT /reviews/1
  def update
      # user = User.find(session[:user_id])
      # review = user.reviews.find(params[:id])
      review = Review.find(params[:id])
      # binding.break
   
      if review[:comment] === params[:comment] && review[:stars] === params[:stars]
        render json: {errors: ['Nothing was edited! Make a change at least to one of the sections here']}, status: :unprocessable_entity
      else
        review.update!(
          comment: params[:comment],
          stars: params[:stars]
        )
        render json: review, status: 200
      end
  end

    # # PATCH/PUT /reviews/1
    # def update
    #   user = User.find_by!(id: session[:user_id])
    #     @review = user.review.find(params[:id])
    #   if @review.update(review_params)
    #     render json: @review
    #   else
    #     render json: @review.errors, status: :unprocessable_entity
    #   end
    # end

    def destroy
      # user = User.find(session[:user_id])
      # review = user.reviews.find_by!(id: params[:id])
      review = Review.find(params[:id])
      if review
        review.destroy
        head :no_content
      else
        render json: {error: 'Post doesnt exist!'}
      end
    end

  # # DELETE /reviews/1
  # def destroy
  #   review = Review.find(params[:id])
  #   review.destroy
  # end



  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_review
    #   user = User.find_by!(id: session[:user_id])
    #   @review = user.review.find(params[:id])
    # end

    def authorize_user
      user = User.find(session[:user_id])
      if !user
        render json: { error: "User isn't authorized!"},
            status: :unauthorized
      end
 
    end

    # Only allow a list of trusted parameters through.
    def review_params
      params.permit(:stars, :comment, :user_id, :bar_cocktail_id)
    end
end
