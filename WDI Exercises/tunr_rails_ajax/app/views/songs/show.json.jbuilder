json.extract! @song, :id, :title, :album, :preview_url, :artist_id, :created_at, :updated_at
json.artist_url artist_url(@song.artist, format: :json)
