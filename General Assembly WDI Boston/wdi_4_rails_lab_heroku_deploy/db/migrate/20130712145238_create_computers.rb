class CreateComputers < ActiveRecord::Migration
  def change
    create_table :computers do |t|
      t.string :make
      t.string :model
      t.integer :processor_speed

      t.timestamps
    end
  end
end
