![](/ga_cog.png)

---
Title: Book Catalogue Part 2<br>
Type: Lab<br>
Creator: Thom Page<br>
Heavily Modified by: Jerrica Bobadilla

---

# Book Catalogue 

![](https://cdn-images-1.medium.com/max/1024/1*YLlZ96J3p8GFkIh1USVMzg.jpeg)

## Activity

Your friend had a new idea for the book app - let the users add reviews for books! 

> :books: [If you didn't complete yesterday's lab, go back and complete that first before starting this lab.](/unit_4/w10d01/student_labs/README.md) 

### What We Know

Yesterday, we created a two model API with books and users. The books and users had a one-to-many relationship where users can have many books in their catalogue, and books belong to a user. 

Today, we're going to introduce a third model: reviews. 

##### Reviews Model
 
  - book_id
  - user_id 
  - review_content

The book_id should refer to the book being reviewed, the user_id should refer to the user leaving the review, and the review_content is the actual content of the review. 

##### User Stories 
 
 - As a user, I can create a review for a book, even if the book 'belongs' to another user
 - As a user, when I look at all the books, I can see all the reviews that every book has  
 - As a user, when I look at one book, I can see all the reviews that book has
 - As a user, I can delete a review 
 - As a user, I can edit a review

##### Leading Questions to Think About 

 - What routes will we need for this join table? 
 - What actions will the reviews controller need? 

