# Mini Lessons Homework

For each of the following topics, please answer each of the questions
in an issue on this repository.

## Has many Through

- [Lesson Notes](https://github.com/ga-dc/pbj/tree/master/06-project-2/rails-many-to-many-relationships)
- [screencast](https://www.youtube.com/watch?v=JxW8lJzLhxI)

### Questions

1. What is the role of a join table in a many-to-many relationship?
2. What two columns must be present in a join table?
3. Given the example below, edit the code to define a has many :through relationship.
    ```ruby
    class Customer < ActiveRecord::Base
    end

    class Product < ActiveRecord::Base
    end

    class Purchase < ActiveRecord::Base
    end
    ```
4. Based on #3, give an example of associating two instances via the join model.

Note: For #3 and #4, you can answer these questions by including link(s) to places in your Project 2 repo where you do the requested tasks. Make sure you're liking to a specific file / line in that file. [How to link to line numbers in github](http://stackoverflow.com/questions/23821235/how-to-link-to-specific-line-number-on-github)

## Devise

- [Lesson Notes](https://github.com/ga-dc/pbj/tree/master/06-project-2/devise)
- [Screencast](https://www.youtube.com/watch?v=h6na4saDPaA&index=1&list=PLnKff2cv2ktb8QWH77oI-Gb0TnbdiHKL0)

### Questions
1. What does the `current_user` method that the Devise gem provides?

2. What does the `authenticate_user!` method that the Devise gem provides?

3. Write a signout link using the `link_to` rails helper and a devise path.

4. How do I generate a devise model in the terminal?

5. What are the trade offs for using a gem for authentication over a handrolled solution? (no real right answer)


## Validations

- [Lesson Notes](https://github.com/ga-dc/pbj/tree/master/06-project-2/rails-validations)
- screencast: No screencast available.  The lesson notes and referenced reading contain the necessary information.

### Questions

1. Which component, of Rails MVC, is responsible for the business logic?
2. Assume the user's age is an optional field.  Write the validation to verify that a User's age is between 13 and 125 (inclusive).
3. What would `user.errors.messages` return (for the above User), if you assigned `user.age = 12`?
4. Assume you visit "/customers/new" and enter some invalid information.  Given this controller code, what url would your browser be on after pressing "Create Customer"?

``` ruby
class CustomersController < ApplicationController
  def new
    @customer = Customer.new
  end

  def create
    @customer = Customer.new(customer_params)
    if @customer.save
      redirect_to customer_path(@customer)
    else
      render :new
    end
  end
  ...
  private
  def customer_params
    params.require(:customer).permit(:first_name, :last_name, :age)
  end
end
```

5. Give one reason why we might have the similar validations in the browser, model, and database layer of our application.
