class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.text :name
      t.text :description
      t.text :job
      t.integer :health
      t.integer :magic
      t.integer :level
      t.boolean :is_alive
      t.timestamps
    end
  end
end
