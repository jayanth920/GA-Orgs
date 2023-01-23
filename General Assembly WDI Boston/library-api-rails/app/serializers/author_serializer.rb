# frozen_string_literal: true

class AuthorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name
end
