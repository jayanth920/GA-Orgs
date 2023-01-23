class CreateHeadphones < ActiveRecord::Migration
  def change
    create_table :headphones do |t|
      t.string :make
      t.string :model
      t.text :description
      t.integer :impedance
      t.decimal :price

      t.timestamps
    end
  end
end
