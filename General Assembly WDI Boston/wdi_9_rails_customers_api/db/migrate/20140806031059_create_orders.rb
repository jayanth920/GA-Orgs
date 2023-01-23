class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.text :product
      t.decimal :product_price
      t.integer :num_products
      t.integer :total
      t.belongs_to :customer
      t.timestamps
    end
  end
end
