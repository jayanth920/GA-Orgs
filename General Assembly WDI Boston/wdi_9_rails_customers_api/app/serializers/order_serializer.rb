class OrderSerializer < ActiveModel::Serializer
  attributes :id, :product, :total
end
