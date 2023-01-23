# frozen_string_literal: true

class LibrarianSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :favorite_book, :born_on
end
