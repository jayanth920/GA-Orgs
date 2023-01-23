# Notes for Delivery

## Django Shell code-along

Commands:

```py
# import the model
from library.models import Book

# create a book or two
new_book = Book(title='1984', author='person')
# see that ID is null before we save
new_book.__dict__
# save the new book!
new_book.save()

# index Books
Book.objects.all()
```
