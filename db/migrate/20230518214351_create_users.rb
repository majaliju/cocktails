class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.decimal :latitude
      t.decimal :longitude
      t.string :street
      t.string :city
      t.string :state
      t.string :country
      t.integer :postcode
      t.string :address
      t.string :ip_address

      t.timestamps
    end
  end
end
