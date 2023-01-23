---
title: Cross-Site Request Forgery
type: lab
duration: "0:45"
creator:
    name: Joey Fowler
    city: NYC
competencies: Programming, Server Applications, HTML, JavaScript
---

# Cross-Site Request Forgery

## Introduction

> ***Note:*** _It is recommended that students work as a group, each implementing the server defenses while aiding to test other student's defenses._

With standard HTML features, we've seen how an attacker can exploit common features to their own benefit. Cross-Site Request Forgery attacks are no different, albeit they are a little more involved.

For this lab, you're going to secure a web application against cross-site request forgery attacks. Follow the requirements below and use the starter code to get started - you'll also be using HTML and node.js within your application to make this work. You can also install new packages.

## Starter code

> ***Note:*** For the sample files included, students will need to install a few dependencies. To ease installation, the folder includes a `packages.json` file. Run `npm install` in the `starter-code/csrf/` folder to install all necessary dependencies.

The starter code, located in the `starter-code/csrf/` folder, already includes the base application, ready for protection to be added. It also contains a very minimal (almost empty) starter CSRF-attack HTML file, ready for you to load.

To get the required starter code, simply clone this repository.

Note that the app will run on port 8080.

## Exercise

#### Setting up your environment

There are a few steps required to setup your environment for this lab.

1. `/etc/hosts` modification

    - To aid in cookie settings, and to provide an even playing-field for everyone's CSRF attacks, let's all add the same [CNAME](https://en.wikipedia.org/wiki/CNAME_record) entry into our `/etc/hosts` file. To do this, follow these steps:
    
    1. Open your local `/etc/hosts` in a text editor.
    
      > :information_source: The `/etc/hosts` file is on _your_ laptop, it is not a provided lab file.
    
    2. Add the following line to the file:
    
        127.0.0.1 csrfdemo
        
    3. Save and close the file
    
    - That's it! Now, when your web server is running on your localhost you can access it in a browser via `http://csrfdemo/`!
    
    > :information_source: If you're not running your web server on your local host, you can substitute your actual server's IP instead of `127.0.0.1` in step 2 above.

2. Start the Express app to have it start listening for incoming connections.

        node index.js

3. In a web browser, navigate to your local application.

        http://csrfdemo/
        
    - If successful, you should see the following page:
    
        <kbd>
            <img src="https://i.imgur.com/toAaJK0.png" alt="Successful first launch" />
        </kbd>

#### About the App

- **Route:** `/`  
    - When you visit this page, there will be a form available for you to enter your name. Go ahead and enter your name and submit the form.

        <kbd>
            <img src="https://i.imgur.com/Mo3aSqo.png" alt="Name entry" />
        </kbd>

    - If you view the page's source, or watch the form's `POST` in your browser's Network Inspector, you'll notice that the form submits to `/update` which then redirects you _back_ to `/`.

## Deliverables

1. **A completed file:** `csrf_attack.html`
    Initially, this file is stubbed out with basic HTML. You will deliver a version of this file that includes an HTML form that can perform a CSRF attack against `http://csrfdemo/update`.
    
    To verify that the file is complete:
    1. Open the completed `csrf_attack.html` file that's on your local computer in a web browser, such as `file:///path/to/csrf_attack.html`
    2. When opened, submit the form with a random name such as `McEvil AttackerPerson`
    3. In the app at `http://csrfdemo/`, the random name you entered should be displayed.

2. The `http://csrfdemo/update` route should **no longer be vulnerable to CSRF**.
    You may need to update _both_ `/index.js` as well as `/views/main.hbs` to accomplish this.
    
    To verify that the route is no longer vulnerable, but still functioning:
    1. Attempt to use the form at `http://csrfdemo/`. Does it still work properly?
    2. Use your completed `csrf_attack.html` file (see above). Does it no longer work properly?

#### Bonus Objectives

These aren't required, but they'll definitely make things more fun:

1. Using JavaScript, update your `csrf_attack.html` file to not require user-interaction but to automatically POST to `http://csrfdemo/update` when the page loads in the browser.

2. Your `csrf_attack.html` file should work against other students' apps too, _before_ they're patched.

    They, the other students, will need to load _your_ `csrf_attack.html` file in _their_ browser to test. There are two methods to acheive this:
    
    1. If your laptop has an accessible web-server, share your IP or hostname with the other students and the full path to access it, such as `http://your-laptops-hostname/security/csry_attack.html`.
    
    2. If your laptop is not accessible remotely, you can send the other students your `csrf_attack.html` file. An easy way to do this is to create a [`gist`](https://git.generalassemb.ly/gist) and share the link.

    Sharing your attack-scripts can help identify if your application is truly patched as well, perhaps your solution only protected against _your_ attack.
    
## Additional Resources

- [OWASP: Cross-Site Request Forgery](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF))
- [Cross-site request forgery](https://en.wikipedia.org/wiki/Cross-site_request_forgery)
- [Express - Production Best Practics: Security](https://expressjs.com/en/advanced/best-practice-security.html)
- [csurf](https://www.npmjs.com/package/csurf)
- [helmet](https://www.npmjs.com/package/helmet) - helps you secure your Express apps by setting various HTTP headers.
