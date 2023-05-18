class Bar < ApplicationRecord
  geocoded_by :address
  after_validation :geocode 

  has_many :bar_cocktails, -> { distinct }
  has_many :cocktails, -> { distinct }, through: :bar_cocktails
  has_many :reviews, through: :bar_cocktails

  ###! populate city, state, country from address
  ### need to set that
#^ write a method to save country, state, city etc from the geocoded information

  def avg_star
    # shows the average star

    # get all reviews for this instance
    #  tally up the total stars
    #  divide by how many instances
    # save that number (decimal) to this 
  end



end
