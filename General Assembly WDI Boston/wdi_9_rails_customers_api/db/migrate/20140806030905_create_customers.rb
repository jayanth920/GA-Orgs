class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.date :joined
      t.string :name
      t.string :city
      t.decimal :order_total

      t.timestamps
    end
  end
end
