class AddTimestampsToArtistsAndSongs < ActiveRecord::Migration
  def change
    change_table(:artists){|t| t.timestamps}
    change_table(:songs){|t| t.timestamps}
  end
end
