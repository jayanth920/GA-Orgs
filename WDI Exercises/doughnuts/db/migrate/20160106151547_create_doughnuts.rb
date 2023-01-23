class CreateDoughnuts < ActiveRecord::Migration
  def change
    create_table :doughnuts do |t|
      t.integer :tastiness
      t.string :flavor
      t.string :image_url
    end
  end
end
