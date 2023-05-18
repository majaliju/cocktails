class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :latitude, :longitude, :address, :city, :state

  has_many :reviews, serializer: ReviewSerializer
  has_many :bar_cocktails, through: :reviews, serializer: BarCocktailSerializer
end
