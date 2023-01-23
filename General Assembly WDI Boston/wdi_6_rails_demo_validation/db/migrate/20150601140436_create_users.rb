class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :address_line_one
      t.string :address_line_two
      t.string :city
      t.string :state
      t.string :country

      t.timestamps null: false
    end
  end
end
