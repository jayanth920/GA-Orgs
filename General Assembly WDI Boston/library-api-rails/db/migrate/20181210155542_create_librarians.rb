class CreateLibrarians < ActiveRecord::Migration[5.2]
  def change
    create_table :librarians do |t|
      t.string :first_name
      t.string :last_name
      t.string :favorite_book
      t.date :born_on

      t.timestamps
    end
  end
end
