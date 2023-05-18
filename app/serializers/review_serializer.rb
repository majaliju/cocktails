class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :stars, :comment, :user_id, :bar_cocktail_id, :special_name, :posted_user

  belongs_to :user, serializer: UserSerializer
  belongs_to :bar_cocktail, serializer: BarCocktailSerializer
end
