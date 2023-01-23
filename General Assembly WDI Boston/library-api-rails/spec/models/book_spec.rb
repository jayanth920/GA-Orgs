# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User do
  describe 'default sort order' do
    ordered_books = []
    before do
      book1 = Book.create(author: 'James Brown', title: 'I got Soul')
      book2 = Book.create(author: 'Jim Dean', title: 'How to cook')
      book3 = Book.create(author: 'John Deere', title: 'How to drive a tractor')
      book4 = Book.create(author: 'James Madison', title: 'How to be president')
      ordered_books = [book1, book2, book3, book4]
    end
    it 'should order results by id' do
      expect(Book.all.first.id).to eql(ordered_books.first.id)
    end
    it 'should order results by id after update' do
      book5 = Book.create(author: 'James Bae', title: 'How I made it big')
      ordered_books.push(book5)
      Book.first.update(author: 'James Dean')

      expect(Book.all.first.id).to eql(ordered_books.first.id)
      Book.last.update(author: 'James Dean')
      expect(Book.all.map(&:id)).to eql(ordered_books.map(&:id))
    end
  end
end
