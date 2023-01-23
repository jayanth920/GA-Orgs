[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Portfolio Guide

## Requirements 📝

1. Read and think about the sections below
1. You will discuss your portfolios in more detail with outcomes so write down any questions you have about this reading for outcomes discussions
1. Repository must reside on your personal Github, and deployed via Github Pages

### Deliverables 📥

#### Deliverable #1 
- Portfolio mockup or wireframe (due by date on cohort calendar via issue): create a mockup or wireframe of your portfolio design plans. Submit via this [issue template](../../issues/new?assignees=&labels=&template=wireframe-mockup-submission.md&title=YOUR+FULL+NAME).

#### Deliverable #2

- Deployed portfolio link (due by date on cohort calendar via issue): share your deployed portfolio link. Submit via this [issue template](../../issues/new?assignees=&labels=&template=deployed-link-submission.md&title=YOUR+FULL+NAME)

## Purpose 🧐

What do you want people to find when they google you?
What do you want someone's first impression of you to be?
Your portfolio is the portal to your professional online presence.
It consolidates the content you've created on multiple platforms and presents
it in digest form, making it easier for future employers to learn more about you.

## User Stories to Get Started 👩‍💻👨‍💻🧑‍💻

- As a non-technical HR manager, I want to quickly evaluate whether this candidate has the skills and experience to fill an open position at my company.
- As a mid-level engineer, I want to evaluate a junior developer’s coding skills by reviewing their projects and reading their code.
- As a friend of the person who built this portfolio, I want to understand what they do as a developer and what they have created.

## Required Sections ✅

- About Me: Short blurb explaining who you are, and some background info
- Skills: All the skills you have that may be helpful on the job
- Contact info: LinkedIn, Github, city, email or contact form
- Resume: View and download
- Project Showcase: Feature your GA projects (more details below)

### Optional Sections 🌟

- Personal hobbies/interests
- Professional Timeline (a visual representation of your work history)
- Additional work samples (visual design, writing samples, a link to your photography blog)
- Relevant social profiles (Twitter, Instagram, if they highlight you professionally, not just what your meals look like)
- Blog posts (links to relevant articles you've published on platforms like Medium or LinkedIn)

## Highlighting Your Projects 🏗️

Your projects should be featured prominently on your portfolio. You'll want future employers to see what you accomplished both while you were at GA and after completing this program. At this point, we've completed 2 out of 4 total projects, but here are some good things to keep in mind:

- **List projects in reverse chronological order.** Your capstone (Project 4) is likely the project that best showcases your skills. Make sure it's featured prominently as the first project in your portfolio when we complete it.
- For your team project (Project 3), be sure to fork, clone, and individually redeploy your project to maintain individual ownership over the site showcased on your portfolio.
- Include links to your live site as well as front-end and back-end repos.
- Summarize the functionality of the app as well as what technologies you used to build it.
- Briefly describe your process for building each app. If you have a blog post that goes into detail for each project, link to that post.
- Make sure your projects are user-friendly to an unacquainted visitor.
  - The home page should explain the site’s functionality
  - **Random users might not want to sign up/sign in.** Consider adding dummy credentials on the homepage that they can use for any projects with authentication (and explain that), or make sure they can interact with the site without signing up.
- After you've completed the program, **revisit your projects and refactor them**. Add new features. Improve the user experience. Fix any open issues. Enhance the app's design aesthetic.
- **Clean up test data** and create some seed data that you can use to easily refresh your database. If you want to get fancy, you can write a [scheduled task](https://devcenter.heroku.com/articles/scheduler) that drops, recreates, and reseeds your database periodically.

## Content & Design 🖼️

The most important thing is to have a portfolio up and running. It should be easy to use and highlight your personal brand. Think about what you want potential employers to know about you from visiting your site. Make the most important content prominent and easy to find.

A great approach to design is to first wireframe your website. You don't have to be a designer to create an attractive, user-friendly website. Revisit our UX/UI [quick guide](../../../intro-to-UX-UI-design) for a refresher.

Consider how you're going to execute the design of your portfolio. If you have a strong vision and feel confident in your ability to execute the CSS professionally and effectively, go for it! If you'd feel more comfortable using a framework like Bootstrap or Material UI, those are great options too.

Start small with a landing page, then think about how you can continue to build on it as needed by incorporating projects, etc.

Don't forget finishing touches, like making sure the document's meta title tag reflects your site's name and adding a [favicon](https://favicon.io/).

### Design Hints for the Non-designer 💅

The visual appeal of your portfolio is important. Here are some recommendations to help you produce a portfolio that you're proud of:

- **Choose a template as the basis for your portfolio and customize it.** There are many professionally designed templates available for free that you can use as the basis for your portfolio. Of course premium templates are also available, but you don't need to spend money to have a great looking portfolio. If you're determined to build from scratch, use a template as design inspiration. Treat it as a mockup and faithfully reproduce the layout, paying special attention to the spacing, sizes of elements, and font family choices of the template's designer.

- **Start with a framework.** [Bootstrap](http://getbootstrap.com/css/), [Materialize](http://materializecss.com/), and [Foundation](http://foundation.zurb.com) are the most popular options but there are many others. Even if you have a very specific design in mind, use a framework to incorporate all of the base styles, then customize from there. This will improve consistency across browsers and devices, and it will save you time. An added benefit is that many employers are specifically looking for people with familiarity with one or more popular frameworks.

- Even if you don't have any design knowledge, you can use some designer tricks to make your portfolio look great. There are a few things that can radically improve any design:

  - **Add padding**. White space, sometimes referred to as negative space, is a professional designer's secret weapon and a shortage of it is the hallmark of an amateur. Let your content breathe! You almost can't use too much of it, so if you think you've got enough, go back and add some more. Checkout the result and ask others what they think.
  - **Keep font families simple and to a minimum**. Stick with either one or two font families for your entire portfolio. If you're using one, choose different weights for headings versus your content. If you choose two fonts, use two that have high contrast. For example, use a serif for the body content and a sans-serif font for your headings. :warning: Stay away from cursive, script, or highly decorative fonts altogether.
  - **Simplify your color palette**. Pro designers spend years learning about color theory. You don't have the time for that. :smiley: Choose one color and use it sparingly throughout as an accent. Perhaps use it in your buttons and your top-level headings. Restraint is the name of the game here.
  - **Line things up.** Alignment is key to making a clean, professional portfolio. Use the grid in your framework of choice. Just use it!

## Deploying Your Portfolio 🚀

To deploy your portfolio, you'll only need to push to your **User Site** repository master branch.

### Github “User Site” vs. “Project Sites”

[Link to github pages](https://pages.github.com/)

Github provides only **_one_** “User Site” per account/organization with the url `username.github.io`. Your user site should be used for your portfolio since it will showcase the rest of your projects on Github. The user site is unique in that it is served from the `master` branch of your repository. Read more about [User Sites here](https://help.github.com/articles/user-organization-and-project-pages/#project-pages).

Other web apps/sites you host on Github are known as “Project Sites”. These will have URLs in the form of `username.github.io/project_names` and are served from the `gh-pages` branch of your repository. You can have an unlimited number of project sites. At the conclusion of this program, you'll have at least four — one for each of your projects — but we hope you develop many more! Read more about [Project Sites here](https://help.github.com/articles/user-organization-and-project-pages/#user--organization-pages).

## What if I Have Questions...🤔

Ask yourself if it's a technical or non-technical question: If your question is "Is it helpful to show that I'm
also a donut fanatic on my portfolio page?" you should direct that towards
Outcomes. If your question is "How come I have an error `Cannot read property of undefined`?" you probably want to consult Google, your classmates, and your instructors.

## Inspiration 🤩

Personal websites from some previous SEI grads:

- http://bnmrrs.com/
- http://raleighdaniel.com/
- http://jlappano.github.io/
- http://kevoncheung.com/
- http://www.larrybuch.com/
- http://adrianbautista.com/
- http://www.andrewmadden.com/
- http://www.belcortes.com/

You can also Google "developer portfolio website" for more ideas or even search on GitHub for portfolio templates.

## Final Tips 🔖

Don't let perfect be the enemy of good. It's more important to get something out there so that you can dive into Outcomes and job apps post-course. Just like any project, focus on getting an MVP done.

Be sure to get feedback from your fellow devs, friends and family on your portfolio design and usability. If you have a designer friend, now is the time to ask their opinion on your site!

## Additional Resources

- [Create a GitHub Profile Read Me](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme)
- [Build a Stunning README For Your GitHub Profile](https://towardsdatascience.com/build-a-stunning-readme-for-your-github-profile-9b80434fe5d7)
- [Start Bootstrap Free Templates](https://startbootstrap.com/themes/portfolio-resume/)
- [Showcase Your Skills With These 15 Free Portfolio Templates](https://skillcrush.com/2016/09/06/free-portfolio-templates/)
- [FontAwesome](https://fontawesome.com/)
- [Devicon](https://konpa.github.io/devicon/)
- [Unsplash | Beautiful, free photos](https://unsplash.com/)
- [Beginner's Guide to the Programming Portfolio](https://leerob.io/blog/beginners-guide-to-the-programming-portfolio)
- [SEO: How I achieved #1 on google search results for full-stack developer portfolio](https://caferati.me/labs/seo-part-one-google-search-for-full-stack-developer-portfolio)
- [How to Level Up Your Developer Portfolio](https://www.freecodecamp.org/news/level-up-developer-portfolio/)
- [The Portfolio Hack That Will Make Everyone Want To Hire You](https://medium.com/free-code-camp/the-portfolio-hack-that-will-make-everyone-want-to-hire-you-58079cfed0b)
- [10 Easy Design Tips for Non Designers](https://medium.com/makeamark/10-easy-design-tips-for-non-designers-b83405e49179)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
