5.times do |i|
  Product.create!(name: "Product#{i}", description: "Product #{i} description", price: rand(100))
end
