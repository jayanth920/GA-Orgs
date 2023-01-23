from django.db import models

# Book
# title: A string
# author: A foriegn key for the related author
# publication_year: A four digit number(small)

# Author
# name: A string
# nationality: A string


class Author(models.Model):
    name = models.CharField(max_length=100)
    nationality = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.ForeignKey(
        Author, on_delete=models.CASCADE, related_name='books')
    publication_year = models.PositiveSmallIntegerField()
