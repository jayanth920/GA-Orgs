# JavaScript Bank

In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write. 

#### Bank

There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs a `enroll_new_account` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality. Note what Tom taught this evening for inherietance and create/cloning. 

#### Accounts

Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance. 

There is no need to write a user interface. Make sure functions return values instead of print them. However, you should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected. 

### Tips

Don't overthink this. Shorter code is probably the answer. 

## Bonus

- Ensure that the accounts cannot have negative values. 
- Write a 'transfer' on the bank that allows you to transfer amounts between two accounts. 
- 
## Reading

Read chapter 6 in the JavaScript: Definitive Guide text

## Additional

Begin exploring the [JavaScript Koans](https://github.com/ga-students/JavaScript-Koans). Fork, clone and start trying them. 

## Tomorrow

We'll be doing some DOM manipulation (read [here](http://en.wikipedia.org/wiki/Document_Object_Model) and [here](https://developer.mozilla.org/en-US/docs/DOM) in the morning, and then following up with [closures](http://en.wikipedia.org/wiki/Closure_(computer_science)) in the afternoon. 

Later in the week we'll dive into testing with [Jasmine](http://pivotal.github.io/jasmine/), and then into [Events](https://developer.mozilla.org/en-US/docs/Web/API/Event).

The big goal for next week is to get into JavaScript + Ajax + jQuery + Rails to have data loading asyncronously from the server and rendering to our web browser. While it was made for Rails 3, the [Railscast on the subject](http://railscasts.com/episodes/136-jquery-ajax-revised) will give an excellent preview/introduction to this.  
