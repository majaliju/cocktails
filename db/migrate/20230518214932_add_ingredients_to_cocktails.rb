class AddIngredientsToCocktails < ActiveRecord::Migration[7.0]
  def change
    add_column :cocktails, :ingredients, :string, array: true, default: []
  end
end
