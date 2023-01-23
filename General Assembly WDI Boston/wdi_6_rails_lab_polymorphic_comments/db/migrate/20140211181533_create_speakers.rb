class CreateSpeakers < ActiveRecord::Migration
  def change
    create_table :speakers do |t|
      t.string :make
      t.string :model
      t.decimal :price
      t.integer :max_power
      t.integer :input_impedance
      t.integer :height
      t.integer :weight

      t.timestamps
    end
  end
end
