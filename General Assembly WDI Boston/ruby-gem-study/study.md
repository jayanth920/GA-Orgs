# Ruby Gem Study

Use your favorite search engine and the provided readings to research and
respond to the following questions.

In your responses, be sure to cite any relevant sources you consulted in your
search. We ask you to write responses in your own words in order to see how you
process what you've read. Please do not respond with direct quotes from source
material. Instead, digest what you've read and repeat it in your own voice.

## Required Readings

- [RubyGems](https://en.wikipedia.org/wiki/RubyGems)
- [Gemfiles](http://bundler.io/gemfile.html)

## What Is a Gem?

A **gem** is a library of Ruby code that you can incorporate into your projects.
Using an external library allows you to benefit from someone else's work, so
that you don't need to waste time reinventing the wheel.

Here are some gems that commonly appear in Ruby and Ruby on Rails projects:

| Gem | Description |
| --- | --- |
| [bcrypt](https://rubygems.org/gems/bcrypt) | Secure hash algorithm. |
| [capybara](https://rubygems.org/gems/capybara) | Integration testing tool for rack-based web applications. |
| [devise](https://rubygems.org/gems/devise) | Authentication for Ruby on Rails. |
| [httparty](https://rubygems.org/gems/httparty) | RESTful web services client. |
| [paperclip](https://rubygems.org/gems/paperclip) | Upload management for ActiveRecord. |
| [pry-byebug](https://rubygems.org/gems/pry-byebug) | A combination of two separate gems, `pry` and `byebug` |
| [resque](https://rubygems.org/gems/resque) | Redis-backed library for creating background jobs. |
| [rspec](https://rubygems.org/gems/rspec) | Behavior-driven development suite. |
| [rubocop](https://rubygems.org/gems/rubocop) | Linter for Ruby. |
| [scss_lint](https://rubygems.org/gems/scss_lint) | Linter for SASS/SCSS. |

The jobs these gems do can range from debugging to testing to integrating into
an API.

## Installing Ruby Gems

There are two main ways to install Ruby gems. The first is manually, through the
command line:

`gem install resque`

This will download and install the gem that you specify.  In this case it's the
`resque` gem.

The second way is to use `bundler` (another gem, which we installed during
install-fest) and a 'Gemfile', a file containing a list of gems that our project
requires. To install the gems listed on a Gemfile, navigate to the location of
the Gemfile and run

`bundle install`

> When you run `bundle install` for the first time in a project, a new file
> called 'Gemfile.lock' gets created. This file constrains the versions of the
> different gems used, so that even if `bundle install` is re-run, and some gems
> have been updated, only the versions specified in Gemfile.lock get used.

There are a lot of similarities between Node modules and Ruby gems.

| Node Module | Ruby Gem |
| :---------: | :------: |
| npm install _moduleName_ | gem install _gem_\__name_ |
| npm install | bundle install |
| package.json | Gemfile |

However, there are a couple of differences too. For instance, Node modules
(except when using the `-g` flag) get installed within a particular project,
inside of a directory called `node_modules`. Ruby gems, in contrast, will not be
installed within the project.

### Your Turn :: Installing Ruby Gems

Run `bundle install` command above from within the repo. Then, just for fun, run
`gem install bundler` and look at the output you get.

## Researching Gems

### Where Can I Find Ruby Gems?

The two main places to look for Ruby gems are
**[RubyGems.org](https://rubygems.org)** and
**[The Ruby Toolbox](https://www.ruby-toolbox.com/)**. RubyGems.org is the
official listing place for all published gems, and it's the place that our gems
actually come from when we install them. The Ruby Toolbox, in contrast, doesn't
actually have the code on its site, but it provides some additional information
about gems that's not available on RubyGems.org, including grouping gems by
category.

### Which Gems Should I Use?

There will often be multiple gems that can be used for the same purpose. How can
we choose between them? Ultimately, we want to use code that is well-maintained,
well-tested, and well-documented. If there's a link to the source code on
GitHub, that can be a great place to find things like:

- When the last commit was, and how frequently commits are made.
- How many outstanding issues there are (total and as a % of all issues).
- Who the collaborators are.
- If there are tests (usually found in the `/test` or `/spec` directory) and
    how extensive they are.

Depending on the gem, there may not necessarily be a lot of documentation
available, but if the GitHub project has a wiki set up, that can be a good place
to find information. Additionally, many gems have official 'rdoc' documentation;
there's a searchable web interface for that documentation at
**[RubyDoc.info](http://rubydoc.info)**.

## Gems and Alternatives

As an exercise, pick one of the gems listed above and research it; then,
research some alternative gems, and pick the gem that you think is the next best
alternative. How might you justify this choice of best alternative gem to a
senior engineer on your team? Explain this below.

```md
<!-- your answer here -->
```

## Command Line Utilities vs. In-program Functionality

Many gems fall into one of two broad categories: gems that are used from the
command line, and gems that add functionality to Ruby code. You may have seen
the same pattern with npm packages. For example, grunt provides command line
tools to interact with Javascript applications, while jQuery adds methods that
can be used within Javascript applications.

As an exercise, briefly research each of the gems above and indicate below
whether you think each gem mostly provides command line functionality, mostly
provides features that Ruby developers can use in the code they write, or both.
Submit a pull request when finished.

bcrypt:

```md
<!-- your answer here -->
```

capybara:

```md
<!-- your answer here -->
```

devise:

```md
<!-- your answer here -->
```

httparty:

```md
<!-- your answer here -->
```

paperclip:

```md
<!-- your answer here -->
```

pry-byebug:

```md
<!-- your answer here -->
```

resque:

```md
<!-- your answer here -->
```

rspec:

```md
<!-- your answer here -->
```

rubocop:

```md
<!-- your answer here -->
```

scss_lint:

```md
<!-- your answer here -->
```
