class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 8, maximum: 254 }
  
  # geocoded_by :address
  # after_validation :geocode
  #   ## user's address is geocoded; we get lat-lng upon their address entering

  
  has_many :reviews
  has_many :bar_cocktails, -> { distinct }, through: :reviews



  # def address
  #   [street, city, state, country].compact.join(', ')
  # end

  #^ write a method to save country, state, city etc from the geocoded information

end
