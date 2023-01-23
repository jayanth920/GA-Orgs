json.array!(@computers) do |computer|
  json.extract! computer, :id, :make, :model, :price
  json.url computer_url(computer, format: :json)
end
