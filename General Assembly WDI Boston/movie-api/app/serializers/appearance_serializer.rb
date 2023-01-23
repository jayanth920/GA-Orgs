class AppearanceSerializer < ActiveModel::Serializer
  attributes :id
  has_one :movie
  has_one :actor
end
