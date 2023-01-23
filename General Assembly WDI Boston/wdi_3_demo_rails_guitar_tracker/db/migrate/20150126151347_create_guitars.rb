class CreateGuitars < ActiveRecord::Migration
  def change
    create_table :guitars do |t|
      t.string :make
      t.string :model
      t.integer :string_number
      t.string :condition
      t.string :color
      t.decimal :price
      t.boolean :electric?
      t.integer :year
    end
  end
end
