[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Project Issue Tracker Guide

## Objectives

By the end of this, developers should be able to:

- Ask for assistance using a project issue tracker.
- Describe what the tracker should be used for.
- Define what "good" questions are, and describe why asking better questions
  is important.

## Lab: Discover What It Means to Ask a Good Question

A good question isn't a good question because of its content, but instead,
how it is asked. A good question is the question most likely to get an
answer.

Part of our goal for this program is to help you get better at asking
questions so you can grow after starting your first job!

Take 5 or so minutes to read, and 5 minutes to discuss among your squad, ["How to Ask Good Coding Questions That Get Great Answers" by Zell](https://zellwk.com/blog/asking-questions/).

## Instructions for Using the Project Issue Tracker

During project periods, you may find yourself stuck or needing help.
Never fear! The consulting team will answer questions and help you fix bugs.

To manage requests for assistance, the team uses GitHub's 'Issues' feature -
this allows us to address issues asynchronously in an intelligent way.

Use the issue tracker for the appropriate project (for example, `game-project`)
to file your requests. Please note: the issue tracker **isn't only for bugs**.
Use it for any and all requests you have during project work time.

If you require a 1on1 for personal reasons, please request that through an
e-mail or Slack message to every member of instructional staff.

Don't forget to **monitor your issues** for our responses, and **close them
with notes** when resolved.

## Before You Create a New Issue (i.e. 'Due Diligence')

Before you add a new issue to the tracker, the team will expect you to go
through the following checklist; this will help make the process more
efficient by allowing the team to spend most of its time on hard issues,
rather than easy ones.

1. Check your linter.

    Look for linter errors in Atom! Pay particular attention to any that say
    something like "parsing error". These mean that you have a syntax error
    that's preventing your code from running at all. Try to find the source on
    your own briefly -- it's often a case of mismatched brackets/braces. If you
    can' resolve the linter errors, open an issue where you include the code
    that's causing the error, as well as the text of the linter error.

1. If you have an error message, read the error!

    The Chrome Dev Tools console is often trying to help you by providing some
    error messages. Error messages are great, because they tell you what's
    going wrong. Take note of:

    1. what type of error you have,
    1. what file it occurred in, and
    1. the line and character numbers at which the error occurred.

    Reading an error carefully frequently gives you the information you need
    to correct it and move forward.

1. Also, read the error!

    We know we just said this, but seriously. READ THE ERROR MESSAGE. READ IT
    OUT LOUD! Read it to a friend! Call yourself and leave it as a voicemail!

1. At least once, try using your debugger to see when the error appears.

    Debugging tools exist for a reason: in JavaScript, set a breakpoint in
    the Chrome debugger (or drop a `debugger` in your code); in ruby, add a
    `binding.pry` to your code. Your code will stop executing at that point.
    See if you can figure out how far the program runs before it hits the
    error. This can also help you check the values of variables as you go.

1. Read through the documentation.

    Every tool we use has some sort of documentation available.
    Many documentation sources even implements a search feature,
    so that you don't have to go digging. _**Read them carefully!**_
    The function signatures in particular are very useful
    since they explain what inputs a function is supposed to take;
    passing a function the wrong input value(s) is a very common error.

1. Search Google and Stack Overflow for your issue.

    You're probably not the first person to ever encounter your issue. Try
    copying the content of your error message (in quotes) into a search bar;
    you might be surprised what turns up.

1. Read/search closed issues.

    Similar to the previous one, but more specific to YOUR problem, you can
    actually sift through other issues and see if a solution exists by
    clicking on the tab marked **Issues &lt;open issue count&gt;** and then
    selecting **&#x2713; &lt;closed issue count&gt; Closed** at the top of
    the issues list.

NOTE: These things are options. They're aren't ALL required for ALL problems.
However, you should've at least **considered** all of them and tried a few.

## How to Use the Issue Tracker

Directions for each project can be found in a repository ending in `-project`
for the [first project it will be this one for example](https://git.generalassemb.ly/ga-wdi-boston/game-project/issues),
and this is also where issues relating to that project will be handled. DO
NOT OPEN THEM IN THIS REPO!

To create a new issue and request assistance,

1. Go to the 'Issues' tab and click 'New Issue'.

1. Create a title for your issue.

    Please try to use the following format:

    > "\[ language or framework you're using \] -
    > \[ short (< 80 chars) explanation of issue \]"

1. Give a description of the issue you've got.

    The text box will come filled in with a template to help you provide as
    much information as possible about your issue. Please try to fill out each
    of the sections to the best of your ability.

  **DO NOT use screen shots**
  - Never use screen shots to share code snippets, errors, files, etc.
  - Screen shots are only acceptable in an issue when showing a visual
  design problem.

  **DO NOT ask for a 1:1**
  - Never request a 1:1, your issue should reflect the problem, not the
    type of support you want.
  - Instructors will escalate issues to a 1:1 as they see fit.

1. Click 'Submit New Issue'.

## "What should I do while I'm waiting for assistance?"

If possible, work on something else! If you've been using version control
effectively you may have multiple different branches for working on different
features. In that case, just switch to a different feature branch and keep
working.

Ask a peer!
See if any of the other developers have encountered a similar issue - you
are often working on more-or-less the same thing, so someone else may
already have the solution to your specific problem. Post the link to your
issue in the `forum` channel and see if anyone has encountered something
similar! On the other side, feel free to check open issues, you may be able
to collaborate on a solution to a shared problem, or help someone else out.

Another possibility, if you want to keep working on the same feature, is to
use `git stash` (to temporarily store uncommitted changes) and `git checkout` to go _back in time_ to a previous commit -- specifically, the
last time everything was working. Once there, you can create a new branch
(or branch**es**) off of that commit, so that you can experiment with other
ways to solve the problem.

Whatever you do, don't sit around waiting. Project time is limited, so try to
use it as effectively as possible.

## "What should I do if I don't know what issue to open?"

If you're stuck on a SINGLE problem for 30 mins and you haven't opened an
issue--you are required to! If you need help opening an issue OPEN AN ISSUE
that says "having trouble writing my issue."

Many of you will have the urge to ask each other questions because you
_think_ it's easier, faster, whatever. If you do so, remember the following:

- The help you're getting may not actually be correct
- You may be disrupting someone else's workflow
- The way you get help from them may not encourage and nourish your learning
  process
- You cheating yourself of a chance to solve the problem on your own
- You don't rubberduck
- You aren't forced to think about the exact problem at hand
  - Don't shave the yak. Watch Hal shave the yak below:
    - [video](https://www.youtube.com/watch?v=8fnfeuoh4s8)
    - [gif](https://i.imgur.com/t0XHtgJ.gif)
  - Yak shaving [explained](http://sethgodin.typepad.com/seths_blog/2005/03/dont_shave_that.html)

## "What should I do if it's after 5pm or over the weekend?"

The SEI instructional team may not be reponsive on the issue queue after 5pm
on weekdays or over the weekend. This does not mean you should not open issues.
Open the issue immediately. It is better to get the issue out of your brain and
into the queue so you do not forget it. Many of your fellow developers and SEI
instructors do check the issue queue after 5pm and on weekends and will be able
to help. Even if they do not, it is better to have a list to start the day
with. Post a link to your issue into the Slack forum channel to further
encourage others to contribute.

## "What if I open too many issues!?"

Despite what you may think no one has ever "opened too many issues" or been
discouraged from asking from help because they've "already taken up enough
resources." Neither of those two things have ever happened since 2015 when we
started doing this, so it won't be an issue (HAH! GET IT!? ISSUE!? I'll see
myself out).

Please remember that we WANT to help, but we also want to teach you HOW to
ask for help. We will often not be in the room during project worktime so WE
can focus on prepping for the upcoming lessons. If you post issues and ask
for help in the manner explained above, we will be more than happy to drop
everything to come assist you!

## Conclusion

If you follow these guidelines, you will find yourself crushing bugs like
Homer:

![](https://i.imgur.com/2wYV2rj.gif)

Don't be scared of bugs. They're an opportinty to learn! Be like Homer. Not
like this guy:

![](https://i.imgur.com/YTnVavx.gif)

## Additional Resources

- [Asking Questions](https://gist.github.com/Trevoke/3fb5e1c01baa2d6efba7#file-asking-questions-md)
- [Asking for Help](https://gist.github.com/adambray/a807067465a838db6ba2#file-asking_for_help-md)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
