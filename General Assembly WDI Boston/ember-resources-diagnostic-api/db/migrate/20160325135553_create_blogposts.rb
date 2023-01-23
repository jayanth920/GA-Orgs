class CreateBlogposts < ActiveRecord::Migration
  def change
    create_table :blogposts do |t|
      t.string :title
      t.text :body
      t.string :mood
      t.timestamps null: false
    end
  end
end
