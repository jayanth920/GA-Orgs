# frozen_string_literal: true

require 'csv'

csv_text = File.read(Rails.root.join('db', 'film_cleaned.csv'))

csv = CSV.parse(csv_text, :headers => true, :col_sep => ';', row_sep: :auto)

csv.map(&:to_hash)[0..250].each do |row|
  if row['Actor']
    actor = {
      first_name: row['Actor'].split(', ')[1],
      last_name: row['Actor'].split(', ')[0]
    }
    Actor.create(actor)
  end
  if row['Actress']
    actress = {
      first_name: row['Actress'].split(', ')[1],
      last_name: row['Actress'].split(', ')[0]
    }
    Actor.create(actress)
  end
end

csv.map(&:to_hash)[0..250].each do |row|
  movie = Movie.create({ title: row['Title'],
                         director: row['Director'],
                         year: Date.new(row['Year'].to_i)})

  if row['Actor']
    actor = {
      first_name: row['Actor'].split(', ')[1],
      last_name: row['Actor'].split(', ')[0]
    }
    actor_id = Actor.find_by(actor).id

    Appearance.create({ actor_id: actor_id, movie_id: movie.id })
  end
  if row['Actress']
    actress = {
      first_name: row['Actress'].split(', ')[1],
      last_name: row['Actress'].split(', ')[0]
    }
    actress_id = Actor.find_by(actress).id

    Appearance.create({ actor_id: actress_id, movie_id: movie.id })
  end
end
