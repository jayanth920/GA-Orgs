# Intro to the Back-end via PHP

## Learning Objectives
- Explain the differences between GET and POST
- Describe the components of an HTTP request
- Describe the differences between the front-end and back-end
- Define "cookies"

## Framing

This is going to be a rather "talky" class during which we'll touch on the main part of what happens when you go to or send data to a website.

## Dramatis Personae

A **server** is a computer that receives **requests** for data and **responds** to them. It "serves" data.

The job of your browser is to "interpret" the data.

### Example flow

1. You type "www.generalassemb.ly" into your browser
- Your browser sends a **request** to GA's server for that URL
- GA's server looks up a rule written by one of GA's back-end developers that says, "When someone requests www.generalassemb.ly, send them this file"
- GA's server finds the appropriate file
- GA's server **responds** with the file
- Your browser receives the file
- Your browser notices the images, stylesheets, and javascripts linked in the HTML and makes a request for each of them
- Your browser executes all the CSS and JS

## What's in a request?

A request is much more than simply, "This is the URL I want."

Go to this page:

http://putsomethinghere.com/php/global.php

> This is a web domain I own but am not using at the moment.

Everything beginning with `HTTP` is a **header** that was sent by the request you just made to my server.

### Header and body

Requests have two "body parts": the **header** and the **body**. They also have a **destination**: the URL.

The header contains metadata that gives the server additional information about what you're requesting: what browser you're using, what kind of file you want, and so on.

The body contains any data sent with the request. It is is empty for virtually all requests you make by just typing a URL into your browser. It is used most often when you submit a form.

### You do: Set a header

Go to [Hurl.it](https://www.hurl.it/). In the "Destination", put:

```
http://putsomethinghere.com/php/global.php
```

- What do you see?

Now "Add Header". It can be anything you want. I tried a `name` of "Turtle" and a `value` of "Soup".

- Look for "Turtle" in the response. Where is it?

### View headers for any page in Chrome

![View headers in Chrome](headers.gif)

### HTTP

The system we usually use for requests and responses is called HTTP, or HyperText Transfer Protocol.

Web browsers are capable pretty much only of HTTP, and a more secure version of HTTP called HTTPS.

Other applications can use other transfer protocols. E-mail, FTP, Bitcoin, and instant messaging are all protocols.

[See lots more.](https://en.wikipedia.org/wiki/Lists_of_network_protocols)

#### GET and POST (and the rest)

HTTP lets you make requests in two ways:

1. Sending your data as a querystring in the URL, with an empty body
- Sending your data in the body

The first type of request is a GET request. This is what happens when you type a URL into your browser.

The second type has several sub-types: POST, PUT, PATCH, and DELETE. These are used for modifying data. PUT and PATCH are used to update data. Only GET and POST may be used with HTML forms.

- Why don't POST, PUT, etc., put data in the querystring?
- Why is GET called "GET"?
- Can you bookmark a GET request? How about a POST request?

## Responses

### Analogy: The theater

An actor takes a bunch of text and turns it into something *more* than text: a play.

A web browser takes a bunch of text and turns it into something *more* than text: a webpage.

A server is what provides the text in the first place.

### Restricting data

#### Shakespeare

Consider: Shakespeare is commissioned at the same time to write a play for Spain and a play for England. He's efficient so he sends the same play to both. The only change he makes between the two copies is the British version mocks the Spanish monarchy, and the Spanish version mocks the British monarchy.

#### Contact info

My website, RobertAKARobin.com, is my resume, and can be printed out like one.

Usually you include your street address and phone number on your resume. However, I don't want my contact information to be visible to everyone.

I could use Javascript or CSS to hide this information, but anyone would be able to look at my source code to see it.

So, on the back-end of my site I have a rule that says, "If this site is accessed from my computer, show my number and address. Otherwise, hide them."

### Dynamic HTML and Templating

Facebook has 1.65 billion users. Each has a profile page. There isn't one HTML page for each user. Instead there is a profile page HTML template. When you view your profile, Facebook inserts the appropriate data into the template before sending you the HTML.

This makes the page **dynamic**.

There are many **templating engines** that simplify this process. You have seen Handlebars, which can be used on the front- or back-end with Javascript. PHP is another.

### You Do: Make a dynamic page

Copy and paste this code into a PHP file in your `htdocs` folder and navigate to it in your browser.

```php
<?php
if(empty($_GET["username"])){
  $username = "Guest";
}else{
  $username = $_GET["username"];
}
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Welcome, <?= $username ?></title>
  </head>
  <body>
<?php if($username === "Guest"): ?>
    <h1>Please log in!</h1>
    <form method="get" action="">
      <input name="username" placeholder="Username" />
      <button type="submit">Submit</button>
    </form>
<?php else: ?>
    <h1>Welcome, <?= $username ?>!</h1>
    <h2><a href="?">Log out</a></h2>
<?php endif; ?>
  </body>
</html>
```

View the page's source code **in your browser**.

- Can you see the `<?php ?>` tags in your browser?
- I wouldn't use GET for user authentication in a real app. What would I use instead?

### More than just dynamic HTML

http://putsomethinghere.com/php/image.php

### Response headers are important

Download [`binary.txt`](https://github.com/ga-wdi-lessons/intro_backend_via_php/raw/master/binary.txt). You can do so in Chrome by option-clicking on that link.

Copy it to your `htdocs` folder. In the same directory, make a new PHP file with the contents below, and navigate to that file in your browser.

```php
<?php
echo file_get_contents("binary.txt");
?>
```

Now add one line to the PHP file:

```php
<?php
header("Content-type: image/jpeg");
echo file_get_contents("binary.txt");
?>
```

### What's a "cookie"?

A small piece of data stored on your computer that is associated with a specific site.

Go to:

www.putsomethinghere.com/php/global.php

Notice the `$_COOKIE` section. This site has set a cookie on your browser in its **response**. Your browser will "remember" it until you close your browser.

You can see all the cookies in your browser here:

![Cookies](cookies.gif)

You can access cookies on any page via Javascript by opening the browser console and typing:

```
console.log(document.cookie);
```

- Why might cookies be useful?
- Why is it good to occasionally "clear your cookies"?

## Everything Else

### How do IP addresses, domains, and URLs work? (aka the DNS)

http://computer.howstuffworks.com/dns.htm

### Why is it "index.html"?

**In normal English**, an "index" is a list in the back of a book that tells you where to find concepts in the book.

On the web, an index is a webpage that tells you where to find content on a website.

When you go to www.amazon.com, you're actually looking at www.amazon.com/index.html. (Go to either and you'll get the same result.) The purpose of this page is to give you a starting point to find the rest of the content on the Amazon website.

This is an industry standard. Most servers, when they receive a request that doesn't specify a certain file (e.g. `amazon.com` vs. `amazon.com/index.html`) will look for an `index.html` and show that instead.

If it doesn't exist they'll show a default index page, like www.putsomethinghere.com/php

### What happens when you type google.com into your browser's address box and press "Enter"?

This is a famous interview question.

https://github.com/alex/what-happens-when
