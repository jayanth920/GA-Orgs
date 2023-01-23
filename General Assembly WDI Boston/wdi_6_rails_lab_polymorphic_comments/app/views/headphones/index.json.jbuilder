json.array!(@headphones) do |headphone|
  json.extract! headphone, :id, :make, :model, :description, :impedance, :price
  json.url headphone_url(headphone, format: :json)
end
