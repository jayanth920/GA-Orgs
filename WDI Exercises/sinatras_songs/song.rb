class Song
  # constructor!
  def initialize(title, artist, desc)
    @title = title
    @artist = artist  #this.artist = artist
    @desc = desc    # this.desc = desc
  end
  def to_s
    return "#{@title} written by #{@artist}. Desc: #{@desc}"
  end
  def to_hash
    return {
      :title => @title,
      :artist => @artist,
      :desc => @desc
    }
  end
end

fly_me_to_the_moon = Song.new('Fly me to the moon', 'Frank Sinatra', ':)') # var song = new Song(....);
fly_me_to_the_moon.to_s
