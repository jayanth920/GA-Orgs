json.array!(@authors) do |author|
  json.extract! author, :id, :name
  json.url author_url(author, format: :json)

  json.books author.books do |book|
    json.extract! book, :id, :title, :price
  end
end
