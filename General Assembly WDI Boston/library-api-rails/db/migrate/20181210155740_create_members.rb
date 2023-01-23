class CreateMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :members do |t|
      t.string :first_name
      t.string :last_name
      t.integer :books_read
      t.date :member_since

      t.timestamps
    end
  end
end
