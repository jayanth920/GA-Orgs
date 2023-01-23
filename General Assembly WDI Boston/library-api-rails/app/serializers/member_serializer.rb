# frozen_string_literal: true

class MemberSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :books_read, :member_since
end
