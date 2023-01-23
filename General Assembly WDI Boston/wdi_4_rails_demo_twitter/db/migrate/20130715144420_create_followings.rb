class CreateFollowings < ActiveRecord::Migration
  def up
  	create_table :followings do |t|
  		t.belongs_to :user
  		t.belongs_to :followed
  		t.timestamps
  	end
  end

  def down
  	drop_table :followings
  end
end
