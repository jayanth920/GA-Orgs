l1 = Library.create(name: "Boston Library")
l2 = Library.create(name: "New York Library")
l3 = Library.create(name: "Hartford Library")
l4 = Library.create(name: "Portland Library")

l1.books.create(title: "1984")
l1.books.create(title: "Cujo")
l2.books.create(title: "Animal Farm")
