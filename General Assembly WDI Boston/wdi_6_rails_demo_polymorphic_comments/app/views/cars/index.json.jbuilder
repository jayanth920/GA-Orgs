json.array!(@cars) do |car|
  json.extract! car, :id, :make, :model, :year, :price, :color
  json.url car_url(car, format: :json)
end
