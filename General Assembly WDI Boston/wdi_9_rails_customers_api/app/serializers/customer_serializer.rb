class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :joined, :name, :city, :orderTotal
  has_many :orders

  # Client wants properties in CamelCase, hey it's javascript ;-)
  def orderTotal
    object.order_total
  end
end
