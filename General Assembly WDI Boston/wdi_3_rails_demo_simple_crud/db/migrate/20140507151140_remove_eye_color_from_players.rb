class RemoveEyeColorFromPlayers < ActiveRecord::Migration
  def change
    change_table :players do |t|
      reversible do |dir|
        dir.up { t.remove :eye_color }
        dir.down { t.text :eye_color }
      end
    end
  end
end
