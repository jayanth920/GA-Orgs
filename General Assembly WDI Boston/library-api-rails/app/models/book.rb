# frozen_string_literal: true

# Book model class
class Book < ApplicationRecord
  validates :title, :author, presence: true

  default_scope { order(:id) }
end
