# Artist(id: integer, name: string, photo_url: string, nationality: string)
class Artist < ActiveRecord::Base
  has_many :songs, dependent: :destroy
end
