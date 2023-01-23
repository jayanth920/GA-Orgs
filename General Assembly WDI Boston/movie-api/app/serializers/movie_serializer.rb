class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :director, :year, :actors

  def actors
    object.actors.map do |actor|
      {
        id: actor.id,
        first_name: actor.first_name,
        last_name: actor.last_name
      }
    end
  end
end
