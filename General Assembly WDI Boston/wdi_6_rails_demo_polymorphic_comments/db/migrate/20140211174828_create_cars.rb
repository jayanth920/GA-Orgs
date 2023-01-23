class CreateCars < ActiveRecord::Migration
  def change
    create_table :cars do |t|
      t.text :make
      t.text :model
      t.integer :year
      t.decimal :price
      t.text :color

      t.timestamps
    end
  end
end
