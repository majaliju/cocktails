class CreateBars < ActiveRecord::Migration[7.0]
  def change
    create_table :bars do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :state
      t.string :country
      t.decimal :latitude
      t.decimal :longitude
      t.string :image

      t.timestamps
    end
  end
end
