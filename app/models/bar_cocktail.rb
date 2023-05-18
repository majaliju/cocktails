class BarCocktail < ApplicationRecord
  belongs_to :bar, -> { distinct }
  belongs_to :cocktail, -> { distinct }
  has_many :reviews
  has_many :users, through: :reviews

    ## review associations key-value chain
    def special_name
      "#{self.cocktail.name} by #{self.bar.name}"
    end

    def cocktail_image
      self.cocktail.image
    end

    def bar_name
      self.bar.name
    end
    
    def bar_address
      self.bar.address
    end

    def avg_star
      # shows the average star
  
      # get all reviews for this instance
      #  tally up the total stars
      #  divide by how many instances
      # save that number (decimal) to this 
    end
end
