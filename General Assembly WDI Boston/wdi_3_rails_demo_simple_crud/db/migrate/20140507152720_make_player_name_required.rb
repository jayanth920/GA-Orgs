class MakePlayerNameRequired < ActiveRecord::Migration
  def change
    change_table :players do |t|
      reversible do |dir|
        dir.up { t.change :name, :text, null: false }
        dir.down { t.change :name, :text, null: true }
      end

      t.index :name, unique: true
    end
  end
end
