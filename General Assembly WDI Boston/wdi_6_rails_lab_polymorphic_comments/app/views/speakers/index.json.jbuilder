json.array!(@speakers) do |speaker|
  json.extract! speaker, :id, :make, :model, :price, :max_power, :input_impedance, :height, :weight
  json.url speaker_url(speaker, format: :json)
end
