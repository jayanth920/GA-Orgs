class CreateFavorites < ActiveRecord::Migration
  def up
  	create_table :favorites do |t|
  		t.belongs_to :user
  		t.belongs_to :tweet
  		t.timestamps
  	end
  end

  def down
  	drop_table :favorites
  end
end
