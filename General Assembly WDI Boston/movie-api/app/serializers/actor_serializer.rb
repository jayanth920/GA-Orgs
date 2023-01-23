class ActorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :movies

  def movies
    object.movies.map do |movie|
      {
        id: movie.id,
        title: movie.title,
        director: movie.director,
        year: movie.year
      }
    end
  end
end
