# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database
# with its default values.
# The data can then be loaded with the rails db:seed (or created alongside the
# db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# This file seeds `book`, `author`, `librarian`, and `member` resources

require 'csv'

Book.transaction do
  CSV.foreach(Rails.root + 'data/books.csv',
              headers: true,
              header_converters: ->(h) { h.downcase.to_sym }) do |book_row|
    book = book_row.to_hash
    Book.create book unless Book.exists? book
  end
end

Librarian.transaction do
  CSV.foreach(Rails.root + 'data/librarians.csv',
              headers: true,
              header_converters: ->(h) { h.downcase.to_sym }) do |librarian_row|
    librarian = librarian_row.to_hash
    Librarian.create librarian unless Librarian.exists? librarian
  end
end

Author.transaction do
  CSV.foreach(Rails.root + 'data/authors.csv',
              headers: true,
              header_converters: ->(h) { h.downcase.to_sym }) do |author_row|
    author = author_row.to_hash
    Author.create author unless Author.exists? author
  end
end

Member.transaction do
  CSV.foreach(Rails.root + 'data/members.csv',
              headers: true,
              header_converters: ->(h) { h.downcase.to_sym }) do |member_row|
    member = member_row.to_hash
    Member.create member unless Member.exists? member
  end
end
