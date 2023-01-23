class RemoveMovieFromActor < ActiveRecord::Migration[5.1]
  def change
    remove_reference :actors, :movie, foreign_key: true
  end
end
