class CreateLabTables < ActiveRecord::Migration
  def change
    create_table :tow_trucks do |t|
      t.text :make
      t.text :model
      t.integer :year
      t.date :acquired_at
      t.date :last_service_at
      t.integer :mileage
      t.text :notes
    end

    create_table :vehicles do |t|
      t.text :make
      t.text :model
      t.text :color
      t.integer :year
      t.text :vin, null: false
      t.text :category, null: false
      t.date :acquired_at
      t.date :released_at
      t.decimal :fee, precision: 8, scale: 2
      t.boolean :is_paid
      t.text :notes

      t.index :vin, unique: true
      t.index :category
    end
  end
end
