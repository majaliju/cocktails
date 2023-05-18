class Review < ApplicationRecord
  belongs_to :user
  belongs_to :bar_cocktail

  validates :comment, length: { minimum: 5, too_short: 'has to be %<count>s letters! leave any type of comment.' }
  validates :stars, numericality: {in: 1..5}

  def special_name
    self.bar_cocktail.special_name
  end

  def posted_user
    self.user.username
  end
end
