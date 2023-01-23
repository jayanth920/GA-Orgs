class AddPhotoUrlToApps < ActiveRecord::Migration
  def change
  	add_column :apps, :photo_url, :text
  end
end
