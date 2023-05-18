class BarSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state, :country, :latitude, :longitude

  has_many :bar_cocktails, serializer: BarCocktailSerializer
  has_many :cocktails, through: :bar_cocktails, serializer: CocktailSerializer
  has_many :reviews, through: :bar_cocktails, serializer: ReviewSerializer
end
