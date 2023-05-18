class CreateBarCocktails < ActiveRecord::Migration[7.0]
  def change
    create_table :bar_cocktails do |t|
      t.integer :cocktail_id
      t.integer :bar_id

      t.timestamps
    end
  end
end
