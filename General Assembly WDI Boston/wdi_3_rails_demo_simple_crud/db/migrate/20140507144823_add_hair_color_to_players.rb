class AddHairColorToPlayers < ActiveRecord::Migration
  def change
    change_table :players do |t|
      t.text :hair_color
      t.text :skin_color
      t.text :eye_color
    end
  end
end
