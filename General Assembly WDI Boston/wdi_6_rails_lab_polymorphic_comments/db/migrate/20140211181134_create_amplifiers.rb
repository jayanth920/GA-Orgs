class CreateAmplifiers < ActiveRecord::Migration
  def change
    create_table :amplifiers do |t|
      t.string :make
      t.string :model
      t.decimal :price
      t.integer :max_power
      t.integer :impedance
      t.integer :height
      t.integer :weight

      t.timestamps
    end
  end
end
