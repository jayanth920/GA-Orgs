json.array!(@amplifiers) do |amplifier|
  json.extract! amplifier, :id, :make, :model, :price, :max_power, :impedance, :height, :weight
  json.url amplifier_url(amplifier, format: :json)
end
