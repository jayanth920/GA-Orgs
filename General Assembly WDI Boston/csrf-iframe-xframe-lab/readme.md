---
title: Embedded Content Security
type: lab
duration: "0:45"
creator:
    name: Joey Fowler
    city: NYC
competencies: Programming, Server Applications
---

# Embedded Content Security

## Introduction

> ***Note:*** _It is recommended that students work as a group, each implementing the server defenses while aiding to test other student's defenses._

With standard HTML features, we've seen how an attacker can exploit common features to their own benefit.

For this lab, you're going to secure a web application against iframe and clickjacking attacks. Follow the requirements below and use the starter code to get started - you'll also be using HTML and node.js within your application to make this work.

Note that the application may not work out of the box; you may need to initialize and/or install your npm modules.

## Exercise

#### Requirements

- In terminal, cd into `starter-code/iframe-security` and set up the app:
    - Run `npm init` and accept the defaults
	- Run `npm install express express-handlebars`
- Start the Express app (`node index.js`) to have it start listening for incoming connections. Note that it will listen on port 8080, not 3000.
- **Route:** `/iframe-sandbox`  
    - When you visit this page, it should automatically redirect back to `/` (which is visible in the Network Inspector).

        <kbd>
            <img src="https://i.imgur.com/Pxu4aXJ.png" alt="iframe redirect" />
        </kbd>

    - Your app should have the `/iframe-sandbox` page load, without redirecting via the `sandbox` attribute for the `<iframe>` tag.
    - The `/malicious-3rd-party` page should not be modified.

- **Route:** `/malicious-click-stealer`  
    - This route is setup to _visually_ show you that clicking the button will perform an undesired action.

        <kbd>
            <img src="https://i.imgur.com/H821cGS.png" alt="Clickjacking" />
        </kbd>

    - Your app should prevent the `/trusted-click-to-win` page from being framed via the `X-Frame-Options` header.
    - The `/malicious-click-stealer` page should not be modified.

**Bonus:**
- In the `/iframe-sandbox` route, use a [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-src) header to prevent the redirect.
- In the `/trusted-click-to-win` route, use a [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) header to prevent the page from being framed.

## Starter code

> ***Note:*** For the sample files included, students will need to install `express` and `express-handlebars`.

The starter code, located in the `starter-code/iframe-security/` folder, already includes the base application and routes ready for protection to be added.

## Deliverable


- **Route:** `/iframe-sandbox`  
    This route should no longer redirect when you visit it. Instead, the page should look similar to:

    <kbd>
        <img src="https://i.imgur.com/adjYPzB.png" alt="iframe embed" />
    </kbd>

- **Route:** `/malicious-click-stealer`
    The frame on this page should no longer display the trusted page (note: **you may have to clear your browser's cache for this to work**). You will also see an error message in the JavaScript Console, similar to:

    <kbd>
        <img src="https://i.imgur.com/immu8HQ.png" alt="Clickjacking Prevented" />
    </kbd>

## Bonus

With the following bonuses, set the global content headers yourself with `app.use()`.

> Comment out your working solution to make sure the bonuses really address the problems from above.

- In the `/iframe-sandbox` route, use a [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-src) header to prevent the redirect.
- In the `/trusted-click-to-win` route, use a [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) header to prevent the page from being framed.
- Modify the CSP to only allow [Capital One](https://www.capitalone.com/) to embed the content of the response in a frame.

> Comment out your working solution to make sure the following bonus actually works.

- Now let's use Express middleware instead of setting every individual header ourself with `res.setHeader()`. Take a look at the documentation for [CSP Middleware](https://github.com/helmetjs/csp) and implement the solutions using this library instead of setting headers directly.

### Super Bonus

Reference yesterday's lesson on [SSL encryption](https://github.kdc.capitalone.com/CODA/cybersecurity/blob/master/encryption-third-party-lesson/ssl-lesson.md) to create a self signed certificate. Using this certificate, swap out the current HTTP server with an HTTPS one.



## Additional Resources

- [`<iframe sandbox>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox)
- [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)
- [Clickjacking Defense Cheat Sheet](https://www.owasp.org/index.php/Clickjacking_Defense_Cheat_Sheet)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)
- [CSP: frame-src](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-src)
- [CSP: frame-ancestors](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors)
- [Express - Production Best Practics: Security](https://expressjs.com/en/advanced/best-practice-security.html)
- [helmet](https://www.npmjs.com/package/helmet) - helps you secure your Express apps by setting various HTTP headers.
