class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text :request_data

      t.timestamps
    end
  end
end
