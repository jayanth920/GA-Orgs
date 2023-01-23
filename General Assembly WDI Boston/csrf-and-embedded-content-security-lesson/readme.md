
# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) CSRF & Embedded Content Security (50 min)

| Timing | Type | Topic |
| --- | --- | --- |
| 5 min | [Introduction](#introduction) | Intro to attacks |
| 10 min | [Demo](#demo-redirect) | Redirecting the Parent Page |
| 10 min | [Instruction](#defense-redirect) | iframe Security |
| 10 min | [Demo](#demo-clickjacking) | Clickjacking |
| 10 min | [Instruction](#defense-clickjacking) | Defense Against Clickjacking |
| 5 min | [Conclusion](#conclusion) | Review of Key Terms |

### LEARNING OBJECTIVES
**After this lesson, you will be able to:**  

- Describe, on a basic level, a Cross-Site Request Forgery attack.
- Understand how html frames work.
- Describe what a Clickjacking attack is.
- Differentiate the risks of framing 3rd-party content and being framed by a 3rd-party.
- Defend against embedded content on your website
- Defend against Clickjacking attacks.

---
<a name="introduction"></a>
## Intro to New Material: CSRF, Attacking Frames & Clickjacking (10 min)

Students should be given the following questions:

* How can a Cross-Site Request Forgery attack harm a user?
* How can your website most-easily embed 3rd party content, such as a "widget" or advertisement?
* How can a 3rd party website most-easily embed content from _your_ website?

> Instructor Note: Provide a brief refresher on html frames

### Cross-Site Request Forgery

Cross-Site Request Forgery, or "CSRF", is a client-side attack that targets a vulnerable server, often targeting authenticated users and state-changing actions. In other words, a 3rd-party website will host a malicious payload that when an unsuspecting victim arrives, they payload will "execute" in the browser and submit a request to the target vulnerable website. When it does this, because it all happens within the user's browser, the target website believes that the user themselves initiated the request and honors it - yikes!

Let's reiterate the above with a practical example, just to make it known how dangerous these attacks really are. For this example, the vulnerable website is your bank's website - the one you can view your balance, pay bills, make money transfers, etc. If you wanted to send money to your friend, you would log in to your bank's website, fill out the "transfer money" form and click the "Send" button. Everything works as expected. But, if that same form is vulnerable to CSRF then an attacker could replicate that form on their malicious 3rd party website (which has nothing to do with your bank). If you, for any reason, visit the attacker's website, their replica form could silently submit the "transfer money" request to your bank's website which would blindly believe that you made the request and will honor your request by sending all of your money to the attacker's account - _yikes!_

The current best defense against a CSRF attack is to use what is referred to as a "CSRF Token". A token (e.g. "string") that is unique per user, sometimes per-action, that is included on the current web page (inaccessible to any 3rd party). When the user submits a form, the token is sent along with the request. The server, which knows what the token's value _should_ be, validates the submitted token and if it matches, it trusts that the user actually initiated the request. Since a 3rd party can't get a user's "CSRF Token", it has no way to forge the request!

CSRF and the defense against it is more easily demonstrated via a hands-on approach, which we'll cover later in a lab.

### How can a 3rd party attack a frame?

JavaScript in the 3rd party page can target the parent page (e.g. the page _framing_ the 3rd party).
    - The 3rd party can redirec the parent page elsewhere which can lead to phishing attacks, or other malicious activities.
    - If the parent and framed-page's domains match (via `document.domain`, if they're not the same domain to begin with), the framed-page can manipulate the parent page's DOM.

### What is clickjacking?

Clickjacking is when an attacker, often using transparent layers, tricks a user into clicking on a button or link on another (malicious) page when they were intending to click on an element of the visible page.

Clickjacking may, at first, sound similar to CSRF but they are quite the opposite. In CSRF, the attack is against a vulnerable website; a 3rd party makes the request on your behalf without you knowing. Clickjacking, _you_ believe you're making a request to a vulnerable website when really the 3rd party is "hijacking" your clicks.

---
<a name="demo-redirect"></a>
## Demo: Redirecting the Parent Page (10 min)

As a class, we are going to walk through creating a sample "3rd party" widget that will redirect any page that attempts to frame it. Some of the goals of this session include:

* Creating embeddable content.
* Creating an iframe.
* Using JavaScript to redirect a page.

### Part 1: Creating your "3rd party" content

Create a new file named `malicious-3rd-party.html`, with placeholder text contents:
```
$ echo "hi mom =]" > malicious-3rd-party.html
```

### Part 2: Creating your website

In the same directory that you created the `malicious-3rd-party.html` file in, create a new file named `trusted-website.html`, with the following HTML:

```html
<html>
    <head>
        <title>Trusted Website</title>
    </head>
    <body>
        <h1>Embedded Content:</h1>
        <iframe src="malicious-3rd-party.html"></iframe>
    </body>
</html>
```

Open the `trusted-website.html` file in a browser.

* What do you see?

### Part 3: Update our "3rd party" payload

Update the `malicious-3rd-party.html` file's contents to the following HTML:

```js
<script>
window.top.location.href = 'https://www.capitalone.com/';
</script>
```

Open the `trusted-website.html` file in a browser.

* What happened?
* Why did this happen?
* What other malicious actions could a 3rd party page perform via an iframe embedded on your website?

---
<a name="defense-redirect"></a>
## iframe Security (10 mins)

When it comes it `<iframe>` tags, there are two direct lines of defense against 3rd parties:

* The `sandbox` attribute:

        <iframe src="malicious-3rd-party.html" sandbox></iframe>

    This attribute enables an extra set of restrictions for the content in the iframe, blocking things such as top-level navigation, scripts and even form submissions.

    In HTML5, the `sandbox` attribute supports a list of values which allow for granular control over what the 3rd party iframe has access to:

    <table>
        <tr><th>Value</th><th>Description</th></tr>
        <tr><td>(no value)</td><td>Applies all restrictions</td></tr>
        <tr><td>allow-forms</td><td>Re-enables form submission</td></tr>
        <tr><td>allow-pointer-lock</td><td>Re-enables APIs</td></tr>
        <tr><td>allow-popups</td><td>Re-enables popups</td></tr>
        <tr><td>allow-same-origin</td><td>Allows the iframe content to be treated as being from the same origin</td></tr>
        <tr><td>allow-scripts</td><td>Re-enables scripts</td></tr>
        <tr><td>allow-top-navigation</td><td>Allows the iframe content to navigate its top-level browsing context</td></tr>
    </table>

    You can specify one or more values within the attribute:

        <iframe src="malicious-3rd-party.html" sandbox="allow-forms allow-scripts"></iframe>

* [CSP: `frame-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-src)  
    The HTTP [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) (CSP) `frame-src` directive specifies valid sources for nested browsing contexts loading using elements such as `<frame>` and `<iframe>`.

    One or more sources can be allowed for the frame-src policy:

        Content-Security-Policy: frame-src <source>;
        Content-Security-Policy: frame-src <source> <source>;

    The `<source>` above can be one of many values. To name a few, you could put a web address (such as https://www.capitalone.com/), `'self'`, or even a calculated hash of the allowed source on the current page response.

    An example of a violation would occur if your website declared the following Content-Security-Policy header:

        Content-Security-Policy: frame-src https://www.capitalone.com/

    And the following `<iframe>` was placed on the page:

        <iframe src="https://not.capitalone.com/"></iframe>

---
<a name="demo-clickjacking"></a>
## Demo: Clickjacking (10 mins)

### Part 4: Creating your website

Create a new file named `click-for-alerts.html` with the following HTML contents:

```html
<html>
    <head>
        <title>Click for Alerts</title>
    </head>
    <body>
        <button onclick="clickForAlerts()">Click Me!</button>

        <script>
            function clickForAlerts() {
                alert("I've been clicked!");
            }
        </script>
    </body>
</html>
```

Open the `click-for-alerts.html` file in a browser.

* What do you see?
* What happens when you click the `Click Me!` button?

### Part 5: Creating your "3rd party" template

Create a new file named `malicious-click-stealer.html` with the following HTML contents:

```html
<html>
    <head>
        <title>Malicious Click Stealer</title>
    </head>
    <body>
        <iframe src="click-for-alerts.html"></iframe>
    </body>
</html>
```

Open the `malicious-click-stealer.html` file in a browser.

* What do you see?
* What happens when you click the `Click Me!` button?
* Is this what you expected?

### Part 6: Making your "3rd party" click-jack clicks

Update the `malicious-click-stealer.html` code to contain the following HTML contents (replacing the existing contents):

```html
<html>
    <head>
        <title>Malicious Click Stealer</title>

        <style>
            iframe.safe {
                width: 300px; height: 150px;
            }

            div.malicious {
                width: 300px; height: 150px;
                position: absolute; top: 0;
                z-index: 1;
            }
        </style>
    </head>
    <body>
        <iframe src="click-for-alerts.html" class="safe"></iframe>

        <div onclick="clickForAlerts()" class="malicious"></div>
        <script>
            function clickForAlerts() {
                alert("I've stolen the click (^_^)");
            }
        </script>
    </body>
</html>
```

Open the `malicious-click-stealer.html` file in a browser.

* What do you see?
* What happens when you click the `Click Me!` button?
* Is this what you expected?

To get a better visual into _why_ this happened, you can adjust the CSS styles for `div.malicious` to include a transparent background color, such as:

```css
background-color: #ff0000;
opacity: 0.1;
```

Opening the `malicious-click-stealer.html` file in a browser will now visually indicate that the "click stealing div" is layered above the iframe.

---
<a name="defense-clickjacking"></a>
## Defense Against Clickjacking (10 mins)

In a Clickjacking attack, the trusted site is being placed in a frame by a malicious 3rd party. There are two methods of preventing this framing attack from happening:

* HTTP Header [`X-Frame-Options`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)  
    The `X-Frame-Options` HTTP response header indicates to a browser whether or not a page is allowed to be rendered in a frame.

    > :information_source: The added security is only provided if the user accessing the document is using a browser supporting `X-Frame-Options`.

    There are two fully supported directives for the `X-Frame-Options` header, **DENY** and **SAMEORIGIN**. A third, **ALLOW-FROM \<source\>** exists, but is not supported in most browsers yet.

    To use the header, simply send it along with one of the values:

        X-Frame-Options: DENY

* CSP: `frame-ancestors`
    The HTTP [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) (CSP) `frame-ancestors` directive specifies valid parents that may embed a page.

    > :information_source: The CSP `frame-ancestors` directive is not widely adopted by modern browsers. At the current time, it is recommended to use _both_ `X-Frame-Options` and this header until this header is fully adopted.

    One or more sources can be specified with this header:

        Content-Security-Policy: frame-ancestors <source>;

    A `<source>` being a URL, a schema, `'self'` or `'none'` ('none' being equivelant to `X-Frame-Options`'s **DENY** value).

---
<a name="conclusion"></a>
## Conclusion (5 min)
* Review questions:  
    - What risks are involved when embedding 3rd party content onto your website?
    - Can someone summarize what clickjacking is?
    - What types of things, e.g. "actions", could clickjacking be used for?

---
### Hungry for More?
#### References
- [OWASP: Cross Frame Scripting](https://www.owasp.org/index.php/Cross_Frame_Scripting)
- [OWASP: Clickjacking](https://www.owasp.org/index.php/Clickjacking)
- [Clickjacking explained, in detail](https://www.pentestpartners.com/security-blog/clickjacking-explained-in-detail/)
- [Clickjacking Defense Cheat Sheet](https://www.owasp.org/index.php/Clickjacking_Defense_Cheat_Sheet)
- [`<iframe sandbox>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox)
- [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)
- [CSP: frame-src](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-src)
- [CSP: frame-ancestors](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors)
