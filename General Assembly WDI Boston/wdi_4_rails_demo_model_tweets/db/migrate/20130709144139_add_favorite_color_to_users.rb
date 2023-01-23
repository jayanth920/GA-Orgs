class AddFavoriteColorToUsers < ActiveRecord::Migration
  def change
    # method, table name, attribute name, type
    add_column :users, :favorite_color, :string
  end
end
