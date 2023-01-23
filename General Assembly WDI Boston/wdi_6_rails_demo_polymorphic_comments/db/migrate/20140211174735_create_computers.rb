class CreateComputers < ActiveRecord::Migration
  def change
    create_table :computers do |t|
      t.text :make
      t.text :model
      t.decimal :price

      t.timestamps
    end
  end
end
