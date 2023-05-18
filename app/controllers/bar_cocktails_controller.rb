class BarCocktailsController < ApplicationController
  # before_action :set_bar_cocktail, only: %i[ show update destroy ]

  # GET /bar_cocktails
  def index
    # user = User.find_by!(id: session[:user_id])
    # bar_cocktails = BarCocktail.bar.near([user[:latitude], user[:longitude]], 10000)

    # find the closest bars
    # output each drink from the bar
    # render the drinks in order of proximity to the user

    
    # user = User.find(session[:user_id])
    # bars = Bar.near([user[:latitude], user[:longitude]], 10000)
    # @@closest_bars == []

    # for each_drink in bars do 
    #   each_drink.bar
    # end

    bar_cocktails = BarCocktail.all
    render json: bar_cocktails, status: 200
  end

  # # GET /bar_cocktails/1
  # def show
  #   render json: @bar_cocktail
  # end

  # # POST /bar_cocktails
  # def create
  #   @bar_cocktail = BarCocktail.new(bar_cocktail_params)

  #   if @bar_cocktail.save
  #     render json: @bar_cocktail, status: :created, location: @bar_cocktail
  #   else
  #     render json: @bar_cocktail.errors, status: :unprocessable_entity
  #   end
  # end

  # # PATCH/PUT /bar_cocktails/1
  # def update
  #   if @bar_cocktail.update(bar_cocktail_params)
  #     render json: @bar_cocktail
  #   else
  #     render json: @bar_cocktail.errors, status: :unprocessable_entity
  #   end
  # end

  # # DELETE /bar_cocktails/1
  # def destroy
  #   @bar_cocktail.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bar_cocktail
      @bar_cocktail = BarCocktail.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def bar_cocktail_params
      params.require(:bar_cocktail).permit(:cocktail_id, :bar_id, :image)
    end
end
