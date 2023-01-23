class AddUniqueIndexToActors < ActiveRecord::Migration[5.1]
  def change
    add_index :actors, [:first_name, :last_name], unique: true
  end
end
