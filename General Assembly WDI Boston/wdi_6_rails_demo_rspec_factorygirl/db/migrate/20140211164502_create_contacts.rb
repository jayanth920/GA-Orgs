class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.references :user, index: true
      t.text :first_name
      t.text :last_name
      t.text :phone_number

      t.timestamps
    end
  end
end
