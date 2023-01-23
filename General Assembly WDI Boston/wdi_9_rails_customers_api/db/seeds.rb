Customer.delete_all
from = Date.parse("2011-01-01")
to = Date.parse("2014-08-01")
5.times do |i|
 customer =  Customer.create!(joined: Faker::Date.between(from,to),
                   name: Faker::Name.name,
                   city: Faker::Address.city,
                   order_total: 0
                              )
  rand(1..4).times do |i|
    order = customer.orders.new(product: Faker::Commerce.product_name, num_products: rand(1..2), product_price: rand(1..100) )
    order.total = order.product_price * order.num_products
    # order.save!
    customer.order_total += order.total
    customer.save!
  end
end
