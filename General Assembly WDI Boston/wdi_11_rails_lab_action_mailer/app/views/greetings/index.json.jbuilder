json.array!(@greetings) do |greeting|
  json.extract! greeting, :id, :email, :content
  json.url greeting_url(greeting, format: :json)
end
