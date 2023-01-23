# Building a Portfolio Site

## Learning Objectives

- Describe the key aspects of a good developer portfolio site
- Understand the tools available for building a portfolio site
- Start designing and building your very own portfolio site

## Framing

Your portfolio site is an extremely important aspect of both your personal brand and any job application you send. It's often the first place a potential employer or recruiter will look to find out more information about you, gauge what your skills and interests are and figure out how best to contact you.

As a junior developer, your portfolio site is your opportunity to show potential employers that you have projects you can talk about and to demonstrate your preparedness for a job.

All that is to say: your portfolio site is the first foot you put forward when applying for jobs, so try to make it your best!

## What should go in a portfolio site?

What to include in your portfolio site is up to you. At a minimum, you'll want it to:

- Show your name
- Link to projects you've worked on and deployed
- Link to your current resume
- Link to GitHub
- Be presentable and relatively well designed

But that is by no means a comprehensive list of what you can include in your portfolio site. At the end of the day, this is your site so feel free to be creative!

## How do I build my portfolio site?

### Step 1: Research

The first step in building your portfolio site is researching for portfolio sites of other developers. Spend some time looking at portfolio sites and thinking about these questions:

- How did they build this?
- Is this well designed? Are there things from looking at their HTML and CSS that I could use?
- How did they lay out the page?
- What fonts are they using?
- What colors are they using?
- What unique ways did they present information about themselves?
- What personal touches and flair did they add to make it their own?

Luckily, there are a ton of ways to find portfolio sites of other developers! Here is a short list of places to look:

- [Site Inspire](https://www.siteinspire.com/)
- [Httpster](https://httpster.net/)
- [One Page Love](https://onepagelove.com/)
- [Siiimple](https://siiimple.com/)
- [CSS Design Awards](https://www.cssdesignawards.com/)
- [Awwwards](https://www.awwwards.com/)
- [The Best Designs](https://www.thebestdesigns.com/)

Check out these sites for inspiration for your own portfolio site. If you're not a designer, do not fret: no one expects you to be. The portfolios and personal sites listed on these sites are designed by professional designers. You are a developer and you do not need to design a website that could be listed on one of these sites. You just need to aim for clean and presentable. 

Clean and presentable does not have to be complex or take a lot of time and energy!

The goal of your research phase should be to come away with a list of:
- How do you want to build your site?
- What do you want to include?
- How do you want to present your information?

### Step 2: Planning

Phase 2 of building your portfolio site is all about planning. Now that you know what you want to include, how you want to design it and what you want to build, it's time to get in to the how. This planning process is the same as what you would follow for planning out a project in WDI.

Start by thinking through your MVP, then the bronze, silver and gold versions of your portfolio. Your MVP should include everything in the list of minimum requirements above, presented in some interesting and unique way. Your bronze, silver and gold versions are totally up to you. Remember, this is your opportunity to think about how you want to present yourself and to learn something new and interesting.

### Step 3: Building

How you build your portfolio site is totally up to you and you have a few options to consider:

Your first option is to build it with vanilla HTML, CSS and JavaScript. Create an `index.html` file and start typing! This is a great, low-overhead way to get started.

Most developers pick a static site generator or some sort of build tool to help them build their site.

A static site generator is a tool that compiles the codebase for your website into vanilla HTML, CSS and JavaScript. You can use a templating engine (Handlebars or something else) and tools like [Sass](https://sass-lang.com/) to build your website dynamically and then deploy the built version.

There are a couple of really good static site generator tools out there. Here are three that are commonly used for portfolio sites:

**[Jekyll](https://jekyllrb.com/)**

Jekyll is built in Ruby and uses the Liquid templating engine. It was the first major static site generator and was built to integrate well with GitHub Pages. It includes a theming, so you can download and use a theme that someone else designed and built and modify it for your needs.

**[Metalsmith](http://www.metalsmith.io/)**

Metalsmith is built with JavaScript and is *pluggable*, i.e. you install and configure a series of plugins for the features you need. That can include compiling templating engines, Sass, minifying assets, etc.

**[Gatsby](https://www.gatsbyjs.org/)**

Gatsby is a JavaScript static site generator that uses React. It's more complicated to set up and configure but is also extremely powerful and flexible.

Another option is to choose something that is just a build tool, like [gulp](https://gulpjs.com/) or [parcel](https://parceljs.org/). These are tools that can be configured for any build task: compiling templates into HTML, converting SCSS in to CSS, minifying your JavaScript.

You can always improve upon your portfolio site with time, so consider starting with vanilla HTML, CSS and JavaScript. As you learn more and become more comfortable with coding, consider adding a templating engine or a build tool. After we've covered Ruby you could port your site to Jekyll or once we cover React you can port it to Gatsby.

### Step 4: Deployment

Your site must be deployed! If it's not, how will people be able to find it?

You have two options when it comes to deployment:

1. A custom domain
2. GitHub Pages

We highly recommend deploying to a custom domain. Doing so isn't too complicated but can take some time. The process will be a little bit different depending on who you buy your domain from.

To find a domain that is available, use [Domainr](https://domainr.com). If possible, get a domain that is some version of your name. Domainr will list places where you can buy your domain, generally NameCheap is the best option.

Once you've secured a domain, you can deploy your site to GitHub Pages for free and point your domain to it. That way, someone can visit your custom domain, see your portfolio site deployed to GitHub Pages and you don't have to pay for hosting!

## Closing

Building (and rebuilding) a portfolio site is an important part of being a developer. A good portfolio site is a great way to get your foot in the door for job applications and a great way to set yourself up as a serious candidate. It is also an opportunity for you to explore a new technology or practice that you would like to learn.



