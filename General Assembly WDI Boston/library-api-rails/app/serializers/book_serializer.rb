# frozen_string_literal: true

# BookSerializer class
class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author
end
