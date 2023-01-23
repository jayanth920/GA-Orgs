class CreateGuitars < ActiveRecord::Migration
  def change
    create_table :guitars do |t|
      t.string :make
      t.string :model
      t.integer :year
      t.decimal :price, precision: 8, scale: 2
      t.string :description
      t.string :color

      t.timestamps
    end
  end
end
