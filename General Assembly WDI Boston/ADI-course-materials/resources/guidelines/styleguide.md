# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Styleguide

This document is meant to be an all-inclusive styleguide - we've outlined some general rules to follow when creating course materials and Trello-related content in order to be consistent.

If there are any really major issues or significantly impactful reasons to change, add, or remove rules from our shared styleguide, please open a GitHub issue and share – let's get feedback from instructors and see what others think.

<!-- MarkdownTOC -->

- [Creating Lessons, Labs, and Class Resources](#creating-lessons-labs-and-class-resources)
  - [Important Terms](#important-terms)
  - [Default Style](#default-style)
  - [Default names for files & folders](#default-names-for-files--folders)
  - [Default Screenshots](#default-screenshots)
  - [File Structure](#file-structure)
  - [Material Metadata](#material-metadata)
  - [Headings & Text](#headings--text)
- [Trello-Related Content](#trello-related-content)
  - [For Immersives](#trello-for-immersives)
- [Creating GitHub Repositories](#)
- [Contributing Materials](#contributing-materials)


<!-- /MarkdownTOC -->
## Creating Lessons, Labs, and Class Resources

<a name="important-terms"></a>
#### Important Terms

###### Opening

This is what we call the beginning of a lesson, where we review prior lessons/prework/homework, discuss current objectives, and answer outstanding questions.

###### Introduction

This is what we'll call the beginning of a lesson, when we're mostly just lecturing. It'll probably include the history of the topic, how it connects to other topics we've covered, and why it's important.

###### Demo

This is when we'll be showing something while we do it. We can also throw in interactive techniques or ask students to perform a task along with us.

###### Guided Practice

This is when we're asking students to do something specific using the information we've just given. Walk students through solving a problem or applying this topic to a real world scenario. Solving or understanding this should require the use of the lesson topic (in addition to any prior topics).

###### Independent Practice

This is a name for the chunks of a lesson when you're asking students to create a deliverable on their own. It is often used closer to the end of a lesson (though not necessarily), requiring the use of skills learned in the demo and guided practice sessions. It is intended to encapsulate the information and can act as a miniature or practice version of the unit project.

###### Conclusion

This is where we review the deliverable(s) from the independent practice, recap the lesson objectives, answer any outstanding questions, and discuss homework/upcoming projects/etc.

---

<a name="default-style"></a>
#### Default Style

###### Voice
- **Projects**: Project materials should be written directly for students.
- **Lessons**: While lesson materials are technically instructor facing, they should primarily be written in a student-facing voice for consistency. If you want to make specific suggestions for instructors, use the "instructor's note" format:

> Instructor Note: Here is a sample note that is only intended for instructors.


###### Use dashes, not underscores
While dashes & underscores are both fine choices, our structure starts looking ugly when we randomly have both, depending on preference. Underscores are wonderful, no hating on underscores.

But dashes are more commonly associated with web URLs, and in some environments allow us to jump using the keyboard, where underscores don't always let us do that.

Discounting any automatically generated code where underscores are absolutely necessary, **use dashes for folder & filenames.**

###### Use leading zeros by default

When you have multiple files sitting next to each other in a folder, number them with one or more leading zeros for visual consistency.

```
- 01-what-is-data-science
- 02-research-design-and-pandas
- 03-statistics-fundamentals
```

###### Lowercase file names (and use dashes)

By consistently keeping everything lowercase, we won't have to hit shift when navigating in terminal. It'll save us a tiny fraction of time, but the consistency will save us a lot of guessing.

---

<!-- <a name="default-names-for-files--folders"></a>
## Default names for files & folders

Let's use file & folder naming defaults that give students good practice.

> This needs to be filled in -->

<a name="default-screenshots"></a>
#### Default Screenshots

###### Full Window Screenshots
Use a quick `cmd+shift+4` and hit `space` to **grab a Full Window screenshot** (in OS X). This will make all our screenshots have a similar shadow behind it.

###### Use a common, neutral browser
Use an instance of **Chrome with all extensions and extras hidden**, except for the location bar.

![wdi repo](https://cloud.githubusercontent.com/assets/1327983/9769944/2a5bef4c-56fb-11e5-9ff0-646400749cc1.png)

_Figure 01. Example Screenshot_

###### Scale it down to fit
Make sure the image is **no wider than 790px**, to try to keep it visible & readable in GitHub's style. Crop images that are taller than that down to something within that vicinity, so it doesn't totally overtake the readme. OS X's Preview is an easy way to scale images down.

###### Let GitHub Store the Images
Rather than storing images in some folder in our lesson, **use [GitHub's Issue Attachment CDN](https://help.github.com/articles/issue-attachments/) to upload & link to images.** Essentially, pretend you're going to attach an image to a GitHub Issue, let it upload, and then copy & paste the CDN URL it gives and include that. There's a [detailed blog post here](http://solutionoptimist.com/2013/12/28/awesome-github-tricks/) to read more.

---

<a name="file-structure"></a>
#### File Structure

Each lesson resource should contain the following files: readme.md and slides.pdf.  Each lesson should also contain the following folders: starter-code, solution-code, and a project-related folder.  

```

- 04-statistics-fundamentals-two/

    - starter-code/
        - stats-practice.ipynb

    - solution-code/
        - stats-practice.ipynb

    - readme.md


```


Some lessons will have time dedicated to assigning projects.  For these lessons, simply add a folder with the necessary componenets:

```

- 03-statistics-fundamentals/

    - project-02-exploratory-analysis/
        - starter-code/
            - general-assemblys-eda.ipynb
        - solution-code/
            - general-assemblys-eda.ipynb
        - readme.md

    - starter-code/
        - stats-practice.ipynb

    - solution-code/
        - stats-practice.ipynb

    - readme.md


```

###### A Readme In Every Folder

**Every folder should have a readme.**

That means that looking on GitHub, every folder will come with some explanation of what it is & what to do with it.

###### Lowercase readme.md

Readmes should always be lowercased so we don't have to bother hitting shift, or worse, guessing whether it's uppercase, lowercase, or title case file names.

They should also always be markdown, with a `.md` extension. Just cuz it's shorter.

```
$ readme.md
```

###### Folder Names When Including Code

**If a lesson/lab/homework needs nothing** but a readme, just include the readme & don't create any extra folders.

**If a lesson/lab/homework needs starter code**, code to get students up & running, focusing on the task at hand -  include a folder called `starter-code` next to your readme.  If students require multiple files and folders, create a subfolder within the `starter-code` that appropriately names the starter app.

```
- readme.md
- starter-code/
    - app-name/
        - model-server.py
        - data.csv
        etc.
```

**If a lesson/lab/homework needs solution code**, or a completed example for students to later assess themselves, include a folder called `solution-code` next to your readme.  If the solution requires multiple files and folders, create a subfolder within the `solution-code` that appropriately names the solution app.

```
- readme.md
- starter-code/
  - app-name/
        - model-server.py
        - data.csv
        etc.
- solution-code/
    - app-name/
        - model-server.py
        - data.csv
        etc.
```


<a name="material-metadata"></a>
#### Material Metadata

Each lesson should include some simple metadata at the top. This should be YAML frontmatter, which will let us use it like structured data later on.

###### YAML Frontmatter
We want to have as minimal information as necessary, but stuff that's still useful. And we like the idea of giving credit to the original creator of the lesson or lab.

We also want to include the type (lesson, lab) and any core competency categories this lesson covers. This will help us organize later.

```
yaml
title: 'What is Data Science?'
duration: "3:00"
creator:
    name: Jane Doe
    city: NYC
```

###### Lesson Timings

It's beneficial to have suggested timing in each lesson, it gives us an idea how long we might want to take on each section.

**Timing estimates should go in increments of 5 minutes.** That's small enough to have tiny pieces of a lesson, but still evenly calculable over the whole duration. Anything more specific will be too granular.

The timing should be included in each section heading. We'll talk about how to choose which level headings in the next section. **But timings are only necessary on H2s.** Here's an example:

```
markdown
## Loading Data into Pandas - Intro (10 mins.)
```

---

<a name="headings--text"></a>
#### Headings & Text

Check out the example `template-lesson-readme.md` & `template-project-readme.md` to see an empty template you can use as a starting point for creating new materials.

Here's some codified explanation of it.

###### H1 for Lesson Title

There should be only one, so it should be the first thing in the markdown, and be an H1.

It should also match exactly what's in any planning doc or Trello board.

###### H3 & UL for Learning Objectives

Learning Objectives are good practice for us make sure students are clear about what we're trying to teach them, and we stay on track with only the most important pieces of a topic. For the record, you should write these learning objectives on the wall when you go to teach this lesson.

The actual objectives should just be an unordered list.

###### H3 & UL for Preparation

This is a section to help both students & instructors know what a student needs to know before they'll understand this lesson. These could be references to specific existing lessons in the curriculum, or they could just be concepts students need to know.

It might be useful to use this list as check-for-understanding questions before you dive too deep into new materials.

###### H2 for Lesson content section titles

The actual content of the lesson is the most important thing, and using H2s gives us nice visual hierarchy for breaking our lesson up into sections.

Use as many sections as you see fit, and try to give them titles that give some hint of what we're about to talk about. They don't have to be catchy or witty (though you're welcome to make them both), but they should be _clear_.

###### Break up paragraphs for easy reading

We want to make these documents scannable & easily readable. Every time you're talking about a new idea or concept, or you realize the sentence you're writing doesn't add on to the previous one – make it a new paragraph.

Err on the side of having too many paragraphs if possible, even if a paragraph is only one or two sentences. It'll be easier to read.

###### Use triple-tick code blocks for highlighting on GitHub

Use triple-tick code blocks with languages to make code auto-syntax-highlighted.

    ```python
      def sayHi:
        print("hi!")
    ```

You can read more about it [here](https://help.github.com/articles/github-flavored-markdown/#syntax-highlighting) if you're unfamiliar.

###### Test your markdown with GitHub Flavored Markdown

Test your code using the [GitHub markdown API endpoint](https://developer.github.com/v3/markdown/#render-an-arbitrary-markdown-document), or a tool that uses it, to make sure it's working. Good options are:

- [Atom's native markdown previewer](https://atom.io/)
- [Markdown Preview for Sublime](https://packagecontrol.io/packages/Markdown%20Preview)
- [moo.js](https://www.npmjs.com/package/moo.js)
- [Marko](https://itunes.apple.com/us/app/marko/id607997198?mt=12)
- [Marked 2](http://marked2app.com/)

## Trello-Related Content

<!--  to be filled in-->
We use Trello to project plan and visualize our course day-to-day content schedules. We also use scripts to automate how we build content around these boards, so it's important to follow convention around setting up the board and creating cards.

#### Trello For Immersives

Ultimately, Immersive Trello boards should look like the board below:

<p align="center">
  <img src="https://i.imgur.com/kwBJgMG.png">
</p>

...and using the calendar view, that you can activate in Trello power-ups, the board should look like this:

<p align="center">
  <img src="https://i.imgur.com/SzW8OA7.png">
</p>

###### Immersive Schedule On Trello

Immersives are taught over 12 weeks, Monday through Friday, and assume a 9-5 in-class schedule each day.  Class days follow this format:

- 9-10am - Session 1, typically a morning exercise, review session, reflection, or outcomes session
- 10-11:30am - Session 2, typically a lesson
- 11:30am -1pm - Session 3, typically a lab
- 1-2pm - LUNCH!
- 2-3:30pm - Session 4, typically a lab
- 3:30-5pm - Session 5, typically a lab + introduction to nightly HW


###### Columns (Weeks)

Each card represents 1 or more sessions. Cards are organized by column, and each column corresponds with a week of the course.  To view each week in a day-by-day sequence, click on the "calendar" link in the top right corder under your user name.

Each week should also have two labs labeled as "code reviews" - these will be the "graded assignments" for the week. Projects can also be labeled as graded assignments.

<p align="center">
  <img src="https://i.imgur.com/qF86APp.png">
</p>

###### Cards (Daily Sessions)

Each card should have: a label, a set of learning objectives (as a checklist) if it's a lesson:

<p align="center">
  <img src="https://i.imgur.com/3z95Kjl.png">
</p>

...a set of requirements (as a checklist) if it's a lab:

<p align="center">
  <img src="https://i.imgur.com/03mW6ql.png">
</p>

...and a connection to the long-term goal.

**Labels**

Each card is labeled accordingly:

- Lesson (Blue) - Cards with this label are structured sessions where students are learning new concepts and skills.
- Lab (Yellow) - Cards with this label represent structured sessions where students are practicing skills they've learned in lessons.
- Notes to be addressed (Red) - This label is given to cards with outstanding items that have not yet been resolved.
- Reflection (Purple) - Specific sessions dedicated to conduct a "retro" or when students are to take a course survey.
- Workshop (Light Blue/Green) - Workshops are unstructured sessions dedicated for students to make progress on projects. The title of the card should help give students a little bit of guidance as to what they should be working on.
- Outcomes (Pink) - These sessions are run by the local outcomes team.  Instructors should not create content for theses sessions.
- Assessment (Black) - Labs or projects to be graded. Typically, there are two of these per week.  There are rubrics provided to assess students' work from these sessions in the course GitHub repository.


**Title**

Aside from the project cards atop each column, cards are titled as follows:

- [Number of hours for session] Descriptive title of the session + Lesson/Lab

Be sure to use the brackets and decimal to one digit.

For example:

- [1.5] Android Intro Lesson

...or:

- [1.0] Morning exercise

...or:

- [4.5] Project Workshop

This title means that the "Android Intro" lesson will last 1.5 hours.  The number of hours dedicated for each card appropriately align with the daily schedule.


###### HW

For the most part, HWs are left up to the instructional team to decide; however, there are particular HW assignments we strongly recommend for particular days.  They are represented by a card but do not have a label - "[HW]" is included in the card title.


## Creating GitHub Repositories

When created, all GitHub repositories should be named using all lowercase letters, except for a course acronym or the letters GA.  The repository title should also use dashes - not underscores - and follow the conventions below:

- For course-specific materials, like https://github.com/generalassembly-studio/ADI-course-materials: [COURSE ACRONYM]-course-materials or [COURSE ACRONYM]-instructor-code-challenge

<a name="contributing-materials"></a>
#### Contributing Materials

See the [contributing guidelines](../../contributing.md) for information on how to help!
