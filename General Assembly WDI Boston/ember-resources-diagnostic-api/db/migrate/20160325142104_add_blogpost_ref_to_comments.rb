class AddBlogpostRefToComments < ActiveRecord::Migration
  def change
    add_reference :comments, :blogpost, index: true, foreign_key: true, null: false
  end
end
