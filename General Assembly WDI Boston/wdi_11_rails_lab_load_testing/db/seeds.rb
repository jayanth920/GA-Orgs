9000.times do |i|
	Post.create(title: "Title#{i}", body: "Whatever")
end