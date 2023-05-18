class Cocktail < ApplicationRecord
  has_many :bar_cocktails, -> { distinct }
  has_many :bars, -> { distinct }, through: :bar_cocktails
  has_many :reviews, through: :bar_cocktails

  def avg_star
    # shows the average star

    # get all reviews for this instance
    #  tally up the total stars
    #  divide by how many instances
    # save that number (decimal) to this 
  end
end
