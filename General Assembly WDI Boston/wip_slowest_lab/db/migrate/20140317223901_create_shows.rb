class CreateShows < ActiveRecord::Migration
  def change
    create_table :shows do |t|
      t.integer :venue_id
      t.string :title
      t.text :description
      t.datetime :date
      t.timestamps
    end
  end
end
