json.array!(@animals) do |animal|
  json.extract! animal, :id, :name, :species, :favorite_food
  json.url animal_url(animal, format: :json)
end
