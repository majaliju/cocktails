class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :stars
      t.text :comment
      t.integer :user_id
      t.integer :bar_cocktail_id

      t.timestamps
    end
  end
end
