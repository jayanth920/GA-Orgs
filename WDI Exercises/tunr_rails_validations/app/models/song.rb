# Song(id: integer, title: string, album: string, preview_url: string, artist_id: integer)
class Song < ActiveRecord::Base
  belongs_to :artist
end
