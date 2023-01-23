class Artist
  attr_accessor :name, :genre, :albums
  #attr_reader :name, :genre, :albums
  #attr_writer :name, :genre, :albums
  def initialize(name, genre, albums)
    @name = name
    @genre = genre
    @albums = albums
  end
end

porter_robinson = Artist.new('Porter Robinson', 'Complextro', 'Worlds, Language, Spitfire')
