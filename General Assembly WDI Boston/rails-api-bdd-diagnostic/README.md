[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Rails API BDD Diagnostic

## Prerequisites

-   [https://git.generalassemb.ly/ga-wdi-boston/rails-api-bdd](https://git.generalassemb.ly/ga-wdi-boston/rails-api-bdd)

## Instructions

1.  Fork and clone this repository.
1.  Change into the new directory.
1.  Install dependencies with `bundle install`
1.  Create a `.env` for sensitive settings (`touch .env`).
1.  Generate new `development` and `test` secrets (`bundle exec rails secret`).
1.  Store them in `.env` with keys `SECRET_KEY_BASE_<DEVELOPMENT|TEST>`
    respectively.
1.  Create and checkout a new branch, named `response`.
1.  Follow the directions given in [lib/diagnostic.rb](lib/diagnostic.rb).
1.  Before the allotted time is up, push to your fork and issue a pull request.

Your pull request description should contain a "fist to five" for comfort and
clarity. Additionally, you should mention the resources you used to help you
complete this diagnostic. For example:

```md
Comfort: 3
Clarity: 3

I used Google and my class notes to help with this diagnostic.
```

## Tasks

Developers should run these often!

-   `bin/rails routes` lists the endpoints available in your API.
-   `bin/rails test` runs automated tests.
-   `bin/rails console` opens a REPL that pre-loads the API.
-   `bin/rails db` opens your database client and loads the correct database.
-   `bin/rails server` starts the API.
-   `scripts/*.sh` run various `curl` commands to test the API. See below.


You may wish to refer to ["How do I submit diagnostics?"](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/Diagnostics)
and other [FAQs](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/) related to
[forking, cloning](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone),
and [pull requests](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/PullRequest).

You may use **any resource** other than each other to complete this diagnostic.
This includes referencing talk materials, appropriate documentation, and
searching for help online.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
