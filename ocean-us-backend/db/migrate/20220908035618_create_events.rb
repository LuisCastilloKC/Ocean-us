class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :address
      t.string :zipcode
      t.string :image
      t.integer :like
      t.datetime :date
      t.string :eventDescription
      t.string :title
      t.string :longitude
      t.string :latitude
      t.references :user, null: false, foreign_key: true
      t.references :city, null: false, foreign_key: true

      t.timestamps
    end
  end
end
