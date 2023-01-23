---
title: 3rd-Party Applications
type: lesson
duration: "0:45"
creator:
    name: Joey Fowler
    city: NYC
competencies: Programming
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) 3rd-Party Applications (45 min)

| Timing | Type | Topic |
| --- | --- | --- |
| 10 min | [Introduction](#introduction) | Why 3rd Party? |
| 15 min | [Instruction](#benefits-vs-risks) | Benefits vs Risks |
| 10 min | [Instruction](#best-practices) | Best Practices |
| 5 min | [Conclusion](#conclusion) | Conclusion |

# 3rd-Party Applications

### LEARNING OBJECTIVES
*After this lesson, students will be able to:*

- Identify when a 3rd party application is being used
- Understand the risks of using external code

---
<a name="introduction"></a>
## Why 3rd Party? (10 mins)

#### Overview

If you've written an application before, anything from a small script to echo something on a command line to a large E-commerce website, you'll notice that more often than not, you'll write redundant pieces of code, or code that will make you say "surely someone else has written something like this before."

It's estimated that [90%](https://finance.yahoo.com/news/sonatype-reduces-licensing-risks-nuget-135123418.html) of all software development requires downloading or using 3rd-party components.

From simple libraries that can automatically add a header to an HTTP Response to large frameworks that allow you to make a web application with ease, 3rd party code is everywhere.

In node.js, for example, we have access to [Express](https://expressjs.com/) - a minimalist web framework. Without Express, in node.js, you would need to manually create a server and write request-parsing logic that can properly route incoming requests to the correct functions. Error handling's required and proper response configuration is a necessity. However, Express does all of that repetitive work for you - you only need to define a route and what to send back to the client for that route.

#### Libraries

But Express is a full framework. More often than not, you'll see smaller libraries. Let's take [helmet-csp](https://github.com/helmetjs/csp) for example.

helmet-csp is a library that can include in your application. You would need to install it, like most things:

    npm install --save helmet-csp

And then you can use it in your application:

    var csp = require('csp');
    
Helmet CSP is content security policy middleware. A content security policy is header which tells the browser where it can load JS from/domains that are trusted. It helps keep unwanted content from being injected into your pages.

Pending the language and/or framework you're working in, there can be dozens to thousands of avialable libraries or plugins avialable for you to use at any given time.

---
<a name="benefits-vs-risks"></a>
## Benefits vs Risks (15 mins)

#### Benefits

The primary benefit of using 3rd party components is that they lead to faster, often _much_ faster, development times of applications. In the example used above when creating a web server, it could take hours or longer to develop, from scratch, a full web server to handle incoming requests and outgoing responses. By using an existing framework, such as Express, this development time is reduced to mere minutes.

Initial development time is more often than not the largest benefit here.  However, maintenance time is also key. If you need to make updates to your application (such as adding new features, modifying existing ones, or even fixing a bug), or if another developer comes in to make an update, if your code is all in-house, and written from scratch, updates will take a considerable amount of time unless you are very familiar with the code already - even then, sometimes it will require a refactor to make any type of change. On the flip-side, using a 3rd party framework will allow this maintenance time to be much speedier - even if you or the other developer is not currently familiar with the framework yet.

You may ask "how" can development with an unknown 3rd-party framework be faster than development with a custom in-house framework. The answer: documentation and online resources. This is also another large benefit of using 3rd party components. Normally, and yes there are some that don't meet this benefit, but normally a 3rd party component has documentation available online and several (if not _many_) examples of its use. You can go from a developer who doesn't know anything about Express to being able to create a fully CRUDed app in roughly an hour.

To recap these benefits:

* Faster development time
* Faster, and easier, maintenance
* Online Documentation
* Online Resources & Examples

It's no wonder we turn to 3rd party components so frequently!

#### Risks

And now, devil's advocate. With the list of beautiful benefits that 3rd party components present, they also provide the ugliest risk:

* 3rd-party libraries are one of the most insecure parts of an application

This statement is a harsh accusation - but it's not unfounded. And as you will come to find, it's also true.

The range of code quality of 3rd party components goes from the absolute most bottom-of-the-barrel to the most pristine and beautiful code you've ever seen. It might even be a closed-source, enterprise package that you're using. And the online documentation that comes with any 3rd party component may be the best you've ever seen, perhaps the community is overly excited about the component too, and have more sample snippets of implementation code than you know what to do with.

But none of the above means anything when it comes to security.

What types of security risks do 3rd party components introduce into your application, or even environment?

* **Vulnerable code**
    - This risk is often unintentional, it could be a mistake on the developer's part, or they simply didn't know that this code was a vulnerability
    - By including a 3rd party library, or using a framework, that contains vulnerable code - _your_ application is now vulnerable!
    - A simple example of this could be demonstrated with client-side JavaScript.
    
        Let's say that you've included a 3rd-party javaScript library that allows your users to select their language:
        
            <script src="https://external.site/js/language.js"></script>
            
        In that library, it has the following block of code:
        
            document.write('<option value="1">' + document.location.href.substring(document.location.href.indexOf('lang=') + 5) + '</option>');
            document.write('<option value="2">English</option>');

        It may look benign at first glance, but this block of code introduces a [Cross-Site-Scripting](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)) vulnerability. Visiting a page on your site can trigger the isse:
        
            https://your.site/?lang=<script>alert(document.cookie)</script>
    
        And this is only on the client-side- which is a risk to a single user. The risks with server-side components are just as, if not more, dangerous- potentially a risk to your entire database.
        
* **Backdoor**
    - This risk is often intentional. It could be added on purpose by the developer for administrators to have an easy way to access debug information (or an admin panel), or it could be added by a malicious actor (possibly the developer themselves).
    - With server-side components, a backdoor can lead to your server being compromised by the malicious actor. If the backdoor becomes public knowledge, your server would now be at a much larger risk.

Not to mention the risk that you take from downloading a component from the internet; there's always a risk that the website you're downloading from has been compromised. Yikes!

In recent years, there have been many very large examples of vulnerabilities in 3rd party components that have been disastorous for the web. Examples include (but are not limited to):

- [Heartbleed](https://en.wikipedia.org/wiki/Heartbleed)
- [Shellshock](https://en.wikipedia.org/wiki/Shellshock_(software_bug))
- [POODLE](https://en.wikipedia.org/wiki/POODLE)

---
<a name="best-practices"></a>
## Best Practices (10 mins)

The list of best practices, when it comes to using 3rd party components, overlaps heavily with general software development best practices - but with _slight_ differences.

##### Only use components that you need
- Don't forget, many of the compoments that _you_ use actually have their own dependencies that they include too!

##### Do research on the components you're using prior to using them.
- Is there a history of security issues with the component?
- Are there open security issues with it?
- Are there better, more-secure alternatives that provide the same features and/or benefits?

##### Be aware of updates for the components you're using
- Is there an adivsory mailing list? If so, join it!
- Use a package manager, when available, to alert you of updates.
- Routinely monitor the component's origin (github.com, it's website, etc) for updates

Yes, updating can inheritly add development or maintenance time to your project. However, it's better to spend an hour updating a library than a week cleaning up a security compromise.

---
<a name="conclusion"></a>
## Conclusion (5 mins)

* Do the risks of using 3rd party components outweigh the benefits?
* Would writing all of your code in-house, opposed to using 3rd party code, make your code more secure?
* What would be some of the potential hurdles to overcome when updating a 3rd party component?

---
### Hungry for More?

#### References
- [Open Source Office](https://pulse.kdc.capitalone.com/groups/open-source-office)
- [Express](https://expressjs.com/)
- [Sonatype Reduces Licensing Risks With New Update to NuGet and Visual Studio](https://finance.yahoo.com/news/sonatype-reduces-licensing-risks-nuget-135123418.html)
- [Cross Site Scripting](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS))
- [DOM based XSS](https://www.owasp.org/index.php/DOM_Based_XSS)

#### Readings
- [Third-party libraries are one of the most insecure parts of an application](https://techbeacon.com/third-party-libraries-are-one-most-insecure-parts-application)
- [Managing Security Risk Introduced by Third-Party Libraries](https://www.tripwire.com/state-of-security/vulnerability-management/managing-security-risk-introduced-by-third-party-libraries/)
- [Is Using Third-Party Applications and Software Libraries Worth the Risk?](https://www.veracode.com/blog/2015/02/using-third-party-applications-and-software-libraries-worth-risk)
